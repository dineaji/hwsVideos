/*
File Name : Car Detail.JS
Purpose : promoting the cars
FrameWork Used : underscoreJS, OwlCarouselJS
*/
(function(global,$,cookie,apiConfig){
	var isLoaded = false,
		activeProductId,
		userDataRecieved = false,
		ssoCookieName = ssoCookieName || "user_data",
		detailObj,
		activeclass = "active",
		catalogService = {},
		HWLayout = HWMAT.layout || HWMAT || {},
		configObj={'itemVisible':1,'autoPlay':false,'center':false,'pagination':false,'navigation':true,'loop':false,'tabletVisible' : 1},
		wishlistObj={'itemVisible':3,'autoPlay':false,'center':false,'pagination':false,'navigation':true,'loop':false,'mobileVisible' : 2},
	
	carDetail ={
		templateBind : function (response){
			var templateCollectionm
		    	divElem = document.getElementById("detail-car-container"),
		    	templateId =   _.template(document.getElementById("thumbnail-carousel-template").innerHTML.trim());

			templateCollection = templateId({ 'items' : response});
		    divElem.innerHTML = templateCollection;
		    this.renderCarousel($(divElem).find(".thumb-carousel-container .slides"),configObj);
		    setTimeout(function(){
	    		$(divElem).removeClass('loading');
	    		$(divElem).find(".carousel-filter-status").addClass('active');
	    		if(typeof cookie.get(ssoCookieName)==="undefined"){
	    			$(".login-flash-message").addClass('active');
	    		}
	    	},1300)
		},
		templateConfig : function(configName){			
				var configObj;
				switch(configName){
					case 'unlockedModel':
						configObj={"templateId":"unlocked-template","targetId":"unlock-container-wrapper"}
						break;
				}
				return configObj;
			},// Event
		renderCarousel : function(el,prop){		 
		    var $owl = $(el);
		    
		    $owl.owlCarousel({
		        items           :  prop.itemVisible,    		 // Integer
		        singleItem      :  prop.singleItem || false,     // Boolean
		        dots		    :  prop.pagination || false,     // Boolean
		        smartSpeed      :  400,                 		 // Integer
		        callbacks       :  true,                		 // Boolean
		        autoplay        :  prop.autoPlay || false, 		 // Boolean / Integer 
		        loop            :  prop.loop || false,       	 // Boolean
		        mouseDrag       :  false,               		 // Boolean
		        nav   		   	:  prop.navigation || false,     // Boolean
		        navText  		:  false, 						 // Boolean
		        addClassActive  :  true,						 // Boolean
				itemsDesktop	:  false,						 // Boolean
				navRewind 		:  false,						 // Boolean
				startPosition	:  $owl.data('currentIndex') || 0, // Integer
				centerClass 	:  'active-element',
				center 			:  prop.center, 				 // Boolean
				transitionStyle	:  true,
				navSpeed		:  400,
				responsiveClass  : true,
				rewindNav		: true,
				responsive 		:{
					0:{
						items : prop.mobileVisible || 1
					},
					768:{
						items : prop.tabletVisible || 4
					},
					980:{
						items : prop.itemVisible
					}
				},
		    })
		},
		wishlistAction : function(elem){
	    	var productElem = $(elem).closest('.product-tile'),
				modelIndx = parseInt(productElem.data('index')),
				duration,newElem,elemPosition,statusName;

			// this fn will return if toyId exist in carverified/carunverified cookie.
			if(cookie.inCookie('carUnverified',this.toyNumber) || cookie.inCookie('carVerified',this.toyNumber)) return;
			if(($(elem).hasClass("active") || $(elem).hasClass("wishlist")) || productElem.hasClass("product-tile--added")){
				HWLayout.toggleWishlistState(false,this.toyNumber);
				$(elem).removeClass("active wishlist");
				productElem.removeClass("product-tile--added");
				if(this.carMapedDatas!=undefined) this.carMapedDatas[modelIndx].wishState="";
				HWLayout.wishlistAPICall(detailObj,this.toyNumber,false);
				statusName = "remove";
			} else{
				HWLayout.toggleWishlistState(true,this.toyNumber);
				$(elem).addClass("active wishlist");
				productElem.addClass("product-tile--added");
	           	// this.toggleClassWithFlash('.shop-nav__counter',1000);
	           	HWLayout.wishlistAPICall(detailObj,this.toyNumber,true);
	           	statusName = "add"
			}
			HWLayout.trackingFunction('cars',statusName,detailObj.Title,"cars: detail page",'');
		},
		activeCookieWishlist : function(toyId){
			cookie.cookieName = "carWishlist";
			if(cookie.inCookie(cookie.cookieName,toyId)){
				setTimeout(function(){
					$("p.product-tile[data-id="+toyId+"]").addClass('product-tile--added');
				},500)
			}
			if(!userDataRecieved){
				this.actionStatusUpdate()
			}
		},
		linkAnonymousUser : function(obj){
			var cnt = obj.arrayList.length,
				self =this;
			if(!cnt) return;
			 if(obj['carVerified'].indexOf(detailObj.ToyNumber)!=-1){
				statusname = 'verified';
				detailObj.status = statusname;
				$(".product-tile[data-id="+detailObj.ToyNumber+"]").find('.coll-checkmark-icon').addClass(statusname);
				$(".product-tile[data-id="+detailObj.ToyNumber+"]").find('.coll-wishlist-icon').addClass('disabled');
				cnt--;
			} else if(obj['carUnverified'].indexOf(detailObj.ToyNumber)!=-1){
				statusname = 'unverified';
				detailObj.status = statusname;
				$(".product-tile[data-id="+detailObj.ToyNumber+"]").find('.coll-checkmark-icon').addClass(statusname);
				$(".product-tile[data-id="+detailObj.ToyNumber+"]").find('.coll-wishlist-icon').addClass('disabled');
				cnt--;
			} else if(obj['carWishlist'].indexOf(detailObj.ToyNumber)!=-1){
				statusname = 'wishlist';
				detailObj.status = statusname;
				$(".product-tile[data-id="+detailObj.ToyNumber+"]").find('.coll-wishlist-icon').addClass(statusname);
				cnt--;
			} else{
				statusname = '';
			} 
		},
		checkmarkAction : function (elem){
			var $curElem = $(elem),	
				$parentElem = $(elem).closest('.product-tile'),
				templeteConfig = HWLayout.templateConfig('enterCode'),
				$allCurElem = $parentElem.find(".coll-checkmark-icon"),
				isActiveClass = $(elem).hasClass('unverified') ? true : false,
				showDuration = (isActiveClass) ? 0 : 1300,
				modelIndx = parseInt($parentElem.data('index')),
				isUnlocked = $(elem).hasClass('verified') ? true : false;
			

			apiConfig.toyId = this.toyNumber;
			cookie.cookieName = "carWishlist";
			if(cookie.inCookie(cookie.cookieName,this.toyNumber)){
				$parentElem.removeClass("product-tile--added");
				HWLayout.toggleWishlistState(false,this.toyNumber)
				// $parentElem.find(".wishlist-action").addClass('disabled');
			}
			$parentElem.find(".wishlist-action").addClass('disabled').removeClass("wishlist active");
			//cookieName = BLITZ.MATTEL_SHOP.config.cookieName;
			activeProductId = $curElem.closest("li").data('id') || $curElem.closest('p').data('id');
			if(isUnlocked){
				alert("Already Unlocked");
				return;
			}
			if(!isUnlocked){
				var divElem = document.getElementById(templeteConfig.targetId),
	            	templateId =   _.template(document.getElementById(templeteConfig.templateId).innerHTML.trim()),
					templateCollection = templateId({ 'items' : detailObj});
	            	divElem.innerHTML = templateCollection;

					// HWLayout.templateBind(templeteConfig,'');
					if(!isActiveClass){
						apiConfig.status= "unverified";
						cookie.cookieName = "carUnverified";
						cookie.toggleCookie(true,apiConfig.toyId)
						HWLayout.unVerifiedStateAPICall($allCurElem,apiConfig.toyId);
						$allCurElem.addClass('unverified');
						detailObj.status = detailObj.checkState ="unverified"
					}
					setTimeout(function(){$(".modal-container").modal('show').addClass('unlock-modal-open');},showDuration)
					setTimeout(function(){
					 	$(".modal-container").find('input[type="text"]').focus()
					},showDuration+600);
					
					HWLayout.trackingFunction('cars','have',detailObj['Title'],"cars: detail page",'');
			}else if($curElem.hasClass('.verified')){
				$allCurElem.addClass('unverified');				
			}
		},
		codeValidation : function(elem,identifier){
			var res={},
				self = this,
				targetClass = ".enter-code-wrapper",
				elemWrapper = $(elem).hasClass("code-validation") ? $(elem).closest(targetClass) : $(elem).closest(targetClass),
				inputElem = elemWrapper.find('.enter-code') || $(elem).closest('li').find('.enter-code'),
				inputVal = inputElem.val(),
				isnum = /^\d+$/.test(inputVal),
				templeteConfig = this.templateConfig('unlockedModel'),
				curModel = detailObj,
				$activeThumb = $(".product-tile[data-id="+this.toyNumber+"]"),
				$activeCarsl = $(".thumb-carousel-container").hasClass(activeclass) ? $(".thumb-carousel-container .coll-checkmark-icon") : 0,
				// modelIndx = $activeThumb.data('index'),
				errorElem =  elemWrapper.find(".error-validation-message"),
				isLoggedIn = HWLayout.ssoId,
				globalModel;
			
			errorElem.show();
			if(typeof isLoggedIn=="undefined"){
				elemWrapper.addClass('login-msg-active');
				this.toggleClassWithFlash(errorElem,500)
			}
			elemWrapper.removeClass('login-msg-active');
			
			if(inputVal==""){ errorElem.html(this.errorMessages('empty'),inputElem); }
			else{
				if(identifier=="all"){
					apiConfig.packagingCode = inputVal;
					if(detailObj.Packagingcode==inputVal){
						errorElem.html(self.errorMessages('unlocked'),inputElem);
						return;
					}
					HWLayout.ajaxDataFormat(catalogService.domain,apiConfig.apiMethodConfig(catalogService.name,'getProductDetailByCode'),function(res){
						errorElem.html(''); 
						elemWrapper.addClass('loading');
						if(res==false){
							errorElem.html(self.errorMessages('invalid'),inputElem);
							elemWrapper.removeClass('loading');
							return;
						}
						globalModel = res[0];
						if(cookie.inCookie('carVerified',globalModel.ToyNumber)){
							errorElem.html(self.errorMessages('unlocked'),inputElem);
							inputElem.val('');
							elemWrapper.removeClass('loading')
							return;
						}
						errorElem.html("WOW! you added "+globalModel.Title+"to your collection!");
						HWLayout.verifiedStateAPICall(globalModel,globalModel.ToyNumber,globalModel.MiniCollectionId);
						errorElem.html(''); 
						globalModel.checkState="verified";
						cookie.toggleCookie(true,globalModel.ToyNumber);
						HWLayout.trackingFunction('cars','verify',globalModel.Title,'cars: pop up','');
						// window.localStorage.removeItem('carDetail');
						// HWLayout.setObjectStorage('carDetail',globalModel);
						setTimeout(function(){
							inputElem.val('');
							elemWrapper.removeClass('loading')
							window.location.href = "/"+apiConfig.localeName+"/collection/detail?carId="+globalModel.ToyNumber+"";
						},2000)
					})
				}else{
				if(inputVal != curModel.Packagingcode){
					errorElem.html(this.errorMessages('invalid'),inputElem);
					return;
				} 
				var divElem = document.getElementById(templeteConfig.targetId),
	            	templateId =   _.template(document.getElementById(templeteConfig.templateId).innerHTML.trim()),
					templateCollection = templateId({ 'items' : curModel,'ref':'unlock'});
	            	divElem.innerHTML = templateCollection
				
				detailObj.checkState = apiConfig.status= "verified";
				HWLayout.verifiedStateAPICall(curModel,this.toyNumber);
				HWLayout.trackingFunction('cars','verify',curModel.Title,'cars: pop up','');
				}
				$("p.product-tile").find('.coll-checkmark-icon').addClass("verified").removeClass("unverified");
				if($activeCarsl) $activeCarsl.addClass("verified").removeClass("unverified");
			} 
		},
		errorMessages: function(msg,clearTxt){
			var msgContent,
				invalidMessage  = $(".invalid-error-message").html(),
				usedMessage = $(".already-unlock-message").html();

			if(typeof clearTxt!="undefined") $clearTxt.val('');
			switch(msg){
				case 'empty' : 
					 msgContent = invalidMessage;
					 break;
				case 'invalid' : 
					 msgContent = invalidMessage;
					 break;
				case 'onlyNos':
					 msgContent = invalidMessage;
					 break;
				case 'unlocked':
					msgContent = usedMessage;
					 break;
			}
			return msgContent;
		},
		toggleClassWithFlash : function(elem,duration){
			$(elem).addClass('active').stop().delay(duration).queue('',function(){
			    $(this).removeClass('active');
			});
		},
		getObjectStorage : function(name){
			return data = JSON.parse(localStorage.getItem(name));
		},
		scanCodeModal : function(){
			var templeteConfigObj = [HWLayout.templateConfig('enterCode'),this.templateConfig('unlockedModel')]
			for(var i=0;i<templeteConfigObj.length;i++){
				var divElem = document.getElementById(templeteConfigObj[i].targetId),
				        	templateId =   _.template(document.getElementById(templeteConfigObj[i].templateId).innerHTML.trim()),
							templateCollection = templateId({ 'items' : detailObj,'ref':i==1 ? 'unlock' : ''});
				        	divElem.innerHTML = templateCollection
			}
			setTimeout(function(){$(".modal-container").modal('show').addClass('unlock-modal-open');},1000)
			// window.localStorage.removeItem("carDetail");
		},
		failRewardPoints : function(){
			var self = this;
			HWLayout.rewardsPointsUpdate(rewardPoints["unverified"].points | 10,'',true);
			HWLayout.rewardCoinsStore(true,'',rewardPoints["unverified"].points);
		},
		actionStatusUpdate : function(statusObj){
			var usersToyNumbers,userStatusName;
			this.userStatus = this.userStatus || statusObj;
			if(typeof this.toyNumber!="undefined"){
				userDataRecieved = true;
				usersToyNumbers = HWLayout.groupUniqueObj(this.userStatus,'code');
				if(usersToyNumbers[this.toyNumber]){
					userStatusName = usersToyNumbers[this.toyNumber][0].status;
					if(userStatusName=="wishlist"){
						$("p.product-tile").addClass('product-tile--added');
					} else if(userStatusName!="removed"){
						$("p.product-tile").find('.coll-checkmark-icon').addClass(userStatusName);
						$("p.product-tile").find('.coll-wishlist-icon').addClass('disabled')
					}
				}
			}
		},
		init : function(){
			if(typeof _!="function" || typeof $!="function" || isLoaded) return;
			isLoaded = true;
			var self = this;
			detailObj = HWMAT.carMetaData ? HWMAT.carMetaData[0] : false;
				detailObj.status = '';
			self.toyNumber = detailObj.ToyNumber;
			self.activeCookieWishlist(self.toyNumber);
			if(cookie.get("userMapped")==undefined || cookie.get("userMapped")==false){
				statusObj = self.linkAnonymousUser(HWLayout.splitStatusName());
			}
			
			/*
			if(!detailObj){
				var userToyNo = HWLayout.getQueryParameterByName('carId');
				catalogService.name = "carCatalog";
			    catalogService.domain = apiConfig.apiDomainConfig(catalogService.name);
				if(userToyNo==null) return;
				apiConfig.toyId = userToyNo;
				HWLayout.ajaxDataFormat(catalogService.domain,apiConfig.apiMethodConfig(catalogService.name,'getProductDetail'),function(res){
					if(res==false){
						$("#detail-car-container").removeClass('loading').addClass('failed');
						return;
					}
					$("#detail-car-container").removeClass('loading');
	    			$("#detail-car-container").find(".carousel-filter-status").addClass('active');	
					//self.templateBind(detailObj);
				})
			}
			*/
			if(HWLayout.ssoId) HWLayout.rewardAPICall();
			//var getCarModel = getObjectStorage('carDetail') || ajaxDataFormat(templateBind);
			$(document).on('click','.product-tile .coll-wishlist-icon',function(){
				self.wishlistAction(this)
			})
			$(document).on('click','.carousel-filter-status .car-stats-val',function(){
				var selectedName = $(this).data('name'),
					targetName = $(this).data('refKey');

				HWLayout.trackingFunction('cars','filter',selectedName,'filter: '+targetName,'cars: detail page');
			})
			$('body').on('click','.coll-checkmark-icon',function(){
				self.checkmarkAction(this);
			})
			$('body').on('click','.modal-container .code-validation',function(){
				var isGlobalCheck  = $(this).hasClass("submit-code") ? "all" : "";
				self.codeValidation(this,isGlobalCheck);
			})
			/*$('body').on('click','.detail-wrapper .failed .back-to-car',function(evt){
				evt.preventDefault();
				var self = this;
				HWMAT.layout.rewardsPointsUpdate(rewardPoints["unverified"].points | 10,'',true);
				HWMAT.layout.rewardCoinsStore(true,'',rewardPoints["unverified"].points);
				setTimeout(function(){
					window.location.href = $(self).attr('href');
				},500)
			})*/
		}
	}
	carDetail.init();
	global.HWMAT.carDetail = carDetail;
}(this, jQuery,HWMAT.cookie,HWMAT.config));
// jQuery Ready Fn

$(function(){
	HWMAT.carDetail.init(); // this function might fails because of previous call which trigger on page ready.
})

$(window).load(function(){
        $('h1,h2,h3,h4,h5,h6,p,a,span,li').each(function(i, elem) {
            $(elem).html(function(i, html) {
                return html.replace(/\u00ae/g, "<sup>&reg;</sup>");
            });
            $(elem).html(function(i, html) {
                return html.replace(/\u00a9/g, "<sup>&copy;</sup>");
            });
        });    
});