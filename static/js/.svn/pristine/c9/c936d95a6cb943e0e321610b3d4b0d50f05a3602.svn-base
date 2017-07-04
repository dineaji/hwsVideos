/*
 -- This is how you configure the path
    to your API Ajax call
*/
(function(global,$){
    var config = {
    brandName : 'HotWheels',
    localeName : document.getElementById('hdnLocaleName') != null ? document.getElementById('hdnLocaleName').value : 'en-us',
    apiDomainConfig : function(domainName){
        var obj = {
            collectionService : document.getElementById('hdnCollectionServiceUrl') != null ? document.getElementById('hdnCollectionServiceUrl').value : "https://stage-myhwappsys1.mattelcloud.com/",
            carCatalog: document.getElementById('hdnProductCatalogUrl') != null ? document.getElementById('hdnProductCatalogUrl').value + "/api/ProductInfo" : "https://beta.product.mattel.com/api/ProductInfo",
            oldYearService : "/"+this.localeName+"/profile",
            productCatalog: document.getElementById('hdnProductCatalogUrl') != null ? document.getElementById('hdnProductCatalogUrl').value + "/api/Product" : "https://beta.product.mattel.com/api/Product",
            profileSetting : "",
            rewardService : document.getElementById('hdnRewardServiceUrl') != null ? document.getElementById('hdnRewardServiceUrl').value+"/HWEndlessRacer/" : "https://stage-hotwheelsendlessracer.herokuapp.com/HWEndlessRacer/",
            rewardDatas: '/Static/',
            wishlistService: document.getElementById('ProductCatalogUrl') != null ? document.getElementById('ProductCatalogUrl').value + "/api/ProductInfo" : "https://beta.product.mattel.com/api/ProductInfo",
            emailWishlist : 'https://user.mattel.com/api'
        }
        return domainName ? obj[domainName] : obj;
    },
    apiMethodConfig :  function(domainName ,methodName){
        var obj={
            collectionService :{
                token : {
                    "name" : "oauth/token/",
                    "body": "grant_type=client_credentials&client_id=0914b277a9d44cfb8e7812f91cb3ce2b&client_secret=2aedb53fcc9540debccb84032b124dd2",
                    "type" : "POST",
                    "params" : ""
                },
                createUser : {
                    "name" : "users/new",
                    "body" : "",
                    "type" : "POST",
                    "params" : ""
                 },
                addcar : {
                    "name" : "collections/",
                    "body" : {"id": this.toyId},
                    "type" : "POST",
                    "params" : ""+this.userId+"/"+this.status+"/items/"
                 },
                 removeCar : {
                    "name" : "collections/",
                    "body" : "",
                    "type" : "DELETE",
                    "params" : ""+this.userId+"/items/"+this.toyId
                 },
                linkUser : {
                    "name" : "users/",
                    "body" : {"id":this.userId },
                    "type" : "POST",
                    "params" : this.userId+"/link"
                },
                getCar : {
                    "name" : "collections/",
                    "body" : "",
                    "type" : "GET",
                    "params" : ""+this.userId+"/"+this.getCarStatus
                }
            },
            carCatalog : {
                getAttributeList : {
                    "name" : "/GetAttributes",
                    "body" : {"Locale":this.localeName,"AttributeName": ["Makes","Colors","MiniCollections","Series","Styles"]},
                    "type" : "POST",
                    "params" : ""
                },
                getCarList : {
                    "name" : "/GetCars",
                    "body" : {"Minicollections":[],"Year" :this.currentYear,"RecordsFrom" :0,"RecordsTo" :10000},
                    "type" : "POST",
                    "params" : ""
                },
                getProductDetail : {
                    "name" : "/GetProductDetailByToyNumber",
                    "body" : {"ToyNumber": this.toyId,"TargetSystem": "App","Locale": this.localeName,"propertytoretrieve": []},
                    "type" : "POST",
                    "params" : ""  
                },
                getProductDetailByCode : {
                    "name" : "/GetProductDetailByPackagingCode",
                    "body" : {"packagingcode": this.packagingCode,"TargetSystem": "App","Locale": this.localeName,"propertytoretrieve": []},
                    "type" : "POST",
                    "params" : ""  
                },
                getUserCollection : {
                    "name" : "/getusercollection",
                    "body" : "",
                    "type" : "GET",
                    "params" : "?consumerID="+this.userId
                    // "params" : "?consumerID=11787"
                    // +this.ssoId
                },
                getUserTracks : {
                    "name" : "/getusertracks",
                    "body" : "",
                    "type" : "GET",
                    "params" : "?consumerID="+this.userId
                    // "params" : "?consumerID=11787"
                }
            },
            productCatalog : {
                wishlist : {
                    "name" : "/GetProductListBasedOnWish",
                    "body" : {'Pids': this.pids, 'BrandName': this.brandName,'LocaleName' : this.localeName},
                    "type" : "POST",
                    "params" : ""
                }
            },
            profileSetting : {
                DisplayProfileSetting : {
                    "name" : "/"+this.localeName+"/Profile/DisplayProfileSetting",
                    "body" : {'locale': this.localeName, 'keywordId': this.tcmId, 'profileSetting': this.targetName, yearID: this.year || '',source:"" },
                    "type" : "GET",
                    "params" : ""
                },
                UpdateProfileSettings : {
                    "name" : "/"+this.localeName+"/Profile/UpdateProfileSettings",
                    "body" : JSON.stringify({'settingType': this.profileType, 'settingValue': this.profileLSrc || '', 'settingOtherValue': this.profileSSrc || ''}),
                    "type" : "POST",
                    "params" : ""
                }
            },
            rewardService : {
                token : {
                    "name" : "oauthtoken",
                    "body" : "clientId="+this.rewardClientId,
                    "type" : "POST",
                    "params" : ""
                },
                getUserPoints : {
                    "name" : "getCurrentState",
                    "body" : JSON.stringify({user: this.userId}),
                    "type" : "POST",
                    "params" : ""
                },
                getUserBalance : {
                    "name" : "getCurrencyBalance",
                    "body" : JSON.stringify({user: this.userId}),
                    "type" : "POST",
                    "params" : ""
                },
                updatePoints : {
                    "name" : "recordEarnings",
                    "body" : JSON.stringify({"user": this.userId,"coins": this.totalRewardPts,"badges": this.badgeItems}),
                    "type" : "POST",
                    "params" : ""
                }
            },
            rewardDatas : {
                getCarRewards : {
                    "name" : "carscollectedbadges.json",
                    "body" : "",
                    "type" : "GET",
                    "params" : ""
                },
                getMiniRewards : {
                    "name" : "collectionstartedbadges.json",
                    "body" : "",
                    "type" : "GET",
                    "params" : ""
                }
            },
            wishlistService : {
                getGuiId : {
                    "name" : "/SaveCarWishList",
                    "body" : function(obj){
                        return {    
                            "ToyNumbers": obj.carIds,
                            "pids": obj.productIds,
                            "localeName": document.getElementById('hdnLocaleName').value
                        }
                    },
                    "type" : "POST",
                    "params" : ""
                },
                getEmailWishlist : {
                    "name" : "/GetCarWishList",
                    "body" : {"guid": this.guiId},
                    "type" : "POST",
                    "params" : ""
                }
            },
            emailWishlist : {
                token : {
                    "name" : "/token/clienttoken",
                    "body" : {
                        clientId: "LNqvU8T_Ux8mD8B6YST9-b1N2T7XXHzz",
                        clientSecret: "mGcQhxzSYJTLuSFpK8CN3RQYRsNuNkz9"
                    },
                    "type" : "POST",
                    "params" : ""
                },
                sendEmail : {
                    "name" : "/Email/SendEmail",
                    "body" : function(obj){
                        return {
                           "emailId": obj.email,
                           "emailAttributes": [
                              {
                                 "propertyName": "PIDList",
                                 "propertyValue": obj.productIds!=undefined && obj.productIds!=null ? obj.productIds.toString().split(',').join('|')  : ''
                              },
                              {
                                 "propertyName": "FirstName",
                                 "propertyValue": obj.name
                              },
                              {
                                 "propertyName": "MyOccasion",
                                 "propertyValue": obj.occasion
                              },
                              {
                                 "propertyName": "WishListURL",
                                 "propertyValue": "/"+document.getElementById('hdnLocaleName').value+"/profile/index.html#mywishlist?productsGuid="+obj.guiId
                              },
                              {
                                 "propertyName": "SignUpURL",
                                 "propertyValue": "http://Hotwheels.com"
                              },
                              {
                                 "propertyName": "ModelNumberList",
                                 "propertyValue": obj.carIds!=undefined && obj.carIds!=null ? obj.carIds.toString().split(',').join('|') : ''
                              }
                           ],
                           "clientSecretKey": "RxEynSWQkrN8FVRgUe6nANUv",
                           "customerKey": "Wishlist_TS_HW",
                           "clientId": "y86sv8sz6enxxdr68dxmfyhv"
                        }
                    },
                    "type" : "POST",
                    "params" : ""   
                }   
            }
        }
        return domainName&&methodName == undefined ? obj[domainName] : domainName&&methodName ? obj[domainName][methodName] : "";
    }
}
global.HWMAT.config = config;
}(this, jQuery));
