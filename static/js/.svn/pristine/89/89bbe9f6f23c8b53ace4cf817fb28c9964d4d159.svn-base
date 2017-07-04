(function(global){
    /**
     * Mattel Site Stub File
     *
     * - This file is intended to simulate *some* of the
     *   production environment locally.
     * - This file should not be included in production.
     */



    /* Emulate Namespace
    * ********************
    */
    global.MAT = {};
    global.MAT.SITE = {};
    global.MAT.SITE.PAGES = {
        PageNames: {
            CATALOG: 'catalog'
        }
    };

    // Mattel Page Constructor Stub
    global.MAT.Page = function(pagename) {
        this.pagename = pagename;
    };
    /* End Namespace
    * ********************
    *





    /*
     * koolswap postLoad simulation
     */

    document.addEventListener("DOMContentLoaded", function() {
        var timeout;

        // use time out to simulate different load / postLoad call scenarios
        timeout = 0;

        setTimeout(function(){
            var pages, pageName;

            pages = global.MAT.SITE.PAGES;
            pageName = pages.PageNames.CATALOG;
            catalogPage = pages[pageName];

            catalogPage.postLoad();

        }, timeout);
    });

    /* End koolswap
    * ********************
    *





    /**
     * blitz shop application
    */

    var pages = global.MAT.SITE.PAGES,
        pageName = pages.PageNames.CATALOG,
        shopPage = new MAT.Page(pageName);

    /*
     * post load example
     */

    shopPage.postLoad = function(){

        // This is how you configure the path
        // to your product carousel Ajax call

        /*
        global.BLITZ.MATTEL_SHOP.setConfig({
            carouselAjaxUrl : '/path-to-ajax'
        });
        */

        // Starts the application's javascript
        global.BLITZ.MATTEL_SHOP.start('app-start');
        global.BLITZ.MATTEL_SHOP.start('controller');
        //
        // Emulation of an Ajax call by Mattel
        setTimeout(function(){
            // Starts the product carousels
            global.BLITZ.MATTEL_SHOP.start('product-carousel');
        }, 500);
   
	/* shop changes */


function createObjectToGetNavigationFilter() {
    var itemValue = '',
		
		//brandName = $('#productBrandName').attr("value");
		brandName = 'HotWheels';
    $.each($('.shop-nav__menu .webapi>a'), function (index, element) {
        itemValue = itemValue + $(this).text().replace(" ", "") + ",";
    });

    var shopFilter = new Object();
    shopFilter.BrandName = brandName;
    shopFilter.LocaleName = hdnLocaleName = $("#hdnLocaleName").val();
    shopFilter.SortByName = '';
    shopFilter.ListItems = new Array();
    shopFilter.ListItems[0] = new Object();
    shopFilter.ListItems[0].Item = new Object();
    shopFilter.ListItems[0].Item.Value = itemValue;
    return shopFilter;
}


$('.shop-nav').mouseenter(function () { $('.bg-sub-nav').hide() }).mouseleave(function () { $('.bg-sub-nav').show() })

shopPage.getNavItems=function() {
    $.support.cors = true;
    // This is how you configure the path
    // to your product carousel Ajax call
    
    var LocaleStr = hdnLocaleName = $("#hdnLocaleName").val();
    var prodGuidValue = "";
    var guid = $('#hiddenRecipientGuidId').attr("value");
    if (guid) {
        prodGuidValue = guid;
    }

    imageUrl = 'https://media.mattel.com/root/',
    apiServer = "https://beta.product.mattel.com",
    //brandName = $('#productBrandName').attr("value");
    brandName = 'HotWheels';
    BLITZ.MATTEL_SHOP.setConfig({
        cookieName: $("body").is('.page-cars, .page-car-detail, .page-user-profile') ? 'carWishlist' : 'HW_ProductValue',
        cookiePath: '/' + LocaleStr,
        mattelData: {
            // used only for html markup
            ImagePath: imageUrl
        },
        productCarousel: {
            url: '/' + LocaleStr + '/ShopCatalog/LoadProductsList/?',
            method: 'GET',
            dataType: 'html'
        },
        categoryGrid: {
            url: '/' + LocaleStr + '/ShopCatalog/LoadCategoryProductsList/?',
            method: 'POST',
            dataType: 'html'
        },
        wishlistCarousel: {
            url: apiServer + '/api/Product/GetProductListBasedOnWish',
            method: 'POST',
            dataType: 'json',
            data: {
                BrandName: brandName,
                LocaleName: LocaleStr
            }
        },
        wishlistEmptyModal: {
            pageRedirectUrl: '/' + LocaleStr + '/profile/index.html#mywishlist',
            url: '/' + LocaleStr + '/wishlist/EmptyWishlist',
            method: 'GET',
            dataType: 'html'
        },
        wishlistEmailModal: {
            url: '/' + LocaleStr + '/Wishlist/EmailWishlist',
            method: 'GET',
            dataType: 'html',
            formUrl: '/' + LocaleStr + '/Wishlist/SendEmail/?productsGuid=' + prodGuidValue,
            formMethod: 'POST',
            errorMessage: 'Please check your information and try again.'
        }
    });

	
    // Starts the application's javascript
    //BLITZ.MATTEL_SHOP.start('app-start');
    // Starts the product carousels
    //    BLITZ.MATTEL_SHOP.start('product-carousel');

    
}
shopPage.getNavItems();
 };

    // add page to pages
    pages[pageName] = shopPage;




})(window);
