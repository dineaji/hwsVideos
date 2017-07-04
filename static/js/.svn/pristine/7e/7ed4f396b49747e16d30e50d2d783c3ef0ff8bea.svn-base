(function(global){
    "use strict";

    function SiteSetup(){}

    SiteSetup.prototype = {
        config: {
            // default data
            cookieName: 'HW_ProductValue',
            cookiePath: '/',

            wishlistEmptyModal: {
                //pageRedirectUrl: 'wishlist-user.html',
				pageRedirectUrl: '/shop/wishlist',
                //url: 'static/js/app/mock-data/wishlist-empty-modal.html',
				url: '/wishlist/EmptyWishlist',
                method: 'GET',
                dataType: 'html'
            },

            wishlistEmailModal: {
                url: 'static/js/app/mock-data/wishlist-email-modal.html',
                method: 'GET',
                dataType: 'html',
                formUrl: '/something',
                formMethod: 'GET'
            },

            wishlistMmsModal: {
                url: 'static/js/app/mock-data/wishlist-mms-modal.html',
                method: 'GET',
                dataType : 'html'
            },

            productCarousel: {
                url: 'ShopCatalog/LoadProductsList',
                method : 'GET',
                dataType : 'html'
            },

            wishlistCarousel: {
                //url : 'static/js/app/mock-data/tile.html',
                // Settings for mattel testing
                // real service end point
                url: 'https://beta.product.mattel.com/api/Product/GetProductListBasedOnWish',
                method : 'POST',
                //method : 'GET',
                dataType : 'json',
                data : {
                    BrandName : 'Barbie',
                    LocaleName : 'en-us'
                }
            },

            wishlistPageItem: {
                url : 'static/js/app/mock-data/wishlist-item.html',
                method : 'GET',
                dataType : 'html'
            },

            // General variables
            mattelData: {
                ImagePath: 'http://media.mattel.com/root/'
            }
        },

        setConfig: function(obj){
            this.config = obj;
        },

        tasks: {},

        shouldStart: {},

        // add tasks to queue
        add: function(callback, namespace){

            if( !(this.tasks[namespace] instanceof Array) ){
                this.tasks[namespace] = [];
            }

            this.tasks[namespace].push(callback);

        },

        // execute them
        start: function(namespace){
            if( !this.shouldStart[namespace] ){
                this.shouldStart[namespace] = true;
            }else{
                this.runTasks(namespace);
            }
        },

        runTasks: function(namespace){
            var tasks = this.tasks[namespace];
            if( tasks instanceof Array ){
                for(var i = 0; i < tasks.length; i++){
                    if( typeof tasks[i] == 'function'){
                        tasks[i](); // execute it
                    }
                }
            }
        }
    };

    global.BLITZ = {};
    global.BLITZ.SHOP_TASKS = {
        APP_START : 'app-start',
        PRODUCT_CAROUSEL : 'product-carousel',
        CONTROLLER : 'controller'
    };
    global.BLITZ.MATTEL_SHOP = new SiteSetup();

})(window);
