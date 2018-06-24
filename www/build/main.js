webpackJsonp([0],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise__);





var BaseService = (function () {
    function BaseService(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    /** get token */
    BaseService.prototype.getAuthToken = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromPromise(this.storage.get('token'));
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

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contacto; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pata__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_date_picker__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(40);
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
        this.storage.get("MP-Profile").then(function (data) {
            _this.name = data.first_name;
            _this.email = data.email;
        });
    }
    Contacto.prototype.send = function () {
        var _this = this;
        if (this.message.length < 4) {
            this.service.logError(null, "Por favor especifique un mensaje más largo");
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
        selector: 'page-contacto',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\contacto\contacto.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>CONTACTO</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content [ngClass]="{\'blurred\' : isBlurred}">\n\n\n\n<div class="formContainer">\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label stacked>Nombre</ion-label>\n\n      <ion-input type="text" readonly [(ngModel)]="name"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Email</ion-label>\n\n      <ion-input type="email" readonly [(ngModel)]="email"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Mensaje</ion-label>\n\n      <ion-textarea [(ngModel)]="message"></ion-textarea>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <div class="buttonWrapper">\n\n    <button (click)="send()" class="buttonPinkOrange" ion-button round>Enviar el mensaje</button>\n\n  </div>\n\n\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\contacto\contacto.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* PopoverController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__pata__["a" /* Pata */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__pata__["a" /* Pata */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_date_picker__["a" /* DatePicker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_date_picker__["a" /* DatePicker */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_7__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_common__["d" /* DatePipe */]) === "function" && _l || Object])
], Contacto);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=contacto.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuntaVecinosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_news_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_doctor_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pata__ = __webpack_require__(22);
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
            _this.denuncia.name = data.first_name;
            _this.contacto.name = data.first_name;
            _this.denuncia.email = data.email;
            _this.contacto.email = data.email;
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
        else if (o.id == 2 || o.id == 3) {
            this.doctorService.getContent(o.id).subscribe(function (data) {
                _this.content = data.data;
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
            this.load.dismiss();
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
        selector: 'page-juntavecinos',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\juntavecinos\juntavecinos.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{title}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  \n\n  <div *ngIf="!isLoading">\n\n\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-4>\n\n          <img src="assets/img/junta.jpg" />\n\n        </ion-col>\n\n        <ion-col col-8 text-center>\n\n          <h2>{{headers.name}}</h2>\n\n          <p [innerHTML]="sanitizer.bypassSecurityTrustHtml(headers.subtitle)"></p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n    <div *ngIf="active == 0">\n\n      <ion-grid class="grid">\n\n        <ion-row>\n\n          <ion-col col-4 *ngFor="let s of sections">\n\n            <button (click)="changeActive(s)"> <div> <img src="{{s.icon}}" /> <br> <label>{{s.name}}</label> </div> </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n\n\n    <div *ngIf="active != 0">\n\n      <ion-grid class="subheader">\n\n        <ion-row>\n\n          <ion-col col-2>\n\n            <img src="{{image}}" />\n\n          </ion-col>\n\n          <ion-col col-7 text-left>\n\n            <h2>{{section}}</h2>\n\n          </ion-col>\n\n          <ion-col col-3 text-right>\n\n            <div class="buttonWrapper">\n\n              <button (click)="changeBack()" class="buttonPinkOrange" ion-button round>Volver</button>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n      <div *ngIf="actionLoaded">\n\n        <!-- Action 1: Wall -->\n\n        <div class="error-box" *ngIf="active == 1 && wall.length == 0"><h4>No fue posible recuperar las publicaciones. Intente más tarde.</h4></div>\n\n        <news-preview *ngFor="let n of wall" [news]="n"></news-preview>\n\n\n\n        <!-- Contenidos HTML -->\n\n        <div *ngIf="content!=\'\'" class="content-custom" [innerHTML]="sanitizer.bypassSecurityTrustHtml(content)"></div>\n\n        \n\n        <!-- Faqs -->\n\n        <ion-list *ngIf="faqs.length > 0" class="faqs">\n\n          <ion-item padding *ngFor="let d of faqs; let i = index"><ion-icon color="primary" item-right [name]="d.icon" (click)="toggleDetails(d)"></ion-icon>\n\n            {{i + 1}}.- {{d.title}}\n\n            <div *ngIf="d.showDetails" [innerHTML]="sanitizer.bypassSecurityTrustHtml(d.content)"></div>\n\n          </ion-item>\n\n        </ion-list>\n\n\n\n        <!-- Formulario de denuncias -->\n\n        <div class="formContainer" *ngIf="denunciaForm">\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-label stacked>Nombre</ion-label>\n\n              <ion-input type="text" readonly [(ngModel)]="denuncia.name"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked>Email</ion-label>\n\n              <ion-input type="email" readonly [(ngModel)]="denuncia.email"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked>Mensaje</ion-label>\n\n              <ion-textarea autosize [(ngModel)]="denuncia.message"></ion-textarea>\n\n            </ion-item>\n\n          </ion-list>\n\n\n\n          <div class="buttonWrapper">\n\n            <button (click)="sendDenuncia()" class="buttonPinkOrange" ion-button round>Enviar el mensaje</button>\n\n          </div>\n\n\n\n        </div>\n\n        \n\n        <!-- Formulario de contacto -->\n\n        <div class="formContainer" *ngIf="contactoForm">\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-label stacked>Nombre</ion-label>\n\n              <ion-input type="text" readonly [(ngModel)]="contacto.name"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked>Email</ion-label>\n\n              <ion-input type="email" readonly [(ngModel)]="contacto.email"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked>Mensaje</ion-label>\n\n              <ion-textarea autosize [(ngModel)]="contacto.message"></ion-textarea>\n\n            </ion-item>\n\n          </ion-list>\n\n\n\n          <div class="buttonWrapper">\n\n            <button (click)="sendContacto()" class="buttonPinkOrange" ion-button round>Enviar el mensaje</button>\n\n          </div>\n\n\n\n        </div>\n\n\n\n      </div>\n\n    </div>\n\n\n\n  </div>\n\n\n\n  <!--\n\n  <div *ngIf="openTab == \'news\'">\n\n\n\n    <div class="subTitle">{{ \'HOME.NEWS\' | translate }}</div>\n\n    <news-preview *ngFor="let n of news" [news]="n"></news-preview>\n\n\n\n    <div *ngIf="isLoading">\n\n      <div class="timeline-wrapper">\n\n          <div class="timeline-item forceh">\n\n            <div class="animated-background">\n\n              <div class="background-masker news-img"></div>\n\n             </div>\n\n          </div>\n\n          <div class="timeline-item forceh">\n\n            <div class="animated-background">\n\n              <div class="background-masker news-img"></div>\n\n             </div>\n\n          </div>\n\n      </div>\n\n    </div>\n\n \n\n  </div>\n\n  -->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\juntavecinos\juntavecinos.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__services_news_service__["a" /* NewsService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__services_doctor_service__["a" /* DoctorService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_6__pata__["a" /* Pata */],
        __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
], JuntaVecinosPage);

//# sourceMappingURL=juntavecinos.js.map

/***/ }),

/***/ 170:
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
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 213:
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
webpackEmptyAsyncContext.id = 213;

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pata; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_forkJoin__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modals_ok_ok__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modals_err_err__ = __webpack_require__(286);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
], Pata);

//# sourceMappingURL=pata.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pata__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popovers_profile_media_profile_media__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(40);
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
        this.isBlurred = false;
        this.loaded = false;
        this.states = [];
        this.cities = [];
        this.passwd = '';
        this.storage.get("MP-Profile").then(function (val) {
            _this.userService.getId(val.id).subscribe(function (ok) {
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
        var loading = this.loadingCtrl.create({
            content: 'guardando...'
        });
        loading.present();
        //this.storage.get('MP-Profile').then((val) => {
        var updateOperation = this.userService.update({
            name: this.me.first_name,
            state: this.me.address.state,
            city: this.me.address.city,
            email: this.me.email,
            phone: this.me.phone,
            passwd: this.passwd
        });
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
            console.log('in error profile');
            loading.dismiss();
            _this.service.logError(null, "No fue posible guardar sus datos, intente nuevamente");
        });
        //});
        //this.service.logError(null, "No fue posible guardar sus datos, intente nuevamente");
    };
    Profile.prototype.removeBlur = function () {
        this.isBlurred = false;
    };
    Profile.prototype.presentMediaOptionsPopover = function (event) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__popovers_profile_media_profile_media__["a" /* ProfileMedia */]);
        popover.present({
            ev: event
        });
        popover.onDidDismiss(function (change) {
            if (change) {
                _this.storage.get("MP-Profile").then(function (val) {
                    _this.userService.getId(val.id).subscribe(function (ok) {
                        _this.me = val;
                        _this.loaded = true;
                        if (_this.me.avatar != null && _this.me.avatar != "") {
                            _this.me.avatar = _this.me.avatar;
                        }
                        _this.changeAvatar(_this.me.avatar);
                    });
                });
            }
            _this.removeBlur();
        });
        this.isBlurred = true;
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
        selector: 'page-profile',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title class="no-padding">MI PERFIL</ion-title>\n\n    <ion-buttons end>\n\n      <button (click)="presentMediaOptionsPopover($event)" class="buttonPinkOrange camera">\n\n        <ion-icon ios="ios-camera-outline" md="ios-camera-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content [ngClass]="{\'blurred\' : isBlurred}">\n\n\n\n  <div *ngIf="loaded">\n\n    <div class="mediaSlideContainer">\n\n        <div class="media" [style.background-image]="\'url(\' + (me.avatar != \'\' && me.avatar != null ? me.avatar : \'assets/img/default/avatar.png\' ) + \')\'" style="background-size: cover;"></div>\n\n    </div>\n\n    <div class="name">\n\n      {{ me.first_name }}\n\n    </div>\n\n    <div class="welcome">\n\n      Información de mi cuenta\n\n    </div>\n\n\n\n    <div class="formContainer">\n\n      <ion-item>\n\n        <ion-label fixed>Nombre</ion-label>\n\n        <ion-input type="text" [(ngModel)]="me.first_name"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>Email</ion-label>\n\n        <ion-input type="text" [(ngModel)]="me.email"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>Villa</ion-label>\n\n        <ion-select [(ngModel)]="me.address.state" (ionChange)="refreshDistrito($event)">\n\n          <ion-option *ngFor="let state of states" [value]="state.id">{{state.name}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>Sector</ion-label>\n\n        <ion-select [(ngModel)]="me.address.city">\n\n          <ion-option *ngFor="let city of cities" [value]="city.id">{{city.name}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>Telefono</ion-label>\n\n        <ion-input type="tel" [(ngModel)]="me.phone"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>Contraseña</ion-label>\n\n        <ion-input type="password" [(ngModel)]="passwd" placeholder="Crea o modifica tu clave"></ion-input>\n\n      </ion-item>\n\n      <!--\n\n      <ion-item>\n\n        <ion-label fixed>Contraseña</ion-label>\n\n        <ion-label fixed><button (click)="changePassword()" class="buttonPinkOrange" style="top: 7px; left: 124px;" ion-button round>Cambiar</button></ion-label>\n\n      </ion-item>\n\n      -->\n\n      <div class="buttonWrapper">\n\n        <button (click)="save()" class="buttonPinkOrange" ion-button round>{{ \'PET.UPDATE_INFO\' | translate }}</button>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__pata__["a" /* Pata */],
        __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__["a" /* DatePicker */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_8__angular_common__["d" /* DatePipe */]])
], Profile);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalOK; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
], ModalOK);

//# sourceMappingURL=ok.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalERR; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
], ModalERR);

//# sourceMappingURL=err.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
    function ModalDetail(viewCtrl, params, renderer) {
        this.viewCtrl = viewCtrl;
        this.params = params;
        this.renderer = renderer;
        this.detail = params.get('detail');
    }
    ModalDetail.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalDetail.prototype.ngOnDestroy = function () {
    };
    return ModalDetail;
}());
ModalDetail = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-modalDetail',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\modals\detail\detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{detail.name}}</ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button icon-only (click)="closeModal()">\n\n            <ion-icon item-right name="ios-close-outline"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div class="media" [style.background-image]="\'url(\' + (detail.avatar != \'\' && detail.avatar != null ? detail.avatar : \'assets/img/default/avatar.png\' ) + \')\'" style="background-size: cover;"></div>\n\n\n\n    <div class="pd20">\n\n    \n\n	    <h4>{{detail.name}}</h4>\n\n	    <h4 text-right *ngIf="detail.price > 0">$ {{detail.price | number:\'1.0-0\'}}</h4>\n\n	    <hr />\n\n		<div text-right>\n\n			<strong>Visto: </strong> {{detail.qty}} veces\n\n		</div>\n\n	    <hr />\n\n	    <p [innerHTML]="detail.description"></p>\n\n\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\modals\detail\detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
], ModalDetail);

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categoria; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contacto_contacto__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_store__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_doctor_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(11);
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
        console.log('constructor!!!');
        this.categ = this.navParams.get("categ");
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
    }
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
    };
    return Categoria;
}());
Categoria = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-categoria',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\home\categoria.html"*/'<!--\n\n  Generated template for the MyPetsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title class="no-padding">{{title}}</ion-title>\n\n    <ion-buttons end>\n\n      <button class="search-top" ion-button icon-only (click)="toggleSearch()">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar class="searchbar" *ngIf="searchActive">\n\n      <ion-searchbar (ionClear)="onClear($event)" (ionInput)="onSearch($event)" [(ngModel)]="search" placeholder="Tiendas, productos y servicios en {{title}}"></ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n<div *ngIf="isSearching" class="search-container">\n\n  <div *ngIf="isSearchingLoad">\n\n    <div text-center>\n\n      <ion-spinner></ion-spinner>\n\n      <br /><br />\n\n      <strong>Buscando</strong><br />\n\n      &quot;{{search}}&quot;\n\n    </div>\n\n  </div>\n\n  <div *ngIf="!isSearchingLoad">\n\n    <div *ngIf="searchStores.length == 0 && searchProducts.length == 0 && searchServices.length == 0 && !isSearchingLoad" text-center>\n\n      <ion-icon name="hand"></ion-icon>\n\n      <br />\n\n      <strong>No se encontraron resultados</strong><br />\n\n      &quot;{{search}}&quot;\n\n    </div>\n\n\n\n    <div class="search-results" *ngIf="(searchStores.length > 0 || searchProducts.length > 0 || searchServices.length > 0) && !isSearchingLoad">\n\n\n\n      <ion-list>\n\n        <ion-list-header *ngIf="searchStores.length > 0">\n\n          Tiendas ({{searchStores.length}})\n\n        </ion-list-header>\n\n\n\n        <ion-item *ngFor="let result of searchStores" (click)="goToStore(result);">\n\n          <ion-row>\n\n            <ion-col col-4>\n\n              <img src="{{result.icon}}" />\n\n            </ion-col>\n\n            <ion-col col-8>\n\n                <strong>{{result.name}}</strong>\n\n                {{result.address}} {{(result.local != "" ? "Loc. "+result.local : "")}}\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n\n\n        <ion-list-header *ngIf="searchProducts.length > 0">\n\n          Productos ({{searchProducts.length}})\n\n        </ion-list-header>\n\n\n\n        <ion-item *ngFor="let result of searchProducts" (click)="goToStore(result.store);">\n\n          <ion-row>\n\n            <ion-col col-4>\n\n              <img src="{{result.avatar}}" />\n\n            </ion-col>\n\n            <ion-col col-8>\n\n                <strong>{{result.name}}</strong>\n\n                <strong *ngIf="result.price != 0">$ {{result.price | number:\'1.0-0\' }}</strong>\n\n                Encontrado en <b>{{result.store.name}}</b>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n\n\n        <ion-list-header *ngIf="searchServices.length > 0">\n\n          Servicios ({{searchServices.length}})\n\n        </ion-list-header>\n\n\n\n        <ion-item *ngFor="let result of searchServices" (click)="goToStore(result.store);">\n\n          <ion-row>\n\n            <ion-col col-4>\n\n              <img src="{{result.avatar}}" />\n\n            </ion-col>\n\n            <ion-col col-8>\n\n                <strong>{{result.name}}</strong>\n\n                <strong *ngIf="result.price != 0">$ {{result.price | number:\'1.0-0\' }}</strong>\n\n                Encontrado en <b>{{result.store.name}}</b>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n\n\n\n\n    </div>\n\n  </div>\n\n</div>\n\n\n\n<div *ngIf="searchActive && !isSearching" class="search-container2" text-center>\n\n      <ion-icon name="search"></ion-icon>\n\n      <br />\n\n      <strong>Comienza a escribir para<br />buscar tiendas, productos o servicios<br />en {{title}}</strong><br />\n\n      <br />\n\n</div>\n\n\n\n\n\n<ion-refresher (ionRefresh)="doRefresh($event)"  *ngIf="!isSearching">\n\n  <ion-refresher-content pullingText="actualizar..." refreshingText="actualizando..."></ion-refresher-content>\n\n</ion-refresher>\n\n\n\n<div *ngIf="isLoading" class="pd20">\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n          <div class="background-masker news-icon2"></div>\n\n         </div>\n\n      </div>\n\n  </div>\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n          <div class="background-masker news-icon2"></div>\n\n         </div>\n\n      </div>\n\n  </div>\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n          <div class="background-masker news-icon2"></div>\n\n         </div>\n\n      </div>\n\n  </div>\n\n</div>\n\n\n\n<div *ngIf="!isLoading && !searchActive">\n\n\n\n  <ion-list class="list-store pd20">\n\n    <ion-item *ngFor="let store of stores" (click)="verStore(store)" text-wrap>\n\n      <ion-avatar item-start>\n\n        <img src="{{store.avatar != \'\' ? store.avatar : \'assets/img/default/store.png\'}}" />\n\n      </ion-avatar>\n\n      <ion-row>\n\n        <ion-col col-9>\n\n          <h2>{{store.name}}</h2>\n\n          <h3>{{store.address}} {{(store.local != "" ? "Loc. "+store.local : "")}}</h3>\n\n          <!--<p>I\'ve had a pretty messed up day. If we just...</p>-->\n\n        </ion-col>\n\n        <ion-col col-3 text-center class="mts">\n\n          <div *ngIf="store.lat != \'\' && store.lng != \'\'">\n\n            <div><img src="assets/img/map-location.png" (click)="showMap(store)" /></div>\n\n            <div *ngIf="lat != 0 && lng != 0">\n\n            <strong>{{showDistance(lat,lng,store.lat,store.lng)}}</strong>\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-list>\n\n</div>\n\n\n\n<ion-card *ngIf="!isLoading && stores.length == 0">\n\n  <ion-card-header class="no-items">\n\n    <ion-icon name="pricetag"></ion-icon>\n\n    <br />\n\n    No tenemos tiendas en <br />\n\n    <strong>{{title}}</strong>\n\n  </ion-card-header>\n\n  <ion-list>\n\n    <button ion-item (click)="goContacto()">\n\n      <b>¿Como puedo aparecer aquí?</b>\n\n      <ion-icon name="arrow-forward" item-end></ion-icon>\n\n    </button>\n\n  </ion-list>  \n\n</ion-card>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\home\categoria.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_8__services_doctor_service__["a" /* DoctorService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* GoogleMapsAPIWrapper */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__["a" /* LaunchNavigator */]])
], Categoria);

//# sourceMappingURL=categoria.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pata__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(39);
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
    function LoginPage(navCtrl, navParams, service, loadingCtrl, storage, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.auth = auth;
        this.login = {
            email: '',
            name: '',
            passwd: ''
        };
        this.welcome0 = true;
        this.welcome1 = false;
        this.login = {
            name: '',
            email: '',
            passwd: ''
        };
    }
    LoginPage.prototype.next = function () {
        var _this = this;
        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
                    _this.auth.setToken(data.token);
                    _this.storage.set("MP-Profile", data.profile);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
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
                    _this.auth.setToken(data.token);
                    _this.storage.set("MP-Profile", data.profile);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
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
        selector: 'page-login',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content scrollX="false" scrollY="false" scroll="false" class="noscroll">\n\n	<ion-scroll scrollX="false" scrollY="true">\n\n	  <img class="logo" src="assets/img/logo.png" alt="">\n\n	  <div *ngIf="welcome0">\n\n		  <div class="welcome">Bienvenido</div>\n\n		  <div class="listWrapper" scroll="false">\n\n		    <ion-list>\n\n		      <ion-item>\n\n		        <ion-input type="email" [(ngModel)]="login.name" placeholder="Tu nombre y apellido"></ion-input>\n\n		      </ion-item>\n\n		      <ion-item>\n\n		        <ion-input type="text" [(ngModel)]="login.email" placeholder="Tu email"></ion-input>\n\n		      </ion-item>\n\n		    </ion-list>\n\n		  </div>\n\n		  <div class="buttonWrapper">\n\n		    <button class="buttonPinkOrange" ion-button round full (click)="next()">Comenzar</button>\n\n		  </div>\n\n	  </div>\n\n	  <div *ngIf="welcome1">\n\n		  <div class="welcome">Ingrese clave de acceso</div>\n\n		  <p>Esta cuenta está protegida por contraseña.</p>\n\n		  <div class="listWrapper" scroll="false">\n\n		    <ion-list>\n\n		      <ion-item>\n\n		        <ion-input type="password" [(ngModel)]="login.passwd" placeholder=""></ion-input>\n\n		      </ion-item>\n\n		    </ion-list>\n\n		  </div>\n\n		  <div class="buttonWrapper">\n\n		    <button class="buttonPinkOrange" ion-button round full (click)="withPassword()">Comenzar</button>\n\n		  </div>\n\n	  </div>\n\n\n\n	</ion-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__pata__["a" /* Pata */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__pata__["a" /* Pata */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _f || Object])
], LoginPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mapa; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_store__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_doctor_service__ = __webpack_require__(46);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__services_doctor_service__["a" /* DoctorService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* GoogleMapsAPIWrapper */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
], Mapa);

//# sourceMappingURL=mapa.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreProfile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pata__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popovers_profile_media_profile_media__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(40);
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
        //this.storage.get("MP-Profile").then((val) => {
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
        this.states = [];
        this.cities = [];
        this.userService.getStore().subscribe(function (ok) {
            _this.store = ok.data;
            _this.loaded = true;
            if (_this.store.avatar == null && _this.store.avatar == "") {
                _this.store.avatar = "assets/img/default/avatar.png";
            }
            _this.changeAvatar(_this.store.avatar);
            _this.authService.getStates().subscribe(function (data) {
                _this.states = data.data;
            });
            _this.authService.getCities(_this.store.state).subscribe(function (data) {
                _this.cities = data.data;
            });
        }, function (err) {
            _this.service.logError(null, "No fue posible recuperar perfil de tienda. Verifica la disponibilidad de internet");
        });
        //});
    }
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
            state: this.store.state,
            city: this.store.city,
            email: this.store.email,
            phone: this.store.phone,
            address: this.store.address,
            whatsapp: this.store.whatsapp,
            website: this.store.website
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
    StoreProfile.prototype.removeBlur = function () {
        this.isBlurred = false;
    };
    StoreProfile.prototype.presentMediaOptionsPopover = function (event) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__popovers_profile_media_profile_media__["a" /* ProfileMedia */]);
        popover.present({
            ev: event
        });
        popover.onDidDismiss(function (change) {
            if (change) {
                /*
                this.storage.get("MP-Profile").then((val) => {
                  this.store = val;
                  this.loaded = true;
                  if (this.store.avatar != null && this.store.avatar != "") {
                    this.store.avatar = this.store.avatar.replace('/public/','');
                  }
                  this.changeAvatar(this.store.avatar);
                });
                */
            }
            _this.removeBlur();
        });
        this.isBlurred = true;
    };
    StoreProfile.prototype.changeAvatar = function (avatar) {
        this.userService.changeAvatar.emit(avatar);
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
        selector: 'page-storeprofile',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\storeprofile\storeprofile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button icon-only (click)="gotoHome()" class="my-style-for-modal">\n\n      <ion-icon class="ionicons" name="arrow-back"></ion-icon>\n\n    </button>\n\n    <ion-title>PERFIL DE TIENDA</ion-title>\n\n    <ion-buttons end>\n\n    <button (click)="presentMediaOptionsPopover($event)" class="buttonPinkOrange camera">\n\n      <ion-icon ios="ios-camera-outline" md="ios-camera-outline"></ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content [ngClass]="{\'blurred\' : isBlurred}">\n\n\n\n  <div *ngIf="loaded">\n\n    <div class="mediaSlideContainer">\n\n        <div class="media" [style.background-image]="\'url(\' + (store.avatar != \'\' && store.avatar != null ? store.avatar : \'assets/img/default/avatar.png\' ) + \')\'" style="background-size: cover;"></div>\n\n    </div>\n\n    <div class="name">\n\n      {{ store.name }}\n\n    </div>\n\n    <div class="welcome">\n\n      Información de mi tienda\n\n    </div>\n\n\n\n    <div class="formContainer">\n\n      <ion-item>\n\n        <ion-label fixed>Nombre</ion-label>\n\n        <ion-input type="text" [(ngModel)]="store.name"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>Email tienda</ion-label>\n\n        <ion-input type="text" [(ngModel)]="store.email"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>Dirección</ion-label>\n\n        <ion-input type="text" [(ngModel)]="store.address"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label fixed>Villa</ion-label>\n\n        <ion-select [(ngModel)]="store.state" (ionChange)="refreshDistrito($event)">\n\n          <ion-option *ngFor="let state of states" [value]="state.id">{{state.name}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>Sector</ion-label>\n\n        <ion-select [(ngModel)]="store.city">\n\n          <ion-option *ngFor="let city of cities" [value]="city.id">{{city.name}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>Telefono</ion-label>\n\n        <ion-input type="tel" [(ngModel)]="store.phone"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>WhatsApp</ion-label>\n\n        <ion-input type="tel" [(ngModel)]="store.whatsapp"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>Sitio Web</ion-label>\n\n        <ion-input type="tel" [(ngModel)]="store.website"></ion-input>\n\n      </ion-item>      \n\n      <!--\n\n      <ion-item>\n\n        <ion-label fixed>Contraseña</ion-label>\n\n        <ion-label fixed><button (click)="changePassword()" class="buttonPinkOrange" style="top: 7px; left: 124px;" ion-button round>Cambiar</button></ion-label>\n\n      </ion-item>\n\n      -->\n\n      <div class="buttonWrapper">\n\n        <button (click)="save()" class="buttonPinkOrange" ion-button round>{{ \'PET.UPDATE_INFO\' | translate }}</button>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\storeprofile\storeprofile.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* PopoverController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__pata__["a" /* Pata */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__pata__["a" /* Pata */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__["a" /* DatePicker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__["a" /* DatePicker */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_8__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_common__["d" /* DatePipe */]) === "function" && _l || Object])
], StoreProfile);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=storeprofile.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreProducts; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pata__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popovers_profile_media_profile_media__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(40);
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
    function StoreProducts(navCtrl, storage, navParams, popoverCtrl, loadingCtrl, service, userService, authService, datePicker, modalCtrl, datePipe) {
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
        this.states = [];
        this.cities = [];
        this.loading = this.loadingCtrl.create({
            content: 'cargando listado...'
        });
        this.loading.present();
        setTimeout(function () {
            _this.loading.dismiss();
        }, 2000);
    }
    StoreProducts.prototype.refreshDistrito = function (e) {
        var _this = this;
        this.authService.getCities(this.store.state).subscribe(function (data) {
            _this.cities = data.data;
        });
    };
    StoreProducts.prototype.save = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'guardando...'
        });
        loading.present();
        var updateOperation = this.userService.updateStore({
            name: this.store.name,
            state: this.store.state,
            city: this.store.city,
            email: this.store.email,
            phone: this.store.phone,
            address: this.store.address,
            whatsapp: this.store.whatsapp,
            website: this.store.website
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
    StoreProducts.prototype.removeBlur = function () {
        this.isBlurred = false;
    };
    StoreProducts.prototype.presentMediaOptionsPopover = function (event) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__popovers_profile_media_profile_media__["a" /* ProfileMedia */]);
        popover.present({
            ev: event
        });
        popover.onDidDismiss(function (change) {
            if (change) {
                /*
                this.storage.get("MP-Profile").then((val) => {
                  this.store = val;
                  this.loaded = true;
                  if (this.store.avatar != null && this.store.avatar != "") {
                    this.store.avatar = this.store.avatar.replace('/public/','');
                  }
                  this.changeAvatar(this.store.avatar);
                });
                */
            }
            _this.removeBlur();
        });
        this.isBlurred = true;
    };
    StoreProducts.prototype.changeAvatar = function (avatar) {
        this.userService.changeAvatar.emit(avatar);
    };
    /** Birthday Date Picker */
    StoreProducts.prototype.openDatepicker = function () {
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
    StoreProducts.prototype.formatDate = function (date) {
        return date;
    };
    StoreProducts.prototype.gotoHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
    };
    return StoreProducts;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('datepicker'),
    __metadata("design:type", Object)
], StoreProducts.prototype, "datepicker", void 0);
StoreProducts = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-storeproducts',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\storeproducts\storeproducts.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button icon-only (click)="gotoHome()" class="my-style-for-modal">\n\n      <ion-icon class="ionicons" name="arrow-back"></ion-icon>\n\n    </button>\n\n    <ion-title>MIS PRODUCTOS</ion-title>\n\n    <ion-buttons end>\n\n    <button class="">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content [ngClass]="{\'blurred\' : isBlurred}">\n\n\n\n  <div *ngIf="loaded">\n\n\n\n    <ion-list>\n\n      <ion-list-header>Productos</ion-list-header>\n\n      <ion-item-group reorder="true">\n\n        <ion-item *ngFor="let item of items">{{ item }}</ion-item>\n\n      </ion-item-group>\n\n    </ion-list>\n\n\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\storeproducts\storeproducts.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* PopoverController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__pata__["a" /* Pata */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__pata__["a" /* Pata */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__["a" /* DatePicker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__["a" /* DatePicker */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_8__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_common__["d" /* DatePipe */]) === "function" && _l || Object])
], StoreProducts);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=storeproducts.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pata__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popovers_profile_media_profile_media__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(40);
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
    function StoreServices(navCtrl, storage, navParams, popoverCtrl, loadingCtrl, service, userService, authService, datePicker, modalCtrl, datePipe) {
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
        this.states = [];
        this.cities = [];
        this.loading = this.loadingCtrl.create({
            content: 'cargando listado...'
        });
        this.loading.present();
        setTimeout(function () {
            _this.loading.dismiss();
        }, 2000);
    }
    StoreServices.prototype.refreshDistrito = function (e) {
        var _this = this;
        this.authService.getCities(this.store.state).subscribe(function (data) {
            _this.cities = data.data;
        });
    };
    StoreServices.prototype.save = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'guardando...'
        });
        loading.present();
        var updateOperation = this.userService.updateStore({
            name: this.store.name,
            state: this.store.state,
            city: this.store.city,
            email: this.store.email,
            phone: this.store.phone,
            address: this.store.address,
            whatsapp: this.store.whatsapp,
            website: this.store.website
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
    StoreServices.prototype.removeBlur = function () {
        this.isBlurred = false;
    };
    StoreServices.prototype.presentMediaOptionsPopover = function (event) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__popovers_profile_media_profile_media__["a" /* ProfileMedia */]);
        popover.present({
            ev: event
        });
        popover.onDidDismiss(function (change) {
            if (change) {
                /*
                this.storage.get("MP-Profile").then((val) => {
                  this.store = val;
                  this.loaded = true;
                  if (this.store.avatar != null && this.store.avatar != "") {
                    this.store.avatar = this.store.avatar.replace('/public/','');
                  }
                  this.changeAvatar(this.store.avatar);
                });
                */
            }
            _this.removeBlur();
        });
        this.isBlurred = true;
    };
    StoreServices.prototype.changeAvatar = function (avatar) {
        this.userService.changeAvatar.emit(avatar);
    };
    /** Birthday Date Picker */
    StoreServices.prototype.openDatepicker = function () {
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
    StoreServices.prototype.formatDate = function (date) {
        return date;
    };
    StoreServices.prototype.gotoHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
    };
    return StoreServices;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('datepicker'),
    __metadata("design:type", Object)
], StoreServices.prototype, "datepicker", void 0);
StoreServices = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-storeservices',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\storeservices\storeservices.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button icon-only (click)="gotoHome()" class="my-style-for-modal">\n\n      <ion-icon class="ionicons" name="arrow-back"></ion-icon>\n\n    </button>\n\n    <ion-title>MIS SERVICIOS</ion-title>\n\n    <ion-buttons end>\n\n    <button class="">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content [ngClass]="{\'blurred\' : isBlurred}">\n\n\n\n  <div *ngIf="loaded">\n\n\n\n    <ion-list>\n\n      <ion-list-header>Productos</ion-list-header>\n\n      <ion-item-group reorder="true">\n\n        <ion-item *ngFor="let item of items">{{ item }}</ion-item>\n\n      </ion-item-group>\n\n    </ion-list>\n\n\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\storeservices\storeservices.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* PopoverController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__pata__["a" /* Pata */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__pata__["a" /* Pata */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__["a" /* DatePicker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__["a" /* DatePicker */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_8__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_common__["d" /* DatePipe */]) === "function" && _l || Object])
], StoreServices);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=storeservices.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDetalle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_news_service__ = __webpack_require__(80);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_4__services_news_service__["a" /* NewsService */]])
], NewsDetalle);

//# sourceMappingURL=newsDetalle.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(308);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__option_core__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agm_core__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_barcode_scanner__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_app_availability__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_contacts__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_launch_navigator__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_date_picker__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_fcm__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_device__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_autosize__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_safepipe__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_profile_profile__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_juntavecinos_newsDetalle__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_login_login__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_home_categoria__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_home_store__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_contacto_contacto__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_juntavecinos_juntavecinos__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_storeprofile_storeprofile__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_storeproducts_storeproducts__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_storeservices_storeservices__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_ng2_rut__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_ng2_rut___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_ng2_rut__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_mapa_mapa__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pata__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_popovers_profile_media_profile_media__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_user_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_news_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_doctor_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_news_preview_news_preview__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_status_bar__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_splash_screen__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ngx_translate_http_loader__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__environments_environment__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__modals_ok_ok__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__modals_err_err__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__modals_detail_detail__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_social_sharing__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_native_email_composer__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_call_number__ = __webpack_require__(413);
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
    return new __WEBPACK_IMPORTED_MODULE_43__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
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
            __WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_22__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_juntavecinos_newsDetalle__["a" /* NewsDetalle */],
            __WEBPACK_IMPORTED_MODULE_35__pages_popovers_profile_media_profile_media__["a" /* ProfileMedia */],
            __WEBPACK_IMPORTED_MODULE_24__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_profile_profile__["a" /* Profile */],
            __WEBPACK_IMPORTED_MODULE_27__pages_contacto_contacto__["a" /* Contacto */],
            __WEBPACK_IMPORTED_MODULE_25__pages_home_categoria__["a" /* Categoria */],
            __WEBPACK_IMPORTED_MODULE_26__pages_home_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_29__pages_storeprofile_storeprofile__["a" /* StoreProfile */],
            __WEBPACK_IMPORTED_MODULE_30__pages_storeproducts_storeproducts__["a" /* StoreProducts */],
            __WEBPACK_IMPORTED_MODULE_31__pages_storeservices_storeservices__["a" /* StoreServices */],
            __WEBPACK_IMPORTED_MODULE_28__pages_juntavecinos_juntavecinos__["a" /* JuntaVecinosPage */],
            __WEBPACK_IMPORTED_MODULE_45__modals_ok_ok__["a" /* ModalOK */],
            __WEBPACK_IMPORTED_MODULE_46__modals_err_err__["a" /* ModalERR */],
            __WEBPACK_IMPORTED_MODULE_47__modals_detail_detail__["a" /* ModalDetail */],
            __WEBPACK_IMPORTED_MODULE_33__pages_mapa_mapa__["a" /* Mapa */],
            __WEBPACK_IMPORTED_MODULE_40__components_news_preview_news_preview__["a" /* NewsPreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_autosize__["a" /* Autosize */],
            __WEBPACK_IMPORTED_MODULE_19__components_safepipe__["a" /* SafePipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* MyApp */], {
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
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_6__option_core__["b" /* OptionCoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_44__environments_environment__["a" /* environment */].apiUrl),
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                name: "__satelite",
                driverOrder: ['indexeddb', 'websql']
            }),
            __WEBPACK_IMPORTED_MODULE_8__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBrUo6PdRjbF03o4_xeEoYl9kTD5V7pp7g'
            }),
            __WEBPACK_IMPORTED_MODULE_32_ng2_rut__["Ng2Rut"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_22__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_juntavecinos_newsDetalle__["a" /* NewsDetalle */],
            __WEBPACK_IMPORTED_MODULE_33__pages_mapa_mapa__["a" /* Mapa */],
            __WEBPACK_IMPORTED_MODULE_35__pages_popovers_profile_media_profile_media__["a" /* ProfileMedia */],
            __WEBPACK_IMPORTED_MODULE_24__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_contacto_contacto__["a" /* Contacto */],
            __WEBPACK_IMPORTED_MODULE_25__pages_home_categoria__["a" /* Categoria */],
            __WEBPACK_IMPORTED_MODULE_26__pages_home_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_29__pages_storeprofile_storeprofile__["a" /* StoreProfile */],
            __WEBPACK_IMPORTED_MODULE_30__pages_storeproducts_storeproducts__["a" /* StoreProducts */],
            __WEBPACK_IMPORTED_MODULE_31__pages_storeservices_storeservices__["a" /* StoreServices */],
            __WEBPACK_IMPORTED_MODULE_28__pages_juntavecinos_juntavecinos__["a" /* JuntaVecinosPage */],
            __WEBPACK_IMPORTED_MODULE_40__components_news_preview_news_preview__["a" /* NewsPreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_45__modals_ok_ok__["a" /* ModalOK */],
            __WEBPACK_IMPORTED_MODULE_46__modals_err_err__["a" /* ModalERR */],
            __WEBPACK_IMPORTED_MODULE_47__modals_detail_detail__["a" /* ModalDetail */],
            __WEBPACK_IMPORTED_MODULE_21__pages_profile_profile__["a" /* Profile */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_36__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_37__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_38__services_news_service__["a" /* NewsService */],
            __WEBPACK_IMPORTED_MODULE_39__services_doctor_service__["a" /* DoctorService */],
            __WEBPACK_IMPORTED_MODULE_41__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_42__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__agm_core__["b" /* GoogleMapsAPIWrapper */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_34__pata__["a" /* Pata */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_contacts__["c" /* Contacts */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_app_availability__["a" /* AppAvailability */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_device__["a" /* Device */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["LOCALE_ID"], useValue: "es-ES" },
            __WEBPACK_IMPORTED_MODULE_48__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_49__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_50__ionic_native_email_composer__["a" /* EmailComposer */],
            __WEBPACK_IMPORTED_MODULE_51__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_32_ng2_rut__["RutValidator"]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])
], AppModule);

var _a;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 33:
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
    "version": "1.0"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_fromPromise__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_fromPromise__);
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
    function UserService(http, storage, device) {
        var _this = _super.call(this, http, storage) || this;
        _this.http = http;
        _this.storage = storage;
        _this.device = device;
        _this.changeAvatar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.push = '';
        return _this;
    }
    UserService.prototype.setPush = function (token) {
        this.push = token;
    };
    UserService.prototype.sendPushToServer = function () {
        var _this = this;
        this.getProfile().subscribe(function (result) {
            _this.post('users/device', {
                id: result.id,
                token: _this.push,
                os: _this.device.platform,
                osversion: _this.device.version,
                appversion: __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].version
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
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].fromPromise(this.storage.get('MP-Profile'));
    };
    UserService.prototype.getId = function (id) {
        return this.get('users/profile/' + id);
    };
    UserService.prototype.getStore = function () {
        return this.get('store/profile/');
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
}(__WEBPACK_IMPORTED_MODULE_4__base_service__["a" /* BaseService */]));
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */]])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(33);
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
    AuthService.prototype.setPush = function (token) {
        this.push = token;
    };
    AuthService.prototype.sendPushToServer = function (id) {
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

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_store__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_doctor_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_categoria__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_juntavecinos_juntavecinos__ = __webpack_require__(159);
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
    function HomePage(navCtrl, navParams, doctorService, geolocation, gMaps, toastCtrl, popoverCtrl, http, storage) {
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
        this.isLoading = true;
        this.categs = [];
        this.searchActive = false;
        this.isSearching = false;
        this.isSearchingLoad = false;
        this.search = '';
        this.searchStores = [];
        this.searchProducts = [];
        this.searchServices = [];
        setTimeout(function () {
            _this.doctorService.getAll().subscribe(function (data) {
                _this.isLoading = false;
                _this.categs = data.data;
            });
        }, 2000);
    }
    HomePage.prototype.goToStore = function (store) {
        this.doctorService.addQty(store.id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_home_store__["a" /* Store */], { store: store });
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
        this.searchActive = false;
        this.onClear(false);
        this.searchStores = [];
        this.searchProducts = [];
        this.searchServices = [];
        this.search = '';
        this.isSearching = false;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_home_categoria__["a" /* Categoria */], { categ: categ });
    };
    HomePage.prototype.goToJJVV = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_juntavecinos_juntavecinos__["a" /* JuntaVecinosPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\home\home.html"*/'<!--\n\n  Generated template for the MyPetsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title class="no-padding">CIUDAD SATÉLITE</ion-title>\n\n    <ion-buttons end>\n\n      <button class="search-top" ion-button icon-only (click)="toggleSearch()">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar class="searchbar" *ngIf="searchActive">\n\n      <ion-searchbar (ionClear)="onClear($event)" (ionInput)="onSearch($event)" [(ngModel)]="search" placeholder="Tiendas, productos y servicios en Ciudad Satélite"></ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n<img src="assets/img/jjvv.jpg" *ngIf="!searchActive" (click)="goToJJVV()" class="jjvv" />\n\n\n\n<div *ngIf="isSearching" class="search-container">\n\n  <div *ngIf="isSearchingLoad">\n\n    <div text-center>\n\n      <ion-spinner></ion-spinner>\n\n      <br /><br />\n\n      <strong>Buscando</strong><br />\n\n      &quot;{{search}}&quot;\n\n    </div>\n\n  </div>\n\n  <div *ngIf="!isSearchingLoad">\n\n    <div *ngIf="searchStores.length == 0 && searchProducts.length == 0 && searchServices.length == 0 && !isSearchingLoad" text-center>\n\n      <ion-icon name="hand"></ion-icon>\n\n      <br />\n\n      <strong>No se encontraron resultados</strong><br />\n\n      &quot;{{search}}&quot;\n\n    </div>\n\n    <div class="search-results" *ngIf="(searchStores.length > 0 || searchProducts.length > 0 || searchServices.length > 0) && !isSearchingLoad">\n\n\n\n      <ion-list>\n\n        <ion-list-header *ngIf="searchStores.length > 0">\n\n          Tiendas ({{searchStores.length}})\n\n        </ion-list-header>\n\n\n\n        <ion-item *ngFor="let result of searchStores" (click)="goToStore(result);">\n\n          <ion-row>\n\n            <ion-col col-4>\n\n              <img src="{{result.icon}}" />\n\n            </ion-col>\n\n            <ion-col col-8>\n\n                <strong>{{result.name}}</strong>\n\n                {{result.address}} {{(result.local != "" ? "Loc. "+result.local : "")}}\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n\n\n        <ion-list-header *ngIf="searchProducts.length > 0">\n\n          Productos ({{searchProducts.length}})\n\n        </ion-list-header>\n\n\n\n        <ion-item *ngFor="let result of searchProducts" (click)="goToStore(result.store);">\n\n          <ion-row>\n\n            <ion-col col-4>\n\n              <img src="{{result.avatar}}" />\n\n            </ion-col>\n\n            <ion-col col-8>\n\n                <strong>{{result.name}}</strong>\n\n                <strong *ngIf="result.price != 0">$ {{result.price | number:\'1.0-0\' }}</strong>\n\n                Encontrado en <b>{{result.store.name}}</b>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n\n\n        <ion-list-header *ngIf="searchServices.length > 0">\n\n          Servicios ({{searchServices.length}})\n\n        </ion-list-header>\n\n\n\n        <ion-item *ngFor="let result of searchServices" (click)="goToStore(result.store);">\n\n          <ion-row>\n\n            <ion-col col-4>\n\n              <img src="{{result.avatar}}" />\n\n            </ion-col>\n\n            <ion-col col-8>\n\n                <strong>{{result.name}}</strong>\n\n                <strong *ngIf="result.price != 0">$ {{result.price | number:\'1.0-0\' }}</strong>\n\n                Encontrado en <b>{{result.store.name}}</b>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n\n\n    </div>\n\n  </div>\n\n</div>\n\n\n\n<div *ngIf="searchActive && !isSearching" class="search-container2" text-center>\n\n      <ion-icon name="search"></ion-icon>\n\n      <br />\n\n      <strong>Comienza a escribir para<br />buscar tiendas, productos o servicios</strong><br />\n\n      <br />\n\n</div>\n\n\n\n<ion-refresher (ionRefresh)="doRefresh($event)" *ngIf="!isSearching">\n\n  <ion-refresher-content pullingText="actualizar..." refreshingText="actualizando..."></ion-refresher-content>\n\n</ion-refresher>\n\n\n\n<div *ngIf="isLoading" class="pd20">\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n         </div>\n\n      </div>\n\n  </div>\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n        </div>\n\n      </div>\n\n  </div>\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n        </div>\n\n      </div>\n\n  </div>\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n        </div>\n\n      </div>\n\n  </div>\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n        </div>\n\n      </div>\n\n  </div>\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n        </div>\n\n      </div>\n\n  </div>\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n        </div>\n\n      </div>\n\n  </div>\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n        </div>\n\n      </div>\n\n  </div>\n\n</div>\n\n\n\n<div *ngIf="!isLoading && !searchActive">\n\n\n\n  <ion-list class="pd20">\n\n    <button ion-item detail-push *ngFor="let categ of categs" (click)="verCategoria(categ)">\n\n      <ion-avatar item-start>\n\n        <img src="{{categ.banner}}">\n\n      </ion-avatar>\n\n      <h2>{{categ.name}}</h2>\n\n      <h3>{{categ.total_stores}} tiendas</h3>\n\n      <!--<p>I\'ve had a pretty messed up day. If we just...</p>-->\n\n    </button>\n\n  </ion-list>\n\n</div>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__services_doctor_service__["a" /* DoctorService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* GoogleMapsAPIWrapper */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 401:
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

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(23);
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

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contacto_contacto__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_mapa_mapa__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_storeprofile_storeprofile__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_storeproducts_storeproducts__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_storeservices_storeservices__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_juntavecinos_juntavecinos__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_user_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pata__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_fcm__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__environments_environment__ = __webpack_require__(33);
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
    function MyApp(platform, statusBar, splashScreen, translate, config, storage, service, alertCtrl, userService, loadingController, authService, fcm, menu) {
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
        this.menu = menu;
        this.rootPage = null;
        this.zones = [];
        this.initializeApp();
        this.staticUrl = __WEBPACK_IMPORTED_MODULE_19__environments_environment__["a" /* environment */].staticUrl;
        this.userService.changeAvatar.subscribe(function (st) {
            console.log('change_avatar_main_fire', st);
            _this.user.avatar = st;
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        console.log('initialize');
        this.platform.ready().then(function () {
            console.log('ready');
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleLightContent();
            setTimeout(function () {
                _this.splashScreen.hide();
            }, 0);
            if (_this.platform.is('cordova')) {
                _this.platform.registerBackButtonAction(function () {
                    if (_this.menu.isOpen()) {
                        _this.menu.close();
                    }
                    else if (_this.nav.canGoBack()) {
                        _this.nav.pop();
                    }
                    else {
                        //don't do anything
                    }
                });
                _this.fcm.getToken().then(function (token) {
                    //alert('push:'+ token);
                    _this.userService.setPush(token);
                    _this.authService.setPush(token);
                });
                _this.fcm.onNotification().subscribe(function (data) {
                    //alert('Push:' + JSON.stringify(data));
                    if (data.wasTapped) {
                        console.log("Received in background", data);
                    }
                    else {
                        console.log("Received in foreground", data);
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
                    _this.active = data.profile.types[0];
                    _this.storage.set("active", _this.active);
                    _this.reloadSide();
                    _this.authService.sendPushToServer(_this.user.id);
                }
            });
            /*
            Translate
            this.pages.forEach((page) => {
              this.translate.get(page.titleTranslationKey).subscribe((translation) => {
                page.title = translation;
              })
            });
            */
            console.log('get MP-FT');
            /*this.storage.get("MP-FirstTime").then((val) => {*/
            /*if (val == true) {*/
            _this.storage.get("MP-FirstTime").then(function (val) {
                console.log('MP-FT Res: ', val);
                console.log('get Token');
                _this.storage.get("token").then(function (token) {
                    if (token) {
                        console.log('token true / getProfile()');
                        _this.userService.getProfile().subscribe(function (result) {
                            _this.user = result;
                            _this.userService.getId(result.id).subscribe(function (ok) {
                                _this.user = ok.data;
                                if (_this.user.avatar == null || _this.user.avatar == "") {
                                    _this.user.avatar = "assets/img/default/avatar.png";
                                }
                                _this.storage.get("active").then(function (active) {
                                    _this.active = active;
                                    _this.reloadSide();
                                }, function (err) {
                                    _this.active = ok.data.types[0];
                                    _this.storage.set("active", _this.active);
                                    _this.reloadSide();
                                });
                                _this.userService.sendPushToServer();
                                _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */];
                                _this.loadingHidden();
                            }, function (err) {
                                _this.service.logError(null, "No fue posible recuperar tu perfil. Por favor accede nuevamente.");
                                _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
                                _this.loadingHidden();
                            });
                        }, function (err) {
                            _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
                            _this.loadingHidden();
                        });
                    }
                    else {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
                        _this.loadingHidden();
                    }
                });
            }, function () {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
                _this.loadingHidden();
            });
            /*}
            else {
              this.rootPage = LoginPage; //OnboardingPage;
              this.loadingHidden();
            }*/
            /*})*/
        });
    };
    MyApp.prototype.switchActive = function (zone) {
        console.log("switch zone: ", zone);
        this.active = zone;
        this.storage.set("active", this.active);
        document.getElementById("custom-overlay").style.display = "";
        this.reloadSide();
        setTimeout(function () {
        }, 200);
        setTimeout(function () {
            document.getElementById("custom-overlay").style.display = "none";
        }, 100);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.loadingHidden = function () {
        setTimeout(function () {
            document.getElementById("loader-spinner").classList.add("animated-start");
            setTimeout(function () {
                document.getElementById("custom-overlay").style.display = "none";
            }, 200);
        }, 200);
    };
    MyApp.prototype.profile = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* Profile */]);
    };
    MyApp.prototype.contacto = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_contacto_contacto__["a" /* Contacto */]);
    };
    MyApp.prototype.reloadSide = function () {
        this.pages = [];
        this.pages.push({ title: 'Categorias', component: __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */], selected: true });
        this.pages.push({ title: 'Mapa', component: __WEBPACK_IMPORTED_MODULE_10__pages_mapa_mapa__["a" /* Mapa */], selected: false });
        if (this.active.profile_id == "2") {
            this.pages.push({ title: 'Perfil de tienda', component: __WEBPACK_IMPORTED_MODULE_11__pages_storeprofile_storeprofile__["a" /* StoreProfile */], selected: false });
            this.pages.push({ title: 'Mis productos', component: __WEBPACK_IMPORTED_MODULE_12__pages_storeproducts_storeproducts__["a" /* StoreProducts */], selected: false });
            this.pages.push({ title: 'Mis servicios', component: __WEBPACK_IMPORTED_MODULE_13__pages_storeservices_storeservices__["a" /* StoreServices */], selected: false });
        }
        else {
            this.pages.push({ title: 'Junta de vecinos', component: __WEBPACK_IMPORTED_MODULE_14__pages_juntavecinos_juntavecinos__["a" /* JuntaVecinosPage */], selected: false });
        }
        this.zones = [];
        if (this.user.markets.length > 0) {
            for (var i = 0; i < this.user.markets.length; i++) {
                this.zones.push(this.user.markets[i]);
            }
        }
        /*
        if (this.user.types.length > 1) {
          for (let i=0; i < this.user.types.length ; i++) {
            if (this.user.types[i].profile_id != this.active.profile_id ) {
              this.zones.push(this.user.types[i]);
            }
          }
        }
        */
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
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
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\app\app.html"*/'<ion-menu [content]="content" id="leftMenu" class="sidenav">\n\n\n\n  <div class="profile" *ngIf="user">\n\n    <div class="image" [style.background-image]="\'url(\' + user.avatar + \')\'" style="background-size: cover"></div>\n\n    <div class="name">{{ user.first_name }} {{ user.last_name }} {{ user.company }}</div>\n\n    <div class="scope" *ngIf="active">{{ active.name }} </div>\n\n    <button menuClose (click)="profile()" ion-button round color="light">MI PERFIL</button>\n\n  </div>\n\n\n\n  <div menuClose *ngFor="let p of pages" class="link" [ngClass]="{\'selected\' : p.selected}" (click)="openPage(p)">\n\n    <span>{{p.title}}</span>\n\n  </div>\n\n  \n\n  <div menuClose *ngFor="let zone of zones" class="link destacado" [ngClass]="{\'selected\' : selected}" (click)="switchActive(zone)">\n\n    <span><strong>Administrar</strong><br />{{zone.name}}</span>\n\n  </div>\n\n\n\n  <div menuClose class="link" (click)="contacto()">\n\n    <span>Contacto</span>\n\n  </div>\n\n\n\n  <div menuClose class="link" (click)="closeSession()">\n\n    <span>{{\'APP_MENU.CLOSE\' | translate }}</span>\n\n  </div>\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Config */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_17__pata__["a" /* Pata */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_15__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_18__ionic_native_fcm__["a" /* FCM */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_news_model__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_juntavecinos_newsDetalle__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_news_service__ = __webpack_require__(80);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__services_news_service__["a" /* NewsService */]])
], NewsPreviewComponent);

//# sourceMappingURL=news-preview.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return News; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__option_core__ = __webpack_require__(259);
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

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise__);
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
    function DoctorService(http, storage) {
        var _this = _super.call(this, http, storage) || this;
        _this.http = http;
        _this.storage = storage;
        return _this;
    }
    DoctorService.prototype.getMaps = function () {
        return this.get('maps');
    };
    DoctorService.prototype.getAll = function () {
        return this.get('categs');
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
    DoctorService.prototype.addQty = function (id) {
        this.post('store/see/' + id).subscribe(function (data) { console.log('addQty', data); });
    };
    DoctorService.prototype.addPd = function (id) {
        this.post('store/pd/' + id).subscribe(function (data) { console.log('addPd', data); });
    };
    DoctorService.prototype.addSs = function (id) {
        this.post('store/ss/' + id).subscribe(function (data) { console.log('addSs', data); });
    };
    return DoctorService;
}(__WEBPACK_IMPORTED_MODULE_3__base_service__["a" /* BaseService */]));
DoctorService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _b || Object])
], DoctorService);

var _a, _b;
//# sourceMappingURL=doctor.service.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileMedia; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pata__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(33);
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
        this.storage.get("MP-Profile").then(function (val) {
            _this.userId = val.id;
        });
        this.storage.get("token").then(function (val) {
            _this.token = val;
        });
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
        /*
        this.processTake("R0lGODlhPQBEAPeoAJosM//AwO/AwHVYZ/z595kzAP/s7P+goOXMv8+fhw/v739/f+8PD98fH/8mJl+fn/9ZWb8/PzWlwv///6wWGbImAPgTEMImIN9gUFCEm/gDALULDN8PAD6atYdCTX9gUNKlj8wZAKUsAOzZz+UMAOsJAP/Z2ccMDA8PD/95eX5NWvsJCOVNQPtfX/8zM8+QePLl38MGBr8JCP+zs9myn/8GBqwpAP/GxgwJCPny78lzYLgjAJ8vAP9fX/+MjMUcAN8zM/9wcM8ZGcATEL+QePdZWf/29uc/P9cmJu9MTDImIN+/r7+/vz8/P8VNQGNugV8AAF9fX8swMNgTAFlDOICAgPNSUnNWSMQ5MBAQEJE3QPIGAM9AQMqGcG9vb6MhJsEdGM8vLx8fH98AANIWAMuQeL8fABkTEPPQ0OM5OSYdGFl5jo+Pj/+pqcsTE78wMFNGQLYmID4dGPvd3UBAQJmTkP+8vH9QUK+vr8ZWSHpzcJMmILdwcLOGcHRQUHxwcK9PT9DQ0O/v70w5MLypoG8wKOuwsP/g4P/Q0IcwKEswKMl8aJ9fX2xjdOtGRs/Pz+Dg4GImIP8gIH0sKEAwKKmTiKZ8aB/f39Wsl+LFt8dgUE9PT5x5aHBwcP+AgP+WltdgYMyZfyywz78AAAAAAAD///8AAP9mZv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAKgALAAAAAA9AEQAAAj/AFEJHEiwoMGDCBMqXMiwocAbBww4nEhxoYkUpzJGrMixogkfGUNqlNixJEIDB0SqHGmyJSojM1bKZOmyop0gM3Oe2liTISKMOoPy7GnwY9CjIYcSRYm0aVKSLmE6nfq05QycVLPuhDrxBlCtYJUqNAq2bNWEBj6ZXRuyxZyDRtqwnXvkhACDV+euTeJm1Ki7A73qNWtFiF+/gA95Gly2CJLDhwEHMOUAAuOpLYDEgBxZ4GRTlC1fDnpkM+fOqD6DDj1aZpITp0dtGCDhr+fVuCu3zlg49ijaokTZTo27uG7Gjn2P+hI8+PDPERoUB318bWbfAJ5sUNFcuGRTYUqV/3ogfXp1rWlMc6awJjiAAd2fm4ogXjz56aypOoIde4OE5u/F9x199dlXnnGiHZWEYbGpsAEA3QXYnHwEFliKAgswgJ8LPeiUXGwedCAKABACCN+EA1pYIIYaFlcDhytd51sGAJbo3onOpajiihlO92KHGaUXGwWjUBChjSPiWJuOO/LYIm4v1tXfE6J4gCSJEZ7YgRYUNrkji9P55sF/ogxw5ZkSqIDaZBV6aSGYq/lGZplndkckZ98xoICbTcIJGQAZcNmdmUc210hs35nCyJ58fgmIKX5RQGOZowxaZwYA+JaoKQwswGijBV4C6SiTUmpphMspJx9unX4KaimjDv9aaXOEBteBqmuuxgEHoLX6Kqx+yXqqBANsgCtit4FWQAEkrNbpq7HSOmtwag5w57GrmlJBASEU18ADjUYb3ADTinIttsgSB1oJFfA63bduimuqKB1keqwUhoCSK374wbujvOSu4QG6UvxBRydcpKsav++Ca6G8A6Pr1x2kVMyHwsVxUALDq/krnrhPSOzXG1lUTIoffqGR7Goi2MAxbv6O2kEG56I7CSlRsEFKFVyovDJoIRTg7sugNRDGqCJzJgcKE0ywc0ELm6KBCCJo8DIPFeCWNGcyqNFE06ToAfV0HBRgxsvLThHn1oddQMrXj5DyAQgjEHSAJMWZwS3HPxT/QMbabI/iBCliMLEJKX2EEkomBAUCxRi42VDADxyTYDVogV+wSChqmKxEKCDAYFDFj4OmwbY7bDGdBhtrnTQYOigeChUmc1K3QTnAUfEgGFgAWt88hKA6aCRIXhxnQ1yg3BCayK44EWdkUQcBByEQChFXfCB776aQsG0BIlQgQgE8qO26X1h8cEUep8ngRBnOy74E9QgRgEAC8SvOfQkh7FDBDmS43PmGoIiKUUEGkMEC/PJHgxw0xH74yx/3XnaYRJgMB8obxQW6kL9QYEJ0FIFgByfIL7/IQAlvQwEpnAC7DtLNJCKUoO/w45c44GwCXiAFB/OXAATQryUxdN4LfFiwgjCNYg+kYMIEFkCKDs6PKAIJouyGWMS1FSKJOMRB/BoIxYJIUXFUxNwoIkEKPAgCBZSQHQ1A2EWDfDEUVLyADj5AChSIQW6gu10bE/JG2VnCZGfo4R4d0sdQoBAHhPjhIB94v/wRoRKQWGRHgrhGSQJxCS+0pCZbEhAAOw==");
        */
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
        formData.append('userId', self0.userId);
        var xhr = new XMLHttpRequest();
        xhr.open("post", __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiUrl + "users/avatar/" + self0.userId);
        xhr.setRequestHeader("Authorization", "Bearer " + self0.token);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var ari = xhr.responseText;
                var uri_1 = JSON.parse(ari);
                self0.loading.dismiss();
                if (uri_1.res == "ERR") {
                    self0.service.logError({}, 'Error al procesar la solicitud. Inténtelo más tarde.');
                }
                else {
                    self0.service.showOk("Foto actualizada con éxito");
                    console.log('uri', uri_1);
                    self0.userService.getProfile().subscribe(function (result) {
                        console.log('result', result);
                        result.avatar = uri_1.url;
                        self0.storage.set("MP-Profile", result);
                        console.log('set profile OK -> dismiss');
                        self0.viewCtrl.dismiss(true);
                        console.log('dismissed!');
                    }, function (err) {
                        console.log(JSON.stringify(err));
                    });
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_5__pata__["a" /* Pata */],
        __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], ProfileMedia);

//# sourceMappingURL=profile-media.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Store; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_availability__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_contacts__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_doctor_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modals_detail_detail__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pata__ = __webpack_require__(22);
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
    function Store(navCtrl, navParams, alertCtrl, doctorService, geolocation, gMaps, toastCtrl, popoverCtrl, http, storage, loadingCtrl, contacts, modalCtrl, appAvailability, platform, service, launchNavigator) {
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
        this.isLoading = true;
        this.name = '';
        this.products = [];
        this.services = [];
        this.openTab = 'products';
        this.lat = 0;
        this.lng = 0;
        this.store = this.navParams.get("store");
        this.name = this.store.name;
        this.load = this.loadingCtrl.create();
        this.load.present();
        this.doctorService.getStore(this.store.id).subscribe(function (data) {
            _this.isLoading = false;
            _this.store = data.data;
            _this.products = data.products;
            _this.services = data.services;
            _this.load.dismiss();
        });
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.lat = resp.coords.latitude;
            _this.lng = resp.coords.longitude;
        }).catch(function (error) {
        });
    }
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
        var dtModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__modals_detail_detail__["a" /* ModalDetail */], { detail: detail });
        dtModal.present();
        dtModal.onDidDismiss(function (data) {
        });
    };
    Store.prototype.email = function () {
        window.open('mailto:' + this.store.email, '_system', 'location=no');
    };
    Store.prototype.call = function () {
        document.location.href = "tel:" + this.store.phone;
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
        if (this.platform.is('ios')) {
            app = 'whatsapp://';
        }
        else if (this.platform.is('android')) {
            app = 'com.whatsapp';
        }
        this.appAvailability.check(app).then(function (yes) {
            _this.load.present();
            var contactsfound;
            var fields;
            var options = new __WEBPACK_IMPORTED_MODULE_7__ionic_native_contacts__["b" /* ContactFindOptions */]();
            options.filter = _this.store.name;
            options.multiple = true;
            options.hasPhoneNumber = true;
            _this.contacts.find(fields, options).then(function (contactos) {
                console.log(contactos);
                var create = 0;
                if (contactos.length > 0) {
                    _this.load.dismiss();
                    _this.goWhatsapp();
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
                        _this.load.dismiss();
                        _this.goWhatsapp();
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
        var alert = this.alertCtrl.create({
            title: 'Contacto creado',
            message: 'Se ha creado el contacto ' + this.store.name + ' ¿Desea continuar a WhatsApp?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'OK',
                    handler: function () {
                        if (_this.platform.is('android')) {
                            cordova.plugins.Whatsapp.send(_this.store.whatsapp);
                        }
                        else if (_this.platform.is('ios')) {
                            window.open('whatsapp://send', '_system', 'location=no');
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
        if (this.platform.is('ios')) {
            app = 'fb://';
        }
        else if (this.platform.is('android')) {
            app = 'com.facebook.katana';
        }
        this.appAvailability.check(app).then(function (yes) {
            if (_this.platform.is('ios')) {
                window.open('fb://profile/' + _this.store.facebook, '_system', 'location=no');
            }
            else {
                window.open('fb://facewebmodal/f?href=https://www.facebook.com/' + _this.store.facebook, '_system', 'location=no');
            }
        }, function (no) {
            window.open('https://www.facebook.com/' + _this.store.facebook, '_system');
        });
    };
    Store.prototype.instagram = function () {
        var _this = this;
        var app;
        if (this.platform.is('ios')) {
            app = 'instagram://';
        }
        else if (this.platform.is('android')) {
            app = 'com.instagram.android';
        }
        this.appAvailability.check(app).then(function (yes) {
            window.open('instagram://user?username=' + _this.store.facebook, '_system', 'location=no');
        }, function (no) {
            window.open('https://www.instagram.com/' + _this.store.instagram, '_system');
        });
    };
    Store.prototype.website = function () {
        window.open(this.store.website, '_system');
    };
    return Store;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]) === "function" && _a || Object)
], Store.prototype, "slides", void 0);
Store = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-store',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\home\store.html"*/'<!--\n\n  Generated template for the MyPetsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{name}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n<div *ngIf="!isLoading">\n\n\n\n  <ion-list class="list-store">\n\n    <ion-item text-wrap>\n\n      <ion-avatar item-start>\n\n        <img src="{{store.avatar != \'\' ? store.avatar : \'assets/img/default/store.png\'}}" />\n\n      </ion-avatar>\n\n      <ion-row>\n\n        <ion-col col-10>\n\n          <h2>{{store.name}}</h2>\n\n          <h3>{{store.address}} {{(store.local != "" ? "Loc. "+store.local : "")}}</h3>\n\n        </ion-col>\n\n        <ion-col col-2 text-right class="location">\n\n          <div class="vertical-align-content" *ngIf="store.lat != \'\' && store.lng != \'\'">\n\n            <img src="assets/img/map-location.png" (click)="showMap()" />\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-8>\n\n          <p class="opening {{store.open_color}}"><strong>{{store.open_now}}</strong></p>\n\n          <p class="opening">{{store.open_news}}</p>\n\n        </ion-col>\n\n        <ion-col col-4 text-right>\n\n          <div *ngIf="lat != 0 && lng != 0" class="distance">\n\n            <strong>{{showDistance(lat,lng,store.lat,store.lng)}}</strong>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-list>\n\n  <hr />\n\n\n\n  <!-- Social networks --> \n\n  <ion-row class="to-right social">\n\n    <ion-col col-2 *ngIf="store.email != \'\'">\n\n      <button (click)="email()" block>\n\n        <img src="assets/img/arroba.png" />\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-2 *ngIf="store.whatsapp != \'\'">\n\n      <button (click)="whatsapp()" block>\n\n        <img src="assets/img/whatsapp.png" />\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-2 *ngIf="store.website != \'\'">\n\n      <button (click)="website()" block>\n\n        <img src="assets/img/www.png" />\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-2 *ngIf="store.facebook != \'\'">\n\n      <button (click)="facebook()" block>\n\n        <img src="assets/img/facebook.png" />\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-2 *ngIf="store.instagram != \'\'">\n\n      <button (click)="instagram()" block>\n\n        <img src="assets/img/instagram.png" />\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-2 *ngIf="store.twitter != \'\'">\n\n      <button (click)="twitter()" block>\n\n        <img src="assets/img/twitter.png" />\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-2 *ngIf="store.phone != \'\'">\n\n      <button (click)="call()" block>\n\n        <img src="assets/img/call.png" />\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n  <hr />\n\n  <ion-row>\n\n    <ion-col col-1><ion-icon name="card"></ion-icon></ion-col>\n\n    <ion-col col-11><b>Redcompra:</b> {{(store.credit_card == 1 ? "SI" : "NO")}}</ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col col-1><ion-icon name="paper-plane"></ion-icon></ion-col>\n\n    <ion-col col-11><b>Delivery:</b> {{(store.delivery == 1 ? "SI" : "NO")}}</ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col col-1><ion-icon name="bicycle"></ion-icon></ion-col>\n\n    <ion-col col-11><b>Delivery + Redcompra:</b> {{(store.credit_card_delivery == 1 ? "SI" : "NO")}}</ion-col>\n\n  </ion-row>\n\n\n\n  <div *ngIf="store.showcase == 1" class="showcase1">\n\n\n\n    <h2 *ngIf="products.length > 0">Productos</h2>\n\n    <!--<ion-card *ngIf="products.length == 0">\n\n      <ion-card-header class="no-items">\n\n        No se han publicado productos\n\n      </ion-card-header>\n\n    </ion-card>\n\n    -->\n\n\n\n    <div *ngIf="products.length > 0">\n\n      <ion-slides spaceBetween="20" slidesPerView="1.5">\n\n        <ion-slide (click)="detail(product, \'product\')" *ngFor="let product of products" [ngStyle]="{\'background-image\': \'url(\'+(product.avatar == \'\' ? \'assets/img/default/no-pictures.png\' : product.avatar)+\')\'}">\n\n          <div class="slide-product">\n\n            <div class="slide-title">{{product.name}}</div>\n\n            <div class="slide-price" *ngIf="product.price > 0">$ {{product.price | number:\'1.0-0\' }}</div>\n\n          </div>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </div>\n\n\n\n    <h2 *ngIf="services.length > 0">Servicios</h2>\n\n    <!--\n\n    <ion-card *ngIf="services.length == 0">\n\n      <ion-card-header class="no-items">\n\n        No se han publicado servicios\n\n      </ion-card-header>\n\n    </ion-card>\n\n    -->\n\n\n\n    <div *ngIf="services.length > 0">\n\n      <ion-slides spaceBetween="20" slidesPerView="1.5">\n\n        <ion-slide (click)="detail(service, \'service\')" *ngFor="let service of services" [ngStyle]="{\'background-image\': \'url(\'+(service.avatar == \'\' ? \'assets/img/default/no-pictures.png\' : service.avatar)+\')\'}">\n\n          <div class="slide-product">\n\n            <div class="slide-title">{{service.name}}</div>\n\n            <div class="slide-price" *ngIf="service.price > 0">$ {{service.price | number:\'1.0-0\' }}</div>\n\n          </div>\n\n        </ion-slide>\n\n      </ion-slides>\n\n      <!--\n\n      <ion-row class="store-services" *ngFor="let service of services">\n\n        <ion-col col-8 class="tab-service-name">\n\n          <strong>{{service.name}}</strong>\n\n        </ion-col>\n\n        <ion-col col-4 class="tab-service-price">\n\n          <span *ngIf="service.price > 0">$ {{service.price | number:\'1.0-0\' }}</span>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <p [innerHtml]="service.description"></p>\n\n        </ion-col>\n\n      </ion-row>\n\n      -->\n\n    </div>\n\n  </div>\n\n\n\n  <div *ngIf="store.showcase == 2">\n\n\n\n    <ion-toolbar>\n\n      <ion-segment [(ngModel)]="openTab" color="primary">\n\n        <ion-segment-button value="products">\n\n          Productos\n\n        </ion-segment-button>\n\n        <ion-segment-button value="services">\n\n          Servicios\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n    </ion-toolbar>\n\n  \n\n    <div *ngIf="openTab == \'products\'">\n\n\n\n      <ion-card *ngIf="products.length == 0">\n\n        <ion-card-header class="no-items">\n\n          No se han publicado productos\n\n        </ion-card-header>\n\n      </ion-card>\n\n\n\n      <div *ngIf="products.length > 0">\n\n        <ion-row class="store-grid">\n\n          <ion-col (click)="detail(product, \'product\')" col-6 *ngFor="let product of products">\n\n            <img src="{{product.avatar == \'\' ? \'assets/img/default/no-pictures.png\' : product.avatar}}" />\n\n            <div class="slide-product">\n\n              <div class="slide-title">{{product.name}}</div>\n\n              <div class="slide-price" *ngIf="product.price > 0">$ {{product.price | number:\'1.0-0\' }}</div>\n\n            </div>\n\n          </ion-col>\n\n         </ion-row>\n\n      </div>\n\n\n\n    </div>\n\n\n\n    <div *ngIf="openTab == \'services\'">\n\n      \n\n      <ion-card *ngIf="services.length == 0">\n\n        <ion-card-header class="no-items">\n\n          No se han publicado servicios\n\n        </ion-card-header>\n\n      </ion-card>\n\n\n\n      <div *ngIf="services.length > 0">\n\n        <!--\n\n        <ion-row class="store-services" *ngFor="let service of services">\n\n          <ion-col col-8 class="tab-service-name">\n\n            <strong>{{service.name}}</strong>\n\n          </ion-col>\n\n          <ion-col col-4 class="tab-service-price">\n\n            <span *ngIf="service.price > 0">$ {{service.price | number:\'1.0-0\' }}</span>\n\n          </ion-col>\n\n          <ion-col col-12 class="tab-service-name">\n\n            <p [innerHtml]="service.description"></p>\n\n          </ion-col>\n\n        </ion-row>\n\n        -->\n\n        <ion-col (click)="detail(service, \'service\')" col-6 *ngFor="let service of services">\n\n          <img src="{{service.avatar == \'\' ? \'assets/img/default/no-pictures.png\' : product.avatar}}" />\n\n          <div class="slide-product">\n\n            <div class="slide-title">{{service.name}}</div>\n\n            <div class="slide-price" *ngIf="service.price > 0">$ {{service.price | number:\'1.0-0\' }}</div>\n\n          </div>\n\n        </ion-col>\n\n      </div>\n\n\n\n    </div>\n\n\n\n  </div>\n\n\n\n</div>\n\n</ion-content>'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\home\store.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__services_doctor_service__["a" /* DoctorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_doctor_service__["a" /* DoctorService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* GoogleMapsAPIWrapper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* GoogleMapsAPIWrapper */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_contacts__["c" /* Contacts */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_contacts__["c" /* Contacts */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_availability__["a" /* AppAvailability */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_availability__["a" /* AppAvailability */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_11__pata__["a" /* Pata */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__pata__["a" /* Pata */]) === "function" && _s || Object, typeof (_t = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__["a" /* LaunchNavigator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__["a" /* LaunchNavigator */]) === "function" && _t || Object])
], Store);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
//# sourceMappingURL=store.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(33);
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
    function NewsService(http, storage) {
        var _this = _super.call(this, http, storage) || this;
        _this.http = http;
        _this.storage = storage;
        return _this;
    }
    NewsService.prototype.geList = function (page, perPage) {
        var apiNewsUrl = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiUrl + 'jjvv?page=' + page + '&per_page=' + perPage;
        return this.http.get(apiNewsUrl, {
            params: null
        });
    };
    NewsService.prototype.getSections = function (id) {
        return this.get('sections/' + id);
    };
    return NewsService;
}(__WEBPACK_IMPORTED_MODULE_3__base_service__["a" /* BaseService */]));
NewsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], NewsService);

//# sourceMappingURL=news.service.js.map

/***/ })

},[299]);
//# sourceMappingURL=main.js.map