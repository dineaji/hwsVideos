HOTWHEELS = HOTWHEELS || {};

(function(window, document, _, $, Backbone, Marionette){
'use strict';

/* -- Classes -- */

/* -- Events -- */

// Modules that reference this object:
// - LocalPaginatedDataService
// - ThumbSortNavView
// - VideoThumbGridLayout
var Events = {
    USER_WANTS_THUMB_SORT: 'user:thumb:filter',
    COLLECTION_LAST_PAGE: 'collection:last:page'
};

/* -- Models -- */
var VideoThumbModel = Backbone.Model.extend({
    defaults: {
        name: 'Unset Thumbnail Title',
        urlDetailPage: 'http://avideourl.com',
        urlThumbImg: 'http://placehold.it/230x172',
        rating: '1_5',
        newest: 0,
        popularity: 0,
        rated: 0
    }
});

/* -- Collections -- */

// Meant to be pretty generic, just pass in the following
// This is a SPECIAL collection to manage an embedded json load. It manages
// a hidden collection internally and returns the next page on fetch().
//
// example
// collection = new LocalPaginatedDataService([], {
//  scriptEl: '#script-id',
//  model: ModelType
// });
//
// Things to note:
// This collection stores an internal collection that represents
// the entire data load that was embedded (_localData, and _localCollection).
// Remember that when you try to sort, or change comparators
// see: sort
var LocalPaginatedDataService = Backbone.Collection.extend({

    initialize: function(models, options) {
        // BB 1.1+ compat
        options = options || {};
        this.options = _.defaults(options, {
            scriptEl: null,  // required
            pageStart: 0,
            pageSize: 12,
        });

        this._scriptEl = options.scriptEl;
        this._pageStart = options.pageStart;
        this._pageSize = options.pageSize;
        this._pageCurrent = this._pageStart;
        this._localData = this._fetchLocalData();
        this._localCollection = this._createLocalCollection(this._localData);
    },

    // -- Backbone Overrides ---//

    /**
     * Fetch the next page from the local data and set on collection
     * @param  {object} options the options literal, takes bb defaults
     */
    fetch: function(options) {
        options = options || {};
        options = _.defaults(options, {
            remove: false,
            reset: false
        });

        var models, method, page, pageSize, isLastPage;

        // if reset, reset page current to page start
        // setter method is reset
        if(options.reset) {
            this._pageCurrent = this._pageStart;
        }

        method = options.reset ? 'reset' : 'set';
        // post incrementor will return current value
        // then incrment the var
        page = this._pageCurrent++;
        pageSize = this._pageSize;
        models = this._getPage(page, pageSize);
        isLastPage = this._getPage(page + 1, pageSize).length === 0;

        if(models.length > 0) {
            this[method](models, options);
            if(isLastPage) this._dispatchReachedLastPage();
        }
    },

    /* -- Publics -- */

    // overrides local sort, and delegates to localCollection sort
    // since the paged collection, is really just a combination
    // of slices from local.
    sort: function(options) {
        options = options || {};
        options = _.defaults(options, {
            prop: null,         // required
            order: 'ascending'  // ascending (lowest to highest) || descending (highest to lowest)
        });

        var order, prop, reverse;

        order = options.order;
        prop = options.prop;
        reverse = order == 'ascending' ? false : true;

        this._localCollection.comparator = prop;
        this._localCollection.sort();

        // Reverse will simulate a decending ordering, e.g., highest to lowest
        if(reverse) this._localCollection.models.reverse();
    },

    /* -- Privates -- */

    _fetchLocalData: function() {
        var selector, $script, data;

        selector = this._scriptEl;
        $script = $(selector);

        if($script.length === 0) {
            throw new Error('could not find script element');
        }

        try {
            data = JSON.parse($script.html());
        }
        catch(e) {
            throw new Error('there was an error parsing the json: ' + e);
        }

        return data || [];
    },

    _createLocalCollection: function(data) {
        return new Backbone.Collection(data);
    },

    _getPage: function(pageIndex, pageSize) {
        var sliceStart, sliceEnd, models;

        sliceStart = pageIndex * pageSize;
        sliceEnd = sliceStart + pageSize;
        models = this._localCollection.slice(sliceStart, sliceEnd);

        return models;
    },

    /* -- Event Dispatchers -- */

    _dispatchReachedLastPage: function() {
        this.trigger(Events.COLLECTION_LAST_PAGE, this);
    }
});

/* -- Marionette Views -- */

// Meant to be pretty generic, as long as every sort nav follows
// a few conventions:
// - sort btns have a class of .btn-sort
//
// Notes:
// - be sure to pass in the container el, usually .sort-nav
var ThumbSortNavView = Marionette.View.extend({

    ui: {
        thumbSortBtns: '.btn-sort'
    },

    events: {
        'click @ui.thumbSortBtns': '_didReceiveSortClick'
    },

    /* -- Initialize -- */

    initialize: function(options) {
        this.options = _.defaults(options, {

            // putting default here for documentation
            // sort map indexes should match index of btn in btn list
            sortMap: [
                {
                    prop: 'foo',        // prop should match model
                    order: 'ascending'  // order, 'ascending' or 'descending'
                }
            ]
        });

        this._sortMap = options.sortMap;

        // required call
        // see: http://stackoverflow.com/a/15315794
        this.bindUIElements();
    },

    /* -- Privates -- */

    _didReceiveSortClick: function(e) {
        if(e && e.preventDefault) e.preventDefault();

        var $target, index, prop, order, isActive;

        $target = $(e.currentTarget);
        isActive = $target.hasClass('active');

        // quit if filter is active
        if(isActive) return;

        index = this.ui.thumbSortBtns.index(e.currentTarget);
        prop = this._sortMap[index].prop;
        order = this._sortMap[index].order;

        this.ui.thumbSortBtns.removeClass('active');
        $target.addClass('active');

        this._dispatchWantsFilter(prop, order);
    },

    _dispatchWantsFilter: function(prop, order) {
        this.trigger(Events.USER_WANTS_THUMB_SORT, this, {prop: prop, order: order});
    }
});

/* -- ItemViews -- */

var VideoThumbItemView = Marionette.ItemView.extend({
    template: '#videos-thumbs-template',
    tagName: 'li',
    className: 'thumb-unit',

    onRender: function() {
        this.$el.fadeTo(0,0);
    },

    onShow: function() {
        this.$el.fadeTo(200, 1);
    }
});

/* -- Collection/CompositeViews -- */


// this is a generic container for a thumbGridView
//
// example
// thumbGridView = new ThumbGridCollectionView({
//  el: '.thumbs-grid',
//  itemView: VideoThumbItemView,
//  collection: thumbCollection
// });
var ThumbGridCollectionView = Marionette.CollectionView.extend({});

/* -- Layouts -- */

// Main controller object
var VideoThumbGridLayout = Marionette.Layout.extend({
    collections: {
        thumbCollection: null
    },
    views: {
        thumbSortNavView: null,
        thumbGrid: null
    },
    regions: {
        thumbsSortNav: '.sort-nav',
        thumbGrid: '.thumbs-grid'
    },

    /* -- Initialize -- */

    initialize: function(options) {
        options = options || {};
        this.options = _.defaults(options, {});

        this._initializeThumbSortNav(options);
        this._initializeThumbGrid(options);
        this._initializeInfiniteScroll(options);

        this.thumbsSortNav.show(this.views.thumbSortNavView);
        this.thumbGrid.show(this.views.thumbGrid);
    },

    _initializeThumbGrid: function(options) {
        var thumbCollection, thumbGrid;

        thumbCollection = new LocalPaginatedDataService([], {
            scriptEl: '#videos-thumbs-json',
            model: VideoThumbModel
        });

        // clear server-side rendered items
        // fetch first page
        $('.thumbs-grid').empty();
        thumbCollection.fetch({reset: true});

        thumbCollection.on(
            Events.COLLECTION_LAST_PAGE,
            _.bind(this._didReceiveCollectionLastPage, this)
        );

        thumbGrid = new ThumbGridCollectionView({
            el: '.thumbs-grid',
            itemView: VideoThumbItemView,
            collection: thumbCollection
        });

        this.collections.thumbCollection = thumbCollection;
        this.views.thumbGrid = thumbGrid;
    },

    _initializeThumbSortNav: function(options) {
        this.views.thumbSortNavView = new ThumbSortNavView(
            {
                el: '.sort-nav',
                sortMap: [
                    {prop: 'newest', order: 'ascending'},
                    {prop: 'popularity', order: 'ascending'},
                    {prop: 'rated', order: 'ascending'}
                ]
            }
        );

        // listen to sort nav for filter request
        this.listenTo(
            this.views.thumbSortNavView,
            Events.USER_WANTS_THUMB_SORT,
            this._didReceiveUserWantsThumbSort
        );
    },

    _initializeInfiniteScroll: function(options) {
        var InfiniteScroll, trigger;

        InfiniteScroll = window.HOTWHEELS.InfiniteScroll;
        trigger = _.bind(this._onInfiniteScrollTrigger, this);

        this._infiniteScroll = new InfiniteScroll({
            trigger: trigger,
            triggerWhen: 0.75,
            scrollDebounce: 0
        });
    },


    /* -- Privates -- */

    _hideThumbsNoItemsView: function() {
        $('.thumbs-no-items').hide();
    },

    _showThumbNoItemsView: function() {
        $('.thumbs-no-items').show();
    },

    _applySort: function(options) {
        var thumbCollection;

        // local ref
        thumbCollection = this.collections.thumbCollection;

        // comparator should now enforce this sort as models are added
        thumbCollection.sort(options);
        thumbCollection.fetch({reset: true});

        this._hideThumbsNoItemsView();
    },

    /* -- Event Delegates / Callbacks -- */

    _onInfiniteScrollTrigger: function() {
        var thumbCollection;

        thumbCollection = this.collections.thumbCollection;
        thumbCollection.fetch();
    },

    _didReceiveUserWantsThumbSort: function(sender, sort) {
        this._applySort(sort);
    },

    _didReceiveCollectionLastPage: function(sender) {
        this._showThumbNoItemsView();
    },
});

/* -- Initializer -- */

function initialize() {
    // get things going
    new VideoThumbGridLayout();
}

$(function(){
    initialize();
});

})(window, document, _, $, Backbone, Marionette);