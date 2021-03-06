webpackJsonp([0],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_service__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromPromise__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__(52);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var NewsService = (function (_super) {
    __extends(NewsService, _super);
    function NewsService(http, storage, platform, nativeStorage) {
        var _this = _super.call(this, http, storage, platform, nativeStorage) || this;
        _this.http = http;
        _this.storage = storage;
        _this.platform = platform;
        _this.nativeStorage = nativeStorage;
        return _this;
    }
    NewsService.prototype.geList = function (page, perPage) {
        var apiNewsUrl = __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].apiUrl + 'jjvv?page=' + page + '&per_page=' + perPage;
        return this.http.get(apiNewsUrl, {
            params: null
        });
    };
    NewsService.prototype.getSections = function (id) {
        return this.get('sections/' + id);
    };
    NewsService.prototype.getPhones = function () {
        return this.get('phones');
    };
    return NewsService;
}(__WEBPACK_IMPORTED_MODULE_5__base_service__["a" /* BaseService */]));
NewsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */]])
], NewsService);

//# sourceMappingURL=news.service.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise__);





var BaseService = (function () {
    function BaseService(http, storage, platform, nativeStorage) {
        this.http = http;
        this.storage = storage;
        this.platform = platform;
        this.nativeStorage = nativeStorage;
    }
    /** get token */
    BaseService.prototype.getAuthToken = function () {
        if (this.platform.is('cordova')) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromPromise(this.nativeStorage.getItem('token'));
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromPromise(this.storage.get('token'));
        }
    };
    /** GET */
    BaseService.prototype.get = function (url, body) {
        var _this = this;
        return this.getAuthToken().flatMap(function (token) {
            return _this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl + url, {
                params: body,
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().append('Authorization', "Bearer " + token)
            });
        });
    };
    /** POST */
    BaseService.prototype.post = function (url, body) {
        var _this = this;
        return this.getAuthToken().flatMap(function (token) {
            return _this.http.post(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl + url, body, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().append('Authorization', "Bearer " + token)
            });
        });
    };
    /** PUT */
    BaseService.prototype.put = function (url, body) {
        var _this = this;
        return this.getAuthToken().flatMap(function (token) {
            return _this.http.put(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl + url, body, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().append('Authorization', "Bearer " + token)
            });
        });
    };
    /** DELETE */
    BaseService.prototype.delete = function (url, body) {
        var _this = this;
        return this.getAuthToken().flatMap(function (token) {
            return _this.http.delete(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl + url, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().append('Authorization', "Bearer " + token)
            });
        });
    };
    return BaseService;
}());

//# sourceMappingURL=base.service.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileMedia; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pata__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfileMedia = (function () {
    function ProfileMedia(navCtrl, navParams, viewCtrl, service, userService, loadingCtrl, camera, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.service = service;
        this.userService = userService;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.storage = storage;
        this.loading = null;
        this.token = '';
        this.userId = null;
        this.store = null;
        this.storeMode = false;
        if (this.navParams.get("store")) {
            this.store = this.navParams.get("store");
            this.storeMode = true;
        }
        this.storage.get("MP-Profile").then(function (val) {
            _this.userId = val.id;
        });
        this.storage.get("token").then(function (val) {
            _this.token = val;
        });
        console.log('storeMode', this.storeMode);
    }
    ProfileMedia.prototype.ionViewDidLoad = function () {
    };
    ProfileMedia.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ProfileMedia.prototype.takePicture = function () {
        var _this = this;
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 300,
            targetHeight: 300,
            correctOrientation: true
        }).then(function (imageData) {
            _this.processTake(imageData);
        }, function (err) {
            console.log(err);
        });
    };
    ProfileMedia.prototype.openGallery = function () {
        var _this = this;
        var cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 60,
            targetWidth: 320,
            targetHeight: 320,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
        this.camera.getPicture(cameraOptions)
            .then(function (file_uri) {
            _this.processTake(file_uri);
        }, function (err) {
            console.log(err);
        });
    };
    ProfileMedia.prototype.dataURItoBlob = function (dataURI) {
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0)
            byteString = atob(dataURI.split(',')[1]);
        else
            byteString = (dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], {
            type: mimeString
        });
    };
    ProfileMedia.prototype.processTake = function (imageData) {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.loading = this.loadingCtrl.create({ content: 'actualizando...' });
        this.loading.present();
        var self0 = this;
        var blob = this.dataURItoBlob(this.base64Image);
        var objURL = window.URL.createObjectURL(blob);
        var image = new Image();
        image.src = objURL;
        window.URL.revokeObjectURL(objURL);
        var url = window.URL.createObjectURL(blob);
        var formData = new FormData();
        formData.append('avatar', blob, 'avatar.jpg');
        var mode = 'users';
        if (self0.storeMode == true) {
            formData.append('storeId', self0.store.id);
            var mode = 'store';
        }
        else {
            formData.append('userId', self0.userId);
            var mode = 'users';
        }
        var xhr = new XMLHttpRequest();
        if (self0.storeMode == true) {
            xhr.open("post", __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiUrl + mode + "/avatar/" + self0.store.id);
        }
        else {
            xhr.open("post", __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiUrl + mode + "/avatar/" + self0.userId);
        }
        xhr.setRequestHeader("Authorization", "Bearer " + self0.token);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var ari = xhr.responseText;
                var uri = JSON.parse(ari);
                self0.loading.dismiss();
                if (uri.res == "ERR") {
                    self0.service.logError({}, 'Error al procesar la solicitud. Inténtelo más tarde.');
                }
                else {
                    self0.service.showOk("Foto actualizada con éxito");
                    if (self0.storeMode == true) {
                        self0.userService.getStore(self0.store.id).subscribe(function (result) {
                            console.log('getStore change avatar', result);
                            self0.viewCtrl.dismiss(result.data);
                        }, function (err) {
                            console.log(JSON.stringify(err));
                        });
                    }
                    else {
                        self0.userService.getProfileMe().subscribe(function (result) {
                            console.log('getProfileMe change avatar', result);
                            self0.viewCtrl.dismiss(result.data);
                        }, function (err) {
                            console.log(JSON.stringify(err));
                        });
                    }
                }
            }
        };
        xhr.send(formData);
        /*
        this.b64toBlob(this.base64Image,
        function(blob) {
    
            var url = window.URL.createObjectURL(blob);
    
            var formData = new FormData();
            formData.append('avatar', blob, 'avatar.jpg');
            formData.append('userId', self0.userId);
    
            
            var xhr = new XMLHttpRequest();
            xhr.open("post", environment.apiUrl+"users/avatar");
            xhr.setRequestHeader("Authorization", "Bearer "+self0.token);
    
            xhr.onreadystatechange = function () {
    
              if(xhr.readyState === 4 && xhr.status === 200) {
                var uri = xhr.responseText;
                self0.loading.dismiss();
    
                if (uri.indexOf('error') > -1) {
                  self0.service.logError({}, 'Error al procesar la solicitud. Inténtelo más tarde.');
                }
                else {
                  self0.service.showOk("Foto actualizada con éxito");
    
                  self0.userService.getProfile().subscribe(
                    (result)=>{
                      result.avatar = uri.url;
                      self0.storage.set("MP-Profile", result);
                      self0.viewCtrl.dismiss(true);
                    },
                    err => {
                      console.log(JSON.stringify(err));
                    }
                  );
                }
              }
              
    
              
            };
    
            xhr.send(formData);
    
        }, function(error) {
            console.log('error',error);
        });
        */
    };
    ProfileMedia.prototype.b64toBlob = function (b64, onsuccess, onerror) {
        var img = new Image();
        img.onerror = onerror;
        img.onload = function onload() {
            var canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            canvas.toBlob(onsuccess);
        };
        img.src = b64;
    };
    return ProfileMedia;
}());
ProfileMedia = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profile-media',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\popovers\profile-media\profile-media.html"*/'<ion-list radio-group class="popover-page">\n\n  <div class="close buttonPinkOrange" (click)="close()">\n\n    <ion-icon name="close"></ion-icon>\n\n  </div>\n\n  <ion-item (click)="takePicture()">\n\n    <ion-label>{{ \'POPOVER_PET_MEDIA_OPTIONS.TAKE_PICTURE\' | translate }}</ion-label>\n\n    <ion-note item-right>\n\n      <ion-icon name="camera"></ion-icon>\n\n    </ion-note>\n\n  </ion-item>\n\n  <ion-item (click)="openGallery()">\n\n    <ion-label>{{ \'POPOVER_PET_MEDIA_OPTIONS.CHOOSE_FROM_ALBUM\' | translate }}</ion-label>\n\n    <ion-note item-right>\n\n      <ion-icon name="folder-open"></ion-icon>\n\n    </ion-note>\n\n  </ion-item>\n\n  <!--\n\n  <ion-item>\n\n    <ion-label>{{ \'POPOVER_PET_MEDIA_OPTIONS.SET_AS_MAIN\' | translate }}</ion-label>\n\n    <ion-note item-right>\n\n      <span class="icon-principal"></span>\n\n    </ion-note>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>{{ \'POPOVER_PET_MEDIA_OPTIONS.DELETE_PICTURE\' | translate }}</ion-label>\n\n    <ion-note item-right>\n\n      <span class="icon-eliminar"></span>\n\n    </ion-note>\n\n  </ion-item>\n\n  -->\n\n\n\n</ion-list>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\popovers\profile-media\profile-media.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["z" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_5__pata__["a" /* Pata */],
        __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], ProfileMedia);

//# sourceMappingURL=profile-media.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categoria; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contacto_contacto__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_store__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_doctor_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var Categoria = (function () {
    function Categoria(navCtrl, navParams, doctorService, geolocation, gMaps, toastCtrl, popoverCtrl, http, storage, launchNavigator) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.doctorService = doctorService;
        this.geolocation = geolocation;
        this.gMaps = gMaps;
        this.toastCtrl = toastCtrl;
        this.popoverCtrl = popoverCtrl;
        this.http = http;
        this.storage = storage;
        this.launchNavigator = launchNavigator;
        this.isLoading = true;
        this.title = '';
        this.stores = [];
        this.searchActive = false;
        this.isSearching = false;
        this.isSearchingLoad = false;
        this.search = '';
        this.searchStores = [];
        this.searchProducts = [];
        this.searchServices = [];
        this.lat = 0;
        this.lng = 0;
        this.categ = this.navParams.get("categ");
        if (!this.categ.hasOwnProperty("id")) {
            this.doctorService.getCategInfo(this.categ).subscribe(function (data) {
                _this.categ = data.data;
                _this.refreshCateg();
            });
        }
        else {
            this.refreshCateg();
        }
    }
    Categoria.prototype.refreshCateg = function () {
        var _this = this;
        this.title = this.categ.name;
        this.doctorService.getStores(this.categ.id).subscribe(function (data) {
            _this.isLoading = false;
            _this.stores = data.data;
        });
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.lat = resp.coords.latitude;
            _this.lng = resp.coords.longitude;
        }).catch(function (error) {
        });
    };
    Categoria.prototype.goToStore = function (store) {
        this.doctorService.addQty(store.id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_home_store__["a" /* Store */], { store: store });
    };
    Categoria.prototype.goContacto = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_contacto_contacto__["a" /* Contacto */]);
    };
    Categoria.prototype.showDistance = function (lat1, lon1, lat2, lon2) {
        var dif = this.calcCrow(lat1, lon1, lat2, lon2);
        if (dif < 1) {
            return Math.round(dif * 1000) + " mts";
        }
        else {
            return (Math.round(dif * 10) / 10) + " kms";
        }
    };
    Categoria.prototype.calcCrow = function (lat1, lon1, lat2, lon2) {
        var R = 6371;
        var dLat = this.toRad(lat2 - lat1);
        var dLon = this.toRad(lon2 - lon1);
        var lat1 = this.toRad(lat1);
        var lat2 = this.toRad(lat2);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d;
    };
    Categoria.prototype.toRad = function (Value) {
        return Value * Math.PI / 180;
    };
    Categoria.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.isLoading = true;
        this.doctorService.getStores(this.categ.id).subscribe(function (data) {
            _this.isLoading = false;
            _this.stores = data.data;
            refresher.complete();
        });
    };
    Categoria.prototype.verStore = function (store) {
        this.searchActive = false;
        this.onClear(false);
        this.searchStores = [];
        this.searchProducts = [];
        this.searchServices = [];
        this.search = '';
        this.isSearching = false;
        this.doctorService.addQty(store.id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_home_store__["a" /* Store */], { store: store });
    };
    Categoria.prototype.showMap = function (selStore) {
        var options = {
            destinationName: selStore.name,
            start: [parseFloat(selStore.lat), parseFloat(selStore.lng)]
        };
        this.launchNavigator.navigate([parseFloat(selStore.lat), parseFloat(selStore.lng)], options);
    };
    Categoria.prototype.onSearch = function (ev) {
        var _this = this;
        var val = ev.target.value;
        if (val && val.length > 2) {
            this.isSearching = true;
            this.isSearchingLoad = true;
            this.searchAction = this.doctorService.buscar(val, this.categ.id);
            this.searchAction.subscribe(function (data) {
                _this.isSearchingLoad = false;
                _this.searchStores = data.stores;
                _this.searchProducts = data.products;
                _this.searchServices = data.services;
            });
        }
        else {
            this.isSearching = false;
            this.isSearchingLoad = false;
            this.searchStores = [];
            this.searchProducts = [];
            this.searchServices = [];
        }
    };
    Categoria.prototype.onClear = function (ev) {
        this.isSearching = false;
        this.isSearchingLoad = false;
        this.searchStores = [];
        this.searchProducts = [];
        this.searchServices = [];
    };
    Categoria.prototype.toggleSearch = function () {
        if (this.searchActive) {
            this.searchActive = false;
            this.onClear(false);
            this.searchStores = [];
            this.searchProducts = [];
            this.searchServices = [];
            this.search = '';
            this.isSearching = false;
        }
        else {
            this.searchActive = true;
        }
        this.content.resize();
    };
    return Categoria;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]) === "function" && _a || Object)
], Categoria.prototype, "content", void 0);
Categoria = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-categoria',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\home\categoria.html"*/'<!--\n\n  Generated template for the MyPetsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title class="no-padding">{{title}}</ion-title>\n\n    <ion-buttons end>\n\n      <button class="search-top" ion-button icon-only (click)="toggleSearch()">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar class="searchbar" *ngIf="searchActive">\n\n      <ion-searchbar (ionClear)="onClear($event)" (ionInput)="onSearch($event)" [(ngModel)]="search" placeholder="Tiendas, productos y servicios en {{title}}"></ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n<div *ngIf="isSearching" class="search-container">\n\n  <div *ngIf="isSearchingLoad">\n\n    <div text-center>\n\n      <ion-spinner></ion-spinner>\n\n      <br /><br />\n\n      <strong>Buscando</strong><br />\n\n      &quot;{{search}}&quot;\n\n    </div>\n\n  </div>\n\n  <div *ngIf="!isSearchingLoad">\n\n    <div *ngIf="searchStores.length == 0 && searchProducts.length == 0 && searchServices.length == 0 && !isSearchingLoad" text-center>\n\n      <ion-icon name="hand"></ion-icon>\n\n      <br />\n\n      <strong>No se encontraron resultados</strong><br />\n\n      &quot;{{search}}&quot;\n\n    </div>\n\n\n\n    <div class="search-results" *ngIf="(searchStores.length > 0 || searchProducts.length > 0 || searchServices.length > 0) && !isSearchingLoad">\n\n\n\n      <ion-list>\n\n        <ion-list-header *ngIf="searchStores.length > 0">\n\n          Tiendas ({{searchStores.length}})\n\n        </ion-list-header>\n\n\n\n        <ion-item *ngFor="let result of searchStores" (click)="goToStore(result);">\n\n          <ion-row>\n\n            <ion-col col-4>\n\n              <div class="media_x" [style.background-image]="\'url(\' + (result.avatar != \'\' && result.avatar != null ? result.avatar : \'assets/img/default/store.png\' ) + \')\'" style="background-size: cover;"></div>\n\n            </ion-col>\n\n            <ion-col col-8>\n\n                <strong>{{result.name}}</strong>\n\n                {{result.address}} {{(result.local != "" ? "Loc. "+result.local : "")}}\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n\n\n        <ion-list-header *ngIf="searchProducts.length > 0">\n\n          Productos ({{searchProducts.length}})\n\n        </ion-list-header>\n\n\n\n        <ion-item *ngFor="let result of searchProducts" (click)="goToStore(result.store);">\n\n          <ion-row>\n\n            <ion-col col-4>\n\n              <div class="media_x" [style.background-image]="\'url(\' + (result.avatar != \'\' && result.avatar != null ? result.avatar : \'assets/img/default/store.png\' ) + \')\'" style="background-size: cover;"></div>\n\n            </ion-col>\n\n            <ion-col col-8>\n\n                <strong>{{result.name}}</strong>\n\n                <strong *ngIf="result.price != 0">$ {{result.price | number:\'1.0-0\' }}</strong>\n\n                Encontrado en <b>{{result.store.name}}</b>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n\n\n        <ion-list-header *ngIf="searchServices.length > 0">\n\n          Servicios ({{searchServices.length}})\n\n        </ion-list-header>\n\n\n\n        <ion-item *ngFor="let result of searchServices" (click)="goToStore(result.store);">\n\n          <ion-row>\n\n            <ion-col col-4>\n\n              <div class="media_x" [style.background-image]="\'url(\' + (result.avatar != \'\' && result.avatar != null ? result.avatar : \'assets/img/default/store.png\' ) + \')\'" style="background-size: cover;"></div>\n\n            </ion-col>\n\n            <ion-col col-8>\n\n                <strong>{{result.name}}</strong>\n\n                <strong *ngIf="result.price != 0">$ {{result.price | number:\'1.0-0\' }}</strong>\n\n                Encontrado en <b>{{result.store.name}}</b>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n\n\n\n\n    </div>\n\n  </div>\n\n</div>\n\n\n\n<div *ngIf="searchActive && !isSearching" class="search-container2" text-center>\n\n      <ion-icon name="search"></ion-icon>\n\n      <br />\n\n      <strong>Comienza a escribir para<br />buscar tiendas, productos o servicios<br />en {{title}}</strong><br />\n\n      <br />\n\n</div>\n\n\n\n\n\n<ion-refresher (ionRefresh)="doRefresh($event)"  *ngIf="!isSearching">\n\n  <ion-refresher-content pullingText="actualizar..." refreshingText="actualizando..."></ion-refresher-content>\n\n</ion-refresher>\n\n\n\n<div *ngIf="isLoading" class="pd20">\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n          <div class="background-masker news-icon2"></div>\n\n         </div>\n\n      </div>\n\n  </div>\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n          <div class="background-masker news-icon2"></div>\n\n         </div>\n\n      </div>\n\n  </div>\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n          <div class="background-masker news-icon2"></div>\n\n         </div>\n\n      </div>\n\n  </div>\n\n</div>\n\n\n\n<div *ngIf="!isLoading && !searchActive">\n\n\n\n  <ion-list class="list-store pd20">\n\n    <ion-item *ngFor="let store of stores" (click)="verStore(store)" text-wrap>\n\n      <ion-avatar item-start>\n\n        <img src="{{store.avatar != \'\' ? store.avatar : \'assets/img/default/store.png\'}}" />\n\n      </ion-avatar>\n\n      <ion-row>\n\n        <ion-col col-9>\n\n          <h2>{{store.name}}</h2>\n\n          <h3>{{store.address}} {{(store.local != "" ? "Loc. "+store.local : "")}}</h3>\n\n          <!--<p>I\'ve had a pretty messed up day. If we just...</p>-->\n\n        </ion-col>\n\n        <ion-col col-3 text-center class="mts">\n\n          <div *ngIf="store.lat != \'\' && store.lng != \'\'">\n\n            <div><img src="assets/img/map-location.png" (click)="showMap(store)" /></div>\n\n            <div *ngIf="lat != 0 && lng != 0">\n\n            <strong>{{showDistance(lat,lng,store.lat,store.lng)}}</strong>\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-list>\n\n</div>\n\n\n\n<ion-card *ngIf="!isLoading && stores.length == 0">\n\n  <ion-card-header class="no-items">\n\n    <ion-icon name="pricetag"></ion-icon>\n\n    <br />\n\n    No tenemos tiendas en <br />\n\n    <strong>{{title}}</strong>\n\n  </ion-card-header>\n\n  <ion-list>\n\n    <button ion-item (click)="goContacto()">\n\n      <b>¿Como puedo aparecer aquí?</b>\n\n      <ion-icon name="arrow-forward" item-end></ion-icon>\n\n    </button>\n\n  </ion-list>  \n\n</ion-card>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\home\categoria.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__services_doctor_service__["a" /* DoctorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_doctor_service__["a" /* DoctorService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* GoogleMapsAPIWrapper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* GoogleMapsAPIWrapper */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* PopoverController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__["a" /* LaunchNavigator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__["a" /* LaunchNavigator */]) === "function" && _l || Object])
], Categoria);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=categoria.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contacto; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pata__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_date_picker__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Contacto = (function () {
    function Contacto(navCtrl, storage, navParams, popoverCtrl, loadingCtrl, service, userService, authService, datePicker, modalCtrl, datePipe) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        this.userService = userService;
        this.authService = authService;
        this.datePicker = datePicker;
        this.modalCtrl = modalCtrl;
        this.datePipe = datePipe;
        this.isBlurred = false;
        this.loaded = false;
        this.name = '';
        this.email = '';
        this.message = '';
        this.oread = false;
        this.storage.get("MP-Profile").then(function (data) {
            if (data.id != "0") {
                _this.name = data.first_name;
                _this.email = data.email;
                _this.oread = true;
            }
        });
    }
    Contacto.prototype.send = function () {
        var _this = this;
        if (this.message.length < 4) {
            this.service.logError(null, "Por favor especifique un mensaje más largo");
        }
        else if (this.name.length < 4) {
            this.service.logError(null, "Por favor especifique un nombre más largo");
        }
        else if (this.email.length < 4) {
            this.service.logError(null, "Por favor especifique un email más largo");
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: 'enviando...'
            });
            loading_1.present();
            var sendMessage = this.userService.sendContact({
                name: this.name,
                email: this.email,
                message: this.message
            });
            sendMessage.subscribe(function (ok) {
                loading_1.dismiss();
                if (ok.res == "OK") {
                    _this.service.showOk("Mensaje enviado con éxito");
                    _this.message = '';
                }
                else {
                    _this.service.logError(null, "No fue posible enviar el mensaje, intente nuevamente");
                }
            }, function (error) {
                loading_1.dismiss();
                _this.service.logError(null, "No fue posible enviar el mensaje, intente nuevamente");
            });
        }
    };
    Contacto.prototype.removeBlur = function () {
        this.isBlurred = false;
    };
    Contacto.prototype.gotoHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
    };
    return Contacto;
}());
Contacto = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-contacto',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\contacto\contacto.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>CONTACTO</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content [ngClass]="{\'blurred\' : isBlurred}">\n\n\n\n<div class="formContainer">\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label stacked>Nombre</ion-label>\n\n      <ion-input type="text" [readonly]="oread" [(ngModel)]="name"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Email</ion-label>\n\n      <ion-input type="email" [readonly]="oread" [(ngModel)]="email"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Mensaje</ion-label>\n\n      <ion-textarea [(ngModel)]="message"></ion-textarea>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <div class="buttonWrapper">\n\n    <button (click)="send()" class="buttonPinkOrange" ion-button round>Enviar el mensaje</button>\n\n  </div>\n\n\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\contacto\contacto.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__pata__["a" /* Pata */],
        __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_date_picker__["a" /* DatePicker */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_7__angular_common__["d" /* DatePipe */]])
], Contacto);

//# sourceMappingURL=contacto.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuntaVecinosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_news_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_doctor_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pata__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var JuntaVecinosPage = (function () {
    function JuntaVecinosPage(navCtrl, newsService, loadingCtrl, doctorService, storage, service, sanitizer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.newsService = newsService;
        this.loadingCtrl = loadingCtrl;
        this.doctorService = doctorService;
        this.storage = storage;
        this.service = service;
        this.sanitizer = sanitizer;
        this.sections = [];
        this.headers = [];
        this.active = 0;
        this.section = '';
        this.image = '';
        this.title = '';
        this.oread = false;
        this.isLoading = true;
        this.openTab = 'news';
        this.actionLoaded = false;
        this.wall = []; // news
        this.faqs = []; // faqs
        this.content = '';
        this.contactoForm = false;
        this.denunciaForm = false;
        this.denuncia = { name: '', email: '', message: '' };
        this.contacto = { name: '', email: '', message: '' };
        this.title = 'JUNTA DE VECINOS';
        this.load = this.loadingCtrl.create();
        this.load.present();
        this.newsService.getSections(0).subscribe(function (data) {
            _this.isLoading = false;
            _this.sections = data.data;
            _this.headers = data.headers;
            _this.load.dismiss();
        }, function (error) {
            console.log(error);
        });
        this.storage.get("MP-Profile").then(function (data) {
            if (data.id != '0') {
                _this.oread = true;
                _this.denuncia.name = data.first_name;
                _this.contacto.name = data.first_name;
                _this.denuncia.email = data.email;
                _this.contacto.email = data.email;
            }
        });
    }
    JuntaVecinosPage.prototype.changeActive = function (o) {
        var _this = this;
        this.active = o.id;
        this.section = o.name;
        this.image = o.icon;
        this.title = o.name;
        this.load = this.loadingCtrl.create();
        this.load.present();
        if (o.id == 1) {
            this.doctorService.getWall().subscribe(function (data) {
                _this.wall = data.data;
                _this.load.dismiss();
                _this.actionLoaded = true;
            });
        }
        else if (o.id == 4) {
            this.doctorService.getFaqs(0).subscribe(function (data) {
                _this.faqs = data.data;
                _this.load.dismiss();
                _this.actionLoaded = true;
            });
        }
        else if (o.id == 5) {
            this.actionLoaded = true;
            this.denunciaForm = true;
            this.load.dismiss();
        }
        else if (o.id == 6) {
            this.actionLoaded = true;
            this.contactoForm = true;
            this.load.dismiss();
        }
        else {
            this.doctorService.getContent(o.id).subscribe(function (data) {
                _this.content = data.data;
                _this.load.dismiss();
                _this.actionLoaded = true;
            });
        }
    };
    JuntaVecinosPage.prototype.toggleDetails = function (data) {
        if (data.showDetails) {
            data.showDetails = false;
            data.icon = 'ios-add-circle-outline';
        }
        else {
            data.showDetails = true;
            data.icon = 'ios-remove-circle-outline';
        }
    };
    JuntaVecinosPage.prototype.changeBack = function () {
        this.active = 0;
        this.section = '';
        this.image = '';
        this.title = 'JUNTA DE VECINOS';
        this.actionLoaded = false;
        this.wall = [];
        this.faqs = [];
        this.content = '';
        this.denunciaForm = false;
        this.contactoForm = false;
    };
    JuntaVecinosPage.prototype.sendDenuncia = function () {
        var _this = this;
        if (this.denuncia.message.length < 4) {
            this.service.logError(null, "Por favor especifique un mensaje más largo");
        }
        else if (this.denuncia.name.length < 4) {
            this.service.logError(null, "Por favor especifique un nombre más largo");
        }
        else if (this.denuncia.email.length < 4) {
            this.service.logError(null, "Por favor especifique un email más largo");
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: 'enviando...'
            });
            loading_1.present();
            var sendMessage = this.doctorService.sendDenuncia({
                name: this.denuncia.name,
                email: this.denuncia.email,
                message: this.denuncia.message
            });
            sendMessage.subscribe(function (ok) {
                loading_1.dismiss();
                if (ok.res == "OK") {
                    _this.service.showOk("Mensaje enviado con éxito. Nos contactaremos a la brevedad");
                    _this.denuncia.message = '';
                }
                else {
                    _this.service.logError(null, "No fue posible enviar el mensaje, intente nuevamente");
                }
            }, function (error) {
                loading_1.dismiss();
                _this.service.logError(null, "No fue posible enviar el mensaje, intente nuevamente");
            });
        }
    };
    JuntaVecinosPage.prototype.sendContacto = function () {
        var _this = this;
        if (this.contacto.message.length < 4) {
            this.service.logError(null, "Por favor especifique un mensaje más largo");
        }
        else if (this.contacto.name.length < 4) {
            this.service.logError(null, "Por favor especifique un nombre más largo");
        }
        else if (this.contacto.email.length < 4) {
            this.service.logError(null, "Por favor especifique un email más largo");
        }
        else {
            var loading_2 = this.loadingCtrl.create({
                content: 'enviando...'
            });
            loading_2.present();
            var sendMessage = this.doctorService.sendContacto({
                name: this.contacto.name,
                email: this.contacto.email,
                message: this.contacto.message
            });
            sendMessage.subscribe(function (ok) {
                loading_2.dismiss();
                if (ok.res == "OK") {
                    _this.service.showOk("Mensaje enviado con éxito");
                    _this.contacto.message = '';
                }
                else {
                    _this.service.logError(null, "No fue posible enviar el mensaje, intente nuevamente");
                }
            }, function (error) {
                loading_2.dismiss();
                _this.service.logError(null, "No fue posible enviar el mensaje, intente nuevamente");
            });
        }
    };
    return JuntaVecinosPage;
}());
JuntaVecinosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-juntavecinos',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\juntavecinos\juntavecinos.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{title}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  \n\n  <div *ngIf="!isLoading">\n\n\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-4>\n\n          <img src="assets/img/junta.jpg" />\n\n        </ion-col>\n\n        <ion-col col-8 text-center>\n\n          <h2>{{headers.name}}</h2>\n\n          <p [innerHTML]="sanitizer.bypassSecurityTrustHtml(headers.subtitle)"></p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n    <div *ngIf="active == 0">\n\n      <ion-grid class="grid">\n\n        <ion-row>\n\n          <ion-col col-4 *ngFor="let s of sections">\n\n            <button (click)="changeActive(s)"> <div> <img src="{{s.icon}}" /> <br> <label>{{s.name}}</label> </div> </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n\n\n    <div *ngIf="active != 0">\n\n      <ion-grid class="subheader">\n\n        <ion-row>\n\n          <ion-col col-2>\n\n            <img src="{{image}}" />\n\n          </ion-col>\n\n          <ion-col col-7 text-left>\n\n            <h2>{{section}}</h2>\n\n          </ion-col>\n\n          <ion-col col-3 text-right>\n\n            <div class="buttonWrapper">\n\n              <button (click)="changeBack()" class="buttonPinkOrange" ion-button round>Volver</button>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n      <div *ngIf="actionLoaded">\n\n        <!-- Action 1: Wall -->\n\n        <div class="error-box" *ngIf="active == 1 && wall.length == 0"><h4>No fue posible recuperar las publicaciones. Intente más tarde.</h4></div>\n\n        <news-preview *ngFor="let n of wall" [news]="n"></news-preview>\n\n\n\n        <!-- Contenidos HTML -->\n\n        <div *ngIf="content!=\'\'" class="content-custom" [innerHTML]="sanitizer.bypassSecurityTrustHtml(content)"></div>\n\n        \n\n        <!-- Faqs -->\n\n        <ion-list *ngIf="faqs.length > 0" class="faqs">\n\n          <ion-item padding *ngFor="let d of faqs; let i = index"><ion-icon color="primary" item-right [name]="d.icon" (click)="toggleDetails(d)"></ion-icon>\n\n            {{i + 1}}.- {{d.title}}\n\n            <div *ngIf="d.showDetails" [innerHTML]="sanitizer.bypassSecurityTrustHtml(d.content)"></div>\n\n          </ion-item>\n\n        </ion-list>\n\n\n\n        <!-- Formulario de denuncias -->\n\n        <div class="formContainer" *ngIf="denunciaForm">\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-label stacked>Nombre</ion-label>\n\n              <ion-input type="text" [readonly]="oread" [(ngModel)]="denuncia.name"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked>Email</ion-label>\n\n              <ion-input type="email" [readonly]="oread" [(ngModel)]="denuncia.email"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked>Mensaje</ion-label>\n\n              <ion-textarea autosize [(ngModel)]="denuncia.message"></ion-textarea>\n\n            </ion-item>\n\n          </ion-list>\n\n\n\n          <div class="buttonWrapper">\n\n            <button (click)="sendDenuncia()" class="buttonPinkOrange" ion-button round>Enviar el mensaje</button>\n\n          </div>\n\n\n\n        </div>\n\n        \n\n        <!-- Formulario de contacto -->\n\n        <div class="formContainer" *ngIf="contactoForm">\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-label stacked>Nombre</ion-label>\n\n              <ion-input type="text" [readonly]="oread" [(ngModel)]="contacto.name"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked>Email</ion-label>\n\n              <ion-input type="email" [readonly]="oread" [(ngModel)]="contacto.email"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked>Mensaje</ion-label>\n\n              <ion-textarea autosize [(ngModel)]="contacto.message"></ion-textarea>\n\n            </ion-item>\n\n          </ion-list>\n\n\n\n          <div class="buttonWrapper">\n\n            <button (click)="sendContacto()" class="buttonPinkOrange" ion-button round>Enviar el mensaje</button>\n\n          </div>\n\n\n\n        </div>\n\n\n\n      </div>\n\n    </div>\n\n\n\n  </div>\n\n\n\n  <!--\n\n  <div *ngIf="openTab == \'news\'">\n\n\n\n    <div class="subTitle">{{ \'HOME.NEWS\' | translate }}</div>\n\n    <news-preview *ngFor="let n of news" [news]="n"></news-preview>\n\n\n\n    <div *ngIf="isLoading">\n\n      <div class="timeline-wrapper">\n\n          <div class="timeline-item forceh">\n\n            <div class="animated-background">\n\n              <div class="background-masker news-img"></div>\n\n             </div>\n\n          </div>\n\n          <div class="timeline-item forceh">\n\n            <div class="animated-background">\n\n              <div class="background-masker news-img"></div>\n\n             </div>\n\n          </div>\n\n      </div>\n\n    </div>\n\n \n\n  </div>\n\n  -->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\juntavecinos\juntavecinos.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__services_news_service__["a" /* NewsService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__services_doctor_service__["a" /* DoctorService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_6__pata__["a" /* Pata */],
        __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
], JuntaVecinosPage);

//# sourceMappingURL=juntavecinos.js.map

/***/ }),

/***/ 327:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 327;

/***/ }),

/***/ 369:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 369;

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pata; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_forkJoin__ = __webpack_require__(867);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modals_ok_ok__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modals_err_err__ = __webpack_require__(505);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Pata = (function () {
    function Pata(alertCtrl, storage, http, modalCtrl) {
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.send = [];
        this.backup = [];
    }
    Pata.prototype.logError = function (o, msg, cb) {
        if (!msg) {
            msg = "Ha ocurrido un error, intente nuevamente";
        }
        var errModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__modals_err_err__["a" /* ModalERR */], { msg: msg });
        errModal.present();
        errModal.onDidDismiss(function (data) {
            if (cb) {
                cb();
            }
        });
    };
    Pata.prototype.showMsg = function (msg) {
        var alert = this.alertCtrl.create({
            title: '',
            cssClass: 'alertSuccess',
            subTitle: msg,
            buttons: ['Aceptar']
        });
        alert.present();
    };
    Pata.prototype.showOk = function (msg) {
        if (!msg) {
            msg = "La acción fue realizada exitosamente!";
        }
        var okModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__modals_ok_ok__["a" /* ModalOK */], { msg: msg });
        okModal.present();
    };
    Pata.prototype.headers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.perfil.token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["h" /* RequestOptions */]({ headers: headers });
        return options;
    };
    return Pata;
}());
Pata = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]])
], Pata);

//# sourceMappingURL=pata.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pata__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popovers_profile_media_profile_media__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var Profile = (function () {
    function Profile(navCtrl, storage, navParams, popoverCtrl, loadingCtrl, service, userService, authService, datePicker, modalCtrl, datePipe) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        this.userService = userService;
        this.authService = authService;
        this.datePicker = datePicker;
        this.modalCtrl = modalCtrl;
        this.datePipe = datePipe;
        this.loaded = false;
        this.states = [];
        this.cities = [];
        this.passwd = '';
        this.userService.getProfileMe().subscribe(function (ok) {
            _this.me = ok.data;
            _this.loaded = true;
            if (_this.me.avatar == null && _this.me.avatar == "") {
                _this.me.avatar = "assets/img/default/avatar.png";
            }
            _this.changeAvatar(_this.me.avatar);
            _this.authService.getStates().subscribe(function (data) {
                _this.states = data.data;
            });
            _this.authService.getCities(_this.me.address.state).subscribe(function (data) {
                _this.cities = data.data;
            });
        }, function (err) {
            _this.service.logError(null, "No fue posible recuperar tu perfil. Verifica la disponibilidad de internet");
        });
    }
    Profile.prototype.refreshDistrito = function (e) {
        var _this = this;
        this.authService.getCities(this.me.address.state).subscribe(function (data) {
            _this.cities = data.data;
        });
    };
    Profile.prototype.save = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'guardando...'
        });
        this.loading.present();
        var updateOperation = this.userService.update({
            name: this.me.first_name,
            state: this.me.address.state,
            city: this.me.address.city,
            email: this.me.email,
            phone: this.me.phone,
            passwd: this.passwd
        });
        updateOperation.subscribe(function (ok) {
            _this.loading.dismiss();
            if (ok.res == "OK") {
                _this.service.showOk();
            }
            else {
                _this.service.logError(null, "No fue posible guardar sus datos, intente nuevamente");
            }
        }, function (error) {
            _this.loading.dismiss();
            _this.service.logError(null, "No fue posible guardar sus datos, intente nuevamente");
        });
    };
    Profile.prototype.presentMediaOptionsPopover = function (event) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__popovers_profile_media_profile_media__["a" /* ProfileMedia */]);
        popover.present({
            ev: event
        });
        popover.onDidDismiss(function (change) {
            if (change) {
                _this.me = change;
                if (_this.me.avatar == null || _this.me.avatar == "") {
                    _this.me.avatar = "assets/img/default/avatar.png";
                }
                _this.storage.set("MP-Profile", change);
                _this.changeAvatar(_this.me.avatar);
                _this.loaded = true;
            }
        });
    };
    Profile.prototype.changeAvatar = function (avatar) {
        console.log('change avatar listerner', avatar);
        this.userService.changeAvatar.emit(avatar);
    };
    /** Birthday Date Picker */
    Profile.prototype.openDatepicker = function () {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(function (date) {
            var d = _this.datePipe.transform(date, 'dd/MM/yyyy');
            console.log('Got date: ', d);
            _this.me.birthday = d;
        }, function (err) {
            console.log('Error occurred while getting date: ', err);
        });
    };
    Profile.prototype.formatDate = function (date) {
        return date;
    };
    Profile.prototype.gotoHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
    };
    return Profile;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('datepicker'),
    __metadata("design:type", Object)
], Profile.prototype, "datepicker", void 0);
Profile = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profile',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title class="no-padding">MI PERFIL</ion-title>\n\n    <ion-buttons end>\n\n      <button (click)="presentMediaOptionsPopover($event)" class="buttonPinkOrange camera">\n\n        <ion-icon ios="ios-camera-outline" md="ios-camera-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <div *ngIf="loaded">\n\n    <div class="mediaSlideContainer">\n\n        <div class="media" [style.background-image]="\'url(\' + (me.avatar != \'\' && me.avatar != null ? me.avatar : \'assets/img/default/avatar.png\' ) + \')\'" style="background-size: cover;"></div>\n\n    </div>\n\n    <div class="name">\n\n      {{ me.first_name }}\n\n    </div>\n\n    <div class="welcome">\n\n      Información de mi cuenta\n\n    </div>\n\n\n\n    <div class="formContainer">\n\n      <ion-item>\n\n        <ion-label fixed>Nombre</ion-label>\n\n        <ion-input type="text" [(ngModel)]="me.first_name"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>Email</ion-label>\n\n        <ion-input type="text" [(ngModel)]="me.email"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>Villa</ion-label>\n\n        <ion-select [(ngModel)]="me.address.state" (ionChange)="refreshDistrito($event)">\n\n          <ion-option *ngFor="let state of states" [value]="state.id">{{state.name}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>Sector</ion-label>\n\n        <ion-select [(ngModel)]="me.address.city">\n\n          <ion-option *ngFor="let city of cities" [value]="city.id">{{city.name}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>Telefono</ion-label>\n\n        <ion-input type="tel" [(ngModel)]="me.phone"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>Contraseña</ion-label>\n\n        <ion-input type="password" [(ngModel)]="passwd" placeholder="Crea o modifica tu clave"></ion-input>\n\n      </ion-item>\n\n      <!--\n\n      <ion-item>\n\n        <ion-label fixed>Contraseña</ion-label>\n\n        <ion-label fixed><button (click)="changePassword()" class="buttonPinkOrange" style="top: 7px; left: 124px;" ion-button round>Cambiar</button></ion-label>\n\n      </ion-item>\n\n      -->\n\n      <div class="buttonWrapper">\n\n        <button (click)="save()" class="buttonPinkOrange" ion-button round>{{ \'PET.UPDATE_INFO\' | translate }}</button>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__pata__["a" /* Pata */],
        __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__["a" /* DatePicker */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_8__angular_common__["d" /* DatePipe */]])
], Profile);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalOK; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalOK = (function () {
    function ModalOK(viewCtrl, params, renderer) {
        this.viewCtrl = viewCtrl;
        this.params = params;
        this.renderer = renderer;
        this.msg = params.get('msg');
        //this.renderer.addClass(document.body.querySelector("ng-component.app-root"), 'blur');
    }
    ModalOK.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ModalOK.prototype.ngOnDestroy = function () {
        //this.renderer.removeClass(document.body.querySelector("ng-component.app-root"), 'blur');
    };
    return ModalOK;
}());
ModalOK = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-modalOK',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\modals\ok\ok.html"*/'<ion-content>\n\n	<div class="full"></div>\n\n	<div class="msg">\n\n	<img src="assets/img/checked.png" style="max-width: 25%; padding-bottom: 30px; display: block; margin: auto;">\n\n	{{msg}}\n\n	</div>\n\n	<button class="buttonPinkOrange small" ion-button round  (click)="close()">Aceptar</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\modals\ok\ok.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
], ModalOK);

//# sourceMappingURL=ok.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalERR; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalERR = (function () {
    function ModalERR(viewCtrl, params, renderer) {
        this.viewCtrl = viewCtrl;
        this.params = params;
        this.renderer = renderer;
        this.msg = params.get('msg');
        //this.renderer.addClass(document.body.querySelector("ng-component.app-root"), 'blur');
    }
    ModalERR.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ModalERR.prototype.ngOnDestroy = function () {
        //this.renderer.removeClass(document.body.querySelector("ng-component.app-root"), 'blur');
    };
    return ModalERR;
}());
ModalERR = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-modalERR',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\modals\err\err.html"*/'<ion-content>\n\n	<div class="full"></div>\n\n	<div class="msg">\n\n	<img src="assets/img/unchecked.png" style="max-width: 25%; padding-bottom: 30px; display: block; margin: auto;">\n\n	{{msg}}\n\n	</div>\n\n	<button class="buttonPinkOrange small" ion-button round  (click)="close()">Aceptar</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\modals\err\err.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
], ModalERR);

//# sourceMappingURL=err.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_youtube_video_player__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals_gal_gal__ = __webpack_require__(507);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModalDetail = (function () {
    function ModalDetail(viewCtrl, params, loadingCtrl, renderer, domSanitizer, youtube, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.params = params;
        this.loadingCtrl = loadingCtrl;
        this.renderer = renderer;
        this.domSanitizer = domSanitizer;
        this.youtube = youtube;
        this.modalCtrl = modalCtrl;
        this.detail = params.get('detail');
    }
    ModalDetail.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalDetail.prototype.ionGal = function (indice) {
        if (this.detail.avatar) {
            var arr = [];
            arr.push(this.detail.avatar);
            for (var x = 0; x < this.detail.extras.length; x++) {
                arr.push(this.detail.extras[x].file);
            }
            var galModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modals_gal_gal__["a" /* ModalGal */], { arr: arr, ini: this.slides.getActiveIndex() });
            galModal.present();
            galModal.onDidDismiss(function (data) {
            });
        }
    };
    ModalDetail.prototype.secure = function (url) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    };
    ModalDetail.prototype.secureYoutube = function (videoId) {
        return 'https://www.youtube.com/embed/' + videoId + '?playsinline=1&rel=0&modestbranding=1&showinfo=1&controls=0&autoplay=1&enablejsapi=1';
    };
    ModalDetail.prototype.playVideo = function () {
        this.youtube.openVideo(this.detail.video);
    };
    ModalDetail.prototype.ngOnDestroy = function () {
    };
    return ModalDetail;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Slides */])
], ModalDetail.prototype, "slides", void 0);
ModalDetail = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-modalDetail',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\modals\detail\detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{detail.name}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <!--<div class="media" [style.background-image]="\'url(\' + (detail.avatar != \'\' && detail.avatar != null ? detail.avatar : \'assets/img/default/avatar.png\' ) + \')\'" style="background-size: cover;"></div>-->\n\n    <div class="top">\n\n\n\n      <ion-slides pager (click)="ionGal()">\n\n        <!--\n\n        <ion-slide *ngIf="detail.video!=\'\'">\n\n          <iframe width="100%" height="315" [src]="secure(secureYoutube(detail.video))" frameborder="0" allowfullscreen></iframe>\n\n        </ion-slide>\n\n        imageViewer\n\n        -->\n\n        <ion-slide>\n\n          <img src="{{(detail.avatar != \'\' && detail.avatar != null ? detail.avatar : \'assets/img/default/avatar.png\' )}}" />\n\n        </ion-slide>\n\n        <ion-slide *ngFor="let extra of detail.extras">\n\n          <img src="{{(extra.file != \'\' && extra.file != null ? extra.file : \'assets/img/default/avatar.png\' )}}" />\n\n        </ion-slide>\n\n      </ion-slides>\n\n      \n\n  		<div class="buttonWrapper" *ngIf="detail.video!=\'\'">\n\n  		  <button (click)="playVideo()" class="buttonPinkOrange" ion-button round>Ver video</button>\n\n  		</div>\n\n\n\n    </div>\n\n    <div class="pd20" style="padding-top: 0 !important;">\n\n    \n\n	    <h4>{{detail.name}}</h4>\n\n      <h4 class="offer" *ngIf="detail.offer == \'1\'">Publicación exclusiva App</h4>\n\n	    <h4 text-right *ngIf="detail.price > 0">$ {{detail.price | number:\'1.0-0\'}}</h4>\n\n		  <!--<div text-right>\n\n			<strong>Visto: </strong> {{detail.qty}} veces\n\n		  </div>-->\n\n	    <hr />\n\n	    <p [innerHTML]="detail.description"></p>\n\n\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\modals\detail\detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
        __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]])
], ModalDetail);

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalGal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalGal = (function () {
    function ModalGal(viewCtrl, params, loadingCtrl, renderer, domSanitizer) {
        this.viewCtrl = viewCtrl;
        this.params = params;
        this.loadingCtrl = loadingCtrl;
        this.renderer = renderer;
        this.domSanitizer = domSanitizer;
        this.arr = [];
        this.ini = 0;
        this.arr = params.get('arr');
        this.ini = params.get('ini');
    }
    ModalGal.prototype.ngAfterViewInit = function () {
        //console.log('afv',this.sliders);
    };
    ModalGal.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalGal.prototype.ngOnDestroy = function () {
    };
    ModalGal.prototype.onSwipe = function (event) {
        // left or right swipe...
    };
    ModalGal.prototype.onSwipeUp = function (event) {
        this.viewCtrl.dismiss();
    };
    ModalGal.prototype.onSwipeDown = function (event) {
        this.viewCtrl.dismiss();
    };
    return ModalGal;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Slides */])
], ModalGal.prototype, "slides2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
], ModalGal.prototype, "sliders", void 0);
ModalGal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-modalGal',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\modals\gal\gal.html"*/'<ion-header class="noheader">\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n        <button ion-button icon-only (click)="closeModal()">\n\n            <ion-icon item-right name="ios-close-outline"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content (tap)="closeModal()">\n\n  <ion-slides pager="true" zoom="true" centeredSlides="true" [initialSlide]="ini" swipe-vertical (onSwipeUp)="onSwipeUp($event)" (onSwipeDown)="onSwipeDown($event)">\n\n    <ion-slide *ngFor="let arr of arr">\n\n      <div class="swiper-zoom-container">\n\n        <img src="{{arr}}" />\n\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\modals\gal\gal.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
        __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
], ModalGal);

//# sourceMappingURL=gal.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pata__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, service, loadingCtrl, storage, nativeStorage, auth, alertCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.nativeStorage = nativeStorage;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.login = {
            email: '',
            name: '',
            passwd: ''
        };
        this.android = false;
        this.ios = false;
        this.iosSkip = 0;
        this.welcome0 = true;
        this.welcome1 = false;
        this.login = {
            name: '',
            email: '',
            passwd: ''
        };
        if (this.navParams.get("iosSkip")) {
            this.iosSkip = this.navParams.get("iosSkip");
        }
        if (this.platform.is('ios')) {
            /*this.ios = true;
            this.login.name = 'Anónimo';
            this.login.email = 'noemail@ciudadsatelite.app';
            this.next();
            */
            this.android = true;
            this.iosSkip = 1;
        }
        else {
            this.android = true;
        }
    }
    LoginPage.prototype.volver = function () {
        this.welcome1 = false;
        this.welcome0 = true;
    };
    LoginPage.prototype.initWithoutAccount = function () {
        this.iosSkip = 0;
        this.login.name = 'Anónimo';
        this.login.email = 'noemail@ciudadsatelite.app';
        this.next();
    };
    LoginPage.prototype.next = function () {
        var _this = this;
        var emailRegex = /\S+@\S+\.\S+/;
        if (this.login.name == "") {
            this.service.logError({}, "Por favor ingresa tu nombre");
        }
        else if (this.login.email == "" || !emailRegex.test(this.login.email)) {
            this.service.logError({}, "Email no puede estar vacío o es incorrecto");
        }
        else {
            this.loading = this.loadingCtrl.create();
            this.loading.present();
            console.log('login start');
            this.auth.login(this.login).subscribe(function (data) {
                _this.auth.loginOk.emit(data);
                _this.loading.dismiss();
                if (data.res == "OK") {
                    _this.nativeStorage.setItem("token", data.token);
                    _this.auth.setToken(data.token);
                    _this.storage.set("MP-Profile", data.profile);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                }
                else if (data.res == "PASSWD") {
                    _this.welcome0 = false;
                    _this.welcome1 = true;
                }
                else {
                    _this.service.logError({}, data.msg);
                }
            }, function (err) {
                _this.loading.dismiss();
                _this.service.logError({});
            });
        }
    };
    LoginPage.prototype.recoverPassword = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Reinicio de clave',
            message: 'Enviaremos una nueva clave a tu email ' + this.login.email + ', ¿deseas continuar?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Confirmar',
                    handler: function () {
                        _this.auth.requestPassword(_this.login.email).subscribe(function (data) {
                            if (data.res == "ERR") {
                                _this.service.logError({}, "Clave no puede estar vacío");
                            }
                            else {
                                _this.service.showOk("Hemos enviado una nueva clave a tu correo " + _this.login.email);
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    LoginPage.prototype.withPassword = function () {
        var _this = this;
        if (this.login.passwd == "") {
            this.service.logError({}, "Clave no puede estar vacío");
        }
        else {
            this.loading = this.loadingCtrl.create();
            this.loading.present();
            this.auth.login(this.login).subscribe(function (data) {
                _this.auth.loginOk.emit(data);
                _this.loading.dismiss();
                if (data.res == "OK") {
                    _this.nativeStorage.setItem("token", data.token);
                    _this.auth.setToken(data.token);
                    _this.storage.set("MP-Profile", data.profile);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                }
                else {
                    _this.service.logError({}, data.msg);
                }
            }, function (err) {
                _this.loading.dismiss();
                _this.service.logError({});
            });
        }
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content scrollX="false" scrollY="false" scroll="false" class="noscroll">\n\n	<ion-scroll scrollX="false" scrollY="true">\n\n	  <img class="logo" src="assets/img/logo.png" alt="">\n\n	  <div *ngIf="welcome0 && ios">\n\n		<div class="welcome">Bienvenido</div>\n\n	  </div>\n\n	  <div *ngIf="(welcome0 && android) || (welcome0 || iosSkip == 1) && !welcome1">\n\n		  <div class="welcome">Bienvenido</div>\n\n		  <div class="listWrapper" scroll="false">\n\n		    <ion-list>\n\n		      <ion-item>\n\n		      	<ion-label floating>Tu nombre y apellido</ion-label>\n\n		        <ion-input type="email" [(ngModel)]="login.name" placeholder=""></ion-input>\n\n		      </ion-item>\n\n		      <ion-item>\n\n		      	<ion-label floating>Tu email</ion-label>\n\n		        <ion-input type="text" [(ngModel)]="login.email" placeholder=""></ion-input>\n\n		      </ion-item>\n\n		    </ion-list>\n\n		  </div>\n\n		  <div class="buttonWrapper">\n\n		    <button class="buttonPinkOrange" ion-button round full (click)="next()">Continuar con mi email</button>\n\n		  </div>\n\n		  <button ion-button color="dark" class="forceDark" (click)="initWithoutAccount()" *ngIf="iosSkip == 1">Continuar como invitado</button>\n\n	  </div>\n\n	  <div *ngIf="welcome1">\n\n		  <div class="welcome">Ingrese clave de acceso</div>\n\n		  <p>Esta cuenta está protegida por contraseña.</p>\n\n		  <div class="listWrapper" scroll="false">\n\n		    <ion-list>\n\n		      <ion-item>\n\n		      	<ion-label floating>Tu clave</ion-label>\n\n		        <ion-input type="password" [(ngModel)]="login.passwd" text-center></ion-input>\n\n		      </ion-item>\n\n		    </ion-list>\n\n		  </div>\n\n		  <div class="buttonWrapper">\n\n		    <button class="buttonPinkOrange" ion-button round full (click)="withPassword()">Iniciar sesión</button>\n\n		  </div>\n\n		  <br />\n\n		  <ion-grid>\n\n			<ion-row>\n\n				<ion-col col-6>\n\n					<button ion-button color="dark" class="forceDark" (click)="volver()">Volver</button>\n\n				</ion-col>\n\n				<ion-col col-6>\n\n					<button ion-button color="dark" class="forceDark" (click)="recoverPassword()">Recuperar clave</button>\n\n				</ion-col>\n\n			</ion-row>\n\n		  </ion-grid>\n\n		  \n\n	  </div>\n\n\n\n	</ion-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__pata__["a" /* Pata */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Emergencia; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_news_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_doctor_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pata__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Emergencia = (function () {
    function Emergencia(navCtrl, newsService, loadingCtrl, doctorService, storage, service, sanitizer, callNumber) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.newsService = newsService;
        this.loadingCtrl = loadingCtrl;
        this.doctorService = doctorService;
        this.storage = storage;
        this.service = service;
        this.sanitizer = sanitizer;
        this.callNumber = callNumber;
        this.sections = [];
        this.isLoading = true;
        this.openTab = 'news';
        this.actionLoaded = false;
        this.load = this.loadingCtrl.create();
        this.load.present();
        this.newsService.getPhones().subscribe(function (data) {
            _this.isLoading = false;
            _this.sections = data;
            _this.load.dismiss();
        }, function (error) {
            console.log(error);
        });
    }
    Emergencia.prototype.callToNumber = function (s) {
        this.callNumber.callNumber(s.content, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    return Emergencia;
}());
Emergencia = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-emergencia',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\emergencia\emergencia.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Números Útiles</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content> \n\n  <div *ngIf="!isLoading">\n\n    <ion-item-group *ngFor="let s of sections">\n\n      <ion-item-divider> {{s.title}} </ion-item-divider>\n\n      <ion-item *ngFor="let x of s.subs" (click)="callToNumber(x.number)">\n\n        <ion-icon name="call" item-start></ion-icon>\n\n        {{x.title}}\n\n      </ion-item>\n\n    </ion-item-group>\n\n    <!--\n\n    <ion-grid class="grid">\n\n      <ion-row>\n\n        <ion-col col-4 *ngFor="let s of sections">\n\n          <button (click)="callToNumber(s)"> <div> <img src="{{s.icon}}" /> <br> <label>{{s.name}}</label> </div> </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    -->\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\emergencia\emergencia.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__services_news_service__["a" /* NewsService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__services_doctor_service__["a" /* DoctorService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_6__pata__["a" /* Pata */],
        __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__["a" /* CallNumber */]])
], Emergencia);

//# sourceMappingURL=emergencia.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mapa; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_store__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_doctor_service__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Mapa = (function () {
    function Mapa(navCtrl, navParams, doctorService, geolocation, gMaps, toastCtrl, loadingCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.doctorService = doctorService;
        this.geolocation = geolocation;
        this.gMaps = gMaps;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.lat = -12.1215155;
        this.lng = -77.0376026;
        this.styles = [{ "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#6195a0" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [{ "color": "#e7e5e3" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#e6f3d6" }, { "visibility": "on" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": "-100" }, { "lightness": 45 }, { "visibility": "simplified" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#e3d6c7" }, { "visibility": "simplified" }] }, { "featureType": "road.highway", "elementType": "labels.text", "stylers": [{ "color": "#4e4e4e" }] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#f4f4f4" }] }, { "featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [{ "color": "#787878" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#eaf6f8" }, { "visibility": "on" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#eaf6f8" }] }];
        this.list = [];
        this.buscando = [];
        this.buscar = '';
        this.secureSearch = '';
        this.activo = null;
        this.verDetalle = false;
        this.isGps = 0;
        this.lat = -33.5596087;
        this.lng = -70.7867947;
        this.isGps = 0;
        this.gotome();
        this.load = this.loadingCtrl.create();
        this.load.present();
        this.doctorService.getMaps().subscribe(function (data) {
            _this.list = data.data;
            for (var i = 0; i < _this.list.length; i++) {
                _this.list[i].lat = parseFloat(_this.list[i].lat);
                _this.list[i].lng = parseFloat(_this.list[i].lng);
                if (_this.list[i].icon == '') {
                    _this.list[i].icon = "assets/img/marker.png";
                }
            }
            _this.load.dismiss();
        });
    }
    Mapa.prototype.clearBuscar = function () {
        this.buscando = [];
        this.lat = -33.5596087;
        this.lng = -70.7867947;
        this.buscar = '';
    };
    Mapa.prototype.gotome = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.lat = resp.coords.latitude;
            _this.lng = resp.coords.longitude;
            _this.isGps = 1;
            console.log('Gps OK');
            //const position = new google.maps.LatLng(this.lat, this.lng);
            //this.map.panTo(position);
        }).catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: 'No podemos activar tu GPS, te hemos puesto en una ubicación central',
                duration: 3500,
                position: 'bottom',
                showCloseButton: true,
                closeButtonText: 'OK'
            });
            toast.present();
            console.log('Gps Fail');
        });
    };
    Mapa.prototype.search = function (event) {
        console.log(event.target.value);
    };
    Mapa.prototype.mapclick = function (obj) {
        this.activo = obj;
        this.verDetalle = true;
    };
    Mapa.prototype.gotoPlace = function (o) {
        var _this = this;
        this.buscando = [];
        this.buscar = o.description;
        console.log(o);
        this.http.get("http://www.enlanube.cl/apis/mipata.php?site=" + o.reference).subscribe(function (data) {
            _this.lat = data.result.geometry.location.lat;
            _this.lng = data.result.geometry.location.lng;
        });
    };
    Mapa.prototype.close = function () {
        this.verDetalle = false;
    };
    Mapa.prototype.moveTo = function (buscar) {
        var _this = this;
        this.secureSearch = buscar; // not used
        if (buscar.length > 2) {
            this.http.get("http://www.enlanube.cl/apis/mipata.php?buscar=" + buscar).subscribe(function (data) {
                if (data.predictions) {
                    _this.buscando = data.predictions;
                }
            });
        }
        else {
            this.buscando = [];
        }
        // console.log('MOVETO:' + buscar);
        // TODO: como no se conoce reply de API, se debe iterar los nombres, y mover el centro del mapa a esa coordenada.
        // mover con:
        /*setTimeout(() => {
    
            if (this.secureSearch == this.buscar) {
                this.secureSearch = '';
    
                let toast = this.toastCtrl.create({
                    message: 'No hay resultados para '+buscar,
                    duration: 1500,
                    position: 'bottom',
                    showCloseButton: true,
                    closeButtonText: 'OK'
                });
    
                toast.onDidDismiss(() => {
    
                });
    
                toast.present();
            }
    
        },1500);*/
    };
    Mapa.prototype.showDistance = function (lat1, lon1, lat2, lon2) {
        var dif = this.calcCrow(lat1, lon1, lat2, lon2);
        if (dif < 1) {
            return Math.round(dif * 1000) + " mts";
        }
        else {
            return (Math.round(dif * 10) / 10) + " kms";
        }
    };
    Mapa.prototype.calcCrow = function (lat1, lon1, lat2, lon2) {
        var R = 6371;
        var dLat = this.toRad(lat2 - lat1);
        var dLon = this.toRad(lon2 - lon1);
        var lat1 = this.toRad(lat1);
        var lat2 = this.toRad(lat2);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d;
    };
    Mapa.prototype.toRad = function (Value) {
        return Value * Math.PI / 180;
    };
    Mapa.prototype.vermas = function (obj) {
        /*this.navCtrl.push(Clinic, {
          clinic: obj
        });*/
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_home_store__["a" /* Store */], {
            store: obj
        });
    };
    Mapa.prototype.loadAPIWrapper = function (map) {
        this.map = map;
    };
    return Mapa;
}());
Mapa = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-mapa',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\mapa\mapa.html"*/'<!--\n\n  Generated template for the MyPetsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>MAPA</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <!--\n\n  <ion-card class="overcard">\n\n    <ion-label> <ion-icon (click)="clearBuscar()" name="close"></ion-icon></ion-label>\n\n    <ion-item>\n\n      <ion-input (keyup)=moveTo(buscar) [(ngModel)]="buscar" type="text" placeholder="Buscar..."></ion-input>\n\n    </ion-item>\n\n  </ion-card>\n\n  \n\n  <div class="search_result" *ngIf="buscando.length > 0">\n\n    <ion-scroll>\n\n    <ul>\n\n      <li *ngFor="let b of buscando" (click)="gotoPlace(b)"><img src="assets/img/chevron.png" />&nbsp;&nbsp;{{b.description}}</li>\n\n    </ul>\n\n    </ion-scroll>\n\n  </div>\n\n  -->\n\n\n\n  <div class="findme" (click)="gotome()">\n\n    <img src="assets/img/find.png" />\n\n  </div>\n\n\n\n  <agm-map [latitude]="lat" [longitude]="lng" [styles]="styles" [zoom]="16" [zoomControl]="false" [streetViewControl]="false" (onMapLoad)=\'loadAPIWrapper($event)\'>\n\n    <agm-marker *ngFor="let pos of list" (markerClick)="mapclick(pos)" [iconUrl]="pos.icon" [latitude]="pos.lat" [longitude]="pos.lng">\n\n    </agm-marker>\n\n  </agm-map>\n\n  <!--\n\n  <agm-map *ngFor="let pos of list" [latitude]="lat" [longitude]="lng" [styles]="styles" [zoom]="15" [zoomControl]="false" [streetViewControl]="false" (onMapLoad)=\'loadAPIWrapper($event)\'>\n\n    <agm-marker (markerClick)="mapclick(pos)" [iconUrl]="pos.icon" [latitude]="pos.lat" [longitude]="pos.lng">\n\n    </agm-marker>\n\n  </agm-map>\n\n  -->\n\n  <div class="info_vet" *ngIf="verDetalle">\n\n\n\n    <div class="buttonWrapper">\n\n      <button class="buttonPinkOrange" (click)="vermas(activo)" ion-button round>Más información</button>\n\n    </div>\n\n\n\n    <div class="close" (click)="close()">\n\n      <ion-icon name="close"></ion-icon>\n\n    </div>\n\n\n\n    <div class="box">\n\n      <b>{{activo.name}}</b>\n\n      <div *ngIf="isGps == 1">\n\n      <small>A {{showDistance(lat,lng,activo.lat,activo.lng)}} de tu ubicación actual</small>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\mapa\mapa.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__services_doctor_service__["a" /* DoctorService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* GoogleMapsAPIWrapper */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
], Mapa);

//# sourceMappingURL=mapa.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreProfile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pata__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popovers_profile_media_profile_media__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var StoreProfile = (function () {
    function StoreProfile(navCtrl, storage, navParams, popoverCtrl, loadingCtrl, service, userService, authService, datePicker, modalCtrl, datePipe) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        this.userService = userService;
        this.authService = authService;
        this.datePicker = datePicker;
        this.modalCtrl = modalCtrl;
        this.datePipe = datePipe;
        this.loaded = false;
        this.states = [];
        this.cities = [];
        this.tabs = 'home';
        var loading = this.loadingCtrl.create({
            content: 'cargando...'
        });
        loading.present();
        this.store = this.navParams.get("store");
        this.userService.getStore(this.store.id).subscribe(function (ok) {
            _this.store = ok.data;
            _this.timers = ok.timers;
            _this.main = ok.main;
            _this.loaded = true;
            if (_this.store.avatar == null && _this.store.avatar == "") {
                _this.store.avatar = "assets/img/default/avatar.png";
            }
            //this.changeAvatar(this.store.avatar);
            _this.authService.getStates().subscribe(function (data) {
                _this.states = data.data;
            });
            _this.authService.getCities(_this.main.state).subscribe(function (data) {
                _this.cities = data.data;
            });
            loading.dismiss();
        }, function (err) {
            _this.service.logError(null, "No fue posible recuperar perfil de tienda. Verifica la disponibilidad de internet");
        });
    }
    StoreProfile.prototype.mainCreditCardToggle = function () {
        if (this.main.credit_card == '1') {
            this.main.credit_card = '0';
        }
        else {
            this.main.credit_card = '1';
        }
    };
    StoreProfile.prototype.mainCreditCardDeliveryToggle = function () {
        if (this.main.credit_card_delivery == '1') {
            this.main.credit_card_delivery = '0';
        }
        else {
            this.main.credit_card_delivery = '1';
        }
    };
    StoreProfile.prototype.mainDeliveryToggle = function () {
        if (this.main.delivery == '1') {
            this.main.delivery = '0';
        }
        else {
            this.main.delivery = '1';
        }
    };
    StoreProfile.prototype.refreshDistrito = function (e) {
        var _this = this;
        this.authService.getCities(this.store.state).subscribe(function (data) {
            _this.cities = data.data;
        });
    };
    StoreProfile.prototype.save = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'guardando...'
        });
        loading.present();
        var updateOperation = this.userService.updateStore({
            name: this.store.name,
            email: this.store.email,
            phone: this.store.phone,
            facebook: this.store.facebook,
            instagram: this.store.instagram,
            whatsapp: this.store.whatsapp,
            twitter: this.store.twitter,
            website: this.store.website,
            timers: JSON.stringify(this.timers),
            main: JSON.stringify(this.main)
        }, this.store.id);
        updateOperation.subscribe(function (ok) {
            loading.dismiss();
            if (ok.res == "OK") {
                _this.service.showOk();
            }
            else {
                loading.dismiss();
                _this.service.logError(null, "No fue posible guardar sus datos, intente nuevamente");
            }
        }, function (error) {
            loading.dismiss();
            _this.service.logError(null, "No fue posible guardar sus datos, intente nuevamente");
        });
    };
    StoreProfile.prototype.presentMediaOptionsPopover = function (event) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__popovers_profile_media_profile_media__["a" /* ProfileMedia */], { store: this.store });
        popover.present({
            ev: event
        });
        popover.onDidDismiss(function (change) {
            if (change) {
                _this.store = change;
                if (_this.store.avatar == null || _this.store.avatar == "") {
                    _this.store.avatar = "assets/img/default/avatar.png";
                }
                _this.changeStoreAvatar(_this.store.avatar);
                _this.loaded = true;
            }
        });
    };
    StoreProfile.prototype.changeStoreAvatar = function (avatar) {
        this.userService.changeStoreAvatar.emit(avatar);
    };
    /** Birthday Date Picker */
    StoreProfile.prototype.openDatepicker = function () {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(function (date) {
            var d = _this.datePipe.transform(date, 'dd/MM/yyyy');
            console.log('Got date: ', d);
            _this.store.birthday = d;
        }, function (err) {
            console.log('Error occurred while getting date: ', err);
        });
    };
    StoreProfile.prototype.formatDate = function (date) {
        return date;
    };
    StoreProfile.prototype.gotoHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
    };
    return StoreProfile;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('datepicker'),
    __metadata("design:type", Object)
], StoreProfile.prototype, "datepicker", void 0);
StoreProfile = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-storeprofile',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\storeprofile\storeprofile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title class="no-padding">PERFIL TIENDA</ion-title>\n\n    <ion-buttons end>\n\n      <button (click)="presentMediaOptionsPopover($event)" class="buttonPinkOrange camera">\n\n        <ion-icon ios="ios-camera-outline" md="ios-camera-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <div *ngIf="loaded">\n\n    <div class="mediaSlideContainer">\n\n        <div class="media" [style.background-image]="\'url(\' + (store.avatar != \'\' && store.avatar != null ? store.avatar : \'assets/img/default/avatar.png\' ) + \')\'" style="background-size: cover;"></div>\n\n    </div>\n\n    <div class="name">\n\n      {{ store.name }}\n\n      <button (click)="save()" class="buttonPinkOrange" ion-button round>Guardar</button>\n\n    </div>\n\n    <!--<div class="welcome">\n\n      Información de mi tienda\n\n    </div>-->\n\n    <div padding>\n\n      <ion-segment [(ngModel)]="tabs">\n\n        <ion-segment-button value="home">\n\n          Tienda\n\n        </ion-segment-button>\n\n        <ion-segment-button value="sucursal">\n\n          Ubicación\n\n        </ion-segment-button>\n\n        <ion-segment-button value="timers">\n\n          Horarios\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n    </div>\n\n\n\n  </div>\n\n\n\n  <div [ngSwitch]="tabs">\n\n    <div *ngSwitchCase="\'home\'">\n\n      <div class="formContainer">\n\n        <ion-item>\n\n          <ion-label fixed>Nombre Tienda</ion-label>\n\n          <ion-input type="text" [(ngModel)]="store.name"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label fixed>Email Tienda</ion-label>\n\n          <ion-input type="text" [(ngModel)]="store.email"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label fixed>Telefono</ion-label>\n\n          <ion-input type="tel" [(ngModel)]="store.phone"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label fixed>Sitio Web</ion-label>\n\n          <ion-input type="text" [(ngModel)]="store.website"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label fixed>WhatsApp</ion-label>\n\n          <ion-input type="tel" [(ngModel)]="store.whatsapp"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label fixed>Facebook</ion-label>\n\n          <ion-input type="text" [(ngModel)]="store.facebook"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label fixed>Twitter</ion-label>\n\n          <ion-input type="text" [(ngModel)]="store.twitter"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label fixed>Instagram</ion-label>\n\n          <ion-input type="text" [(ngModel)]="store.instagram"></ion-input>\n\n        </ion-item>\n\n      </div>\n\n    </div>\n\n    <div *ngSwitchCase="\'sucursal\'">\n\n      <div class="formContainer">\n\n        <ion-item>\n\n          <ion-label fixed>Dirección</ion-label>\n\n          <ion-input type="text" [(ngModel)]="main.address"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label fixed>Num. Local</ion-label>\n\n          <ion-input type="text" [(ngModel)]="main.local"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label fixed>Villa</ion-label>\n\n          <ion-select [(ngModel)]="main.state" (ionChange)="refreshDistrito($event)">\n\n            <ion-option *ngFor="let state of states" [value]="state.id">{{state.name}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label fixed>Sector</ion-label>\n\n          <ion-select [(ngModel)]="main.city">\n\n            <ion-option *ngFor="let city of cities" [value]="city.id">{{city.name}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label fixed>Redcompra</ion-label>\n\n          <ion-checkbox [checked]="main.credit_card == \'1\'" (ionChange)="mainCreditCardToggle()"></ion-checkbox>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label fixed>Delivery</ion-label>\n\n          <ion-checkbox [checked]="main.delivery == \'1\'" (ionChange)="mainDeliveryToggle()"></ion-checkbox>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label fixed>Delivery + Redcompra</ion-label>\n\n          <ion-checkbox [checked]="main.credit_card_delivery == \'1\'" (ionChange)="mainCreditCardDeliveryToggle()"></ion-checkbox>\n\n        </ion-item>\n\n      </div>\n\n    </div>\n\n    <div *ngSwitchCase="\'timers\'">\n\n      <p padding>Si el horario de cierre es menor al horario de apertura se entenderá que tu negocio cierra pasado las 00:00</p>\n\n      <div padding class="timers">\n\n        <ion-row class="headers">\n\n          <ion-col col-4>\n\n            <strong>Día</strong>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <strong>Apertura</strong>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <strong>Cierre</strong>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-4>\n\n            <ion-label>Lunes</ion-label>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <ion-datetime displayFormat="HH:mm" doneText="Aceptar" cancelText="Cancelar" minuteValues="0,30" [(ngModel)]="timers[1].open_ok"></ion-datetime>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <ion-datetime displayFormat="HH:mm" doneText="Aceptar" cancelText="Cancelar" minuteValues="0,30" [(ngModel)]="timers[1].close_ok"></ion-datetime>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-4>\n\n            <ion-label>Martes</ion-label>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <ion-datetime displayFormat="HH:mm" doneText="Aceptar" cancelText="Cancelar" minuteValues="0,30" [(ngModel)]="timers[2].open_ok"></ion-datetime>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <ion-datetime displayFormat="HH:mm" doneText="Aceptar" cancelText="Cancelar" minuteValues="0,30" [(ngModel)]="timers[2].close_ok"></ion-datetime>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-4>\n\n            <ion-label>Miércoles</ion-label>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <ion-datetime displayFormat="HH:mm" doneText="Aceptar" cancelText="Cancelar" minuteValues="0,30" [(ngModel)]="timers[3].open_ok"></ion-datetime>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <ion-datetime displayFormat="HH:mm" doneText="Aceptar" cancelText="Cancelar" minuteValues="0,30" [(ngModel)]="timers[3].close_ok"></ion-datetime>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-4>\n\n            <ion-label>Jueves</ion-label>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <ion-datetime displayFormat="HH:mm" doneText="Aceptar" cancelText="Cancelar" minuteValues="0,30" [(ngModel)]="timers[4].open_ok"></ion-datetime>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <ion-datetime displayFormat="HH:mm" doneText="Aceptar" cancelText="Cancelar" minuteValues="0,30" [(ngModel)]="timers[4].close_ok"></ion-datetime>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-4>\n\n            <ion-label>Viernes</ion-label>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <ion-datetime displayFormat="HH:mm" doneText="Aceptar" cancelText="Cancelar" minuteValues="0,30" [(ngModel)]="timers[5].open_ok"></ion-datetime>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <ion-datetime displayFormat="HH:mm" doneText="Aceptar" cancelText="Cancelar" minuteValues="0,30" [(ngModel)]="timers[5].close_ok"></ion-datetime>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-4>\n\n            <ion-label>Sábado</ion-label>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <ion-datetime displayFormat="HH:mm" doneText="Aceptar" cancelText="Cancelar" minuteValues="0,30" [(ngModel)]="timers[6].open_ok"></ion-datetime>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <ion-datetime displayFormat="HH:mm" doneText="Aceptar" cancelText="Cancelar" minuteValues="0,30" [(ngModel)]="timers[6].close_ok"></ion-datetime>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-4>\n\n            <ion-label>Domingo</ion-label>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <ion-datetime displayFormat="HH:mm" doneText="Aceptar" cancelText="Cancelar" minuteValues="0,30" [(ngModel)]="timers[0].open_ok"></ion-datetime>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <ion-datetime displayFormat="HH:mm" doneText="Aceptar" cancelText="Cancelar" minuteValues="0,30" [(ngModel)]="timers[0].close_ok"></ion-datetime>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-4>\n\n            <ion-label>Festivos</ion-label>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <ion-datetime displayFormat="HH:mm" doneText="Aceptar" cancelText="Cancelar" minuteValues="0,30" [(ngModel)]="timers[7].open_ok"></ion-datetime>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <ion-datetime displayFormat="HH:mm" doneText="Aceptar" cancelText="Cancelar" minuteValues="0,30" [(ngModel)]="timers[7].close_ok"></ion-datetime>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\storeprofile\storeprofile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__pata__["a" /* Pata */],
        __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__["a" /* DatePicker */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_8__angular_common__["d" /* DatePipe */]])
], StoreProfile);

//# sourceMappingURL=storeprofile.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreProducts; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_doctor_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pata__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StoreProducts = (function () {
    function StoreProducts(navCtrl, storage, navParams, alertCtrl, popoverCtrl, loadingCtrl, service, doctorService, camera, modalCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.popoverCtrl = popoverCtrl;
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        this.doctorService = doctorService;
        this.camera = camera;
        this.modalCtrl = modalCtrl;
        this.loaded = false;
        this.products = [];
        this.editMode = false;
        this.tabs = 'info';
        this.base64Image = '';
        this.activeUpload = '';
        this.editorConfig = {
            "editable": true,
            "height": "auto",
            "minHeight": "200",
            "width": "auto",
            "minWidth": "0",
            "toolbar": [
                ["bold", "italic", "underline"]
            ]
        };
        this.store = this.navParams.get("store");
        this.cargarProductos();
    }
    StoreProducts.prototype.add = function () {
        this.edit = {
            aux1: '',
            aux2: '',
            aux3: '',
            avatar: '',
            created_at: '',
            deleted: '0',
            description: '',
            id: '0',
            marketplace_id: this.store.id,
            name: '',
            offer: '0',
            price: '0',
            qty: '',
            tags: '',
            updated_at: '',
            video: ''
        };
        this.editMode = true;
    };
    StoreProducts.prototype.editar = function (product) {
        this.edit = Object.assign({}, product);
        ;
        this.editMode = true;
    };
    StoreProducts.prototype.cancel = function () {
        this.editMode = false;
    };
    StoreProducts.prototype.cargarProductos = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'cargando productos...'
        });
        this.loading.present();
        this.loaded = false;
        this.doctorService.getProducts(this.store.id).subscribe(function (data) {
            _this.loaded = true;
            _this.products = data.data;
            _this.loading.dismiss();
        });
    };
    StoreProducts.prototype.mainOfferToggle = function () {
        if (this.edit.offer == '0') {
            this.edit.offer = '1';
        }
        else {
            this.edit.offer = '0';
        }
    };
    StoreProducts.prototype.save = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'guardando...'
        });
        loading.present();
        var updateOperation = this.doctorService.setProduct(this.edit);
        updateOperation.subscribe(function (ok) {
            loading.dismiss();
            if (ok.res == "OK") {
                _this.service.showOk();
                _this.editMode = false;
                _this.cargarProductos();
            }
            else {
                loading.dismiss();
                _this.service.logError(null, "No fue posible guardar, intente nuevamente");
            }
        }, function (error) {
            loading.dismiss();
            _this.service.logError(null, "No fue posible guardar, intente nuevamente");
        });
    };
    StoreProducts.prototype.delete = function (product) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¿Confirma eliminación?',
            message: 'Vas a eliminar el producto',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        _this.doctorService.delProduct(product.id).subscribe(function (data) {
                            _this.service.showOk();
                            _this.cargarProductos();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    StoreProducts.prototype.takePicture = function (element) {
        var _this = this;
        this.activeUpload = element;
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000,
            correctOrientation: true
        }).then(function (imageData) {
            _this.processTake(imageData);
        }, function (err) {
            console.log(err);
        });
    };
    StoreProducts.prototype.openGallery = function (element) {
        var _this = this;
        this.activeUpload = element;
        var cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 100,
            targetWidth: 1000,
            targetHeight: 1000,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
        this.camera.getPicture(cameraOptions)
            .then(function (file_uri) {
            _this.processTake(file_uri);
        }, function (err) {
            console.log(err);
        });
    };
    StoreProducts.prototype.dataURItoBlob = function (dataURI) {
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0)
            byteString = atob(dataURI.split(',')[1]);
        else
            byteString = (dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], {
            type: mimeString
        });
    };
    StoreProducts.prototype.processTake = function (imageData) {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.loading = this.loadingCtrl.create({ content: 'subiendo...' });
        this.loading.present();
        var self0 = this;
        var blob = this.dataURItoBlob(this.base64Image);
        var objURL = window.URL.createObjectURL(blob);
        var image = new Image();
        image.src = objURL;
        window.URL.revokeObjectURL(objURL);
        var url = window.URL.createObjectURL(blob);
        var formData = new FormData();
        formData.append('avatar', blob, 'avatar.jpg');
        var xhr = new XMLHttpRequest();
        xhr.open("post", __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + "uploadService");
        xhr.setRequestHeader("Authorization", "Bearer " + this.storage.get("token"));
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var ari = xhr.responseText;
                var uri = JSON.parse(ari);
                self0.loading.dismiss();
                if (uri.res == "ERR") {
                    self0.service.logError({}, 'Error al procesar la solicitud. Inténtelo más tarde.');
                }
                else {
                    self0.edit;
                    var alert_1 = self0.alertCtrl.create({
                        title: 'Listo!',
                        subTitle: 'Foto precargada con éxito',
                        buttons: ['OK']
                    });
                    alert_1.present();
                    self0.changeImage(uri.url);
                }
            }
        };
        xhr.send(formData);
    };
    StoreProducts.prototype.changeImage = function (url) {
        if (this.activeUpload == 'avatar') {
            this.edit.avatar = url;
        }
        else if (this.activeUpload == 'aux1') {
            this.edit.aux1 = url;
        }
        else if (this.activeUpload == 'aux2') {
            this.edit.aux2 = url;
        }
        else if (this.activeUpload == 'aux3') {
            this.edit.aux3 = url;
        }
    };
    StoreProducts.prototype.b64toBlob = function (b64, onsuccess, onerror) {
        var img = new Image();
        img.onerror = onerror;
        img.onload = function onload() {
            var canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            canvas.toBlob(onsuccess);
        };
        img.src = b64;
    };
    return StoreProducts;
}());
StoreProducts = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-storeproducts',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\storeproducts\storeproducts.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title class="no-padding">MIS PRODUCTOS</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="add()" *ngIf="!editMode">\n\n        <ion-icon name="add-circle-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <div *ngIf="loaded && !editMode">\n\n\n\n    <ion-list class="admin-items">\n\n      <ion-list-header>Productos</ion-list-header>\n\n      <ion-item-sliding  *ngFor="let product of products">\n\n        <ion-item>\n\n          <div class="avatar" item-start [ngStyle]="{\'background-image\': \'url(\'+(product.avatar == \'\' ? \'assets/img/default/no-pictures.png\' : product.avatar)+\')\'}">\n\n            \n\n          </div>\n\n          <h2>{{product.name}}</h2>\n\n          <p>$ {{product.price | number:\'1.0-0\' }}</p>\n\n          <button ion-button clear item-end (click)="editar(product)">Editar</button>\n\n        </ion-item>\n\n        <ion-item-options side="right">\n\n          <button ion-button color="danger" (click)="delete(product)">\n\n            <ion-icon name="trash"></ion-icon>\n\n            Borrar\n\n          </button>\n\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n    </ion-list>\n\n\n\n    <div text-center class="nothing" *ngIf="products.length == 0">\n\n      <h2><ion-icon name="help-buoy"></ion-icon></h2>\n\n      <h4>No tienes productos</h4>\n\n      <button ion-button color="dark" (click)="add()" outline>Crear un producto</button>\n\n    </div>\n\n\n\n\n\n  </div>\n\n\n\n  <div *ngIf="loaded && editMode">\n\n\n\n    <div class="name">\n\n      <button (click)="save()" class="right buttonPinkOrange" ion-button round>Guardar</button>\n\n      <button (click)="cancel()" class="left" outline ion-button round>Cancelar</button>\n\n    </div>\n\n    <div padding class="tools">\n\n      <ion-segment [(ngModel)]="tabs">\n\n        <ion-segment-button value="info">\n\n          Información\n\n        </ion-segment-button>\n\n        <ion-segment-button value="photos">\n\n          Fotos\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n    </div>\n\n\n\n    <div [ngSwitch]="tabs">\n\n      <div *ngSwitchCase="\'info\'">\n\n        <div class="formContainer">\n\n          <ion-item>\n\n            <ion-label fixed>Nombre:</ion-label>\n\n            <ion-input type="text" [(ngModel)]="edit.name"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label fixed>Tags</ion-label>\n\n            <ion-input type="text" [(ngModel)]="edit.tags"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label fixed>Precio</ion-label>\n\n            <ion-input type="tel" [(ngModel)]="edit.price"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label fixed>Video (URL YouTube)</ion-label>\n\n            <ion-input type="tel" [(ngModel)]="edit.video"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label fixed>Exclusivo app</ion-label>\n\n            <ion-checkbox [checked]="edit.offer == \'1\'" (ionChange)="mainOfferToggle()"></ion-checkbox>\n\n          </ion-item>\n\n        \n\n          <ion-label fixed>Descripción</ion-label>\n\n          <app-ngx-editor [config]="editorConfig" [placeholder]="\'Escriba aqui...\'" [(ngModel)]="edit.description"></app-ngx-editor>\n\n        </div>     \n\n      </div>\n\n      <div *ngSwitchCase="\'photos\'">\n\n        <div class="formContainer">\n\n          <ion-row class="inter-items">\n\n            <ion-col col-4>\n\n              <ion-label fixed>Imagen principal:</ion-label>\n\n            </ion-col>\n\n            <ion-col col-3>\n\n              <div class="avatar" [ngStyle]="{\'background-image\': \'url(\'+(edit.avatar == \'\' ? \'assets/img/default/no-pictures.png\' : edit.avatar)+\')\'}"></div>\n\n            </ion-col>\n\n            <ion-col col-5>\n\n              <button ion-button item-end><ion-icon name="camera" (click)="takePicture(\'avatar\')"></ion-icon></button>\n\n              <button ion-button item-end><ion-icon name="images" (click)="openGallery(\'avatar\')"></ion-icon></button>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row class="inter-items">\n\n            <ion-col col-4>\n\n              <ion-label fixed>Imagen Auxiliar 1:</ion-label>\n\n            </ion-col>\n\n            <ion-col col-3>\n\n              <div class="avatar" [ngStyle]="{\'background-image\': \'url(\'+(edit.aux1 == \'\' ? \'assets/img/default/no-pictures.png\' : edit.aux1)+\')\'}"></div>\n\n            </ion-col>\n\n            <ion-col col-5>\n\n              <button ion-button item-end><ion-icon name="camera" (click)="takePicture(\'aux1\')"></ion-icon></button>\n\n              <button ion-button item-end><ion-icon name="images" (click)="openGallery(\'aux1\')"></ion-icon></button>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row class="inter-items">\n\n            <ion-col col-4>\n\n              <ion-label fixed>Imagen Auxiliar 2:</ion-label>\n\n            </ion-col>\n\n            <ion-col col-3>\n\n              <div class="avatar" [ngStyle]="{\'background-image\': \'url(\'+(edit.aux2 == \'\' ? \'assets/img/default/no-pictures.png\' : edit.aux2)+\')\'}"></div>\n\n            </ion-col>\n\n            <ion-col col-5>\n\n              <button ion-button item-end><ion-icon name="camera" (click)="takePicture(\'aux2\')"></ion-icon></button>\n\n              <button ion-button item-end><ion-icon name="images" (click)="openGallery(\'aux2\')"></ion-icon></button>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row class="inter-items">\n\n            <ion-col col-4>\n\n              <ion-label fixed>Imagen Auxiliar 3:</ion-label>\n\n            </ion-col>\n\n            <ion-col col-3>\n\n              <div class="avatar" [ngStyle]="{\'background-image\': \'url(\'+(edit.aux3 == \'\' ? \'assets/img/default/no-pictures.png\' : edit.aux3)+\')\'}"></div>\n\n            </ion-col>\n\n            <ion-col col-5>\n\n              <button ion-button item-end><ion-icon name="camera" (click)="takePicture(\'aux3\')"></ion-icon></button>\n\n              <button ion-button item-end><ion-icon name="images" (click)="openGallery(\'aux3\')"></ion-icon></button>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\storeproducts\storeproducts.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__pata__["a" /* Pata */],
        __WEBPACK_IMPORTED_MODULE_3__services_doctor_service__["a" /* DoctorService */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ModalController */]])
], StoreProducts);

//# sourceMappingURL=storeproducts.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_doctor_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pata__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StoreServices = (function () {
    function StoreServices(navCtrl, storage, navParams, alertCtrl, popoverCtrl, loadingCtrl, service, doctorService, camera, modalCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.popoverCtrl = popoverCtrl;
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        this.doctorService = doctorService;
        this.camera = camera;
        this.modalCtrl = modalCtrl;
        this.loaded = false;
        this.services = [];
        this.editMode = false;
        this.tabs = 'info';
        this.base64Image = '';
        this.activeUpload = '';
        this.editorConfig = {
            "editable": true,
            "height": "auto",
            "minHeight": "200",
            "width": "auto",
            "minWidth": "0",
            "toolbar": [
                ["bold", "italic", "underline"]
            ]
        };
        this.store = this.navParams.get("store");
        this.cargarServicios();
    }
    StoreServices.prototype.add = function () {
        this.edit = {
            aux1: '',
            aux2: '',
            aux3: '',
            avatar: '',
            created_at: '',
            deleted: '0',
            description: '',
            id: '0',
            marketplace_id: this.store.id,
            name: '',
            offer: '0',
            price: '0',
            qty: '',
            tags: '',
            updated_at: '',
            video: ''
        };
        this.editMode = true;
    };
    StoreServices.prototype.editar = function (service) {
        this.edit = Object.assign({}, service);
        this.editMode = true;
    };
    StoreServices.prototype.cancel = function () {
        this.editMode = false;
    };
    StoreServices.prototype.cargarServicios = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'cargando servicios...'
        });
        this.loading.present();
        this.loaded = false;
        this.doctorService.getServices(this.store.id).subscribe(function (data) {
            _this.loaded = true;
            _this.services = data.data;
            _this.loading.dismiss();
        });
    };
    StoreServices.prototype.mainOfferToggle = function () {
        if (this.edit.offer == '0') {
            this.edit.offer = '1';
        }
        else {
            this.edit.offer = '0';
        }
    };
    StoreServices.prototype.delete = function (product) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¿Confirma eliminación?',
            message: 'Vas a eliminar el producto',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        _this.doctorService.delService(product.id).subscribe(function (data) {
                            _this.service.showOk();
                            _this.cargarServicios();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    StoreServices.prototype.save = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'guardando...'
        });
        loading.present();
        var updateOperation = this.doctorService.setService(this.edit);
        updateOperation.subscribe(function (ok) {
            loading.dismiss();
            if (ok.res == "OK") {
                _this.service.showOk();
                _this.editMode = false;
                _this.cargarServicios();
            }
            else {
                loading.dismiss();
                _this.service.logError(null, "No fue posible guardar, intente nuevamente");
            }
        }, function (error) {
            loading.dismiss();
            _this.service.logError(null, "No fue posible guardar, intente nuevamente");
        });
    };
    StoreServices.prototype.takePicture = function (element) {
        var _this = this;
        this.activeUpload = element;
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000,
            correctOrientation: true
        }).then(function (imageData) {
            _this.processTake(imageData);
        }, function (err) {
            console.log(err);
        });
    };
    StoreServices.prototype.openGallery = function (element) {
        var _this = this;
        this.activeUpload = element;
        var cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 100,
            targetWidth: 1000,
            targetHeight: 1000,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
        this.camera.getPicture(cameraOptions)
            .then(function (file_uri) {
            _this.processTake(file_uri);
        }, function (err) {
            console.log(err);
        });
    };
    StoreServices.prototype.dataURItoBlob = function (dataURI) {
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0)
            byteString = atob(dataURI.split(',')[1]);
        else
            byteString = (dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], {
            type: mimeString
        });
    };
    StoreServices.prototype.processTake = function (imageData) {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.loading = this.loadingCtrl.create({ content: 'subiendo...' });
        this.loading.present();
        var self0 = this;
        var blob = this.dataURItoBlob(this.base64Image);
        var objURL = window.URL.createObjectURL(blob);
        var image = new Image();
        image.src = objURL;
        window.URL.revokeObjectURL(objURL);
        var url = window.URL.createObjectURL(blob);
        var formData = new FormData();
        formData.append('avatar', blob, 'avatar.jpg');
        var xhr = new XMLHttpRequest();
        xhr.open("post", __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + "uploadService");
        xhr.setRequestHeader("Authorization", "Bearer " + this.storage.get("token"));
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var ari = xhr.responseText;
                var uri = JSON.parse(ari);
                self0.loading.dismiss();
                if (uri.res == "ERR") {
                    self0.service.logError({}, 'Error al procesar la solicitud. Inténtelo más tarde.');
                }
                else {
                    self0.edit;
                    var alert_1 = self0.alertCtrl.create({
                        title: 'Listo!',
                        subTitle: 'Foto precargada con éxito',
                        buttons: ['OK']
                    });
                    alert_1.present();
                    self0.changeImage(uri.url);
                }
            }
        };
        xhr.send(formData);
    };
    StoreServices.prototype.changeImage = function (url) {
        if (this.activeUpload == 'avatar') {
            this.edit.avatar = url;
        }
        else if (this.activeUpload == 'aux1') {
            this.edit.aux1 = url;
        }
        else if (this.activeUpload == 'aux2') {
            this.edit.aux2 = url;
        }
        else if (this.activeUpload == 'aux3') {
            this.edit.aux3 = url;
        }
    };
    StoreServices.prototype.b64toBlob = function (b64, onsuccess, onerror) {
        var img = new Image();
        img.onerror = onerror;
        img.onload = function onload() {
            var canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            canvas.toBlob(onsuccess);
        };
        img.src = b64;
    };
    return StoreServices;
}());
StoreServices = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-storeservices',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\storeservices\storeservices.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title class="no-padding">MIS SERVICIOS</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="add()" *ngIf="!editMode">\n\n        <ion-icon name="add-circle-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <div *ngIf="loaded && !editMode">\n\n\n\n    <ion-list class="admin-items">\n\n      <ion-list-header>Servicios</ion-list-header>\n\n      <ion-item-sliding  *ngFor="let service of services">\n\n        <ion-item>\n\n          <div class="avatar" item-start [ngStyle]="{\'background-image\': \'url(\'+(service.avatar == \'\' ? \'assets/img/default/no-pictures.png\' : service.avatar)+\')\'}">\n\n            \n\n          </div>\n\n          <h2>{{service.name}}</h2>\n\n          <p>$ {{service.price | number:\'1.0-0\' }}</p>\n\n          <button ion-button clear item-end (click)="editar(service)">Editar</button>\n\n        </ion-item>\n\n        <ion-item-options side="right">\n\n          <button ion-button color="danger" (click)="delete(service)">\n\n            <ion-icon name="trash"></ion-icon>\n\n            Borrar\n\n          </button>\n\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n    </ion-list>\n\n\n\n    <div text-center class="nothing" *ngIf="services.length == 0">\n\n      <h2><ion-icon name="help-buoy"></ion-icon></h2>\n\n      <h4>No tienes servicios</h4>\n\n      <button ion-button color="dark" outline (click)="add()">Crear un servicio</button>\n\n    </div>\n\n\n\n\n\n  </div>\n\n\n\n  <div *ngIf="loaded && editMode">\n\n\n\n    <div class="name">\n\n      <button (click)="save()" class="right buttonPinkOrange" ion-button round>Guardar</button>\n\n      <button (click)="cancel()" class="left" outline ion-button round>Cancelar</button>\n\n    </div>\n\n    <div padding class="tools">\n\n      <ion-segment [(ngModel)]="tabs">\n\n        <ion-segment-button value="info">\n\n          Información\n\n        </ion-segment-button>\n\n        <ion-segment-button value="photos">\n\n          Fotos\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n    </div>\n\n\n\n    <div [ngSwitch]="tabs">\n\n      <div *ngSwitchCase="\'info\'">\n\n        <div class="formContainer">\n\n          <ion-item>\n\n            <ion-label fixed>Nombre:</ion-label>\n\n            <ion-input type="text" [(ngModel)]="edit.name"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label fixed>Tags</ion-label>\n\n            <ion-input type="text" [(ngModel)]="edit.tags"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label fixed>Precio</ion-label>\n\n            <ion-input type="tel" [(ngModel)]="edit.price"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label fixed>Video (URL YouTube)</ion-label>\n\n            <ion-input type="tel" [(ngModel)]="edit.video"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label fixed>Exclusivo app</ion-label>\n\n            <ion-checkbox [checked]="edit.offer == \'1\'" (ionChange)="mainOfferToggle()"></ion-checkbox>\n\n          </ion-item>\n\n        \n\n          <ion-label fixed>Descripción</ion-label>\n\n          <app-ngx-editor [config]="editorConfig" [placeholder]="\'Escriba aqui...\'" [(ngModel)]="edit.description"></app-ngx-editor>\n\n        </div>     \n\n      </div>\n\n      <div *ngSwitchCase="\'photos\'">\n\n        <div class="formContainer">\n\n          <ion-row class="inter-items">\n\n            <ion-col col-4>\n\n              <ion-label fixed>Imagen principal:</ion-label>\n\n            </ion-col>\n\n            <ion-col col-3>\n\n              <div class="avatar" [ngStyle]="{\'background-image\': \'url(\'+(edit.avatar == \'\' ? \'assets/img/default/no-pictures.png\' : edit.avatar)+\')\'}"></div>\n\n            </ion-col>\n\n            <ion-col col-5>\n\n              <button ion-button item-end><ion-icon name="camera" (click)="takePicture(\'avatar\')"></ion-icon></button>\n\n              <button ion-button item-end><ion-icon name="images" (click)="openGallery(\'avatar\')"></ion-icon></button>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row class="inter-items">\n\n            <ion-col col-4>\n\n              <ion-label fixed>Imagen Auxiliar 1:</ion-label>\n\n            </ion-col>\n\n            <ion-col col-3>\n\n              <div class="avatar" [ngStyle]="{\'background-image\': \'url(\'+(edit.aux1 == \'\' ? \'assets/img/default/no-pictures.png\' : edit.aux1)+\')\'}"></div>\n\n            </ion-col>\n\n            <ion-col col-5>\n\n              <button ion-button item-end><ion-icon name="camera" (click)="takePicture(\'aux1\')"></ion-icon></button>\n\n              <button ion-button item-end><ion-icon name="images" (click)="openGallery(\'aux1\')"></ion-icon></button>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row class="inter-items">\n\n            <ion-col col-4>\n\n              <ion-label fixed>Imagen Auxiliar 2:</ion-label>\n\n            </ion-col>\n\n            <ion-col col-3>\n\n              <div class="avatar" [ngStyle]="{\'background-image\': \'url(\'+(edit.aux2 == \'\' ? \'assets/img/default/no-pictures.png\' : edit.aux2)+\')\'}"></div>\n\n            </ion-col>\n\n            <ion-col col-5>\n\n              <button ion-button item-end><ion-icon name="camera" (click)="takePicture(\'aux2\')"></ion-icon></button>\n\n              <button ion-button item-end><ion-icon name="images" (click)="openGallery(\'aux2\')"></ion-icon></button>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row class="inter-items">\n\n            <ion-col col-4>\n\n              <ion-label fixed>Imagen Auxiliar 3:</ion-label>\n\n            </ion-col>\n\n            <ion-col col-3>\n\n              <div class="avatar" [ngStyle]="{\'background-image\': \'url(\'+(edit.aux3 == \'\' ? \'assets/img/default/no-pictures.png\' : edit.aux3)+\')\'}"></div>\n\n            </ion-col>\n\n            <ion-col col-5>\n\n              <button ion-button item-end><ion-icon name="camera" (click)="takePicture(\'aux3\')"></ion-icon></button>\n\n              <button ion-button item-end><ion-icon name="images" (click)="openGallery(\'aux3\')"></ion-icon></button>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\storeservices\storeservices.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__pata__["a" /* Pata */],
        __WEBPACK_IMPORTED_MODULE_3__services_doctor_service__["a" /* DoctorService */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ModalController */]])
], StoreServices);

//# sourceMappingURL=storeservices.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notificaciones; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_doctor_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pata__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_store__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_categoria__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_badge__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var Notificaciones = (function () {
    function Notificaciones(navCtrl, loadingCtrl, userService, doctorService, storage, modalCtrl, service, navParams, badge, sanitizer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.doctorService = doctorService;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.service = service;
        this.navParams = navParams;
        this.badge = badge;
        this.sanitizer = sanitizer;
        this.notificaciones = [];
        this.isLoading = true;
        this.x = this.loadingCtrl.create();
        this.x.present();
        this.userService.getNotifications().subscribe(function (cdata) {
            _this.notificaciones = cdata.data;
            _this.isLoading = false;
            _this.x.dismiss();
            var number = parseInt(cdata.total);
            if (isNaN(number)) {
                // nothing
                console.log('Notification number is NaN, no updated');
            }
            else if (number == 0) {
                _this.userService.changeNotifications.emit(number);
                _this.badge.clear();
            }
            else {
                _this.userService.changeNotifications.emit(number);
                _this.badge.set(number);
            }
            if (_this.navParams.get("preloadType") && _this.navParams.get("preloadReference")) {
                _this.goToAction(_this.navParams.get("preloadType"), _this.navParams.get("preloadReference"));
            }
        });
    }
    Notificaciones.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.isLoading = true;
        this.userService.getNotifications().subscribe(function (cdata) {
            _this.notificaciones = cdata.data;
            _this.isLoading = false;
            refresher.complete();
        });
    };
    Notificaciones.prototype.goToAction = function (type, reference, idpush) {
        console.log('goToAction type: ', type, ' - reference: ', reference, ' - idpush: ', idpush);
        if (idpush) {
            this.userService.setReadPush(idpush).subscribe(function (t) { console.log('setReadPush ' + t); });
        }
        if (type == 'store') {
            this.doctorService.addQty(reference);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_home_store__["a" /* Store */], { store: { id: reference } });
        }
        else if (type == 'product') {
            this.doctorService.addPd(reference);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_home_store__["a" /* Store */], { store: { id: this.navParams.get("preloadStore") }, preloadType: 'product', preloadElement: reference });
        }
        else if (type == 'service') {
            this.doctorService.addSs(reference);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_home_store__["a" /* Store */], { store: { id: this.navParams.get("preloadStore") }, preloadType: 'service', preloadElement: reference });
        }
        else if (type == 'category') {
            /*this.doctorService.addTracking('category', '');*/
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_home_categoria__["a" /* Categoria */], { categ: reference });
        }
    };
    return Notificaciones;
}());
Notificaciones = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-notificaciones',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\notificaciones\notificaciones.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Notificaciones</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content> \n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <div *ngIf="!isLoading">\n\n\n\n    <ion-list>\n\n      <ion-item text-wrap *ngFor="let noti of notificaciones" (click)="goToAction(noti.type, noti.reference, noti.id)">\n\n        <ion-row>\n\n          <ion-col col-2>\n\n            <ion-icon *ngIf="noti.readed == 1" class="off" name="radio-button-off"></ion-icon>\n\n            <ion-icon *ngIf="noti.readed == 0" class="on" name="radio-button-on"></ion-icon>\n\n          </ion-col>\n\n          <ion-col col-8>\n\n            <strong>{{noti.title}}</strong>  <small>{{noti.created_at | date:\'dd/MM/yy H:mm\'}}</small> <br />\n\n            {{noti.message}}\n\n          </ion-col>\n\n          <ion-col col-2 *ngIf="noti.type != \'\'">\n\n            <ion-icon name="arrow-forward"></ion-icon>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n    </ion-list>\n\n    <div *ngIf="notificaciones.length == 0" text-center>\n\n      <h5>No tienes notificaciones</h5>\n\n    </div>\n\n  </div>\n\n  <div *ngIf="isLoading">\n\n    <div class="timeline-wrapper">\n\n        <div class="timeline-item forceh">\n\n          <div class="animated-background">\n\n            <div class="background-masker news-img"></div>\n\n           </div>\n\n        </div>\n\n        <div class="timeline-item forceh">\n\n          <div class="animated-background">\n\n            <div class="background-masker news-img"></div>\n\n           </div>\n\n        </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\notificaciones\notificaciones.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_5__services_doctor_service__["a" /* DoctorService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_6__pata__["a" /* Pata */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_badge__["a" /* Badge */],
        __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
], Notificaciones);

//# sourceMappingURL=notificaciones.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDetalle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_news_service__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewsDetalle = (function () {
    function NewsDetalle(navCtrl, navParams, socialSharing, newsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socialSharing = socialSharing;
        this.newsService = newsService;
        this.image = '';
        this.link = '';
        this.news = null;
        this.staticUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].staticUrl;
        this.news = this.navParams.get("news");
    }
    NewsDetalle.prototype.ngOnInit = function () {
        /*
        this.newsService.getFeatured(this.news.featured_media).subscribe(
          (data: any) => {
            this.image =  data.guid.rendered;
          },
          error => {
            console.log(error);
          }
        )
        */
    };
    NewsDetalle.prototype.share = function () {
        /*
        if(this.isSharing) return false;
        this.isSharing = true;
        this.socialSharing.share(this.news.title.rendered,this.news.description, this.image, this.news.link).then(() => {
          this.isSharing = false;
        }).catch(() => {
          this.isSharing = false;
        });
        */
    };
    return NewsDetalle;
}());
NewsDetalle = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-newsDetalle',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\juntavecinos\newsDetalle.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Publicación</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <div class="image" [style.background-image]="\'url(\' + news.image + \')\'" style="background-size: cover;">\n\n    <div class="titulo">\n\n      <p>{{news.title}}</p>\n\n      <span class="subtitulo"> {{ news.date | date}}</span>\n\n    </div>\n\n  </div>\n\n\n\n  <div class="content-html" [innerHtml]="news.content">\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\juntavecinos\newsDetalle.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_4__services_news_service__["a" /* NewsService */]])
], NewsDetalle);

//# sourceMappingURL=newsDetalle.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    "production": true,
    "apiUrl": "https://api.ciudadsatelite.app/public/",
    "staticUrl": "http://138.197.196.64/",
    "newsApi": "http://localhost:8080/",
    "token": "5981efe0d6f33",
    "branchId": 262,
    "version": "1.4"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(629);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_service__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromPromise__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromPromise__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DoctorService = (function (_super) {
    __extends(DoctorService, _super);
    function DoctorService(http, storage, platform, nativeStorage) {
        var _this = _super.call(this, http, storage, platform, nativeStorage) || this;
        _this.http = http;
        _this.storage = storage;
        _this.platform = platform;
        _this.nativeStorage = nativeStorage;
        return _this;
    }
    DoctorService.prototype.getMaps = function () {
        return this.get('maps');
    };
    DoctorService.prototype.getPromos = function () {
        return this.get('promos');
    };
    DoctorService.prototype.getAll = function () {
        return this.get('categs');
    };
    DoctorService.prototype.getCategInfo = function (id) {
        return this.get('categ/' + id);
    };
    DoctorService.prototype.getStores = function (id) {
        return this.get('categs/' + id);
    };
    DoctorService.prototype.getStore = function (id) {
        return this.get('store/' + id);
    };
    DoctorService.prototype.buscar = function (buscar, categ) {
        return this.get('search/' + categ + '/' + buscar);
    };
    DoctorService.prototype.ads = function () {
        return this.get('ads');
    };
    DoctorService.prototype.search = function (params) {
        return this.post('deals', params);
    };
    DoctorService.prototype.requirements = function (page) {
        return this.get('requirements?page=' + page);
    };
    DoctorService.prototype.address = function () {
        return this.get('address');
    };
    DoctorService.prototype.masterdata = function () {
        return this.get('masterdata');
    };
    // JJVV
    DoctorService.prototype.getWall = function () {
        return this.get('jjvv');
    };
    DoctorService.prototype.getFaqs = function (id) {
        return this.get('faqs/' + id);
    };
    DoctorService.prototype.getContent = function (id) {
        return this.get('content/' + id);
    };
    DoctorService.prototype.sendContacto = function (obj) {
        return this.post('jjvv/contact', {
            name: obj.name,
            email: obj.email,
            message: obj.message
        });
    };
    DoctorService.prototype.sendDenuncia = function (obj) {
        return this.post('jjvv/denuncia', {
            name: obj.name,
            email: obj.email,
            message: obj.message
        });
    };
    DoctorService.prototype.addTracking = function (action, id) {
        this.post('actions', { action: action, id: id }).subscribe(function (data) { console.log('addTraking : ' + action + ' / ' + id, data); });
    };
    DoctorService.prototype.addQty = function (id) {
        this.post('store/see/' + id).subscribe(function (data) { console.log('addQty', data); });
    };
    DoctorService.prototype.addPd = function (id) {
        this.post('store/pd/' + id).subscribe(function (data) { console.log('addPd', data); });
    };
    DoctorService.prototype.addSs = function (id) {
        this.post('store/ss/' + id).subscribe(function (data) { console.log('addSs', data); });
    };
    DoctorService.prototype.setRanking = function (store, r) {
        return this.post('store/rank', { store: store, rank: r });
    };
    // store admin
    DoctorService.prototype.getProducts = function (id) {
        return this.get('store/products/' + id);
    };
    DoctorService.prototype.setProduct = function (product) {
        return this.post('store/products/save', product);
    };
    DoctorService.prototype.delProduct = function (id) {
        return this.post('store/products/delete', { id: id });
    };
    DoctorService.prototype.getServices = function (id) {
        return this.get('store/services/' + id);
    };
    DoctorService.prototype.setService = function (product) {
        return this.post('store/services/save', product);
    };
    DoctorService.prototype.delService = function (id) {
        return this.post('store/services/delete', { id: id });
    };
    DoctorService.prototype.addComment = function (obj) {
        return this.post('store/comments/add', {
            store: obj.store,
            comment: obj.comment
        });
    };
    return DoctorService;
}(__WEBPACK_IMPORTED_MODULE_5__base_service__["a" /* BaseService */]));
DoctorService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* Platform */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */]) === "function" && _d || Object])
], DoctorService);

var _a, _b, _c, _d;
//# sourceMappingURL=doctor.service.js.map

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__option_core__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agm_core__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_barcode_scanner__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_app_availability__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_contacts__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_launch_navigator__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_date_picker__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_fcm__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_device__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_badge__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_autosize__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_safepipe__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_swipe_vertical_directive__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ionic_img_viewer__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_in_app_browser__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_youtube_video_player__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_native_storage__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ngx_editor__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_market__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__app_component__ = __webpack_require__(862);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_profile_profile__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_home_home__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_emergencia_emergencia__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_juntavecinos_newsDetalle__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_login_login__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_home_categoria__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_notificaciones_notificaciones__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_home_store__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_contacto_contacto__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_juntavecinos_juntavecinos__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_storeprofile_storeprofile__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_storeproducts_storeproducts__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_storeservices_storeservices__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_ng2_rut__ = __webpack_require__(869);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_ng2_rut___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_42_ng2_rut__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_mapa_mapa__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pata__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_popovers_profile_media_profile_media__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__services_auth_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__services_user_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__services_news_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__services_doctor_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__components_news_preview_news_preview__ = __webpack_require__(871);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_status_bar__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ionic_native_splash_screen__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ngx_translate_http_loader__ = __webpack_require__(873);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__environments_environment__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__modals_ok_ok__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__modals_err_err__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__modals_detail_detail__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__modals_gal_gal__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__ionic_native_social_sharing__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__angular_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__ionic_native_email_composer__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__ionic_native_call_number__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63_ionic2_rating__ = __webpack_require__(876);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





























// Pages
















// Popovers

// Services




// Components





// Constant

// Modals









// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_53__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule(translate) {
        this.translate = translate;
        this.initTranslate();
    }
    AppModule.prototype.initTranslate = function () {
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('es-cl');
        this.translate.use('es-cl');
    };
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_28__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_30__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_emergencia_emergencia__["a" /* Emergencia */],
            __WEBPACK_IMPORTED_MODULE_32__pages_juntavecinos_newsDetalle__["a" /* NewsDetalle */],
            __WEBPACK_IMPORTED_MODULE_45__pages_popovers_profile_media_profile_media__["a" /* ProfileMedia */],
            __WEBPACK_IMPORTED_MODULE_33__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_profile_profile__["a" /* Profile */],
            __WEBPACK_IMPORTED_MODULE_37__pages_contacto_contacto__["a" /* Contacto */],
            __WEBPACK_IMPORTED_MODULE_34__pages_home_categoria__["a" /* Categoria */],
            __WEBPACK_IMPORTED_MODULE_35__pages_notificaciones_notificaciones__["a" /* Notificaciones */],
            __WEBPACK_IMPORTED_MODULE_36__pages_home_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_39__pages_storeprofile_storeprofile__["a" /* StoreProfile */],
            __WEBPACK_IMPORTED_MODULE_40__pages_storeproducts_storeproducts__["a" /* StoreProducts */],
            __WEBPACK_IMPORTED_MODULE_41__pages_storeservices_storeservices__["a" /* StoreServices */],
            __WEBPACK_IMPORTED_MODULE_38__pages_juntavecinos_juntavecinos__["a" /* JuntaVecinosPage */],
            __WEBPACK_IMPORTED_MODULE_55__modals_ok_ok__["a" /* ModalOK */],
            __WEBPACK_IMPORTED_MODULE_56__modals_err_err__["a" /* ModalERR */],
            __WEBPACK_IMPORTED_MODULE_57__modals_detail_detail__["a" /* ModalDetail */],
            __WEBPACK_IMPORTED_MODULE_58__modals_gal_gal__["a" /* ModalGal */],
            __WEBPACK_IMPORTED_MODULE_43__pages_mapa_mapa__["a" /* Mapa */],
            __WEBPACK_IMPORTED_MODULE_50__components_news_preview_news_preview__["a" /* NewsPreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_autosize__["a" /* Autosize */],
            __WEBPACK_IMPORTED_MODULE_20__components_safepipe__["a" /* SafePipe */],
            __WEBPACK_IMPORTED_MODULE_21__components_swipe_vertical_directive__["a" /* SwipeVertical */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_28__app_component__["a" /* MyApp */], {
                backButtonText: '',
                backButtonIcon: 'ios-arrow-back',
                iconMode: 'ios',
                tabsPlacement: 'bottom',
                pageTransition: 'ios-transition',
                scrollAssist: false,
                autoFocusAssist: false
            }),
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_22_ionic_img_viewer__["a" /* IonicImageViewerModule */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_6__option_core__["b" /* OptionCoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_54__environments_environment__["a" /* environment */].apiUrl),
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                name: "__satelite",
                driverOrder: ['indexeddb', 'websql']
            }),
            __WEBPACK_IMPORTED_MODULE_8__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBrUo6PdRjbF03o4_xeEoYl9kTD5V7pp7g'
            }),
            __WEBPACK_IMPORTED_MODULE_42_ng2_rut__["Ng2Rut"],
            __WEBPACK_IMPORTED_MODULE_26_ngx_editor__["a" /* NgxEditorModule */],
            __WEBPACK_IMPORTED_MODULE_63_ionic2_rating__["a" /* Ionic2RatingModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_28__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_30__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_emergencia_emergencia__["a" /* Emergencia */],
            __WEBPACK_IMPORTED_MODULE_32__pages_juntavecinos_newsDetalle__["a" /* NewsDetalle */],
            __WEBPACK_IMPORTED_MODULE_43__pages_mapa_mapa__["a" /* Mapa */],
            __WEBPACK_IMPORTED_MODULE_45__pages_popovers_profile_media_profile_media__["a" /* ProfileMedia */],
            __WEBPACK_IMPORTED_MODULE_33__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_contacto_contacto__["a" /* Contacto */],
            __WEBPACK_IMPORTED_MODULE_34__pages_home_categoria__["a" /* Categoria */],
            __WEBPACK_IMPORTED_MODULE_35__pages_notificaciones_notificaciones__["a" /* Notificaciones */],
            __WEBPACK_IMPORTED_MODULE_36__pages_home_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_39__pages_storeprofile_storeprofile__["a" /* StoreProfile */],
            __WEBPACK_IMPORTED_MODULE_40__pages_storeproducts_storeproducts__["a" /* StoreProducts */],
            __WEBPACK_IMPORTED_MODULE_41__pages_storeservices_storeservices__["a" /* StoreServices */],
            __WEBPACK_IMPORTED_MODULE_38__pages_juntavecinos_juntavecinos__["a" /* JuntaVecinosPage */],
            __WEBPACK_IMPORTED_MODULE_50__components_news_preview_news_preview__["a" /* NewsPreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_55__modals_ok_ok__["a" /* ModalOK */],
            __WEBPACK_IMPORTED_MODULE_56__modals_err_err__["a" /* ModalERR */],
            __WEBPACK_IMPORTED_MODULE_57__modals_detail_detail__["a" /* ModalDetail */],
            __WEBPACK_IMPORTED_MODULE_58__modals_gal_gal__["a" /* ModalGal */],
            __WEBPACK_IMPORTED_MODULE_29__pages_profile_profile__["a" /* Profile */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_46__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_47__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_48__services_news_service__["a" /* NewsService */],
            __WEBPACK_IMPORTED_MODULE_49__services_doctor_service__["a" /* DoctorService */],
            __WEBPACK_IMPORTED_MODULE_51__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_62__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_52__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__agm_core__["b" /* GoogleMapsAPIWrapper */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_44__pata__["a" /* Pata */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_27__ionic_native_market__["a" /* Market */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_contacts__["c" /* Contacts */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_app_availability__["a" /* AppAvailability */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_badge__["a" /* Badge */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_device__["a" /* Device */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["LOCALE_ID"], useValue: "es-ES" },
            __WEBPACK_IMPORTED_MODULE_59__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_60__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_61__ionic_native_email_composer__["a" /* EmailComposer */],
            __WEBPACK_IMPORTED_MODULE_42_ng2_rut__["RutValidator"]
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_service__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_fromPromise__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_fromPromise__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var UserService = (function (_super) {
    __extends(UserService, _super);
    function UserService(http, storage, device, platform, nativeStorage) {
        var _this = _super.call(this, http, storage, platform, nativeStorage) || this;
        _this.http = http;
        _this.storage = storage;
        _this.device = device;
        _this.platform = platform;
        _this.nativeStorage = nativeStorage;
        _this.changeAvatar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.changeStoreAvatar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.changeNotifications = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.push = '';
        return _this;
    }
    UserService.prototype.setPush = function (token) {
        this.push = token;
    };
    UserService.prototype.sendPushToServer = function () {
        var _this = this;
        console.log('send push user.service', this.push);
        this.getProfile().subscribe(function (result) {
            _this.post('users/device', {
                id: result.id,
                token: _this.push,
                os: _this.device.platform,
                osversion: _this.device.version,
                appversion: __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].version
            }).subscribe(function (ok) {
                console.log('push ok', ok);
            }, function (err) {
                console.log('push err', err);
            });
        });
    };
    UserService.prototype.sendContact = function (obj) {
        return this.post('users/contact', {
            name: obj.name,
            email: obj.email,
            message: obj.message
        });
    };
    UserService.prototype.getProfile = function () {
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].fromPromise(this.storage.get('MP-Profile'));
    };
    UserService.prototype.setReadPush = function (id) {
        return this.post('users/notification/' + id);
    };
    UserService.prototype.getNotificationStatus = function () {
        return this.get('users/notification');
    };
    UserService.prototype.getNotifications = function () {
        return this.get('users/notificationlist');
    };
    UserService.prototype.getId = function (id) {
        return this.get('users/profile/' + id);
    };
    UserService.prototype.getProfileMe = function () {
        return this.get('users/profile');
    };
    UserService.prototype.getStore = function (id) {
        return this.get('store/profile/' + id);
    };
    UserService.prototype.update = function (obj) {
        return this.post('update', obj);
    };
    UserService.prototype.updateStore = function (obj, id) {
        return this.post('store/update/' + id, obj);
    };
    UserService.prototype.region = function () {
        return this.get('region');
    };
    UserService.prototype.distrito = function (region) {
        return this.get('region/' + region + '/district');
    };
    UserService.prototype.changePassword = function (currentPass, newPass) {
        var _this = this;
        return this.getProfile().flatMap(function (result) {
            return _this.post('users/password', { new: newPass, old: currentPass, user_id: result.id });
        });
    };
    return UserService;
}(__WEBPACK_IMPORTED_MODULE_6__base_service__["a" /* BaseService */]));
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */]])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Autosize; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Autosize = (function () {
    function Autosize(element) {
        this.element = element;
    }
    Autosize.prototype.onInput = function (textArea) {
        this.adjust();
    };
    Autosize.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.adjust(); }, 0);
    };
    Autosize.prototype.adjust = function () {
        var textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
        textArea.style.overflow = 'hidden';
        textArea.style.height = 'auto';
        textArea.style.height = textArea.scrollHeight + "px";
    };
    return Autosize;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('input', ['$event.target']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HTMLTextAreaElement]),
    __metadata("design:returntype", void 0)
], Autosize.prototype, "onInput", null);
Autosize = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'ion-textarea[autosize]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], Autosize);

//# sourceMappingURL=autosize.js.map

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SafePipe.prototype.transform = function (value, type) {
        switch (type) {
            case 'html':
                return this._sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this._sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this._sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this._sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this._sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error("Unable to bypass security for invalid type: " + type);
        }
    };
    return SafePipe;
}());
SafePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'safe'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
], SafePipe);

//# sourceMappingURL=safepipe.js.map

/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeVertical; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_gestures_gesture__ = __webpack_require__(405);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SwipeVertical = (function () {
    function SwipeVertical(el) {
        this.onSwipeUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onSwipeDown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.el = el.nativeElement;
    }
    SwipeVertical.prototype.ngOnInit = function () {
        var _this = this;
        this.swipeGesture = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular_gestures_gesture__["a" /* Gesture */](this.el, {
            recognizers: [
                [Hammer.Swipe, { direction: Hammer.DIRECTION_VERTICAL }]
            ]
        });
        this.swipeGesture.listen();
        this.swipeGesture.on('swipeup', function (e) {
            _this.onSwipeUp.emit({ el: _this.el });
        });
        this.swipeGesture.on('swipedown', function (e) {
            _this.onSwipeDown.emit({ el: _this.el });
        });
    };
    SwipeVertical.prototype.ngOnDestroy = function () {
        this.swipeGesture.destroy();
    };
    return SwipeVertical;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SwipeVertical.prototype, "onSwipeUp", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SwipeVertical.prototype, "onSwipeDown", void 0);
SwipeVertical = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[swipe-vertical]' // Attribute selector
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], SwipeVertical);

//# sourceMappingURL=swipe-vertical.directive.js.map

/***/ }),

/***/ 862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_badge__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contacto_contacto__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_emergencia_emergencia__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_mapa_mapa__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_store__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_storeprofile_storeprofile__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_storeproducts_storeproducts__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_storeservices_storeservices__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_juntavecinos_juntavecinos__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_notificaciones_notificaciones__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_user_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_auth_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pata__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_fcm__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_native_storage__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_market__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__environments_environment__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




























var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, translate, config, storage, service, alertCtrl, userService, loadingController, authService, fcm, sanitizer, menu, badge, market, nativeStorage, ionicApp) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.translate = translate;
        this.config = config;
        this.storage = storage;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.userService = userService;
        this.loadingController = loadingController;
        this.authService = authService;
        this.fcm = fcm;
        this.sanitizer = sanitizer;
        this.menu = menu;
        this.badge = badge;
        this.market = market;
        this.nativeStorage = nativeStorage;
        this.ionicApp = ionicApp;
        this.rootPage = null;
        this.marketProfile = false;
        this.zones = [];
        this.notifications = 0;
        this.initializeApp();
        this.staticUrl = __WEBPACK_IMPORTED_MODULE_26__environments_environment__["a" /* environment */].staticUrl;
        this.userService.changeAvatar.subscribe(function (st) {
            console.log('change_avatar_main_fire', st);
            _this.user.avatar = st;
        });
        this.userService.changeStoreAvatar.subscribe(function (st) {
            console.log('change_avatar_store_fire', st);
            _this.active.avatar = st;
        });
        this.userService.changeNotifications.subscribe(function (st) {
            console.log('changeNotifications fire', st);
            _this.notifications = st;
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        console.log('initialize');
        this.platform.ready().then(function () {
            var tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            console.log('ready');
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleLightContent();
            setTimeout(function () {
                _this.splashScreen.hide();
            }, 0);
            _this.authService.getVersionInfo().subscribe(function (data) {
                if (data.res == "ERR") {
                    var uriLink = "";
                    if (_this.platform.is('ios')) {
                        uriLink = "https://itunes.apple.com/cl/app/ciudad-sat%C3%A9lite-app/id1409007736?mt=8";
                    }
                    else if (_this.platform.is('android')) {
                        uriLink = "https://play.google.com/store/apps/details?id=";
                    }
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Actualiza tu App',
                        message: data.msg,
                        buttons: [
                            {
                                text: 'Actualizar',
                                handler: function () {
                                    if (_this.platform.is('ios')) {
                                        _this.market.open('1409007736');
                                    }
                                    else if (_this.platform.is('android')) {
                                        _this.market.open('com.ciudadsatelite.app');
                                    }
                                }
                            }
                        ]
                    });
                    alert_1.present();
                }
            });
            if (_this.platform.is('cordova')) {
                _this.platform.registerBackButtonAction(function () {
                    var activeModal = _this.ionicApp._modalPortal.getActive();
                    if (activeModal) {
                        activeModal.dismiss();
                        return;
                    }
                    else if (_this.menu.isOpen()) {
                        _this.menu.close();
                        return;
                    }
                    else if (_this.nav.canGoBack()) {
                        _this.nav.pop();
                        return;
                    }
                    else {
                        //don't do anything
                        if (_this.nav.getActive().component == __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */]) {
                            _this.platform.exitApp();
                        }
                        else if (_this.nav.getActive().component != __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */]) {
                            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */]);
                        }
                        else {
                            _this.platform.exitApp();
                        }
                    }
                });
                _this.fcm.getToken().then(function (token) {
                    console.log('Success getToken! ', token);
                    _this.userService.setPush(token);
                    _this.authService.setPush(token);
                });
                _this.fcm.onNotification().subscribe(function (data) {
                    //alert('Push:' + JSON.stringify(data));
                    if (data.wasTapped) {
                        _this.loading = _this.loadingController.create();
                        _this.loading.present();
                        console.log("Received in background", data);
                        _this.userService.setReadPush(data.click_id).subscribe(function (ok) {
                            if (ok.res == 'OK') {
                                _this.userService.getNotificationStatus().subscribe(function (cdata) {
                                    _this.loading.dismiss();
                                    var number = parseInt(cdata.total);
                                    if (isNaN(number)) {
                                        console.log('Notification number is NaN, no updated');
                                    }
                                    else if (number == 0) {
                                        _this.notifications = number;
                                        _this.badge.clear();
                                    }
                                    else {
                                        _this.notifications = number;
                                        _this.badge.set(number);
                                    }
                                    if (data.type != '' && data.reference != '') {
                                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_18__pages_notificaciones_notificaciones__["a" /* Notificaciones */], { preloadType: data.type, preloadReference: data.reference, preloadStore: data.store });
                                    }
                                });
                            }
                        });
                    }
                    else {
                        console.log("Received in foreground", data);
                        _this.userService.getNotificationStatus().subscribe(function (cdata) {
                            var number = parseInt(cdata.total);
                            if (isNaN(number)) {
                                console.log('Notification number is NaN, no updated');
                            }
                            else if (number == 0) {
                                _this.notifications = number;
                                _this.badge.clear();
                            }
                            else {
                                _this.notifications = number;
                                _this.badge.set(number);
                            }
                        });
                    }
                    ;
                });
                _this.fcm.onTokenRefresh().subscribe(function (token) {
                    //alert('push:'+ token);
                    _this.userService.setPush(token);
                    _this.authService.setPush(token);
                });
            }
            _this.authService.loginOk.subscribe(function (data) {
                console.log('login emmiter discovered');
                if (data.res == "OK") {
                    if (data.profile.avatar == null || data.profile.avatar == "") {
                        data.profile.avatar = "assets/img/default/avatar.png";
                    }
                    _this.user = data.profile;
                    _this.active = data.profile;
                    _this.storage.set("active", _this.active);
                    _this.reloadSide();
                    _this.authService.sendPushToServer(_this.user.id);
                }
            });
            _this.storage.get("token").then(function (token) {
                if (token) {
                    _this.startWithToken(token);
                }
                else {
                    console.log('Token is clean, check nativeStorage');
                    _this.nativeStorage.getItem('token').then(function (token2) {
                        console.log('Token recovered');
                        _this.storage.set("token", token2);
                        _this.startWithToken(token2);
                    }, function (err) {
                        console.log('nativeStorage not available');
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */];
                        _this.loadingHidden();
                    });
                }
            }, function () {
                console.log('Fail in storage element');
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */];
                _this.loadingHidden();
            });
        });
    };
    MyApp.prototype.startWithToken = function (token) {
        var _this = this;
        this.userService.getProfileMe().subscribe(function (result) {
            if (result.res == "OK") {
                _this.storage.set("MP-Profile", result.data);
                _this.user = result.data;
                if (_this.user.avatar == null || _this.user.avatar == "") {
                    _this.user.avatar = "assets/img/default/avatar.png";
                }
                _this.active = _this.user;
                _this.reloadSide();
                // FCM
                _this.userService.sendPushToServer();
                // Start
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */];
                _this.loadingHidden();
            }
            else {
                _this.service.logError(null, "No sesión de usuario está caducada. Por favor accede nuevamente");
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */];
                _this.loadingHidden();
            }
        }, function () {
            _this.service.logError(null, "No fue posible recuperar tu perfil. Por favor accede nuevamente.");
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */];
            _this.loadingHidden();
        });
    };
    MyApp.prototype.switchActive = function (zone) {
        if (zone) {
            this.active = zone;
            this.storage.set("active", this.active);
            this.marketProfile = true;
        }
        else {
            this.active = this.user;
            this.storage.set("active", this.user);
            this.marketProfile = false;
        }
        document.getElementById("custom-overlay").style.display = "";
        this.reloadSide();
        setTimeout(function () {
            document.getElementById("custom-overlay").style.display = "none";
        }, 500);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.loadingHidden = function () {
        setTimeout(function () {
            document.getElementById("loader-spinner").classList.add("animated-start");
            setTimeout(function () {
                document.getElementById("custom-overlay").style.display = "none";
            }, 200);
        }, 200);
    };
    MyApp.prototype.createAccount = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */], { iosSkip: 1 });
    };
    MyApp.prototype.profile = function (useMarketProfile) {
        if (useMarketProfile) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_14__pages_storeprofile_storeprofile__["a" /* StoreProfile */], { store: this.active });
        }
        else {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* Profile */]);
        }
    };
    MyApp.prototype.contacto = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_contacto_contacto__["a" /* Contacto */]);
    };
    MyApp.prototype.reloadSide = function () {
        /*
        this.pages = [];
        this.pages.push({ title: 'Categorias', component: HomePage, selected: true });
    
        if (this.active.profile_id == "2") { // Vendedor
          this.pages.push({ title: 'Perfil de tienda', component: StoreProfile, selected: false });
          this.pages.push({ title: 'Mis productos', component: StoreProducts, selected: false });
          this.pages.push({ title: 'Mis servicios', component: StoreServices, selected: false });
        }
        else {
          this.pages.push({ title: 'Mapa', component: Mapa, selected: false });
          this.pages.push({ title: 'Notificaciones  <strong class="badges"></strong>', component: Mapa, selected: false });
          this.pages.push({ title: 'Junta de vecinos', component: JuntaVecinosPage, selected: false });
        }
        */
        this.zones = [];
        if (this.user.markets.length > 0) {
            for (var i = 0; i < this.user.markets.length; i++) {
                this.zones.push(this.user.markets[i]);
            }
        }
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.openPageComponent = function (id) {
        if (id == 1) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */]);
        }
        else if (id == 2) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_mapa_mapa__["a" /* Mapa */]);
        }
        else if (id == 3) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_18__pages_notificaciones_notificaciones__["a" /* Notificaciones */]);
        }
        else if (id == 4) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_17__pages_juntavecinos_juntavecinos__["a" /* JuntaVecinosPage */]);
        }
        else if (id == 5) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_emergencia_emergencia__["a" /* Emergencia */]);
        }
        else if (id == 10) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_home_store__["a" /* Store */], { store: this.active, rootMode: true });
        }
        else if (id == 11) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_15__pages_storeproducts_storeproducts__["a" /* StoreProducts */], { store: this.active });
        }
        else if (id == 12) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__pages_storeservices_storeservices__["a" /* StoreServices */], { store: this.active });
        }
    };
    MyApp.prototype.closeSession = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Hasta pronto',
            message: 'Deseas salir de tu cuenta',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () { }
                },
                {
                    text: 'Confirmar',
                    handler: function () {
                        _this.storage.remove("token");
                        _this.storage.remove("MP-Profile");
                        _this.storage.remove("active");
                        _this.nativeStorage.remove("token");
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\app\app.html"*/'<ion-menu [content]="content" id="leftMenu" class="sidenav">\n\n\n\n  <div class="profile" *ngIf="!marketProfile">\n\n    <div class="image" [style.background-image]="\'url(\' + user?.avatar + \')\'" style="background-size: cover"></div>\n\n    <div class="name">{{ user?.first_name }} {{ user?.last_name }} {{ user?.company }}</div>\n\n    <!--<div class="scope" *ngIf="active">{{ active.name }} </div>-->\n\n    <button *ngIf="user?.id != \'0\'" menuClose (click)="profile()" ion-button round color="light">MI PERFIL</button>\n\n    <button *ngIf="user?.id == \'0\'" menuClose (click)="createAccount()" ion-button round color="light">CREAR CUENTA</button>\n\n  </div>\n\n\n\n  <div class="profile" *ngIf="marketProfile">\n\n    <div class="image" [style.background-image]="\'url(\' + active?.avatar + \')\'" style="background-size: cover"></div>\n\n    <div class="name">{{ active?.name }}</div>\n\n    <!--<div class="scope" *ngIf="active">{{ active.name }} </div>-->\n\n    <button menuClose (click)="profile(true)" ion-button round color="light">EDITAR TIENDA</button>\n\n  </div>\n\n\n\n  <!--\n\n  <div menuClose *ngFor="let p of pages" class="link" [ngClass]="{\'selected\' : p.selected}" (click)="openPage(p)">\n\n    <span [innerHTML]="sanitizer.bypassSecurityTrustHtml(p.title)"></span>\n\n  </div>\n\n  -->\n\n\n\n  <div menuClose class="link" (click)="openPageComponent(1)">\n\n    <span>Categorias</span>\n\n  </div>\n\n  <div *ngIf="!marketProfile" menuClose class="link" (click)="openPageComponent(2)">\n\n    <span>Mapa</span>\n\n  </div>\n\n  <div *ngIf="user?.id != \'0\' && !marketProfile" menuClose class="link" (click)="openPageComponent(3)">\n\n    <span>Notificaciones <strong class="badges" *ngIf="notifications > 0">{{notifications}}</strong></span>\n\n  </div>\n\n  <div *ngIf="!marketProfile" menuClose class="link" (click)="openPageComponent(4)">\n\n    <span>Junta de Vecinos</span>\n\n  </div>\n\n  <div *ngIf="!marketProfile" menuClose class="link" (click)="openPageComponent(5)">\n\n    <span>Teléfonos Útiles</span>\n\n  </div>\n\n  <div *ngIf="marketProfile" menuClose class="link" (click)="openPageComponent(10)">\n\n    <span>Ver mi tienda</span>\n\n  </div>\n\n  <div *ngIf="marketProfile" menuClose class="link" (click)="openPageComponent(11)">\n\n    <span>Mis productos</span>\n\n  </div>\n\n  <div *ngIf="marketProfile" menuClose class="link" (click)="openPageComponent(12)">\n\n    <span>Mis servicios</span>\n\n  </div>\n\n  \n\n  <!-- Marketplaces -->\n\n  <div *ngIf="!marketProfile">\n\n    <div menuClose *ngFor="let zone of zones" class="link destacado" [ngClass]="{\'selected\' : selected}" (click)="switchActive(zone)">\n\n      <span><strong>Administrar</strong><br />{{zone.name}}</span>\n\n    </div>\n\n  </div>\n\n  <!-- End Marketplaces -->\n\n\n\n  <div menuClose *ngIf="marketProfile" class="link destacado" [ngClass]="{\'selected\' : selected}" (click)="switchActive()">\n\n    <span><strong>Volver a</strong><br />{{user.first_name}}</span>\n\n  </div>\n\n  \n\n  <div menuClose class="link" (click)="contacto()">\n\n    <span>Contacto</span>\n\n  </div>\n\n\n\n  <div *ngIf="user?.id != \'0\'" menuClose class="link" (click)="closeSession()">\n\n    <span>{{\'APP_MENU.CLOSE\' | translate }}</span>\n\n  </div>\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Config */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_22__pata__["a" /* Pata */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_20__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_21__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_23__ionic_native_fcm__["a" /* FCM */],
        __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["c" /* DomSanitizer */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_badge__["a" /* Badge */],
        __WEBPACK_IMPORTED_MODULE_25__ionic_native_market__["a" /* Market */],
        __WEBPACK_IMPORTED_MODULE_24__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicApp */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_news_model__ = __webpack_require__(872);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_juntavecinos_newsDetalle__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_news_service__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the NewsPreviewComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var NewsPreviewComponent = (function () {
    function NewsPreviewComponent(navCtrl, newsService) {
        this.navCtrl = navCtrl;
        this.newsService = newsService;
        this.image = '';
        this.staticUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].staticUrl;
    }
    NewsPreviewComponent.prototype.ngOnInit = function () {
        /*console.log('A::' + this.news.featured_media);
        this.newsService.getFeatured(this.news.featured_media).subscribe(
          (data: any) => {
            this.image =  data.guid.rendered;
          },
          error => {
            console.log(error);
          }
        )*/
    };
    NewsPreviewComponent.prototype.detalleNews = function (obj) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_juntavecinos_newsDetalle__["a" /* NewsDetalle */], {
            news: this.news
        });
    };
    return NewsPreviewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_news_model__["a" /* News */])
], NewsPreviewComponent.prototype, "news", void 0);
NewsPreviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'news-preview',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\components\news-preview\news-preview.html"*/'<!-- Generated template for the NewsPreviewComponent component -->\n\n<div class="wrapper">\n\n  <div class="image" [style.background-image]="\'url(\' + news.image + \')\'" style="background-position: top; background-size: cover;" (click)="detalleNews(news);">\n\n    <div class="descriptionContainer">\n\n      <div class="title">{{ news.title }}</div>\n\n      <div class="date">{{ news.date | date }}</div>\n\n    </div>\n\n  </div>\n\n</div>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\components\news-preview\news-preview.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__services_news_service__["a" /* NewsService */]])
], NewsPreviewComponent);

//# sourceMappingURL=news-preview.js.map

/***/ }),

/***/ 872:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return News; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__option_core__ = __webpack_require__(418);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var News = (function (_super) {
    __extends(News, _super);
    function News() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    News.prototype.decode = function (jsonObject) {
        console.log('decode', jsonObject);
        this.image = jsonObject['image'];
        this.title = jsonObject['title'];
        this.content = jsonObject['content'];
        this.pretext = jsonObject['pretext'];
        this.id = jsonObject['id'];
        if (jsonObject['date']) {
            this.date = new Date(jsonObject['date']);
            this.normalizeDateToUsersLocale(this.date);
        }
    };
    News.prototype.getFormEntityName = function () {
        return 'news';
    };
    News.prototype.normalizeDateToUsersLocale = function (date) {
        date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    };
    return News;
}(__WEBPACK_IMPORTED_MODULE_0__option_core__["a" /* OptEntity */]));

//# sourceMappingURL=news.model.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http, storage, device) {
        this.http = http;
        this.storage = storage;
        this.device = device;
        this.loginOk = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.push = '';
    }
    /** login */
    AuthService.prototype.login = function (params) {
        var req = this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl + 'users/login', params);
        /*
        req.subscribe(data => {
          this.loginOk.emit(data);
        });*/
        return req;
    };
    /** signup */
    AuthService.prototype.register = function (params) {
        var req = this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl + 'users/register', params);
        return req;
    };
    AuthService.prototype.evaluate = function (params) {
        var req = this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl + 'users/evaluate', params);
        return req;
    };
    AuthService.prototype.setToken = function (token) {
        this.storage.set('token', token);
    };
    AuthService.prototype.getStates = function () {
        var req = this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl + 'states');
        return req;
    };
    AuthService.prototype.getCities = function (id) {
        var req = this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl + 'cities/' + id);
        return req;
    };
    /** verification sms */
    AuthService.prototype.verifyPhone = function (params) {
        var req = this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl + 'users/verification', params);
        return req;
    };
    AuthService.prototype.requestPassword = function (email) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl + 'resetPassword', { email: email });
    };
    AuthService.prototype.setPush = function (token) {
        this.push = token;
    };
    AuthService.prototype.sendPushToServer = function (id) {
        console.log('send push user.service', this.push);
        this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl + 'users/device', {
            id: id,
            token: this.push,
            os: this.device.platform,
            osversion: this.device.version,
            appversion: __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].version
        }).subscribe(function (ok) {
            console.log('push ok', ok);
        }, function (err) {
            console.log('push err', err);
        });
    };
    AuthService.prototype.getVersionInfo = function () {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl + 'version', {
            appversion: __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].version
        });
    };
    /** logout */
    AuthService.prototype.logout = function () { };
    return AuthService;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AuthService.prototype, "loginOk", void 0);
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */]])
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_badge__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_store__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_doctor_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_categoria__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_juntavecinos_juntavecinos__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var HomePage = (function () {
    function HomePage(navCtrl, navParams, userService, doctorService, geolocation, gMaps, toastCtrl, popoverCtrl, http, storage, badge) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.doctorService = doctorService;
        this.geolocation = geolocation;
        this.gMaps = gMaps;
        this.toastCtrl = toastCtrl;
        this.popoverCtrl = popoverCtrl;
        this.http = http;
        this.storage = storage;
        this.badge = badge;
        this.isLoading = true;
        this.categs = [];
        this.searchActive = false;
        this.isSearching = false;
        this.isSearchingLoad = false;
        this.search = '';
        this.searchStores = [];
        this.searchProducts = [];
        this.searchServices = [];
        this.promociones = [];
        this.doctorService.getPromos().subscribe(function (data) {
            _this.promociones = data.data;
        });
        setTimeout(function () {
            _this.doctorService.getAll().subscribe(function (data) {
                _this.isLoading = false;
                _this.categs = data.data;
            });
        }, 1000);
        this.userService.getNotificationStatus().subscribe(function (cdata) {
            console.log('cdata', cdata);
            var number = parseInt(cdata.total);
            if (isNaN(number)) {
                // nothing
                console.log('Notification number is NaN, no updated');
            }
            else if (number == 0) {
                _this.userService.changeNotifications.emit(number);
                _this.badge.clear();
            }
            else {
                _this.userService.changeNotifications.emit(number);
                _this.badge.set(number);
            }
        });
    }
    HomePage.prototype.procesarPromo = function (promocion) {
        this.doctorService.addTracking('slider', promocion.id);
        if (promocion.type == "1") {
            window.open(promocion.value, '_system');
        }
        else if (promocion.type == "2") {
            var id = promocion.value.substring(1, 100);
            this.doctorService.addQty(id);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_home_store__["a" /* Store */], { store: { id: id } });
        }
        else if (promocion.type == "3") {
            var id = promocion.value.substring(1, 100);
            if (promocion.value.substring(0, 1) == "P") {
                this.doctorService.addPd(id);
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_home_store__["a" /* Store */], { store: { id: promocion.parent }, preloadType: 'product', preloadElement: id });
            }
            if (promocion.value.substring(0, 1) == "S") {
                this.doctorService.addSs(id);
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_home_store__["a" /* Store */], { store: { id: promocion.parent }, preloadType: 'product', preloadElement: id });
            }
        }
    };
    HomePage.prototype.goToStore = function (store) {
        this.doctorService.addQty(store.id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_home_store__["a" /* Store */], { store: store });
    };
    HomePage.prototype.onSearch = function (ev) {
        var _this = this;
        var val = ev.target.value;
        if (val && val.length > 2) {
            this.isSearching = true;
            this.isSearchingLoad = true;
            this.searchAction = this.doctorService.buscar(val, 0);
            this.searchAction.subscribe(function (data) {
                _this.isSearchingLoad = false;
                _this.searchStores = data.stores;
                _this.searchProducts = data.products;
                _this.searchServices = data.services;
            });
        }
        else {
            this.isSearching = false;
            this.isSearchingLoad = false;
            this.searchStores = [];
            this.searchProducts = [];
            this.searchServices = [];
        }
    };
    HomePage.prototype.onClear = function (ev) {
        this.isSearching = false;
        this.isSearchingLoad = false;
        this.searchStores = [];
        this.searchProducts = [];
        this.searchServices = [];
    };
    HomePage.prototype.toggleSearch = function () {
        if (this.searchActive) {
            this.searchActive = false;
            this.onClear(false);
            this.searchStores = [];
            this.searchProducts = [];
            this.searchServices = [];
            this.search = '';
            this.isSearching = false;
        }
        else {
            this.searchActive = true;
        }
        this.content.resize();
    };
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.isLoading = true;
        this.doctorService.getAll().subscribe(function (data) {
            _this.isLoading = false;
            _this.categs = data.data;
            refresher.complete();
        });
    };
    HomePage.prototype.verCategoria = function (categ) {
        console.log(categ);
        this.searchActive = false;
        this.onClear(false);
        this.searchStores = [];
        this.searchProducts = [];
        this.searchServices = [];
        this.search = '';
        this.isSearching = false;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__pages_home_categoria__["a" /* Categoria */], { categ: categ });
    };
    HomePage.prototype.goToJJVV = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_juntavecinos_juntavecinos__["a" /* JuntaVecinosPage */]);
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]) === "function" && _a || Object)
], HomePage.prototype, "content", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\home\home.html"*/'<!--\n\n  Generated template for the MyPetsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title class="no-padding">CIUDAD SATÉLITE</ion-title>\n\n    <ion-buttons end>\n\n      <button class="search-top" ion-button icon-only (click)="toggleSearch()">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar class="searchbar" *ngIf="searchActive">\n\n      <ion-searchbar (ionClear)="onClear($event)" (ionInput)="onSearch($event)" [(ngModel)]="search" placeholder="Tiendas, productos y servicios en Ciudad Satélite"></ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n<!--<img src="assets/img/jjvv.jpg" *ngIf="!searchActive" (click)="goToJJVV()" class="jjvv" />-->\n\n<ion-slides *ngIf="!searchActive" class="homeslider">\n\n  <ion-slide *ngFor="let promocion of promociones">\n\n    <img src="{{promocion.image}}" (click)="procesarPromo(promocion);" />\n\n  </ion-slide>\n\n\n\n</ion-slides>\n\n\n\n<div *ngIf="isSearching" class="search-container">\n\n  <div *ngIf="isSearchingLoad">\n\n    <div text-center>\n\n      <ion-spinner></ion-spinner>\n\n      <br /><br />\n\n      <strong>Buscando</strong><br />\n\n      &quot;{{search}}&quot;\n\n    </div>\n\n  </div>\n\n  <div *ngIf="!isSearchingLoad">\n\n    <div *ngIf="searchStores.length == 0 && searchProducts.length == 0 && searchServices.length == 0 && !isSearchingLoad" text-center>\n\n      <ion-icon name="hand"></ion-icon>\n\n      <br />\n\n      <strong>No se encontraron resultados</strong><br />\n\n      &quot;{{search}}&quot;\n\n    </div>\n\n    <div class="search-results" *ngIf="(searchStores.length > 0 || searchProducts.length > 0 || searchServices.length > 0) && !isSearchingLoad">\n\n\n\n      <ion-list>\n\n        <ion-list-header *ngIf="searchStores.length > 0">\n\n          Tiendas ({{searchStores.length}})\n\n        </ion-list-header>\n\n\n\n        <ion-item *ngFor="let result of searchStores" (click)="goToStore(result);">\n\n          <ion-row>\n\n            <ion-col col-4>\n\n              <div class="media_x" [style.background-image]="\'url(\' + (result.avatar != \'\' && result.avatar != null ? result.avatar : \'assets/img/default/store.png\' ) + \')\'" style="background-size: cover;"></div>\n\n            </ion-col>\n\n            <ion-col col-8>\n\n                <strong>{{result.name}}</strong>\n\n                {{result.address}} {{(result.local != "" ? "Loc. "+result.local : "")}}\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n\n\n        <ion-list-header *ngIf="searchProducts.length > 0">\n\n          Productos ({{searchProducts.length}})\n\n        </ion-list-header>\n\n\n\n        <ion-item *ngFor="let result of searchProducts" (click)="goToStore(result.store);">\n\n          <ion-row>\n\n            <ion-col col-4>\n\n              <div class="media_x" [style.background-image]="\'url(\' + (result.avatar != \'\' && result.avatar != null ? result.avatar : \'assets/img/default/store.png\' ) + \')\'" style="background-size: cover;"></div>\n\n            </ion-col>\n\n            <ion-col col-8>\n\n                <strong>{{result.name}}</strong>\n\n                <strong *ngIf="result.price != 0">$ {{result.price | number:\'1.0-0\' }}</strong>\n\n                Encontrado en <b>{{result.store.name}}</b>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n\n\n        <ion-list-header *ngIf="searchServices.length > 0">\n\n          Servicios ({{searchServices.length}})\n\n        </ion-list-header>\n\n\n\n        <ion-item *ngFor="let result of searchServices" (click)="goToStore(result.store);">\n\n          <ion-row>\n\n            <ion-col col-4>\n\n              <div class="media_x" [style.background-image]="\'url(\' + (result.avatar != \'\' && result.avatar != null ? result.avatar : \'assets/img/default/store.png\' ) + \')\'" style="background-size: cover;"></div>\n\n            </ion-col>\n\n            <ion-col col-8>\n\n                <strong>{{result.name}}</strong>\n\n                <strong *ngIf="result.price != 0">$ {{result.price | number:\'1.0-0\' }}</strong>\n\n                Encontrado en <b>{{result.store.name}}</b>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n\n\n    </div>\n\n  </div>\n\n</div>\n\n\n\n<div *ngIf="searchActive && !isSearching" class="search-container2" text-center>\n\n      <ion-icon name="search"></ion-icon>\n\n      <br />\n\n      <strong>Comienza a escribir para<br />buscar tiendas, productos o servicios</strong><br />\n\n      <br />\n\n</div>\n\n\n\n<ion-refresher (ionRefresh)="doRefresh($event)" *ngIf="!isSearching">\n\n  <ion-refresher-content pullingText="actualizar..." refreshingText="actualizando..."></ion-refresher-content>\n\n</ion-refresher>\n\n\n\n<div *ngIf="isLoading" class="pd20">\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n         </div>\n\n      </div>\n\n  </div>\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n        </div>\n\n      </div>\n\n  </div>\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n        </div>\n\n      </div>\n\n  </div>\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n        </div>\n\n      </div>\n\n  </div>\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n        </div>\n\n      </div>\n\n  </div>\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n        </div>\n\n      </div>\n\n  </div>\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n        </div>\n\n      </div>\n\n  </div>\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n        </div>\n\n      </div>\n\n  </div>\n\n</div>\n\n\n\n<div *ngIf="!isLoading && !searchActive">\n\n\n\n  <ion-list class="pd20">\n\n    <button ion-item detail-push *ngFor="let categ of categs" (click)="verCategoria(categ)">\n\n      <ion-avatar item-start>\n\n        <img src="{{categ.banner}}">\n\n      </ion-avatar>\n\n      <h2>{{categ.name}}</h2>\n\n      <h3>{{categ.total_stores}} tiendas</h3>\n\n      <!--<p>I\'ve had a pretty messed up day. If we just...</p>-->\n\n    </button>\n\n  </ion-list>\n\n</div>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__services_doctor_service__["a" /* DoctorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_doctor_service__["a" /* DoctorService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* GoogleMapsAPIWrapper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* GoogleMapsAPIWrapper */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* PopoverController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_badge__["a" /* Badge */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_badge__["a" /* Badge */]) === "function" && _m || Object])
], HomePage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Store; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_availability__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_contacts__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_doctor_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modals_detail_detail__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_call_number__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pata__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var Store = (function () {
    function Store(navCtrl, navParams, alertCtrl, doctorService, geolocation, gMaps, toastCtrl, popoverCtrl, http, storage, loadingCtrl, contacts, modalCtrl, appAvailability, platform, service, launchNavigator, callNumber, iab) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.doctorService = doctorService;
        this.geolocation = geolocation;
        this.gMaps = gMaps;
        this.toastCtrl = toastCtrl;
        this.popoverCtrl = popoverCtrl;
        this.http = http;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.contacts = contacts;
        this.modalCtrl = modalCtrl;
        this.appAvailability = appAvailability;
        this.platform = platform;
        this.service = service;
        this.launchNavigator = launchNavigator;
        this.callNumber = callNumber;
        this.iab = iab;
        this.isLoading = true;
        this.rootMode = false;
        this.preloadElement = '';
        this.preloadType = '';
        this.name = '';
        this.products = [];
        this.comments = [];
        this.services = [];
        this.openTab = 'products';
        this.lat = 0;
        this.lng = 0;
        this.totalRate = 0;
        this.comentarios = '';
        this.editorConfig = {
            "editable": true,
            "height": "auto",
            "minHeight": "50",
            "width": "auto",
            "minWidth": "0",
            "toolbar": [
                ["bold", "italic", "underline"]
            ]
        };
        this.store = this.navParams.get("store");
        this.rootMode = (this.navParams.get("rootMode") ? true : false);
        this.preloadElement = (this.navParams.get("preloadElement") ? this.navParams.get("preloadElement") : '');
        this.preloadType = (this.navParams.get("preloadType") ? this.navParams.get("preloadType") : '');
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.lat = resp.coords.latitude;
            _this.lng = resp.coords.longitude;
        }).catch(function (error) {
        });
        this.reloadStore(0);
    }
    Store.prototype.reloadStore = function (isreload) {
        var _this = this;
        if (isreload == 0) {
            this.load = this.loadingCtrl.create();
            this.load.present();
        }
        this.doctorService.getStore(this.store.id).subscribe(function (data) {
            _this.isLoading = false;
            _this.store = data.data;
            _this.name = _this.store.name;
            _this.products = data.products;
            _this.services = data.services;
            _this.comments = data.comments;
            _this.load.dismiss();
            if (_this.preloadType == "product") {
                var element = {};
                for (var i = 0; i < _this.products.length; i++) {
                    if (_this.products[i].id == _this.preloadElement) {
                        element = _this.products[i];
                    }
                }
                if (element.hasOwnProperty("id")) {
                    _this.detail(element, _this.preloadType);
                }
            }
            else if (_this.preloadType == "service") {
                var element = {};
                for (var i = 0; i < _this.services.length; i++) {
                    if (_this.services[i].id == _this.preloadElement) {
                        element = _this.services[i];
                    }
                }
                if (element.hasOwnProperty("id")) {
                    _this.detail(element, _this.preloadType);
                }
            }
            _this.totalRate = parseInt(data.totalRate) || 0;
            _this.store.rate = Math.round(parseFloat(_this.store.rate));
            console.log(_this.store.rate);
            if (isreload == 0) {
                if (_this.products.length == 0 && _this.services.length > 0) {
                    _this.openTab = 'services';
                }
            }
        });
    };
    Store.prototype.onChangeRating = function (e) {
        var _this = this;
        this.load = this.loadingCtrl.create();
        this.load.present();
        this.doctorService.setRanking(this.store.id, e).subscribe(function (data) {
            _this.load.dismiss();
            _this.load = _this.loadingCtrl.create({
                spinner: 'hide',
                content: 'Gracias por votar'
            });
            _this.load.present();
            _this.store.rate = data.rate;
            setTimeout(function () {
                _this.load.dismiss();
            }, 2000);
        });
    };
    Store.prototype.enviarComentario = function () {
        var _this = this;
        if (this.comentarios.trim() == "" || this.comentarios.length < 2) {
            this.service.logError({}, "Tu comentario es muy corto, por favor escribe un comentario más largo");
        }
        else {
            this.load = this.loadingCtrl.create({ content: "posteando..." });
            this.load.present();
            this.doctorService.addComment({
                store: this.store.id,
                comment: this.comentarios
            }).subscribe(function (data) {
                _this.comentarios = "";
                _this.load.dismiss();
                _this.load = _this.loadingCtrl.create({
                    spinner: 'hide',
                    content: 'Gracias por comentar'
                });
                _this.load.present();
                setTimeout(function () {
                    _this.load.dismiss();
                    _this.reloadStore(0);
                }, 2000);
            });
        }
    };
    Store.prototype.showMap = function () {
        var options = {
            destinationName: this.store.name,
            start: [parseFloat(this.store.lat), parseFloat(this.store.lng)]
        };
        this.launchNavigator.navigate([parseFloat(this.store.lat), parseFloat(this.store.lng)], options);
    };
    Store.prototype.detail = function (detail, type) {
        console.log('detail open: ' + type + ' | ' + detail.id);
        if (type == 'service') {
            this.doctorService.addSs(detail.id);
        }
        else if (type == 'product') {
            this.doctorService.addPd(detail.id);
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__modals_detail_detail__["a" /* ModalDetail */], { detail: detail });
        /*let dtModal = this.modalCtrl.create(ModalDetail, { detail: detail });
        dtModal.present();
        dtModal.onDidDismiss(data => {
         
        });*/
    };
    Store.prototype.email = function () {
        this.doctorService.addTracking('email', this.store.id);
        window.open('mailto:' + this.store.email, '_system', 'location=no');
    };
    Store.prototype.call = function () {
        this.doctorService.addTracking('call', this.store.id);
        this.callNumber.callNumber(this.store.phone, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    Store.prototype.showDistance = function (lat1, lon1, lat2, lon2) {
        var dif = this.calcCrow(lat1, lon1, lat2, lon2);
        if (dif < 1) {
            return Math.round(dif * 1000) + " mts";
        }
        else {
            return (Math.round(dif * 10) / 10) + " kms";
        }
    };
    Store.prototype.calcCrow = function (lat1, lon1, lat2, lon2) {
        var R = 6371;
        var dLat = this.toRad(lat2 - lat1);
        var dLon = this.toRad(lon2 - lon1);
        var lat1 = this.toRad(lat1);
        var lat2 = this.toRad(lat2);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d;
    };
    Store.prototype.toRad = function (Value) {
        return Value * Math.PI / 180;
    };
    Store.prototype.whatsapp = function () {
        var _this = this;
        var app;
        this.doctorService.addTracking('whatsapp', this.store.id);
        if (this.platform.is('ios')) {
            app = 'whatsapp://';
        }
        else if (this.platform.is('android')) {
            app = 'com.whatsapp';
        }
        this.appAvailability.check(app).then(function (yes) {
            _this.load = _this.loadingCtrl.create();
            _this.load.present();
            var contactsfound;
            var fields;
            var options = new __WEBPACK_IMPORTED_MODULE_7__ionic_native_contacts__["b" /* ContactFindOptions */]();
            options.filter = _this.store.name;
            options.multiple = true;
            options.hasPhoneNumber = true;
            _this.contacts.find(["displayName", "phoneNumbers", "photos"], options).then(function (contactos) {
                console.log(contactos);
                var create = 0;
                if (contactos.length > 0) {
                    setTimeout(function () {
                        _this.goWhatsapp();
                    }, 2000);
                }
                else {
                    var contact = _this.contacts.create();
                    contact.displayName = _this.store.name;
                    contact.nickname = _this.store.name;
                    var field = new __WEBPACK_IMPORTED_MODULE_7__ionic_native_contacts__["a" /* ContactField */]();
                    field.value = _this.store.whatsapp;
                    field.pref = true;
                    var numberSection = [];
                    numberSection.push(field);
                    contact.phoneNumbers = numberSection;
                    contact.save().then(function (value) {
                        setTimeout(function () {
                            _this.goWhatsapp();
                        }, 2000);
                    }, function (error) {
                        _this.load.dismiss();
                        _this.service.logError("No hemos podido acceder a tu agenda e ir a WhatsApp.");
                    });
                }
            }, function () {
                _this.load.dismiss();
                _this.service.logError("No hemos podido acceder a tu agenda e ir a WhatsApp.");
            });
        }, function (no) {
            _this.service.logError({}, "WhatsApp parece no estar disponible o no se ha autorizado la conexión");
        });
    };
    Store.prototype.goWhatsapp = function () {
        var _this = this;
        this.load.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Contacto creado',
            message: 'Se ha creado el contacto ' + this.store.name + ' ¿Desea continuar a WhatsApp?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        alert.dismiss();
                    }
                },
                {
                    text: 'OK',
                    handler: function () {
                        if (_this.platform.is('android')) {
                            //cordova.plugins.Whatsapp.send(this.store.whatsapp);
                            window.open('https://wa.me/' + _this.store.whatsapp.replace('+', ''), '_system');
                        }
                        else if (_this.platform.is('ios')) {
                            window.open('https://wa.me/' + _this.store.whatsapp.replace('+', ''), '_system');
                            /*window.open('whatsapp://send?text=Hola&phone='+this.store.whatsapp+'&abid='+this.store.whatsapp, '_system', 'location=no');*/
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    Store.prototype.twitter = function () {
        var _this = this;
        var app;
        this.doctorService.addTracking('twitter', this.store.id);
        if (this.platform.is('ios')) {
            app = 'twitter://';
        }
        else if (this.platform.is('android')) {
            app = 'com.twitter.android';
        }
        this.appAvailability.check(app).then(function (yes) {
            window.open('twitter://user?screen_name=' + _this.store.twitter, '_system', 'location=no');
        }, function (no) {
            window.open('https://www.twitter.com/' + _this.store.twitter, '_system');
        });
    };
    Store.prototype.facebook = function () {
        var _this = this;
        var app;
        this.doctorService.addTracking('facebook', this.store.id);
        if (this.platform.is('ios')) {
            app = 'fb://';
        }
        else if (this.platform.is('android')) {
            app = 'com.facebook.katana';
        }
        this.appAvailability.check(app).then(function (yes) {
            if (_this.platform.is('ios')) {
                if (_this.store.fb_ios != "") {
                    window.open(_this.store.fb_ios, '_system', 'location=no');
                }
                else {
                    window.open('fb://page/' + _this.store.facebook, '_system', 'location=no');
                }
            }
            else {
                if (_this.store.fb_android != "") {
                    window.open(_this.store.fb_android, '_system', 'location=no');
                }
                else {
                    window.open('fb://facewebmodal/f?href=https://www.facebook.com/' + _this.store.facebook, '_system', 'location=no');
                }
            }
        }, function (no) {
            window.open('https://www.facebook.com/' + _this.store.facebook, '_system');
        });
    };
    Store.prototype.instagram = function () {
        var _this = this;
        var app;
        this.doctorService.addTracking('instagram', this.store.id);
        if (this.platform.is('ios')) {
            app = 'instagram://';
        }
        else if (this.platform.is('android')) {
            app = 'com.instagram.android';
        }
        this.appAvailability.check(app).then(function (yes) {
            window.open('instagram://user?username=' + _this.store.instagram, '_system', 'location=no');
        }, function (no) {
            window.open('https://www.instagram.com/' + _this.store.instagram, '_system');
        });
    };
    Store.prototype.website = function () {
        this.doctorService.addTracking('website', this.store.id);
        window.open(this.store.website, '_system');
    };
    return Store;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Slides */])
], Store.prototype, "slides", void 0);
Store = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-store',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\home\store.html"*/'<!--\n\n  Generated template for the MyPetsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle *ngIf="rootMode">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{name}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n<div *ngIf="!isLoading">\n\n\n\n  <ion-list class="list-store">\n\n    <ion-item text-wrap>\n\n      <ion-avatar item-start>\n\n        <img src="{{store.avatar != \'\' ? store.avatar : \'assets/img/default/store.png\'}}" />\n\n        <div class="vertical-align-content" *ngIf="lat != 0 && lng != 0 && store.lat != \'\' && store.lng != \'\'">\n\n          <img src="assets/img/map-location.png" (click)="showMap()" />\n\n        </div>\n\n        <div *ngIf="lat != 0 && lng != 0 && store.lat != \'\' && store.lng != \'\'" class="distance">\n\n          <strong>{{showDistance(lat,lng,store.lat,store.lng)}}</strong>\n\n        </div>\n\n      </ion-avatar>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <h2>{{store.name}}</h2>\n\n          <h3>{{store.address}} {{(store.local != "" ? "Loc. "+store.local : "")}}</h3>\n\n        </ion-col>\n\n        <!--<ion-col col-2 text-right class="location">\n\n\n\n        </ion-col>-->\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <p class="opening {{store.open_color}}"><strong>{{store.open_now}}</strong></p>\n\n          <p class="opening">{{store.open_news}}</p>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <!--<span style="font-size:12px;">&nbsp;&nbsp;&nbsp;{{totalRate}} calificaciones</span>-->\n\n          <span style="font-size:12px;">&nbsp;&nbsp;&nbsp;puntuación actual: {{store.rate}}</span>\n\n          <rating [(ngModel)]="store.rate" \n\n                  max="5"  \n\n                  emptyStarIconName="star-outline" \n\n                  halfStarIconName="star-half" \n\n                  starIconName="star" \n\n                  nullable="false"\n\n                  (ngModelChange)="onChangeRating($event)"> \n\n          </rating>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-list>\n\n  <hr />\n\n\n\n  <!-- Social networks --> \n\n  <ion-row class="to-right social">\n\n    <ion-col col-2 *ngIf="store.email != \'\'">\n\n      <button (click)="email()" block>\n\n        <img src="assets/img/arroba.png" />\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-2 *ngIf="store.whatsapp != \'\'">\n\n      <button (click)="whatsapp()" block>\n\n        <img src="assets/img/whatsapp.png" />\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-2 *ngIf="store.website != \'\'">\n\n      <button (click)="website()" block>\n\n        <img src="assets/img/www.png" />\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-2 *ngIf="store.facebook != \'\'">\n\n      <button (click)="facebook()" block>\n\n        <img src="assets/img/facebook.png" />\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-2 *ngIf="store.instagram != \'\'">\n\n      <button (click)="instagram()" block>\n\n        <img src="assets/img/instagram.png" />\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-2 *ngIf="store.twitter != \'\'">\n\n      <button (click)="twitter()" block>\n\n        <img src="assets/img/twitter.png" />\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-2 *ngIf="store.phone != \'\'">\n\n      <button (click)="call()" block>\n\n        <img src="assets/img/call.png" />\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n  <hr />\n\n  <ion-row *ngIf="store.credit_card == 1" class="store-conditions">\n\n    <ion-col col-1><ion-icon name="card"></ion-icon></ion-col>\n\n    <ion-col col-11><b>Redcompra</b></ion-col>\n\n  </ion-row>\n\n  <ion-row *ngIf="store.delivery == 1" class="store-conditions">\n\n    <ion-col col-1><ion-icon name="paper-plane"></ion-icon></ion-col>\n\n    <ion-col col-11><b>Delivery</b></ion-col>\n\n  </ion-row>\n\n  <ion-row *ngIf="store.credit_card_delivery == 1" class="store-conditions">\n\n    <ion-col col-1><ion-icon name="bicycle"></ion-icon></ion-col>\n\n    <ion-col col-11><b>Delivery + Redcompra</b></ion-col>\n\n  </ion-row>\n\n\n\n  <div *ngIf="store.showcase == 1" class="showcase1">\n\n\n\n    <h2 *ngIf="products.length > 0">Productos</h2>\n\n    <!--<ion-card *ngIf="products.length == 0">\n\n      <ion-card-header class="no-items">\n\n        No se han publicado productos\n\n      </ion-card-header>\n\n    </ion-card>\n\n    -->\n\n\n\n    <div *ngIf="products.length > 0">\n\n      <ion-slides spaceBetween="20" slidesPerView="1.5">\n\n        <ion-slide (click)="detail(product, \'product\')" *ngFor="let product of products" [ngStyle]="{\'background-image\': \'url(\'+(product.avatar == \'\' ? \'assets/img/default/no-pictures.png\' : product.avatar)+\')\'}">\n\n      	  <div class="offer" *ngIf="product.offer == \'1\'">Exclusivo App</div>\n\n      	  <div class="offerLogo" *ngIf="product.offer == \'1\'"><img src="assets/img/tag.png" /></div>\n\n          <div class="slide-product">\n\n            <div class="slide-title">{{product.name}}</div>\n\n            <div class="slide-price" *ngIf="product.price > 0">$ {{product.price | number:\'1.0-0\' }}</div>\n\n          </div>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </div>\n\n\n\n    <h2 *ngIf="services.length > 0">Servicios</h2>\n\n    <!--\n\n    <ion-card *ngIf="services.length == 0">\n\n      <ion-card-header class="no-items">\n\n        No se han publicado servicios\n\n      </ion-card-header>\n\n    </ion-card>\n\n    -->\n\n\n\n    <div *ngIf="services.length > 0">\n\n      <ion-slides spaceBetween="20" slidesPerView="1.5">\n\n        <ion-slide (click)="detail(service, \'service\')" *ngFor="let service of services" [ngStyle]="{\'background-image\': \'url(\'+(service.avatar == \'\' ? \'assets/img/default/no-pictures.png\' : service.avatar)+\')\'}">\n\n      	  <div class="offer" *ngIf="service.offer == \'1\'">Exclusivo App</div>\n\n      	  <div class="offerLogo" *ngIf="service.offer == \'1\'"><img src="assets/img/tag.png" /></div>\n\n          <div class="slide-product">\n\n            <div class="slide-title">{{service.name}}</div>\n\n            <div class="slide-price" *ngIf="service.price > 0">$ {{service.price | number:\'1.0-0\' }}</div>\n\n          </div>\n\n        </ion-slide>\n\n      </ion-slides>\n\n      <!--\n\n      <ion-row class="store-services" *ngFor="let service of services">\n\n        <ion-col col-8 class="tab-service-name">\n\n          <strong>{{service.name}}</strong>\n\n        </ion-col>\n\n        <ion-col col-4 class="tab-service-price">\n\n          <span *ngIf="service.price > 0">$ {{service.price | number:\'1.0-0\' }}</span>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <p [innerHtml]="service.description"></p>\n\n        </ion-col>\n\n      </ion-row>\n\n      -->\n\n    </div>\n\n\n\n\n\n    <h2>Comentarios</h2>\n\n    \n\n\n\n    <h6>Deja tu comentario</h6>\n\n    <app-ngx-editor [config]="editorConfig" [placeholder]="\'Escriba aqui...\'" [(ngModel)]="comentarios"></app-ngx-editor>\n\n    <div align="right">\n\n      <button ion-button (click)="enviarComentario();">Enviar</button>\n\n    </div>\n\n    <hr />\n\n\n\n    <ion-card *ngIf="comments.length == 0">\n\n      <ion-card-header class="no-items">\n\n        No se han publicado comentarios\n\n      </ion-card-header>\n\n    </ion-card>\n\n    \n\n\n\n    <div *ngIf="comments.length > 0">\n\n      \n\n      <ion-list class="comentarios">\n\n        <ion-item *ngFor="let comment of comments">\n\n          <ion-avatar item-start>\n\n            <div class="media" [style.background-image]="\'url(\' + (comment.avatar != \'\' && comment.avatar != null ? comment.avatar : \'assets/img/default/avatar.png\' ) + \')\'" style="background-size: cover;"></div>\n\n          </ion-avatar>\n\n          <h2>{{comment.first_name}}</h2>\n\n          <p class="small">Publicado: {{comment.created_at | date:\'dd/MM/yyyy HH:mm\' }}</p>\n\n          <p [innerHTML]="comment.comment"></p>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n    </div>\n\n\n\n  </div>\n\n\n\n  <div *ngIf="store.showcase == 2">\n\n\n\n    <ion-toolbar>\n\n      <ion-segment [(ngModel)]="openTab" color="primary">\n\n        <ion-segment-button value="products" *ngIf="products.length > 0">\n\n          Productos\n\n        </ion-segment-button>\n\n        <ion-segment-button value="services" *ngIf="services.length > 0">\n\n          Servicios\n\n        </ion-segment-button>\n\n        <ion-segment-button value="comments">\n\n          Comentarios\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n    </ion-toolbar>\n\n  \n\n    <div *ngIf="openTab == \'products\'">\n\n      <!--\n\n      <ion-card *ngIf="products.length == 0">\n\n        <ion-card-header class="no-items">\n\n          No se han publicado productos\n\n        </ion-card-header>\n\n      </ion-card>\n\n      -->\n\n\n\n      <div *ngIf="products.length > 0">\n\n        <ion-row class="store-grid">\n\n          <ion-col (click)="detail(product, \'product\')" col-6 *ngFor="let product of products" [ngStyle]="{\'background-image\': \'url(\'+(product.avatar == \'\' ? \'assets/img/default/no-pictures.png\' : product.avatar)+\')\'}">\n\n      	  <div class="offer" *ngIf="product.offer == \'1\'">Exclusivo App</div>\n\n      	  <div class="offerLogo" *ngIf="product.offer == \'1\'"><img src="assets/img/tag.png" /></div>\n\n            <div class="slide-product">\n\n              <div class="slide-title">{{product.name}}</div>\n\n              <div class="slide-price" *ngIf="product.price > 0">$ {{product.price | number:\'1.0-0\' }}</div>\n\n            </div>\n\n          </ion-col>\n\n         </ion-row>\n\n      </div>\n\n\n\n    </div>\n\n\n\n    <div *ngIf="openTab == \'services\'">\n\n      \n\n      <!--\n\n      <ion-card *ngIf="services.length == 0">\n\n        <ion-card-header class="no-items">\n\n          No se han publicado servicios\n\n        </ion-card-header>\n\n      </ion-card>\n\n      -->\n\n\n\n      <div *ngIf="services.length > 0">\n\n        <!--\n\n        <ion-row class="store-services" *ngFor="let service of services">\n\n          <ion-col col-8 class="tab-service-name">\n\n            <strong>{{service.name}}</strong>\n\n          </ion-col>\n\n          <ion-col col-4 class="tab-service-price">\n\n            <span *ngIf="service.price > 0">$ {{service.price | number:\'1.0-0\' }}</span>\n\n          </ion-col>\n\n          <ion-col col-12 class="tab-service-name">\n\n            <p [innerHtml]="service.description"></p>\n\n          </ion-col>\n\n        </ion-row>\n\n        -->\n\n       <ion-row class="store-grid">\n\n        <ion-col (click)="detail(service, \'service\')" col-6 *ngFor="let service of services" [ngStyle]="{\'background-image\': \'url(\'+(service.avatar == \'\' ? \'assets/img/default/no-pictures.png\' : service.avatar)+\')\'}">\n\n      	  <div class="offer" *ngIf="service.offer == \'1\'">Exclusivo App</div>\n\n      	  <div class="offerLogo" *ngIf="service.offer == \'1\'"><img src="assets/img/tag.png" /></div>\n\n          <div class="slide-product">\n\n            <div class="slide-title">{{service.name}}</div>\n\n            <div class="slide-price" *ngIf="service.price > 0">$ {{service.price | number:\'1.0-0\' }}</div>\n\n          </div>\n\n        </ion-col>\n\n       </ion-row>\n\n      </div>\n\n\n\n    </div>\n\n    <div *ngIf="openTab == \'comments\'">\n\n\n\n      <h6>Deja tu comentario</h6>\n\n      <app-ngx-editor [config]="editorConfig" [placeholder]="\'Escriba aqui...\'" [(ngModel)]="comentarios"></app-ngx-editor>\n\n      <div align="right">\n\n        <button ion-button (click)="enviarComentario();">Enviar</button>\n\n      </div>\n\n      <hr />\n\n\n\n      <ion-card *ngIf="comments.length == 0">\n\n        <ion-card-header class="no-items">\n\n          No se han publicado comentarios\n\n        </ion-card-header>\n\n      </ion-card>\n\n      \n\n\n\n      <div *ngIf="comments.length > 0">\n\n        \n\n        <ion-list class="comentarios">\n\n          <ion-item *ngFor="let comment of comments">\n\n            <ion-avatar item-start>\n\n              <div class="media" [style.background-image]="\'url(\' + (comment.avatar != \'\' && comment.avatar != null ? comment.avatar : \'assets/img/default/avatar.png\' ) + \')\'" style="background-size: cover;"></div>\n\n            </ion-avatar>\n\n            <h2>{{comment.first_name}}</h2>\n\n            <p class="small">Publicado: {{comment.created_at | date:\'dd/MM/yyyy HH:mm\' }}</p>\n\n            <p [innerHTML]="comment.comment"></p>\n\n          </ion-item>\n\n        </ion-list>\n\n\n\n      </div>\n\n\n\n\n\n    </div>\n\n\n\n  </div>\n\n\n\n</div>\n\n</ion-content>'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\home\store.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_9__services_doctor_service__["a" /* DoctorService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* GoogleMapsAPIWrapper */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_contacts__["c" /* Contacts */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_availability__["a" /* AppAvailability */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_13__pata__["a" /* Pata */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
        __WEBPACK_IMPORTED_MODULE_12__ionic_native_call_number__["a" /* CallNumber */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], Store);

//# sourceMappingURL=store.js.map

/***/ })

},[521]);
//# sourceMappingURL=main.js.map