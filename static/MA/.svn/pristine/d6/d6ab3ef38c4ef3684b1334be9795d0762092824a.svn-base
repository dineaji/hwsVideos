HOTWHEELS = HOTWHEELS || {};
/*
 * Simple infinite scroll function
 */
(function (window, document, _, $, Backbone, Marionette) {
'use strict';

var exports = window.HOTWHEELS;

var InfiniteScroll = Marionette.Controller.extend({

    initialize: function(options) {
        this.options = _.defaults(options, {
            scrollDebounce: 1000,
            triggerWhen: 0.8,
            trigger: function(){},
            checkOnInit: true// noop
        });

        this._scrollDebounce = options.scrollDebounce;
        this._triggerWhen = options.triggerWhen;
        this._trigger = options.trigger;
        this.$window = $(window);

        if(this._scrollDebounce > 0) {
            this._didReceiveScroll = _.debounce(
                this._didReceiveScroll, this._scrollDebounce);
        }

        // check scroll on init
        if (this.options.checkOnInit) this._didReceiveScroll();
        this.$window.on('scroll', _.bind(this._didReceiveScroll, this));
    },

    _getViewportInfo: function() {
        var height, width, win, doc, docEl, body;

        win = window;
        doc = document;
        docEl = doc.documentElement;
        body = doc.getElementsByTagName('body')[0];
        width = win.innerWidth || docEl.clientWidth || body.clientWidth;
        height = win.innerHeight || docEl.clientHeight || body.clientHeight;

        return {width: width, height: height};
    },

    _didReceiveScroll: function(e) {
        var scrollTop, viewportInfo, maxScroll, position;

        scrollTop = this.$window.scrollTop();
        viewportInfo = this._getViewportInfo();
        maxScroll = $(document).height() - viewportInfo.height;
        position = scrollTop / maxScroll;

        if(position >= this._triggerWhen) {
            this._trigger();
        }
    }
});

exports.InfiniteScroll = InfiniteScroll;


}(window, document, _, jQuery, Backbone, Marionette, undefined));