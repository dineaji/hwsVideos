/*
File Name : Car wishlist.JS
Purpose : promoting the cars
FrameWork Used : underscoreJS, OwlCarouselJS
*/
(function(global,$,cookie,apiconfig){
	var HWLayout = HWMAT.layout || {},
		isLoaded = wishlistAPIDone = false,
		wishlist = {
			templateConfig : function(configName){			
				var configObj;
				switch(configName){
					case 'mywishlist' :
						configObj={"templateId":"mywishlist-template-container","targetId":"mywishlist-coll-container"}
						break;
				}
				return configObj;
			},
			wishlistBindings : function(){
				$('.js-wishlist .wishlist__delete').on('click',function(e){
					HWMAT.wishlist.deleteWishlist(this,e)
				})
			},
		   wishlistRender :  function(obj){
	    	var carcookiedatas = HWMAT.cookie.get('carWishlist',true),
	    		carStorage =  HWLayout.getObjectStorage('carList'),
	    		isCookieEnabled = carcookiedatas!=undefined && carcookiedatas.length>0 && carStorage ? true :  false,
	    		mergedArr,arr=[];
	    	
	    	this.userWishlistObj = this.userWishlistObj || obj['wishlist'];
	    		if(!wishlistAPIDone) return;
   			this.userWishlitCode = HWLayout.uniqueVal(this.userWishlistObj,'code');
   			if(isCookieEnabled){
   				idsString = _.isArray(carcookiedatas) ?  carcookiedatas.join(',') : carcookiedatas;
    			if( carcookiedatas !== undefined && carcookiedatas !== null){
    				mergedArr = _.union(carcookiedatas, this.userWishlitCode)
    				for(var i=0;i<carStorage.length;i++){
    					for(var j=0;j<mergedArr.length;j++){
    						if(carStorage[i].ToyNumber==mergedArr[j]){
    							arr.push(carStorage[i]);
    						}
    					}
    				}
    				this.userWishlistObj = this.wishlistProps(arr,'carwishlist');
    			}
   			}
		   		if(!_.isEmpty(this.userWishlistObj)){
		   			if((HWLayout.productWishlist==undefined || HWLayout.productWishlist==false)){
		   				this.userWishlistObj = this.wishlistProps(this.userWishlistObj,isCookieEnabled ? 'carwishlist' : 'mywishlist');
		   				this.profileDataUpdate('mywishlist',this.userWishlistObj);
		   			} else if(HWLayout.productWishlist){
				    	for(var i=0;i<this.userWishlistObj.length;i++){
						  	for(var j=0;j<HWLayout.productWishlist.length;j++){
							   if(this.userWishlistObj[i].code == HWLayout.productWishlist[j].modelNumber){
							     	this.userWishlistObj[i] = $.merge(this.userWishlistObj[i],HWLayout.productWishlist[j])
							   }
							}
						}
						this.userWishlistObj = this.wishlistProps(this.userWishlistObj,isCookieEnabled ? 'carwishlist' : 'mywishlist');
						this.wishlistAPI = this.wishlistProps(HWLayout.productWishlist,'pcwishlist');
						this.wishlistMapObj = $.merge(this.userWishlistObj,this.wishlistAPI);
						this.profileDataUpdate('mywishlist',this.wishlistMapObj)
		   			}
		   		} else if(_.isEmpty(this.userWishlistObj) && HWLayout.productWishlist!=undefined &&  HWLayout.productWishlist!=false){
		   			this.wishlistAPI = this.wishlistProps(HWLayout.productWishlist,'pcwishlist');
		   			this.profileDataUpdate('mywishlist',this.wishlistAPI);
		   		} else if(_.isEmpty(this.userWishlistObj) && (HWLayout.productWishlist==undefined ||  HWLayout.productWishlist==false)){
		   			$("#"+this.templateConfig('mywishlist').targetId).removeClass('loading');
		   			$("#"+this.templateConfig('mywishlist').targetId).closest('.mywishlist-wrapper').addClass('wishlist-not-found');
		   		}
			   	this.wishlistBindings();
		    },
		    profileDataUpdate : function(sectionName,obj,propsOptnl){
		    	if(!propsOptnl) this[sectionName] = HWLayout.props(obj,true);
				HWLayout.ajaxCollection(this.templateConfig(sectionName).targetId,this[sectionName]);
				HWLayout.templateBind(this.templateConfig(sectionName),HWLayout.getCollDatas(this[sectionName]));
				$("#"+this.templateConfig(sectionName).targetId).removeClass('loading')
				this.incrementLoadingCnt(sectionName);
		    },
		    wishlistProps : function(obj,refName){
		    	var obj = _.map(obj, function(element,indx) { 
	                return _.extend({}, element, {reference : refName});
	            });
	            return obj;
		    },
		    incrementLoadingCnt : function(tabName,reset){
		    	if(reset){
		    	 	$("#"+this.templateConfig(tabName).targetId).attr('data-loaded-cnt',0);
		    	 	return;
		    	 }
		    	var attrCnt = parseInt($("#"+this.templateConfig(tabName).targetId).attr('data-loaded-cnt'));
		    	attrCnt++
		    	$("#"+this.templateConfig(tabName).targetId).attr('data-loaded-cnt',attrCnt);
		    },
		    loadMore : function(curVal){
	        	var self =this,
	        		activeElem = $(".product-wishlist-container>div.active").data('tabName');
				if(window.innerHeight > curVal.getBoundingClientRect().bottom && typeof self[activeElem]!="undefined"){
					this.parsingObjToDom();
				}
			},
			deleteWishlist : function(elem,optnl,evt){
		    	var $curElem = $(elem);
		    		$closestElem = $curElem.closest('.wishlist__item'),
		    		$targetElem = $closestElem.closest("#mywishlist-coll-container"),
		    		refKey = $closestElem.data('ref'),
		    		toyNumber = $closestElem.data('toyNumber');
		    	if(refKey=="mywishlist" || refKey==""){
		    		apiconfig.toyId = toyNumber;
		    		HWLayout.ajaxDataFormat(HWLayout.collService.domain,apiconfig.apiMethodConfig(HWLayout.collService.name,'removeCar'),'','collService');
		    	}
		    	if($targetElem.find('li.wishlist__item').length<=1){
		    		$targetElem.closest('.mywishlist-wrapper').addClass('wishlist-not-found');
		    	}
		    },
		    parsingObjToDom : function(obj,bool,tabName){
		    	this.profileDataUpdate('mywishlist','',true);
		    },
			init : function(){
				if(typeof _!="function" || typeof $!="function" || isLoaded) return;
				var self= this;
				this.apiLoaded = false;
				HWLayout.generatePids(function(res){
					HWLayout.productWishlist = res;
					wishlistAPIDone = true;
					if(self.userWishlistObj!=undefined) self.wishlistRender('');
					if(HWMAT.layout.ssoId==false){
						self.wishlistRender('');
					}
				});
				isLoaded = true;
			}
	}
	global.HWMAT.wishlist = wishlist;
	wishlist.init();
}(this, jQuery,HWMAT.cookie,HWMAT.config));


// jQuery Ready Fn

$(function(){
	HWMAT.wishlist.init(); // this function might fails because of previous call which trigger on page ready.
	$(window).scroll(function(){
		var tabName = $(".product-wishlist-container>div.active").data('tabName');
		if(typeof HWMAT.wishlist.templateConfig(tabName)=="undefined") return
	    var parentContainer= $("#"+HWMAT.wishlist.templateConfig(tabName).targetId)[0];
	    HWMAT.wishlist.loadMore(parentContainer);
	})
});