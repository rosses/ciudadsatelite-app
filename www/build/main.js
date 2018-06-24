webpackJsonp([0],{

/***/ 12:
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

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contacto; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pata__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_date_picker__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(42);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__pata__["a" /* Pata */],
        __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_date_picker__["a" /* DatePicker */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_7__angular_common__["d" /* DatePipe */]])
], Contacto);

//# sourceMappingURL=contacto.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuntaVecinosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_news_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_doctor_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pata__ = __webpack_require__(9);
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

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPetsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_pet_model__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_pet_service__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyPetsPage = (function () {
    function MyPetsPage(navCtrl, navParams, petService, storage, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.petService = petService;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.activePet = null;
        this.pets = [];
        this.newPet = new __WEBPACK_IMPORTED_MODULE_3__models_pet_model__["a" /* Pet */]({});
        this.addPetForm = false;
        this.addPetForm2 = false;
        this.loading = null;
        this.loadok = false;
        this.loadok = false;
    }
    MyPetsPage.prototype.ionViewWillEnter = function () {
        this.refreshMyPets();
    };
    MyPetsPage.prototype.refreshMyPets = function () {
        var _this = this;
        this.loadok = false;
        this.loading = this.loadingCtrl.create();
        this.loading.present();
        this.storage.get('MP-Profile').then(function (val) {
            _this.petService.getId(val.id).subscribe(function (pets) { _this.pets = pets; _this.loadok = true; _this.loading.dismiss(); });
        });
    };
    MyPetsPage.prototype.qrChange = function (obj) {
        this.addPetForm2 = obj.ok;
        this.newPet.code = obj.identifier;
    };
    MyPetsPage.prototype.addPet = function () {
        this.addPetForm = true;
    };
    return MyPetsPage;
}());
MyPetsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-my-pets',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\my-pets\my-pets.html"*/'<!--\n\n  Generated template for the MyPetsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <span class="icon-menu"></span>\n\n    </button>\n\n    <ion-title>{{ \'APP_MENU.MY_PETS\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="slidesWrapper">\n\n    <ion-slides *ngIf="loadok" class="petpre" pager slidesPerView="4.5">\n\n      <ion-slide>\n\n        <pet-preview [add]="true" (click)="addPet()"></pet-preview>\n\n      </ion-slide>\n\n      <ion-slide *ngFor="let pet of pets">\n\n        <pet-preview [pet]="pet" [isDetail]="true" [isEdit]="true" [isMe]="true" [add]="false"></pet-preview>\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </div>\n\n\n\n  <div *ngIf="addPetForm">\n\n    <qr-card [pet]="newPet" [nueva]="true" (change)="qrChange($event)"></qr-card>\n\n    <div *ngIf="addPetForm && !addPetForm2" class="start_qr">\n\n      Comienza escaneando el QR para tu mascota\n\n    </div>\n\n    <pet-info-form *ngIf="addPetForm2" [pet]="newPet" [isDetail]="true" [isEdit]="true" [isNew]="true"></pet-info-form>\n\n  </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\my-pets\my-pets.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__services_pet_service__["a" /* PetService */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], MyPetsPage);

//# sourceMappingURL=my-pets.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Owner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pata__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_email_composer__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Owner = (function () {
    function Owner(navCtrl, storage, navParams, popoverCtrl, loadingCtrl, service, userService, emailComposer, callNumber) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        this.userService = userService;
        this.emailComposer = emailComposer;
        this.callNumber = callNumber;
        this.isBlurred = false;
        this.loaded = false;
        this.owner = 0;
        this.staticUrl = '';
        this.regiones = [];
        this.distritos = [];
        this.staticUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].staticUrl;
        var loading = this.loadingCtrl.create({
            content: 'recuperando...'
        });
        loading.present();
        var getOp = this.userService.getId(this.navParams.get("owner"));
        getOp.subscribe(function (ok) {
            loading.dismiss();
            _this.me = ok;
            if (_this.me.avatar != null && _this.me.avatar != "") {
                _this.me.avatar = _this.me.avatar.replace('/public/', '');
            }
            else {
                //this.me.avatar = "assets/img/default/avatar.png";
            }
            _this.me.region_name = "";
            _this.me.distrito_name = "";
            _this.me.genero = "No especifica";
            if (parseInt(_this.me.genero) == 1) {
                _this.me.genero = "Masculino";
            }
            if (parseInt(_this.me.genero) == 2) {
                _this.me.genero = "Femenino";
            }
            _this.userService.region().subscribe(function (ok) {
                _this.regiones = ok;
                for (var i = 0; i < _this.regiones.length; i++) {
                    if (_this.regiones[i].id == _this.me.region) {
                        _this.me.region_name = _this.regiones[i].region;
                        break;
                    }
                }
            });
            if (_this.me.region.toString() != "0") {
                _this.userService.distrito(_this.me.region).subscribe(function (ok) {
                    _this.distritos = ok;
                    for (var i = 0; i < _this.distritos.length; i++) {
                        if (_this.distritos[i].id == _this.me.district) {
                            _this.me.distrito_name = _this.distritos[i].distrito;
                            break;
                        }
                    }
                });
            }
            _this.loaded = true;
        }, function (error) {
            loading.dismiss();
            _this.service.logError(null, "No fue posible recuperar los datos, intente más tarde");
            console.log(error);
        });
    }
    /** Call to Owner */
    Owner.prototype.call = function (phoneNumber) {
        this.callNumber.callNumber(phoneNumber, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    /** Send Email to Owner */
    Owner.prototype.sendEmail = function (emailOwner) {
        var _this = this;
        this.emailComposer.isAvailable().then(function (available) {
            if (true) {
                var email = {
                    to: emailOwner,
                    subject: _this.me.name + ' encontré a tu Mascota',
                    body: 'Hola ' + _this.me.name + ', ¡Encontré a tu Mascota perdida!',
                    isHtml: true
                };
                // Send a text message using default options
                _this.emailComposer.open(email);
            }
            else {
                // this.service.logError({}, 'Debes tener una cuenta de email registada en el teléfono antes de enviar el email');
            }
        }, function (error) {
            console.log('send.email.error: ' + JSON.stringify(error));
        });
    };
    return Owner;
}());
Owner = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-owner',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\owner\owner.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <span class="icon-menu"></span>\n\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content [ngClass]="{\'blurred\' : isBlurred}">\n\n\n\n  <div *ngIf="loaded">\n\n    <div class="mediaSlideContainer"><ion-slides pager slidesPerView="1">\n\n      <div class="media" [style.background-image]="\'url(\' + (me.avatar != \'\' && me.avatar != null ? staticUrl+me.avatar : \'assets/img/default/avatar.png\' ) + \')\'" style="background-size: cover;"></div>\n\n      </ion-slides>\n\n    </div>\n\n    <div class="name">\n\n      {{ me.name }}\n\n    </div>\n\n    <div class="welcome">\n\n      Información del dueño\n\n    </div>\n\n\n\n    <div class="formContainer">\n\n      <ion-item>\n\n        <ion-label fixed>Nombre</ion-label>\n\n        <ion-input type="text" [(ngModel)]="me.name" [disabled]="true"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>Email</ion-label>\n\n        <ion-input type="text" [(ngModel)]="me.email" [disabled]="true"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>Nro. Teléfono</ion-label>\n\n        <ion-input type="text" [(ngModel)]="me.phone" [disabled]="true"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>Dirección</ion-label>\n\n        <ion-input type="text" [(ngModel)]="me.address" [disabled]="true"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>Región</ion-label>\n\n        <ion-input type="text" [(ngModel)]="me.region_name" [disabled]="true"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>Distrito</ion-label>\n\n        <ion-input type="text" [(ngModel)]="me.distrito_name" [disabled]="true"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>Género</ion-label>\n\n        <ion-input type="text" [(ngModel)]="me.genero" [disabled]="true"></ion-input>\n\n      </ion-item>\n\n    </div>\n\n\n\n    <div class="buttonWrapper" *ngIf="me.phone.length > 3">\n\n      <button class="buttonPinkOrange" (click)="call(me.phone)" ion-button round>Llamar a {{ me.name }}</button>\n\n    </div>\n\n\n\n    <div class="buttonWrapper" *ngIf="me.email.length > 3">\n\n      <button class="buttonPinkOrange" (click)="sendEmail(me.email)" ion-button round>Enviar un email a {{ me.name }}</button>\n\n    </div>\n\n\n\n  </div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\owner\owner.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__pata__["a" /* Pata */],
        __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_email_composer__["a" /* EmailComposer */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__["a" /* CallNumber */]])
], Owner);

//# sourceMappingURL=owner.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevoReq2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pata__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_doctor_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_requerimientos_nuevoreq3__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NuevoReq2 = (function () {
    function NuevoReq2(navCtrl, navParams, doctorService, alertCtrl, loadingCtrl, auth, service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.doctorService = doctorService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
        this.service = service;
        this.delivery_address = 0;
        this.delivery = {
            street: "",
            housenum: "",
            floornum: "",
            departament: "",
            state: "",
            city: ""
        };
        this.page = 1;
        this.cities = [];
        this.states = [];
        this.addresses = [];
        this.requirement = this.navParams.get("requirement");
        this.address_id = this.navParams.get("address_id");
        this.loading = this.loadingCtrl.create();
        this.loading.present();
        this.auth.getStates().subscribe(function (data) {
            _this.states = data.data;
            _this.loading.dismiss();
        });
        this.doctorService.address().subscribe(function (data) {
            _this.addresses = data;
            if (data.length > 0) {
                _this.delivery_address = data[0].id;
            }
        });
    }
    NuevoReq2.prototype.changeCities = function (newObj) {
        var _this = this;
        this.requirement.city = "";
        this.loading = this.loadingCtrl.create();
        this.loading.present();
        this.auth.getCities(newObj).subscribe(function (data) {
            _this.cities = data.data;
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.service.logError({});
        });
    };
    NuevoReq2.prototype.cancelRequerimiento = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Detener publicación',
            message: "Deseas anular este requerimiento",
            buttons: [
                {
                    text: 'No, Continuar',
                    handler: function () {
                    }
                },
                {
                    text: 'Si, Anular',
                    handler: function () {
                        _this.navCtrl.popToRoot();
                    }
                }
            ]
        });
        confirm.present();
    };
    NuevoReq2.prototype.next = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_requerimientos_nuevoreq3__["a" /* NuevoReq3 */], {
            requirement: this.requirement,
            address_id: this.address_id,
            delivery_address: this.delivery_address,
            delivery: this.delivery
        });
    };
    return NuevoReq2;
}());
NuevoReq2 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-nuevoreq2',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\requerimientos\nuevoreq2.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>NUEVO (2/3)</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="cancelRequerimiento()">\n\n        <ion-icon name="close" class="icon-right-menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <h3>Dirección de entrega</h3>\n\n\n\n    <ion-list radio-group [(ngModel)]="delivery_address">\n\n      <ion-item *ngFor="let address of addresses">\n\n        <ion-label>Retirar en {{address.street}} {{address.housenum}}<br />{{address.city_name}} / {{address.state_name}}</ion-label>\n\n        <ion-radio value="1"></ion-radio>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Retirar en otra dirección</ion-label>\n\n        <ion-radio value="0"></ion-radio>\n\n      </ion-item>\n\n    </ion-list>\n\n    \n\n    <div *ngIf="delivery_address == 0">\n\n      <h4>Especifica la dirección</h4>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-input type="text" [(ngModel)]="delivery.street" placeholder="Calle"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="text" [(ngModel)]="delivery.housenum" placeholder="Número"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="text" [(ngModel)]="delivery.floornum" placeholder="Block/Piso"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="text" [(ngModel)]="delivery.departament" placeholder="Oficina/Departamento"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Región</ion-label>\n\n          <ion-select [(ngModel)]="delivery.state" okText="OK" cancelText="Cancelar" (ngModelChange)="changeCities($event)">\n\n            <ion-option *ngFor="let state of states" [value]="state.id">{{state.name}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Ciudad/Comuna</ion-label>\n\n          <ion-select [(ngModel)]="delivery.city" okText="OK" cancelText="Cancelar">\n\n            <ion-option *ngFor="let city of cities" [value]="city.id">{{city.name}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n\n\n    <div class="buttonWrapper">\n\n      <button class="buttonPinkOrange" ion-button round full (click)="next()">Continuar</button>\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\requerimientos\nuevoreq2.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__services_doctor_service__["a" /* DoctorService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_2__pata__["a" /* Pata */]])
], NuevoReq2);

//# sourceMappingURL=nuevoreq2.js.map

/***/ }),

/***/ 181:
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
webpackEmptyAsyncContext.id = 181;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_fromPromise__ = __webpack_require__(62);
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

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(12);
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

/***/ 224:
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
webpackEmptyAsyncContext.id = 224;

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise__ = __webpack_require__(62);
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






var PetService = (function (_super) {
    __extends(PetService, _super);
    function PetService(http, storage) {
        var _this = _super.call(this, http, storage) || this;
        _this.http = http;
        _this.storage = storage;
        return _this;
    }
    PetService.prototype.getLast = function () {
        return this.get('pets/last/');
    };
    PetService.prototype.getId = function (id) {
        return this.get('pets/' + id + '/');
    };
    PetService.prototype.update = function (id, data) {
        return this.post('pets/' + id, {
            "_method": "PUT",
            name: data.name,
            type: data.type,
            breed: data.breed,
            size: data.size,
            sex: data.sex,
            color: data.color,
            birthday: data.birthday,
            identifier: data.code,
            code: data.code,
            description: ''
        });
    };
    PetService.prototype.uniqueQR = function (code) {
        return this.post('pets/checkqr', {
            code: code
        });
    };
    PetService.prototype.getMascotByQR = function (code) {
        return this.post('missing-pet/found', {
            code: code
        });
    };
    /** Get My Missing Pet  */
    PetService.prototype.getMyMissingPet = function (idPet) {
        return this.get('pets/missing/' + idPet, {});
    };
    /** El dueño marca como mascota encontrada */
    PetService.prototype.petFound = function (code) {
        return this.post('missing-pet/found', {
            code: code
        });
    };
    /** Notificar al usuario de la mascota perdida */
    PetService.prototype.notifyFoundPetFromQr = function (body) {
        return this.post('missing-pet/seen', body);
        /*
        * {
          "code":body.code,
          "lat_seen":body.lat_seen,
          "lng_seen":body.lng_seen,
          "user_id":body.user_id
        }*/
    };
    /** saber si el QR pertenece a una mascota perdida */
    PetService.prototype.getLostPetByQR = function (code) {
        return this.get('missing-pet/code/' + code);
    };
    PetService.prototype.setCode = function (id, code) {
        return this.post('pets/code', {
            id: id,
            code: code
        });
    };
    PetService.prototype.add = function (id, data) {
        return this.post('pets/', {
            user_id: id,
            name: data.name,
            type: data.type,
            breed: data.breed,
            size: data.size,
            sex: data.sex,
            color: data.color,
            birthday: data.birthday,
            identifier: data.code,
            code: data.code,
            description: ''
        });
    };
    PetService.prototype.setState = function (id, state, obj) {
        if (state == 'searching') {
            return this.post('pets/available/', {
                id: id,
                available: 1
            });
        }
        if (state == 'nosearching') {
            return this.post('pets/available/', {
                id: id,
                available: 0
            });
        }
        else if (state == 'remove') {
            return this.delete('pets/' + id);
        }
        else if (state == 'lost') {
            return this.post('missing-pet/', {
                pet_id: id,
                lat: obj.lat,
                lng: obj.lng
            });
        }
        else if (state == 'found') {
            return this.post('missing-pet/found/', {
                id: id
            });
        }
    };
    /** Notificar al dueño */
    PetService.prototype.notifyOwner = function (id, myPetId) {
        return this.post('applications/' + id, {
            requester_pet_id: myPetId
        });
    };
    PetService.prototype.accept = function (id) {
        return this.get('applications/accept/' + id);
    };
    PetService.prototype.reject = function (id) {
        return this.get('applications/reject/' + id);
    };
    PetService.prototype.searchAvailable = function (data) {
        return this.post('pets/search/', data);
    };
    PetService.prototype.searchLost = function (data) {
        return this.post('missing-pet/search/', data);
    };
    PetService.prototype.getMyLove = function (data) {
        return this.post('pets/search/', data);
    };
    PetService.prototype.getMyLoveRecived = function (id) {
        return this.get('applications/received/' + id);
    };
    PetService.prototype.mainImage = function (id, index) {
        return this.post('pets/image/main/', {
            pet_id: id,
            index: index
        });
    };
    PetService.prototype.deleteImage = function (id, index) {
        return this.post('pets/image/delete/', {
            pet_id: id,
            index: index
        });
    };
    PetService.prototype.especie = function () {
        return this.get('species');
    };
    PetService.prototype.raza = function (raza) {
        return this.get('species/' + raza + '/breeds');
    };
    PetService.prototype.region = function () {
        return this.get('region');
    };
    PetService.prototype.distrito = function (region) {
        return this.get('region/' + region + '/district');
    };
    PetService.prototype.color = function () {
        return this.get('color');
    };
    PetService.prototype.size = function () {
        return this.get('size');
    };
    PetService.prototype.sex = function () {
        return this.get('petsex');
    };
    return PetService;
}(__WEBPACK_IMPORTED_MODULE_3__base_service__["a" /* BaseService */]));
PetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], PetService);

//# sourceMappingURL=pet.service.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pata__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popovers_profile_media_profile_media__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__change_password_change_password__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home__ = __webpack_require__(42);
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
                console.log('dismiss event');
                _this.storage.get("MP-Profile").then(function (val) {
                    console.log('new profile', val);
                    //this.me = val;
                    _this.loaded = true;
                    if (_this.me.avatar != null && _this.me.avatar != "") {
                        _this.me.avatar = _this.me.avatar;
                    }
                    _this.changeAvatar(_this.me.avatar);
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
    Profile.prototype.changePassword = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__change_password_change_password__["a" /* ChangePasswordPage */], {});
        profileModal.onDidDismiss(function (data) {
            if (data) {
                _this.service.showOk();
            }
            else {
                //this.service.showOk();
            }
        });
        profileModal.present();
    };
    Profile.prototype.formatDate = function (date) {
        return date;
    };
    Profile.prototype.gotoHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */]);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* PopoverController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__pata__["a" /* Pata */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__pata__["a" /* Pata */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__["a" /* DatePicker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__["a" /* DatePicker */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_9__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_common__["d" /* DatePipe */]) === "function" && _l || Object])
], Profile);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalOK; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalERR; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categoria; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contacto_contacto__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_store__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_doctor_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(7);
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
        selector: 'page-categoria',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\home\categoria.html"*/'<!--\n\n  Generated template for the MyPetsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title class="no-padding">{{title}}</ion-title>\n\n    <ion-buttons end>\n\n      <button class="search-top" ion-button icon-only (click)="toggleSearch()">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar class="searchbar" *ngIf="searchActive">\n\n      <ion-searchbar (ionClear)="onClear($event)" (ionInput)="onSearch($event)" [(ngModel)]="search" placeholder="Tiendas, productos y servicios en {{title}}"></ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n<div *ngIf="isSearching" class="search-container">\n\n  <div *ngIf="isSearchingLoad">\n\n    <div text-center>\n\n      <ion-spinner></ion-spinner>\n\n      <br /><br />\n\n      <strong>Buscando</strong><br />\n\n      &quot;{{search}}&quot;\n\n    </div>\n\n  </div>\n\n  <div *ngIf="!isSearchingLoad">\n\n    <div *ngIf="searchStores.length == 0 && searchProducts.length == 0 && searchServices.length == 0 && !isSearchingLoad" text-center>\n\n      <ion-icon name="hand"></ion-icon>\n\n      <br />\n\n      <strong>No se encontraron resultados</strong><br />\n\n      &quot;{{search}}&quot;\n\n    </div>\n\n\n\n    <div class="search-results" *ngIf="(searchStores.length > 0 || searchProducts.length > 0 || searchServices.length > 0) && !isSearchingLoad">\n\n\n\n      <ion-list>\n\n        <ion-list-header *ngIf="searchStores.length > 0">\n\n          Tiendas ({{searchStores.length}})\n\n        </ion-list-header>\n\n\n\n        <ion-item *ngFor="let result of searchStores" (click)="goToStore(result);">\n\n          <ion-row>\n\n            <ion-col col-2>\n\n              <img src="{{result.icon}}" />\n\n            </ion-col>\n\n            <ion-col col-10>\n\n                <strong>{{result.name}}</strong>\n\n                {{result.address}} {{(result.local != "" ? "Loc. "+result.local : "")}}\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n\n\n        <ion-list-header *ngIf="searchProducts.length > 0">\n\n          Productos ({{searchProducts.length}})\n\n        </ion-list-header>\n\n\n\n        <ion-item *ngFor="let result of searchProducts" (click)="goToStore(result.store);">\n\n          <ion-row>\n\n            <ion-col col-2>\n\n              <img src="{{result.avatar}}" />\n\n            </ion-col>\n\n            <ion-col col-10>\n\n                <strong>{{result.name}}</strong>\n\n                <strong *ngIf="result.price != 0">$ {{result.price | number:\'1.0-0\' }}</strong>\n\n                Encontrado en <b>{{result.store.name}}</b>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n\n\n        <ion-list-header *ngIf="searchServices.length > 0">\n\n          Servicios ({{searchServices.length}})\n\n        </ion-list-header>\n\n\n\n        <ion-item *ngFor="let result of searchServices" (click)="goToStore(result.store);">\n\n          <ion-row>\n\n            <ion-col col-2>\n\n              <img src="{{result.avatar}}" />\n\n            </ion-col>\n\n            <ion-col col-10>\n\n                <strong>{{result.name}}</strong>\n\n                <strong *ngIf="result.price != 0">$ {{result.price | number:\'1.0-0\' }}</strong>\n\n                Encontrado en <b>{{result.store.name}}</b>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n\n\n\n\n    </div>\n\n  </div>\n\n</div>\n\n\n\n<div *ngIf="searchActive && !isSearching" class="search-container2" text-center>\n\n      <ion-icon name="search"></ion-icon>\n\n      <br />\n\n      <strong>Comienza a escribir para<br />buscar tiendas, productos o servicios<br />en {{title}}</strong><br />\n\n      <br />\n\n</div>\n\n\n\n\n\n<ion-refresher (ionRefresh)="doRefresh($event)"  *ngIf="!isSearching">\n\n  <ion-refresher-content pullingText="actualizar..." refreshingText="actualizando..."></ion-refresher-content>\n\n</ion-refresher>\n\n\n\n<div *ngIf="isLoading" class="pd20">\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n          <div class="background-masker news-icon2"></div>\n\n         </div>\n\n      </div>\n\n  </div>\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n          <div class="background-masker news-icon2"></div>\n\n         </div>\n\n      </div>\n\n  </div>\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n          <div class="background-masker news-icon2"></div>\n\n         </div>\n\n      </div>\n\n  </div>\n\n</div>\n\n\n\n<div *ngIf="!isLoading && !searchActive">\n\n\n\n  <ion-list class="list-store pd20">\n\n    <ion-item *ngFor="let store of stores" (click)="verStore(store)" text-wrap>\n\n      <ion-avatar item-start>\n\n        <img src="{{store.avatar != \'\' ? store.avatar : \'assets/img/default/store.png\'}}" />\n\n      </ion-avatar>\n\n      <ion-row>\n\n        <ion-col col-9>\n\n          <h2>{{store.name}}</h2>\n\n          <h3>{{store.address}} {{(store.local != "" ? "Loc. "+store.local : "")}}</h3>\n\n          <!--<p>I\'ve had a pretty messed up day. If we just...</p>-->\n\n        </ion-col>\n\n        <ion-col col-3 text-center class="mts">\n\n          <div *ngIf="store.lat != \'\' && store.lng != \'\'">\n\n            <div><img src="assets/img/map-location.png" (click)="showMap(store)" /></div>\n\n            <div *ngIf="lat != 0 && lng != 0">\n\n            <strong>{{showDistance(lat,lng,store.lat,store.lng)}}</strong>\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-list>\n\n</div>\n\n\n\n<ion-card *ngIf="!isLoading && stores.length == 0">\n\n  <ion-card-header class="no-items">\n\n    <ion-icon name="pricetag"></ion-icon>\n\n    <br />\n\n    No tenemos tiendas en <br />\n\n    <strong>{{title}}</strong>\n\n  </ion-card-header>\n\n  <ion-list>\n\n    <button ion-item (click)="goContacto()">\n\n      <b>¿Como puedo aparecer aquí?</b>\n\n      <ion-icon name="arrow-forward" item-end></ion-icon>\n\n    </button>\n\n  </ion-list>  \n\n</ion-card>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\home\categoria.html"*/
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

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup2__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pata__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, service, loadingCtrl, storage, alertCtrl, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.login = null;
        this.login = {
            type: '',
            email: '',
            isCompany: 0
        };
    }
    SignupPage.prototype.next = function () {
        var _this = this;
        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.login.email == "" || !emailRegex.test(this.login.email)) {
            this.service.logError({}, "Email no puede estar vacío o es incorrecto");
        }
        else if (this.login.type == "") {
            this.service.logError({}, "Debe indicar tipo de registro.");
        }
        else {
            this.loading = this.loadingCtrl.create();
            this.loading.present();
            this.auth.evaluate(this.login).subscribe(function (data) {
                _this.loading.dismiss();
                if (data.res == "OK") {
                    if (_this.login.type == "2" || _this.login.type == "3") {
                        var alert_1 = _this.alertCtrl.create({
                            title: '¿Eres una empresa?',
                            message: 'Queremos personalizar tu registro',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    handler: function () {
                                        _this.login.isCompany = 0;
                                        _this.goToForm();
                                    }
                                },
                                {
                                    text: 'Si',
                                    handler: function () {
                                        _this.login.isCompany = 1;
                                        _this.goToForm();
                                    }
                                }
                            ]
                        });
                        alert_1.present();
                    }
                    else {
                        var alert_2 = _this.alertCtrl.create({
                            title: '¿Trabajas en una empresa que ya está en Camión Go?',
                            message: 'Por favor selecciona SI para continuar indicando el RUT de la empresa que perteneces o NO para registrarte como transportista particular',
                            buttons: [
                                {
                                    text: 'Si',
                                    role: 'cancel',
                                    handler: function () {
                                        _this.login.isCompany = 0;
                                        _this.login.type = "2";
                                        _this.goToForm();
                                    }
                                },
                                {
                                    text: 'No',
                                    handler: function () {
                                        _this.login.isCompany = 0;
                                        _this.goToForm();
                                    }
                                }
                            ]
                        });
                        alert_2.present();
                    }
                }
                else if (data.res == "ADD") {
                    _this.service.showOk(data.msg);
                    _this.navCtrl.pop();
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
    SignupPage.prototype.goToForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup2__["a" /* SignupPage2 */], {
            login: this.login
        });
    };
    SignupPage.prototype.gotoLogin = function () {
        this.navCtrl.pop();
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signup',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content scrollX="false" scrollY="false" scroll="false" class="noscroll">\n\n  <div class="background"></div>\n\n  <div class="overlay"></div>\n\n  <ion-scroll scrollX="false" scrollY="true">\n\n    <img class="back-arrow" src="assets/img/back.png" alt="" (click)="gotoLogin()">\n\n    <img class="logo" src="assets/img/logo-camiongo.png" alt="">\n\n    <div class="description">Ingresa tu email</div>\n\n    <div class="listWrapper">\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-input type="email" [(ngModel)]="login.email" placeholder="{{ \'SIGNUP.EMAIL\' | translate }}"></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n      <h5>Tipo de registro</h5>\n\n      <ion-list radio-group [(ngModel)]="login.type">\n\n        <ion-item>\n\n          <ion-label>Transportista</ion-label>\n\n          <ion-radio value="2" checked></ion-radio>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Conductor</ion-label>\n\n          <ion-radio value="4"></ion-radio>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Generador de carga</ion-label>\n\n          <ion-radio value="3"></ion-radio>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n    <div class="buttonWrapper">\n\n      <button class="buttonPinkOrange" ion-button round full (click)="next()">{{ \'SIGNUP.NEXT\' | translate }}</button>\n\n    </div>\n\n    <div class="termsAndConditions">\n\n      {{ \'SIGNUP.ACCEPT_TERMS_AND_CONDITIONS_1\' | translate }}\n\n      {{ \'SIGNUP.TERMS_OF_USE\' | translate }}\n\n      {{ \'SIGNUP.ACCEPT_TERMS_AND_CONDITIONS_2\' | translate }}\n\n      {{ \'SIGNUP.PRIVACY_POLICY\' | translate }}\n\n      {{ \'SIGNUP.ACCEPT_TERMS_AND_CONDITIONS_3\' | translate }}\n\n    </div>\n\n\n\n    <div class="buttonWrapper">\n\n      <button class="buttonPinkOrange small login" ion-button round  (click)="gotoLogin()">Volver</button>\n\n    </div>\n\n  </ion-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__pata__["a" /* Pata */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup3__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pata__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage2 = (function () {
    function SignupPage2(navCtrl, service, loadingCtrl, storage, navParams, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.auth = auth;
        this.login = null;
        this.cities = null;
        this.states = null;
        this.login = navParams.get('login');
        if (!this.login.card_code) {
            this.login.card_code = "";
        }
        if (!this.login.first_name) {
            this.login.first_name = "";
        }
        if (!this.login.last_name) {
            this.login.last_name = "";
        }
        if (!this.login.company) {
            this.login.company = "";
        }
        if (!this.login.fantasy) {
            this.login.fantasy = "";
        }
        if (!this.login.agent_card_code) {
            this.login.agent_card_code = "";
        }
        if (!this.login.agent_first_name) {
            this.login.agent_first_name = "";
        }
        if (!this.login.agent_last_name) {
            this.login.agent_last_name = "";
        }
        if (!this.login.street) {
            this.login.street = "";
        }
        if (!this.login.housenum) {
            this.login.housenum = "";
        }
        if (!this.login.floornum) {
            this.login.floornum = "";
        }
        if (!this.login.departament) {
            this.login.departament = "";
        }
        if (!this.login.region) {
            this.login.region = "";
        }
        if (!this.login.city) {
            this.login.city = "";
        }
        if (!this.login.passwd) {
            this.login.passwd = "";
        }
        if (!this.login.passwd2) {
            this.login.passwd2 = "";
        }
        this.loading = this.loadingCtrl.create();
        this.loading.present();
        this.auth.getStates().subscribe(function (data) {
            _this.states = data.data;
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.service.logError({});
        });
    }
    SignupPage2.prototype.next = function () {
        var _this = this;
        if (this.login.card_code == "") {
            this.service.logError({}, "RUT no puede estar vacío");
        }
        else if (this.login.isCompany == 0 && this.login.first_name == "") {
            this.service.logError({}, "Debe indicar su nombre");
        }
        else if (this.login.last_name == 0 && this.login.last_name == "") {
            this.service.logError({}, "Debe indicar apellidos");
        }
        else if (this.login.isCompany == 1 && this.login.company == "") {
            this.service.logError({}, "Debe indicar nombre de la empresa");
        }
        else if (this.login.isCompany == 1 && this.login.agent_card_code == "") {
            this.service.logError({}, "Debe indicar RUT del representante");
        }
        else if (this.login.isCompany == 1 && this.login.agent_first_name == "") {
            this.service.logError({}, "Debe indicar nombre de la empresa");
        }
        else if (this.login.isCompany == 1 && this.login.agent_last_name == "") {
            this.service.logError({}, "Debe indicar nombre de la empresa");
        }
        else if (this.login.isCompany == 1 && this.login.agent_last_name == "") {
            this.service.logError({}, "Debe indicar una calle");
        }
        else if (this.login.state == "" || this.login.city == "") {
            this.service.logError({}, "Debe indicar una región y comuna");
        }
        else if (this.login.passwd == "") {
            this.service.logError({}, "Tu clave no puede estar vacía");
        }
        else if (this.login.passwd != this.login.passwd2) {
            this.service.logError({}, "Las claves no coinciden, ingresa en los 2 campos una misma clave");
        }
        else {
            this.loading = this.loadingCtrl.create();
            this.loading.present();
            this.auth.register(this.login).subscribe(function (data) {
                _this.loading.dismiss();
                if (data.res == "OK") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup3__["a" /* SignupPage3 */]);
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
    SignupPage2.prototype.changeCities = function (newObj) {
        var _this = this;
        this.login.city = "";
        this.loading = this.loadingCtrl.create();
        this.loading.present();
        this.auth.getCities(newObj).subscribe(function (data) {
            _this.cities = data.data;
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.service.logError({});
        });
    };
    SignupPage2.prototype.gotoLogin = function () {
        this.navCtrl.pop().then(function () {
            //this.navCtrl.parent.navCtrl.pop()
        });
    };
    return SignupPage2;
}());
SignupPage2 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signup2',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\signup\signup2.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content scrollX="false" scrollY="false" scroll="false" class="noscroll">\n\n  <div class="background"></div>\n\n  <div class="overlay"></div>\n\n  <ion-scroll scrollX="false" scrollY="true">\n\n    <img class="back-arrow" src="assets/img/back.png" alt="" (click)="gotoLogin()" />\n\n    <img class="logo" src="assets/img/logo-camiongo.png" alt="" />\n\n    <div class="description">Completa los siguientes datos para comenzar</div>\n\n    <div class="listWrapper">\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-input type="text" [(ngModel)]="login.card_code" formatRut placeholder="RUT {{ login.isCompany == 0 ? \'Personal\' : \'de la empresa\' }}"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="login.isCompany == 0">\n\n          <ion-input type="text" [(ngModel)]="login.first_name" placeholder="Nombres"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="login.isCompany == 0">\n\n          <ion-input type="text" [(ngModel)]="login.last_name" placeholder="Apellidos"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="login.isCompany == 1">\n\n          <ion-input type="text" [(ngModel)]="login.company" placeholder="Razón social"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="login.isCompany == 1">\n\n          <ion-input type="text" [(ngModel)]="login.fantasy" placeholder="Nombre de fantasía"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="login.isCompany == 1">\n\n          <ion-input type="text" [(ngModel)]="login.agent_card_code" formatRut placeholder="Rut representante legal"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="login.isCompany == 1">\n\n          <ion-input type="text" [(ngModel)]="login.agent_first_name" placeholder="Nombres representante legal"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="login.isCompany == 1">\n\n          <ion-input type="text" [(ngModel)]="login.agent_last_name" placeholder="Apellidos representante legal"></ion-input>\n\n        </ion-item>  \n\n      </ion-list>\n\n    </div>\n\n    <div class="description">Crea una clave</div>\n\n    <div class="listWrapper">  \n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label>Clave</ion-label>\n\n          <ion-input type="password" [(ngModel)]="login.passwd"></ion-input>\n\n        </ion-item>  \n\n        <ion-item>\n\n          <ion-label>Repite</ion-label>\n\n          <ion-input type="password" [(ngModel)]="login.passwd2"></ion-input>\n\n        </ion-item>  \n\n      </ion-list>\n\n    </div>\n\n    <div class="description">Tu dirección principal</div>\n\n    <div class="listWrapper">  \n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-input type="text" [(ngModel)]="login.street" placeholder="Calle"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="text" [(ngModel)]="login.housenum" placeholder="Número"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="text" [(ngModel)]="login.floornum" placeholder="Block/Piso"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="number" [(ngModel)]="login.departament" placeholder="Oficina/Departamento"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Región</ion-label>\n\n          <ion-select [(ngModel)]="login.state" okText="OK" cancelText="Cancelar" (ngModelChange)="changeCities($event)">\n\n            <ion-option *ngFor="let state of states" [value]="state.id">{{state.name}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Ciudad/Comuna</ion-label>\n\n          <ion-select [(ngModel)]="login.city" okText="OK" cancelText="Cancelar">\n\n            <ion-option *ngFor="let city of cities" [value]="city.id">{{city.name}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n    <div class="buttonWrapper">\n\n      <button class="buttonPinkOrange" ion-button round full (click)="next()">Siguiente</button>\n\n    </div>\n\n    <div class="termsAndConditions">\n\n      {{ \'SIGNUP.ACCEPT_TERMS_AND_CONDITIONS_1\' | translate }}\n\n      {{ \'SIGNUP.TERMS_OF_USE\' | translate }}\n\n      {{ \'SIGNUP.ACCEPT_TERMS_AND_CONDITIONS_2\' | translate }}\n\n      {{ \'SIGNUP.PRIVACY_POLICY\' | translate }}\n\n      {{ \'SIGNUP.ACCEPT_TERMS_AND_CONDITIONS_3\' | translate }}\n\n    </div>\n\n\n\n    <div class="buttonWrapper">\n\n      <button class="buttonPinkOrange small login" ion-button round  (click)="gotoLogin()">Volver</button>\n\n    </div>\n\n  </ion-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\signup\signup2.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__pata__["a" /* Pata */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]])
], SignupPage2);

//# sourceMappingURL=signup2.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pata__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage3 = (function () {
    function SignupPage3(navCtrl, service, loadingCtrl, storage, navParams, auth) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.auth = auth;
        this.login = null;
        this.login = navParams.get('login');
        if (this.login == null) {
            this.login = {
                type: '',
                email: ''
            };
        }
    }
    SignupPage3.prototype.next = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */], {}, { animate: true, direction: 'forward' });
    };
    SignupPage3.prototype.gotoLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */], {}, { animate: true, direction: 'forward' });
    };
    return SignupPage3;
}());
SignupPage3 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signup3',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\signup\signup3.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content scrollX="false" scrollY="false" scroll="false" class="noscroll">\n\n  <div class="background"></div>\n\n  <div class="overlay"></div>\n\n  <ion-scroll scrollX="false" scrollY="true">\n\n    <img class="logo" src="assets/img/logo-camiongo.png" alt="">\n\n    <div class="description"><br />Registrado con éxito<br /><br /></div>\n\n    <p style="text-align:left;">Revisa tu email y confirma tu correo.<br /><br />Recuerda que no podrás operar en Camion Go hasta que un administrador valide tu cuenta, normalmente no toma más de 1 día.<br /><br /></p>\n\n    <div class="buttonWrapper">\n\n      <button class="buttonPinkOrange" ion-button round full (click)="next()">Volver al inicio</button>\n\n    </div>\n\n  </ion-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\signup\signup3.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__pata__["a" /* Pata */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]])
], SignupPage3);

//# sourceMappingURL=signup3.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mapa; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_store__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_doctor_service__ = __webpack_require__(31);
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
        selector: 'page-mapa',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\mapa\mapa.html"*/'<!--\n\n  Generated template for the MyPetsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>MAPA</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <!--\n\n  <ion-card class="overcard">\n\n    <ion-label> <ion-icon (click)="clearBuscar()" name="close"></ion-icon></ion-label>\n\n    <ion-item>\n\n      <ion-input (keyup)=moveTo(buscar) [(ngModel)]="buscar" type="text" placeholder="Buscar..."></ion-input>\n\n    </ion-item>\n\n  </ion-card>\n\n  \n\n  <div class="search_result" *ngIf="buscando.length > 0">\n\n    <ion-scroll>\n\n    <ul>\n\n      <li *ngFor="let b of buscando" (click)="gotoPlace(b)"><img src="assets/img/chevron.png" />&nbsp;&nbsp;{{b.description}}</li>\n\n    </ul>\n\n    </ion-scroll>\n\n  </div>\n\n  -->\n\n\n\n  <div class="findme" (click)="gotome()">\n\n    <img src="assets/img/findme.png" />\n\n  </div>\n\n\n\n  <agm-map [latitude]="lat" [longitude]="lng" [styles]="styles" [zoom]="16" [zoomControl]="false" [streetViewControl]="false" (onMapLoad)=\'loadAPIWrapper($event)\'>\n\n    <agm-marker *ngFor="let pos of list" (markerClick)="mapclick(pos)" [iconUrl]="pos.icon" [latitude]="pos.lat" [longitude]="pos.lng">\n\n    </agm-marker>\n\n  </agm-map>\n\n  <!--\n\n  <agm-map *ngFor="let pos of list" [latitude]="lat" [longitude]="lng" [styles]="styles" [zoom]="15" [zoomControl]="false" [streetViewControl]="false" (onMapLoad)=\'loadAPIWrapper($event)\'>\n\n    <agm-marker (markerClick)="mapclick(pos)" [iconUrl]="pos.icon" [latitude]="pos.lat" [longitude]="pos.lng">\n\n    </agm-marker>\n\n  </agm-map>\n\n  -->\n\n  <div class="info_vet" *ngIf="verDetalle">\n\n\n\n    <div class="buttonWrapper">\n\n      <button class="buttonPinkOrange" (click)="vermas(activo)" ion-button round>Más información</button>\n\n    </div>\n\n\n\n    <div class="close" (click)="close()">\n\n      <ion-icon name="close"></ion-icon>\n\n    </div>\n\n\n\n    <div class="box">\n\n      <b>{{activo.name}}</b>\n\n      <div *ngIf="isGps == 1">\n\n      <small>A {{showDistance(lat,lng,activo.lat,activo.lng)}} de tu ubicación actual</small>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\mapa\mapa.html"*/,
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

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreProfile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pata__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popovers_profile_media_profile_media__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__change_password_change_password__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home__ = __webpack_require__(42);
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
    StoreProfile.prototype.changePassword = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__change_password_change_password__["a" /* ChangePasswordPage */], {});
        profileModal.onDidDismiss(function (data) {
            if (data) {
                _this.service.showOk();
            }
            else {
                //this.service.showOk();
            }
        });
        profileModal.present();
    };
    StoreProfile.prototype.formatDate = function (date) {
        return date;
    };
    StoreProfile.prototype.gotoHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */]);
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
        __WEBPACK_IMPORTED_MODULE_9__angular_common__["d" /* DatePipe */]])
], StoreProfile);

//# sourceMappingURL=storeprofile.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreProducts; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pata__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popovers_profile_media_profile_media__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__change_password_change_password__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home__ = __webpack_require__(42);
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
    StoreProducts.prototype.changePassword = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__change_password_change_password__["a" /* ChangePasswordPage */], {});
        profileModal.onDidDismiss(function (data) {
            if (data) {
                _this.service.showOk();
            }
            else {
                //this.service.showOk();
            }
        });
        profileModal.present();
    };
    StoreProducts.prototype.formatDate = function (date) {
        return date;
    };
    StoreProducts.prototype.gotoHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */]);
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
        __WEBPACK_IMPORTED_MODULE_9__angular_common__["d" /* DatePipe */]])
], StoreProducts);

//# sourceMappingURL=storeproducts.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pata__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popovers_profile_media_profile_media__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__change_password_change_password__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home__ = __webpack_require__(42);
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
    StoreServices.prototype.changePassword = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__change_password_change_password__["a" /* ChangePasswordPage */], {});
        profileModal.onDidDismiss(function (data) {
            if (data) {
                _this.service.showOk();
            }
            else {
                //this.service.showOk();
            }
        });
        profileModal.present();
    };
    StoreServices.prototype.formatDate = function (date) {
        return date;
    };
    StoreServices.prototype.gotoHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */]);
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
        __WEBPACK_IMPORTED_MODULE_9__angular_common__["d" /* DatePipe */]])
], StoreServices);

//# sourceMappingURL=storeservices.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDetalle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_news_service__ = __webpack_require__(48);
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

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetMediaOptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_pet_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pata__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PetMediaOptionsPage = (function () {
    function PetMediaOptionsPage(navCtrl, navParams, viewCtrl, service, userService, petService, loadingCtrl, camera, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.service = service;
        this.userService = userService;
        this.petService = petService;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.storage = storage;
        this.imagenIndex = 0;
        this.loading = null;
        this.token = '';
        this.petId = null;
        this.additionalImages = null;
        this.canDelete = false;
        this.canMark = false;
        this.imagenIndex = this.navParams.get("imagenIndex");
        this.additionalImages = this.navParams.get("additionalImages");
        this.petId = this.navParams.get("id");
        if (this.additionalImages != "") {
            this.canMark = true;
            this.canDelete = true;
        }
        this.storage.get("token").then(function (val) {
            _this.token = val;
        });
    }
    PetMediaOptionsPage.prototype.ionViewDidLoad = function () {
    };
    PetMediaOptionsPage.prototype.close = function () {
        this.viewCtrl.dismiss({ reload: false });
    };
    PetMediaOptionsPage.prototype.takePicture = function () {
        var _this = this;
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
    PetMediaOptionsPage.prototype.openGallery = function () {
        var _this = this;
        var cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 70,
            targetWidth: 620,
            targetHeight: 620,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
        this.camera.getPicture(cameraOptions)
            .then(function (file_uri) { return _this.processTake(file_uri); }, function (err) { return console.log(err); });
    };
    PetMediaOptionsPage.prototype.dataURItoBlob = function (dataURI) {
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
    PetMediaOptionsPage.prototype.processTake = function (imageData) {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.loading = this.loadingCtrl.create({ content: 'subiendo foto...' });
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
        xhr.open("post", __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl + "pets/avatar/" + self0.petId);
        xhr.setRequestHeader("Authorization", "Bearer " + self0.token);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var uri = xhr.responseText;
                self0.loading.dismiss();
                if (uri.indexOf('error') > -1) {
                    self0.service.logError({}, 'Error al procesar la solicitud. Inténtelo más tarde.');
                }
                else {
                    self0.service.showOk("Foto agregada con éxito");
                    self0.viewCtrl.dismiss({ reload: true });
                }
            }
        };
        xhr.send(formData);
        /*
        this.b64toBlob(this.base64Image,
        function(blob) {
            var url = window.URL.createObjectURL(blob);
            // do something with url
            var formData = new FormData();
            formData.append('avatar', blob, 'avatar.jpg');
    
            var xhr = new XMLHttpRequest();
            xhr.open("post", environment.apiUrl+"pets/avatar/"+self0.petId);
            xhr.setRequestHeader("Authorization", "Bearer "+self0.token);
    
            xhr.onreadystatechange = function () {
    
              if(xhr.readyState === 4 && xhr.status === 200) {
                var uri = xhr.responseText;
                self0.loading.dismiss();
    
                if (uri.indexOf('error') > -1) {
                  self0.service.logError({}, 'Error al procesar la solicitud. Inténtelo más tarde.');
                }
                else {
                  self0.service.showOk("Foto agregada con éxito");
                  self0.viewCtrl.dismiss({reload:true});
                }
              }
    
    
    
            };
    
            xhr.send(formData);
    
        }, function(error) {
            console.log('error',error);
        });
    
        */
    };
    PetMediaOptionsPage.prototype.b64toBlob = function (b64, onsuccess, onerror) {
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
    PetMediaOptionsPage.prototype.markMain = function (index) {
        var _this = this;
        this.loading = this.loadingCtrl.create({ content: 'guardando...' });
        this.loading.present();
        var ps = this.petService.mainImage(this.petId, index);
        ps.subscribe(function (ok) {
            _this.loading.dismiss();
            _this.service.showOk("Foto marcada como principal");
            _this.viewCtrl.dismiss({ reload: false });
        }, function (error) {
            _this.loading.dismiss();
            _this.service.logError({}, 'Error al procesar la solicitud. Inténtelo más tarde.');
            _this.viewCtrl.dismiss({ reload: false });
        });
    };
    PetMediaOptionsPage.prototype.delete = function (index) {
        var _this = this;
        this.loading = this.loadingCtrl.create({ content: 'guardando...' });
        this.loading.present();
        var ps = this.petService.deleteImage(this.petId, index);
        ps.subscribe(function (ok) {
            _this.loading.dismiss();
            _this.service.showOk("Foto eliminada");
            _this.viewCtrl.dismiss({ reload: true });
        }, function (error) {
            _this.loading.dismiss();
            _this.service.logError({}, 'Error al procesar la solicitud. Inténtelo más tarde.');
            _this.viewCtrl.dismiss({ reload: false });
        });
    };
    return PetMediaOptionsPage;
}());
PetMediaOptionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-pet-media-options',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\popovers\pet-media-options\pet-media-options.html"*/'<ion-list radio-group class="popover-page" style="border-radius: 10px">\n\n  <div class="close" (click)="close()">\n\n    <span class="icon-cerrar"></span>\n\n  </div>\n\n  <ion-item (click)="takePicture()" style="border-radius: 10px 10px 0px 0px;">\n\n    <ion-label>{{ \'POPOVER_PET_MEDIA_OPTIONS.TAKE_PICTURE\' | translate }}</ion-label>\n\n    <ion-note item-right>\n\n      <span class="icon-movil"></span>\n\n    </ion-note>\n\n  </ion-item>\n\n  <ion-item (click)="openGallery()">\n\n    <ion-label>{{ \'POPOVER_PET_MEDIA_OPTIONS.CHOOSE_FROM_ALBUM\' | translate }}</ion-label>\n\n    <ion-note item-right>\n\n      <span class="icon-album"></span>\n\n    </ion-note>\n\n  </ion-item>\n\n\n\n  <ion-item *ngIf="canMark" (click)="markMain(imagenIndex)">\n\n    <ion-label>{{ \'POPOVER_PET_MEDIA_OPTIONS.SET_AS_MAIN\' | translate }}</ion-label>\n\n    <ion-note item-right>\n\n      <span class="icon-principal"></span>\n\n    </ion-note>\n\n  </ion-item>\n\n\n\n  <ion-item *ngIf="canDelete" (click)="delete(imagenIndex)" style="border-radius: 10px;">\n\n    <ion-label>{{ \'POPOVER_PET_MEDIA_OPTIONS.DELETE_PICTURE\' | translate }}</ion-label>\n\n    <ion-note item-right>\n\n      <span class="icon-eliminar"></span>\n\n    </ion-note>\n\n  </ion-item>\n\n\n\n\n\n</ion-list>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\popovers\pet-media-options\pet-media-options.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_6__pata__["a" /* Pata */],
        __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_5__services_pet_service__["a" /* PetService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], PetMediaOptionsPage);

//# sourceMappingURL=pet-media-options.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetStatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pet_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pata__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_my_pets_my_pets__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PetStatePage = (function () {
    function PetStatePage(navCtrl, navParams, viewCtrl, petService, loadingCtrl, service, geolocation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.petService = petService;
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        this.geolocation = geolocation;
        this.petId = 0;
        this.petMissing = false;
        this.petLoving = false;
        this.lat = 0;
        this.lng = 0;
        this.petId = this.navParams.get("id");
        this.petMissing = (this.navParams.get("petMissing").toString() == "0" ? false : true);
        this.petLoving = (this.navParams.get("petLoving").toString() == "0" ? false : true);
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.lat = resp.coords.latitude;
            _this.lng = resp.coords.longitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    }
    PetStatePage.prototype.ionViewDidLoad = function () {
    };
    PetStatePage.prototype.setEstado = function (id, state) {
        var _this = this;
        this.close();
        console.log('set state: ' + id + ' - ' + state);
        var obj = {
            lat: this.lat,
            lng: this.lng
        };
        var setState = this.petService.setState(id, state, obj);
        var loading = this.loadingCtrl.create({
            content: ''
        });
        loading.present();
        setState.subscribe(function (ok) {
            loading.dismiss();
            if (state == 'lost') {
                _this.service.showOk("Has reportado a tu mascota como perdida. Recibirás una notificación si alguiente tiene información o si tu mascota ha sido encontrada.");
                _this.petMissing = true;
                /*this.viewCtrl.dismiss({
                  petMissing: this.petMissing,
                  petLoving: this.petLoving
                });*/
            }
            else if (state == 'searching') {
                _this.service.showOk("Desde ahora, tu mascota está disponible en la sección buscando pareja");
                _this.petLoving = true;
                /*this.viewCtrl.dismiss({
                  petMissing: this.petMissing,
                  petLoving: this.petLoving
                });*/
            }
            else if (state == 'nosearching') {
                _this.service.showOk("Desde ahora, tu mascota dejó de estár disponible en la sección buscando pareja");
                _this.petLoving = false;
                _this.viewCtrl.dismiss({
                    petMissing: _this.petMissing,
                    petLoving: _this.petLoving
                });
            }
            else if (state == 'found') {
                _this.service.showOk("Has reportado a tu mascota como encontrada");
                _this.petMissing = false;
                /*this.viewCtrl.dismiss({
                  petMissing: this.petMissing,
                  petLoving: this.petLoving
                });*/
            }
            else if (state == 'remove') {
                _this.service.showOk();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_my_pets_my_pets__["a" /* MyPetsPage */]);
            }
        }, function (error) {
            loading.dismiss();
            _this.service.logError(null, "No fue posible procesar la solicitud. intente nuevamente");
        });
    };
    PetStatePage.prototype.close = function () {
        this.viewCtrl.dismiss({
            petMissing: this.petMissing,
            petLoving: this.petLoving
        });
    };
    return PetStatePage;
}());
PetStatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-pet-state',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\popovers\pet-state\pet-state.html"*/'<ion-list radio-group class="popover-page" style="border-radius:10px;">\n\n  <div class="close" (click)="close()">\n\n    <span class="icon-cerrar"></span>\n\n  </div>\n\n  <ion-item *ngIf="!petMissing" (click)="setEstado(petId, \'lost\');" style="border-radius:10px;">\n\n    <ion-label>{{ \'POPOVER_PET_STATE.LOST_PET\' | translate }}</ion-label>\n\n    <ion-note item-right>\n\n      <span class="icon-lupa"></span>\n\n    </ion-note>\n\n  </ion-item>\n\n  <ion-item *ngIf="petMissing" (click)="setEstado(petId, \'found\');">\n\n    <ion-label>{{ \'POPOVER_PET_STATE.PET_FOUND\' | translate }}</ion-label>\n\n    <ion-note item-right>\n\n      <span class="icon-lupa"></span>\n\n    </ion-note>\n\n  </ion-item>\n\n  <ion-item *ngIf="!petLoving" (click)="setEstado(petId, \'searching\');">\n\n    <ion-label>{{ \'POPOVER_PET_STATE.I_AM_LOOKING_FOR_PARTNER\' | translate }}</ion-label>\n\n    <ion-note item-right>\n\n      <span class="icon-corazon"></span>\n\n    </ion-note>\n\n  </ion-item>\n\n  <ion-item *ngIf="petLoving" (click)="setEstado(petId, \'nosearching\');">\n\n    <ion-label>No estoy buscando pareja</ion-label>\n\n    <ion-note item-right>\n\n      <span class="icon-corazon"></span>\n\n    </ion-note>\n\n  </ion-item>\n\n  <ion-item (click)="setEstado(petId, \'remove\');" style="border-radius:10px;">\n\n    <ion-label>{{ \'POPOVER_PET_STATE.DELETE_PET\' | translate }}</ion-label>\n\n    <ion-note item-right>\n\n      <span class="icon-eliminar"></span>\n\n    </ion-note>\n\n  </ion-item>\n\n</ion-list>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\popovers\pet-state\pet-state.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__services_pet_service__["a" /* PetService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__pata__["a" /* Pata */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */]])
], PetStatePage);

//# sourceMappingURL=pet-state.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise__ = __webpack_require__(62);
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
    return DoctorService;
}(__WEBPACK_IMPORTED_MODULE_3__base_service__["a" /* BaseService */]));
DoctorService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], DoctorService);

//# sourceMappingURL=doctor.service.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevoReq1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pata__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_doctor_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_requerimientos_nuevoreq2__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NuevoReq1 = (function () {
    function NuevoReq1(navCtrl, navParams, doctorService, alertCtrl, loadingCtrl, auth, service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.doctorService = doctorService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
        this.service = service;
        this.address_id = 0;
        this.requirement = {
            street: "",
            housenum: "",
            floornum: "",
            departament: "",
            state: "",
            city: ""
        };
        this.page = 1;
        this.cities = [];
        this.states = [];
        this.addresses = [];
        this.loading = this.loadingCtrl.create();
        this.loading.present();
        this.auth.getStates().subscribe(function (data) {
            _this.states = data.data;
            _this.loading.dismiss();
        });
        this.doctorService.address().subscribe(function (data) {
            _this.addresses = data;
            if (data.length > 0) {
                _this.address_id = data[0].id;
            }
        });
    }
    NuevoReq1.prototype.changeCities = function (newObj) {
        var _this = this;
        this.requirement.city = "";
        this.loading = this.loadingCtrl.create();
        this.loading.present();
        this.auth.getCities(newObj).subscribe(function (data) {
            _this.cities = data.data;
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.service.logError({});
        });
    };
    NuevoReq1.prototype.cancelRequerimiento = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Detener publicación',
            message: "Deseas anular este requerimiento",
            buttons: [
                {
                    text: 'No, Continuar',
                    handler: function () {
                    }
                },
                {
                    text: 'Si, Anular',
                    handler: function () {
                        _this.navCtrl.popToRoot();
                    }
                }
            ]
        });
        confirm.present();
    };
    NuevoReq1.prototype.next = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_requerimientos_nuevoreq2__["a" /* NuevoReq2 */], { requirement: this.requirement, address_id: this.address_id });
    };
    return NuevoReq1;
}());
NuevoReq1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-nuevoreq1',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\requerimientos\nuevoreq1.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>NUEVO (1/3)</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="cancelRequerimiento()">\n\n        <ion-icon name="close" class="icon-right-menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <h3>Dirección de retiro</h3>\n\n\n\n    <ion-list radio-group [(ngModel)]="address_id">\n\n      <ion-item *ngFor="let address of addresses">\n\n        <ion-label>Retirar en {{address.street}} {{address.housenum}}<br />{{address.city_name}} / {{address.state_name}}</ion-label>\n\n        <ion-radio value="1"></ion-radio>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Retirar en otra dirección</ion-label>\n\n        <ion-radio value="0"></ion-radio>\n\n      </ion-item>\n\n    </ion-list>\n\n    \n\n    <div *ngIf="address_id == 0">\n\n      <h4>Especifica la dirección</h4>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-input type="text" [(ngModel)]="requirement.street" placeholder="Calle"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="text" [(ngModel)]="requirement.housenum" placeholder="Número"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="text" [(ngModel)]="requirement.floornum" placeholder="Block/Piso"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="text" [(ngModel)]="requirement.departament" placeholder="Oficina/Departamento"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Región</ion-label>\n\n          <ion-select [(ngModel)]="requirement.state" okText="OK" cancelText="Cancelar" (ngModelChange)="changeCities($event)">\n\n            <ion-option *ngFor="let state of states" [value]="state.id">{{state.name}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Ciudad/Comuna</ion-label>\n\n          <ion-select [(ngModel)]="requirement.city" okText="OK" cancelText="Cancelar">\n\n            <ion-option *ngFor="let city of cities" [value]="city.id">{{city.name}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n\n\n    <div class="buttonWrapper">\n\n      <button class="buttonPinkOrange" ion-button round full (click)="next()">Continuar</button>\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\requerimientos\nuevoreq1.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__services_doctor_service__["a" /* DoctorService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_2__pata__["a" /* Pata */]])
], NuevoReq1);

//# sourceMappingURL=nuevoreq1.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevoReq3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pata__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_doctor_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_requerimientos_nuevoreq2__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NuevoReq3 = (function () {
    function NuevoReq3(navCtrl, navParams, doctorService, alertCtrl, loadingCtrl, auth, service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.doctorService = doctorService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
        this.service = service;
        this.address_id = 0;
        this.delivery_address = 0;
        this.extended = {
            trucktype: "",
            loadtype: "",
            servicetype: "",
            withdraw_time: "",
            delivery_time: "",
            expire_at: ""
        };
        this.page = 1;
        this.cities = [];
        this.states = [];
        this.addresses = [];
        this.trucktype = [];
        this.loadtype = [];
        this.servicetype = [];
        this.loading = this.loadingCtrl.create();
        this.loading.present();
        this.auth.getStates().subscribe(function (data) {
            _this.states = data.data;
            _this.loading.dismiss();
        });
        this.doctorService.address().subscribe(function (data) {
            _this.addresses = data;
            if (data.length > 0) {
                _this.address_id = data[0].id;
            }
        });
        this.doctorService.masterdata().subscribe(function (data) {
            _this.trucktype = data.trucktype;
            _this.loadtype = data.loadtype;
            _this.servicetype = data.servicetype;
        });
    }
    NuevoReq3.prototype.changeCities = function (newObj) {
        var _this = this;
        this.requirement.city = "";
        this.loading = this.loadingCtrl.create();
        this.loading.present();
        this.auth.getCities(newObj).subscribe(function (data) {
            _this.cities = data.data;
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.service.logError({});
        });
    };
    NuevoReq3.prototype.cancelRequerimiento = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Detener publicación',
            message: "Deseas anular este requerimiento",
            buttons: [
                {
                    text: 'No, Continuar',
                    handler: function () {
                    }
                },
                {
                    text: 'Si, Anular',
                    handler: function () {
                        _this.navCtrl.popToRoot();
                    }
                }
            ]
        });
        confirm.present();
    };
    NuevoReq3.prototype.next = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_requerimientos_nuevoreq2__["a" /* NuevoReq2 */]);
    };
    return NuevoReq3;
}());
NuevoReq3 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-nuevoreq3',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\requerimientos\nuevoreq3.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>NUEVO (3/3)</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="cancelRequerimiento()">\n\n        <ion-icon name="close" class="icon-right-menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <h3>Fechas</h3>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>¿Cuando retirar?</ion-label>\n\n        <ion-datetime displayFormat="DD/MM/YYYY HH:mm" [(ngModel)]="extended.withdraw_time"></ion-datetime>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>¿Cuando entregar?</ion-label>\n\n        <ion-datetime displayFormat="DD/MM/YYYY HH:mm" [(ngModel)]="extended.delivery_time"></ion-datetime>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Publicar hasta</ion-label>\n\n        <ion-datetime displayFormat="DD/MM/YYYY HH:mm" [(ngModel)]="extended.expire_at"></ion-datetime>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <h3>Transporte</h3>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>Tipo Camión</ion-label>\n\n        <ion-select [(ngModel)]="extended.trucktype" okText="OK" cancelText="Cancelar">\n\n          <ion-option *ngFor="let truck of trucktype" [value]="truck.id">{{truck.value}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Tipo Carga</ion-label>\n\n        <ion-select [(ngModel)]="extended.loadtype" okText="OK" cancelText="Cancelar">\n\n          <ion-option *ngFor="let load of loadtype" [value]="load.id">{{service.value}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Servicio</ion-label>\n\n        <ion-select [(ngModel)]="extended.servicetype" okText="OK" cancelText="Cancelar">\n\n          <ion-option *ngFor="let service of servicetype" [value]="service.id">{{service.value}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    </ion-list>\n\n    \n\n    <h3>Carga</h3>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-input type="number" [(ngModel)]="extended.weight" placeholder="Peso"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input type="number" [(ngModel)]="extended.volume" placeholder="Volumen"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input type="number" [(ngModel)]="extended.payment_days" placeholder="Plazos de pago"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input type="number" [(ngModel)]="extended.insurance_amount" placeholder="Monto seguro"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input type="tel" [(ngModel)]="extended.truck_qty" placeholder="Camiones necesarios"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    \n\n    <h3>Otros detalles</h3>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-input type="text" [(ngModel)]="extended.contact_name" placeholder="Nombre contacto"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input type="text" [(ngModel)]="extended.contact_phone" placeholder="Teléfono contacto"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input type="text" [(ngModel)]="extended.notes" placeholder="Detalles adicionales"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    \n\n    <div class="buttonWrapper">\n\n      <button class="buttonPinkOrange" ion-button round full (click)="next()">Enviar requerimiento</button>\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\requerimientos\nuevoreq3.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__services_doctor_service__["a" /* DoctorService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_2__pata__["a" /* Pata */]])
], NuevoReq3);

//# sourceMappingURL=nuevoreq3.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(324);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__option_core__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agm_core__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_barcode_scanner__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_app_availability__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_contacts__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_launch_navigator__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_date_picker__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_fcm__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_device__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_autosize__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_safepipe__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_component__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_profile_profile__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_juntavecinos_newsDetalle__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_list_list__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_pet_pet__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_my_pets_my_pets__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_onboarding_onboarding__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_login_login__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_signup_signup__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_signup_signup2__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_signup_signup3__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_home_categoria__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_home_store__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_contacto_contacto__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_requerimientos_requerimientos__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_requerimientos_nuevoreq1__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_requerimientos_nuevoreq2__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_requerimientos_nuevoreq3__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_camiones_camiones__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_conductores_conductores__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_servicios_servicios__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_juntavecinos_juntavecinos__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_searching_searching__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_lost_lost__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_owner_owner__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_mapa_mapa__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_clinic_clinic__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_storeprofile_storeprofile__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_storeproducts_storeproducts__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_storeservices_storeservices__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51_ng2_rut__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51_ng2_rut___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_51_ng2_rut__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pata__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_popovers_pet_media_options_pet_media_options__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_popovers_pet_state_pet_state__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_popovers_profile_media_profile_media__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_popovers_ads_ads__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__services_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__services_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__services_pet_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__services_news_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__services_doctor_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__components_pet_preview_pet_preview__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__components_pet_info_form_pet_info_form__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__components_news_preview_news_preview__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__components_qr_card_qr_card__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__ionic_native_status_bar__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__ionic_native_splash_screen__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__ngx_translate_http_loader__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__environments_environment__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__modals_ok_ok__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__modals_err_err__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__ionic_native_social_sharing__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__pages_change_password_change_password__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__ionic_native_email_composer__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__ionic_native_call_number__ = __webpack_require__(309);
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
    return new __WEBPACK_IMPORTED_MODULE_68__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
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
            __WEBPACK_IMPORTED_MODULE_24__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_pet_pet__["a" /* PetPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_my_pets_my_pets__["a" /* MyPetsPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_juntavecinos_newsDetalle__["a" /* NewsDetalle */],
            __WEBPACK_IMPORTED_MODULE_53__pages_popovers_pet_media_options_pet_media_options__["a" /* PetMediaOptionsPage */],
            __WEBPACK_IMPORTED_MODULE_54__pages_popovers_pet_state_pet_state__["a" /* PetStatePage */],
            __WEBPACK_IMPORTED_MODULE_55__pages_popovers_profile_media_profile_media__["a" /* ProfileMedia */],
            __WEBPACK_IMPORTED_MODULE_27__pages_onboarding_onboarding__["a" /* OnboardingPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_profile_profile__["a" /* Profile */],
            __WEBPACK_IMPORTED_MODULE_45__pages_owner_owner__["a" /* Owner */],
            __WEBPACK_IMPORTED_MODULE_34__pages_contacto_contacto__["a" /* Contacto */],
            __WEBPACK_IMPORTED_MODULE_29__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_signup_signup2__["a" /* SignupPage2 */],
            __WEBPACK_IMPORTED_MODULE_31__pages_signup_signup3__["a" /* SignupPage3 */],
            __WEBPACK_IMPORTED_MODULE_32__pages_home_categoria__["a" /* Categoria */],
            __WEBPACK_IMPORTED_MODULE_33__pages_home_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_39__pages_camiones_camiones__["a" /* CamionesPage */],
            __WEBPACK_IMPORTED_MODULE_56__pages_popovers_ads_ads__["a" /* AdsMedia */],
            __WEBPACK_IMPORTED_MODULE_48__pages_storeprofile_storeprofile__["a" /* StoreProfile */],
            __WEBPACK_IMPORTED_MODULE_49__pages_storeproducts_storeproducts__["a" /* StoreProducts */],
            __WEBPACK_IMPORTED_MODULE_50__pages_storeservices_storeservices__["a" /* StoreServices */],
            __WEBPACK_IMPORTED_MODULE_35__pages_requerimientos_requerimientos__["a" /* RequerimientosPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_requerimientos_nuevoreq1__["a" /* NuevoReq1 */],
            __WEBPACK_IMPORTED_MODULE_37__pages_requerimientos_nuevoreq2__["a" /* NuevoReq2 */],
            __WEBPACK_IMPORTED_MODULE_38__pages_requerimientos_nuevoreq3__["a" /* NuevoReq3 */],
            __WEBPACK_IMPORTED_MODULE_40__pages_conductores_conductores__["a" /* ConductoresPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_servicios_servicios__["a" /* ServiciosPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_juntavecinos_juntavecinos__["a" /* JuntaVecinosPage */],
            __WEBPACK_IMPORTED_MODULE_70__modals_ok_ok__["a" /* ModalOK */],
            __WEBPACK_IMPORTED_MODULE_71__modals_err_err__["a" /* ModalERR */],
            __WEBPACK_IMPORTED_MODULE_43__pages_searching_searching__["a" /* Searching */],
            __WEBPACK_IMPORTED_MODULE_44__pages_lost_lost__["a" /* Lost */],
            __WEBPACK_IMPORTED_MODULE_46__pages_mapa_mapa__["a" /* Mapa */],
            __WEBPACK_IMPORTED_MODULE_47__pages_clinic_clinic__["a" /* Clinic */],
            __WEBPACK_IMPORTED_MODULE_62__components_pet_preview_pet_preview__["a" /* PetPreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_63__components_pet_info_form_pet_info_form__["a" /* PetInfoFormComponent */],
            __WEBPACK_IMPORTED_MODULE_64__components_news_preview_news_preview__["a" /* NewsPreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_65__components_qr_card_qr_card__["a" /* QrCardComponent */],
            __WEBPACK_IMPORTED_MODULE_73__pages_change_password_change_password__["a" /* ChangePasswordPage */],
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
            __WEBPACK_IMPORTED_MODULE_6__option_core__["b" /* OptionCoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_69__environments_environment__["a" /* environment */].apiUrl),
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                name: "__satelite",
                driverOrder: ['indexeddb', 'websql']
            }),
            __WEBPACK_IMPORTED_MODULE_8__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBrUo6PdRjbF03o4_xeEoYl9kTD5V7pp7g'
            }),
            __WEBPACK_IMPORTED_MODULE_51_ng2_rut__["Ng2Rut"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_22__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_pet_pet__["a" /* PetPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_juntavecinos_newsDetalle__["a" /* NewsDetalle */],
            __WEBPACK_IMPORTED_MODULE_26__pages_my_pets_my_pets__["a" /* MyPetsPage */],
            __WEBPACK_IMPORTED_MODULE_43__pages_searching_searching__["a" /* Searching */],
            __WEBPACK_IMPORTED_MODULE_44__pages_lost_lost__["a" /* Lost */],
            __WEBPACK_IMPORTED_MODULE_46__pages_mapa_mapa__["a" /* Mapa */],
            __WEBPACK_IMPORTED_MODULE_47__pages_clinic_clinic__["a" /* Clinic */],
            __WEBPACK_IMPORTED_MODULE_45__pages_owner_owner__["a" /* Owner */],
            __WEBPACK_IMPORTED_MODULE_53__pages_popovers_pet_media_options_pet_media_options__["a" /* PetMediaOptionsPage */],
            __WEBPACK_IMPORTED_MODULE_54__pages_popovers_pet_state_pet_state__["a" /* PetStatePage */],
            __WEBPACK_IMPORTED_MODULE_55__pages_popovers_profile_media_profile_media__["a" /* ProfileMedia */],
            __WEBPACK_IMPORTED_MODULE_27__pages_onboarding_onboarding__["a" /* OnboardingPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_contacto_contacto__["a" /* Contacto */],
            __WEBPACK_IMPORTED_MODULE_29__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_signup_signup2__["a" /* SignupPage2 */],
            __WEBPACK_IMPORTED_MODULE_31__pages_signup_signup3__["a" /* SignupPage3 */],
            __WEBPACK_IMPORTED_MODULE_32__pages_home_categoria__["a" /* Categoria */],
            __WEBPACK_IMPORTED_MODULE_33__pages_home_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_39__pages_camiones_camiones__["a" /* CamionesPage */],
            __WEBPACK_IMPORTED_MODULE_56__pages_popovers_ads_ads__["a" /* AdsMedia */],
            __WEBPACK_IMPORTED_MODULE_48__pages_storeprofile_storeprofile__["a" /* StoreProfile */],
            __WEBPACK_IMPORTED_MODULE_49__pages_storeproducts_storeproducts__["a" /* StoreProducts */],
            __WEBPACK_IMPORTED_MODULE_50__pages_storeservices_storeservices__["a" /* StoreServices */],
            __WEBPACK_IMPORTED_MODULE_35__pages_requerimientos_requerimientos__["a" /* RequerimientosPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_requerimientos_nuevoreq1__["a" /* NuevoReq1 */],
            __WEBPACK_IMPORTED_MODULE_37__pages_requerimientos_nuevoreq2__["a" /* NuevoReq2 */],
            __WEBPACK_IMPORTED_MODULE_38__pages_requerimientos_nuevoreq3__["a" /* NuevoReq3 */],
            __WEBPACK_IMPORTED_MODULE_40__pages_conductores_conductores__["a" /* ConductoresPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_servicios_servicios__["a" /* ServiciosPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_juntavecinos_juntavecinos__["a" /* JuntaVecinosPage */],
            __WEBPACK_IMPORTED_MODULE_62__components_pet_preview_pet_preview__["a" /* PetPreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_63__components_pet_info_form_pet_info_form__["a" /* PetInfoFormComponent */],
            __WEBPACK_IMPORTED_MODULE_64__components_news_preview_news_preview__["a" /* NewsPreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_65__components_qr_card_qr_card__["a" /* QrCardComponent */],
            __WEBPACK_IMPORTED_MODULE_70__modals_ok_ok__["a" /* ModalOK */],
            __WEBPACK_IMPORTED_MODULE_71__modals_err_err__["a" /* ModalERR */],
            __WEBPACK_IMPORTED_MODULE_21__pages_profile_profile__["a" /* Profile */],
            __WEBPACK_IMPORTED_MODULE_73__pages_change_password_change_password__["a" /* ChangePasswordPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_57__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_58__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_59__services_pet_service__["a" /* PetService */],
            __WEBPACK_IMPORTED_MODULE_60__services_news_service__["a" /* NewsService */],
            __WEBPACK_IMPORTED_MODULE_61__services_doctor_service__["a" /* DoctorService */],
            __WEBPACK_IMPORTED_MODULE_66__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_67__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__agm_core__["b" /* GoogleMapsAPIWrapper */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_52__pata__["a" /* Pata */],
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
            __WEBPACK_IMPORTED_MODULE_72__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_74__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_75__ionic_native_email_composer__["a" /* EmailComposer */],
            __WEBPACK_IMPORTED_MODULE_76__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_51_ng2_rut__["RutValidator"]
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 416:
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

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
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

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contacto_contacto__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_mapa_mapa__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_storeprofile_storeprofile__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_storeproducts_storeproducts__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_storeservices_storeservices__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_juntavecinos_juntavecinos__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pata__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_fcm__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__environments_environment__ = __webpack_require__(12);
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
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\app\app.html"*/'<ion-menu [content]="content" id="leftMenu" class="sidenav">\n\n\n\n  <div class="profile" *ngIf="user">\n\n    <div class="image" [style.background-image]="\'url(\' + user.avatar + \')\'" style="background-size: cover"></div>\n\n    <div class="name">{{ user.first_name }} {{ user.last_name }} {{ user.company }}</div>\n\n    <div class="scope" *ngIf="active">{{ active.name }} </div>\n\n    <button menuClose (click)="profile()" ion-button round color="light">MI PERFIL</button>\n\n  </div>\n\n\n\n  <div menuClose *ngFor="let p of pages" class="link" [ngClass]="{\'selected\' : p.selected}" (click)="openPage(p)">\n\n    <span>{{p.title}}</span>\n\n  </div>\n\n  \n\n  <div menuClose *ngFor="let zone of zones" class="link destacado" [ngClass]="{\'selected\' : selected}" (click)="switchActive(zone)">\n\n    <span><strong>Administrar</strong><br />{{zone.name}}</span>\n\n  </div>\n\n\n\n  <div menuClose class="link" (click)="contacto()">\n\n    <span>Contacto</span>\n\n  </div>\n\n\n\n  <div menuClose class="link" (click)="closeSession()">\n\n    <span>{{\'APP_MENU.CLOSE\' | translate }}</span>\n\n  </div>\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Config */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Config */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_17__pata__["a" /* Pata */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_17__pata__["a" /* Pata */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_15__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_15__services_user_service__["a" /* UserService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_18__ionic_native_fcm__["a" /* FCM */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_18__ionic_native_fcm__["a" /* FCM */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]) === "function" && _p || Object])
], MyApp);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_store__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_doctor_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_categoria__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_juntavecinos_juntavecinos__ = __webpack_require__(167);
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
        selector: 'page-home',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\home\home.html"*/'<!--\n\n  Generated template for the MyPetsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title class="no-padding">CIUDAD SATÉLITE</ion-title>\n\n    <ion-buttons end>\n\n      <button class="search-top" ion-button icon-only (click)="toggleSearch()">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar class="searchbar" *ngIf="searchActive">\n\n      <ion-searchbar (ionClear)="onClear($event)" (ionInput)="onSearch($event)" [(ngModel)]="search" placeholder="Tiendas, productos y servicios en Ciudad Satélite"></ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n<img src="assets/img/jjvv.jpg" *ngIf="!searchActive" (click)="goToJJVV()" class="jjvv" />\n\n\n\n<div *ngIf="isSearching" class="search-container">\n\n  <div *ngIf="isSearchingLoad">\n\n    <div text-center>\n\n      <ion-spinner></ion-spinner>\n\n      <br /><br />\n\n      <strong>Buscando</strong><br />\n\n      &quot;{{search}}&quot;\n\n    </div>\n\n  </div>\n\n  <div *ngIf="!isSearchingLoad">\n\n    <div *ngIf="searchStores.length == 0 && searchProducts.length == 0 && searchServices.length == 0 && !isSearchingLoad" text-center>\n\n      <ion-icon name="hand"></ion-icon>\n\n      <br />\n\n      <strong>No se encontraron resultados</strong><br />\n\n      &quot;{{search}}&quot;\n\n    </div>\n\n    <div class="search-results" *ngIf="(searchStores.length > 0 || searchProducts.length > 0 || searchServices.length > 0) && !isSearchingLoad">\n\n\n\n      <ion-list>\n\n        <ion-list-header *ngIf="searchStores.length > 0">\n\n          Tiendas ({{searchStores.length}})\n\n        </ion-list-header>\n\n\n\n        <ion-item *ngFor="let result of searchStores" (click)="goToStore(result);">\n\n          <ion-row>\n\n            <ion-col col-2>\n\n              <img src="{{result.icon}}" />\n\n            </ion-col>\n\n            <ion-col col-10>\n\n                <strong>{{result.name}}</strong>\n\n                {{result.address}} {{(result.local != "" ? "Loc. "+result.local : "")}}\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n\n\n        <ion-list-header *ngIf="searchProducts.length > 0">\n\n          Productos ({{searchProducts.length}})\n\n        </ion-list-header>\n\n\n\n        <ion-item *ngFor="let result of searchProducts" (click)="goToStore(result.store);">\n\n          <ion-row>\n\n            <ion-col col-2>\n\n              <img src="{{result.avatar}}" />\n\n            </ion-col>\n\n            <ion-col col-10>\n\n                <strong>{{result.name}}</strong>\n\n                <strong *ngIf="result.price != 0">$ {{result.price | number:\'1.0-0\' }}</strong>\n\n                Encontrado en <b>{{result.store.name}}</b>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n\n\n        <ion-list-header *ngIf="searchServices.length > 0">\n\n          Servicios ({{searchServices.length}})\n\n        </ion-list-header>\n\n\n\n        <ion-item *ngFor="let result of searchServices" (click)="goToStore(result.store);">\n\n          <ion-row>\n\n            <ion-col col-2>\n\n              <img src="{{result.avatar}}" />\n\n            </ion-col>\n\n            <ion-col col-10>\n\n                <strong>{{result.name}}</strong>\n\n                <strong *ngIf="result.price != 0">$ {{result.price | number:\'1.0-0\' }}</strong>\n\n                Encontrado en <b>{{result.store.name}}</b>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n\n\n    </div>\n\n  </div>\n\n</div>\n\n\n\n<div *ngIf="searchActive && !isSearching" class="search-container2" text-center>\n\n      <ion-icon name="search"></ion-icon>\n\n      <br />\n\n      <strong>Comienza a escribir para<br />buscar tiendas, productos o servicios</strong><br />\n\n      <br />\n\n</div>\n\n\n\n<ion-refresher (ionRefresh)="doRefresh($event)" *ngIf="!isSearching">\n\n  <ion-refresher-content pullingText="actualizar..." refreshingText="actualizando..."></ion-refresher-content>\n\n</ion-refresher>\n\n\n\n<div *ngIf="isLoading" class="pd20">\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n         </div>\n\n      </div>\n\n  </div>\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n        </div>\n\n      </div>\n\n  </div>\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n        </div>\n\n      </div>\n\n  </div>\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n        </div>\n\n      </div>\n\n  </div>\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n        </div>\n\n      </div>\n\n  </div>\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n        </div>\n\n      </div>\n\n  </div>\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n        </div>\n\n      </div>\n\n  </div>\n\n  <div class="timeline-wrapper">\n\n      <div class="timeline-item forceh">\n\n        <div class="animated-background">\n\n          <div class="background-masker news-icon"></div>\n\n        </div>\n\n      </div>\n\n  </div>\n\n</div>\n\n\n\n<div *ngIf="!isLoading && !searchActive">\n\n\n\n  <ion-list class="pd20">\n\n    <button ion-item detail-push *ngFor="let categ of categs" (click)="verCategoria(categ)">\n\n      <ion-avatar item-start>\n\n        <img src="{{categ.banner}}">\n\n      </ion-avatar>\n\n      <h2>{{categ.name}}</h2>\n\n      <h3>{{categ.total_stores}} tiendas</h3>\n\n      <!--<p>I\'ve had a pretty messed up day. If we just...</p>-->\n\n    </button>\n\n  </ion-list>\n\n</div>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\home\home.html"*/
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

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-list',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-right>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnboardingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(7);
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
 * Generated class for the OnboardingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OnboardingPage = (function () {
    function OnboardingPage(navCtrl, navParams, menu, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.storage = storage;
        this.menu.swipeEnable(false, 'leftMenu');
    }
    OnboardingPage.prototype.onIonDrag = function (event) {
        // if (this.slider.getPreviousIndex() >= (this.slider.length() - 1)) {
        //   this.skip();
        // }
    };
    OnboardingPage.prototype.skip = function () {
        this.storage.set("MP-FirstTime", true);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */], {}, { animate: true, direction: 'forward' });
    };
    OnboardingPage.prototype.next = function () {
        if (this.slider.isEnd()) {
            this.skip();
        }
        else {
            this.slider.slideNext();
        }
    };
    return OnboardingPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
], OnboardingPage.prototype, "slider", void 0);
OnboardingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-onboarding',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\onboarding\onboarding.html"*/'<!--\n\n  Generated template for the OnboardingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content>\n\n  <ion-slides #slider pager slidesPerView="1" (ionSlideWillChange)="onIonDrag($event)" >\n\n    <ion-slide id="slide1">\n\n      <div class="title">Únete</div>\n\n      <div class="card">\n\n        <img class="step-one" src="./assets/img/icon.route.png" alt="">\n\n        <div>Bienvenido a CamiónGo. Primera red de carga en tiempo real</div>\n\n        <div class="bold">Transportistas, Conductores y Generadores de carga</div>\n\n      </div>\n\n    </ion-slide>\n\n    <ion-slide id="slide2">\n\n      <div class="title">Generadores de Carga</div>\n\n      <div class="card">\n\n        <img class="step-two" src="./assets/img/icon.box.png" alt="">\n\n        <div>\n\n          Revisa <span class="bold">en línea y en tiempo real</span> transportistas disponibles en <span class="bold">todo Chile.</span>\n\n          Consigue transporte inmediato o deja un requerimiento y espera las mejores ofertas.          \n\n        </div>\n\n      </div>\n\n    </ion-slide>\n\n    <ion-slide id="slide3">\n\n      <div class="title">Transportistas</div>\n\n      <div class="card">\n\n        <img class="step-three" src="./assets/img/icon.deliveryman.png" alt="">\n\n        <div>\n\n          Haz ofertas a los requerimientos de carga, si tu oferta es buena, el viaje es tuyo. \n\n          <span class="bold">Ponte disponible</span> para recibir solicitudes de transporte cercanas a tí en tiempo real.\n\n        </div>\n\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n  <div class="labels">\n\n    <div class="labelsWrapper">\n\n      <div id="skip" (click)="skip()">{{ \'ONBOARDING.SKIP\' | translate }}</div>\n\n      <div id="next" (click)="next()">{{ \'ONBOARDING.NEXT\' | translate }}</div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\onboarding\onboarding.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], OnboardingPage);

//# sourceMappingURL=onboarding.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequerimientosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_doctor_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_requerimientos_nuevoreq1__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequerimientosPage = (function () {
    function RequerimientosPage(navCtrl, doctorService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.doctorService = doctorService;
        this.requirements = [];
        this.page = 1;
        this.doctorService.requirements(this.page).subscribe(function (requirements) {
            _this.page++;
            _this.requirements = requirements;
        }, function (error) {
            console.log(error);
        });
    }
    RequerimientosPage.prototype.doRefresh = function (refresher) {
        this.page = 1;
        /*this.newsService.requirements(this.page).subscribe(
          (news:any) =>{
            this.pageNews++;
            this.news = news;
            console.log(news);
            refresher.complete();
          },
          error => {
            console.log(error);
            refresher.complete();
          }
        )*/
    };
    RequerimientosPage.prototype.doInfinite = function (infiniteScroll) {
        console.log('doInfinite...');
        /*this.newsService.geList(this.pageNews, this.perPegeNews).subscribe(
          (news: any) =>{
            this.pageNews++;
            news.forEach( (value) => {
              this.news.push(value);
            });
            infiniteScroll.complete();
          },
          error => {
            console.log(error);
            infiniteScroll.complete();
          }
        )*/
    };
    RequerimientosPage.prototype.addRequerimiento = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_requerimientos_nuevoreq1__["a" /* NuevoReq1 */]);
    };
    return RequerimientosPage;
}());
RequerimientosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-requerimientos',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\requerimientos\requerimientos.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>MIS REQUERIMIENTOS</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="addRequerimiento()">\n\n        <ion-icon name="add" class="icon-right-menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card *ngIf="requirements.length == 0">\n\n    <ion-card-header class="no-items">\n\n      <img src="assets/img/transport_bad.png" />\n\n      <br />\n\n      No tienes requerimientos\n\n    </ion-card-header>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\requerimientos\requerimientos.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__services_doctor_service__["a" /* DoctorService */]])
], RequerimientosPage);

//# sourceMappingURL=requerimientos.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CamionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pet_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_news_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CamionesPage = (function () {
    function CamionesPage(navCtrl, petService, newsService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.petService = petService;
        this.newsService = newsService;
        this.pets = [];
        this.news = [];
        this.pageNews = 1;
        this.perPegeNews = 2;
        this.staticUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].staticUrl;
        this.petService.getLast().subscribe(function (pets) { return _this.pets = pets; });
        this.newsService.geList(this.pageNews, this.perPegeNews).subscribe(function (news) {
            _this.pageNews++;
            _this.news = news;
        }, function (error) {
            console.log(error);
        });
    }
    CamionesPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.pageNews = 1;
        this.petService.getLast().subscribe(function (pets) { return _this.pets = pets; });
        this.newsService.geList(this.pageNews, this.perPegeNews).subscribe(function (news) {
            _this.pageNews++;
            _this.news = news;
            console.log(news);
            refresher.complete();
        }, function (error) {
            console.log(error);
            refresher.complete();
        });
    };
    CamionesPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('doInfinite...');
        this.newsService.geList(this.pageNews, this.perPegeNews).subscribe(function (news) {
            _this.pageNews++;
            news.forEach(function (value) {
                _this.news.push(value);
            });
            infiniteScroll.complete();
        }, function (error) {
            console.log(error);
            infiniteScroll.complete();
        });
    };
    return CamionesPage;
}());
CamionesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-camiones',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\camiones\camiones.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>CAMIONES Y REMOLQUES</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\camiones\camiones.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__services_pet_service__["a" /* PetService */],
        __WEBPACK_IMPORTED_MODULE_3__services_news_service__["a" /* NewsService */]])
], CamionesPage);

//# sourceMappingURL=camiones.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConductoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pet_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_news_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConductoresPage = (function () {
    function ConductoresPage(navCtrl, petService, newsService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.petService = petService;
        this.newsService = newsService;
        this.pets = [];
        this.news = [];
        this.pageNews = 1;
        this.perPegeNews = 2;
        this.staticUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].staticUrl;
        this.petService.getLast().subscribe(function (pets) { return _this.pets = pets; });
        this.newsService.geList(this.pageNews, this.perPegeNews).subscribe(function (news) {
            _this.pageNews++;
            _this.news = news;
        }, function (error) {
            console.log(error);
        });
    }
    ConductoresPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.pageNews = 1;
        this.petService.getLast().subscribe(function (pets) { return _this.pets = pets; });
        this.newsService.geList(this.pageNews, this.perPegeNews).subscribe(function (news) {
            _this.pageNews++;
            _this.news = news;
            console.log(news);
            refresher.complete();
        }, function (error) {
            console.log(error);
            refresher.complete();
        });
    };
    ConductoresPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('doInfinite...');
        this.newsService.geList(this.pageNews, this.perPegeNews).subscribe(function (news) {
            _this.pageNews++;
            news.forEach(function (value) {
                _this.news.push(value);
            });
            infiniteScroll.complete();
        }, function (error) {
            console.log(error);
            infiniteScroll.complete();
        });
    };
    return ConductoresPage;
}());
ConductoresPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-conductores',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\conductores\conductores.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>CONDUCTORES</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\conductores\conductores.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__services_pet_service__["a" /* PetService */],
        __WEBPACK_IMPORTED_MODULE_3__services_news_service__["a" /* NewsService */]])
], ConductoresPage);

//# sourceMappingURL=conductores.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiciosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pet_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_news_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ServiciosPage = (function () {
    function ServiciosPage(navCtrl, petService, newsService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.petService = petService;
        this.newsService = newsService;
        this.pets = [];
        this.news = [];
        this.pageNews = 1;
        this.perPegeNews = 2;
        this.staticUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].staticUrl;
        this.petService.getLast().subscribe(function (pets) { return _this.pets = pets; });
        this.newsService.geList(this.pageNews, this.perPegeNews).subscribe(function (news) {
            _this.pageNews++;
            _this.news = news;
        }, function (error) {
            console.log(error);
        });
    }
    ServiciosPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.pageNews = 1;
        this.petService.getLast().subscribe(function (pets) { return _this.pets = pets; });
        this.newsService.geList(this.pageNews, this.perPegeNews).subscribe(function (news) {
            _this.pageNews++;
            _this.news = news;
            console.log(news);
            refresher.complete();
        }, function (error) {
            console.log(error);
            refresher.complete();
        });
    };
    ServiciosPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('doInfinite...');
        this.newsService.geList(this.pageNews, this.perPegeNews).subscribe(function (news) {
            _this.pageNews++;
            news.forEach(function (value) {
                _this.news.push(value);
            });
            infiniteScroll.complete();
        }, function (error) {
            console.log(error);
            infiniteScroll.complete();
        });
    };
    return ServiciosPage;
}());
ServiciosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-servicios',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\servicios\servicios.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>MIS SERVICIOS</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\servicios\servicios.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__services_pet_service__["a" /* PetService */],
        __WEBPACK_IMPORTED_MODULE_3__services_news_service__["a" /* NewsService */]])
], ServiciosPage);

//# sourceMappingURL=servicios.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Searching; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pet_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pet_pet__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_pet_model__ = __webpack_require__(66);
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
 * Generated class for the MyPetsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Searching = (function () {
    function Searching(navCtrl, navParams, storage, petService, barcodeScanner, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.petService = petService;
        this.barcodeScanner = barcodeScanner;
        this.loadingCtrl = loadingCtrl;
        this.over = false;
        this.tab1 = true;
        this.tab2 = false;
        this.loading = null;
        this.findpets = [];
        this.pets = [];
        this.candidatos = [];
        this.especies = [];
        this.razas = [];
        this.sizes = [];
        this.sexs = [];
        this.search = {
            breed: '',
            type: '',
            age: '',
            sex: '',
            size: ''
        };
        this.staticUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].staticUrl;
        this.mascota_activa = new __WEBPACK_IMPORTED_MODULE_7__models_pet_model__["a" /* Pet */]();
        var load = this.loadingCtrl.create();
        load.present();
        var search = this.petService.searchAvailable(this.search);
        search.subscribe(function (ok) {
            load.dismiss();
            _this.findpets = ok.data;
        }, function (error) {
            load.dismiss();
            console.log('error', error);
            _this.findpets = [];
        });
        this.petService.especie().subscribe(function (ok) {
            _this.especies = ok;
        });
        this.petService.size().subscribe(function (ok) {
            _this.sizes = ok;
        });
        this.petService.sex().subscribe(function (ok) {
            _this.sexs = ok;
        });
        this.storage.get('MP-Profile').then(function (val) {
            _this.petService.getId(val.id).subscribe(function (pets) {
                _this.pets = pets;
            });
        });
    }
    Searching.prototype.refreshRazas = function (e) {
        var _this = this;
        if (e != "") {
            this.petService.raza(e).subscribe(function (ok) {
                _this.razas = ok;
            });
        }
        else {
            this.razas = [];
        }
    };
    Searching.prototype.activarMascota = function (pet) {
        var _this = this;
        this.mascota_activa = pet;
        var load = this.loadingCtrl.create();
        load.present();
        // let find = this.petService.getMyLove();
        /* find.subscribe((ok) => {
           load.dismiss();
         }, (error) => {
           load.dismiss();
         });*/
        var search = this.petService.searchAvailable(this.search);
        search.subscribe(function (ok) {
            load.dismiss();
            _this.findpets = ok.data;
        }, function (error) {
            load.dismiss();
            console.log('error', error);
            _this.findpets = [];
        });
        var recived = this.petService.getMyLoveRecived(this.mascota_activa.id);
        recived.subscribe(function (pets) {
            console.log(JSON.stringify(pets));
            console.log(JSON.stringify(pets.applicant_pet));
            _this.candidatos = pets;
            //load.dismiss();
        }, function (error) {
            //load.dismiss();
        });
    };
    Searching.prototype.Tab1 = function () {
        this.tab1 = true;
        this.tab2 = false;
    };
    Searching.prototype.Tab2 = function () {
        this.tab1 = false;
        this.tab2 = true;
    };
    Searching.prototype.openFiltros = function () {
        this.over = true;
    };
    Searching.prototype.closeFiltros = function () {
        var _this = this;
        this.over = false;
        var loading = this.loadingCtrl.create({
            content: 'filtrando...'
        });
        loading.present();
        var search = this.petService.searchAvailable(this.search);
        search.subscribe(function (ok) {
            _this.findpets = ok.data;
            loading.dismiss();
        }, function (error) {
            loading.dismiss();
            _this.findpets = [];
        });
    };
    Searching.prototype.goToDetail = function (pet) {
        console.log('candidato:' + JSON.stringify(pet));
        console.log('search.myPet:' + JSON.stringify(this.mascota_activa));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_pet_pet__["a" /* PetPage */], {
            pet: pet,
            myPet: this.mascota_activa,
            petId: this.mascota_activa.id,
            isDetail: false,
            isLove: true,
            isMatch: false,
            isEdit: false
        });
    };
    // 0 solicitud
    // 1 aceptado
    // 2 reject
    Searching.prototype.goToLoveDetail = function (pet) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_pet_pet__["a" /* PetPage */], {
            pet: pet,
            myPet: this.mascota_activa,
            petId: this.mascota_activa.id,
            statusMatch: pet.status,
            isDetail: false,
            isLove: true,
            isMatch: true,
            isEdit: false
        });
    };
    Searching.prototype.getYearOld = function (date) {
        var d = new Date(date);
        var c = new Date();
        d.getFullYear();
        var year = (c.getFullYear() - d.getFullYear());
        return (year >= 0) ? year : 'sin especificar';
    };
    Searching.prototype.getLocation = function (pet) {
        var location = 'sin especificar';
        var district = this.capitalizeFirstLetter(pet.district.toLowerCase());
        var region = this.capitalizeFirstLetter(pet.region.toLowerCase());
        if (district.length > 0 && region.length > 0) {
            location = district + ', ' + region;
        }
        else if (district.length > 0 || region.length > 0) {
            location = district + region;
        }
        return location;
    };
    Searching.prototype.capitalizeFirstLetter = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    return Searching;
}());
Searching = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-searching',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\searching\searching.html"*/'<!--\n\n  Generated template for the MyPetsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <span class="icon-menu"></span>\n\n    </button>\n\n    <ion-title>{{ \'APP_MENU.LOOKING_FOR_PARTNERS\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="over" *ngIf="over">\n\n    <ion-grid>\n\n      <ion-row>\n\n      <ion-col col-9><h1>Filtros de búsqueda</h1> </ion-col>\n\n      <ion-col col-3 text-center><img (click)="closeFiltros();" src="assets/img/close.png" style="max-width: 40px;" /></ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>Especie</ion-col>\n\n        <ion-col col-6>\n\n          <ion-select [(ngModel)]="search.type" (ionChange)="refreshRazas($event)">\n\n            <ion-option value="">Cualquiera</ion-option>\n\n            <ion-option *ngFor="let species of especies" [value]="species.id">{{species.species}}</ion-option>\n\n          </ion-select>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>Raza</ion-col>\n\n        <ion-col col-6>\n\n          <ion-select [(ngModel)]="search.breed">\n\n            <ion-option value="">Cualquiera</ion-option>\n\n            <ion-option *ngFor="let breed of razas" [value]="breed.id">{{breed.breed}}</ion-option>\n\n          </ion-select>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>Edad</ion-col>\n\n        <ion-col col-6>\n\n          <ion-select [(ngModel)]="search.age">\n\n            <ion-option value="">Cualquiera</ion-option>\n\n            <ion-option value="0-1">Menos de un año</ion-option>\n\n            <ion-option value="1-3">entre 1 y 3 años</ion-option>\n\n            <ion-option value="3-5">entre 3 y 5 años</ion-option>\n\n            <ion-option value="5-7">entre 5 y 7 años</ion-option>\n\n            <ion-option value="7-10">entre 7 y 10 años</ion-option>\n\n            <ion-option value="10-1000">más de 10 años</ion-option>\n\n          </ion-select>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>Sexo</ion-col>\n\n        <ion-col col-6>\n\n          <ion-select [(ngModel)]="search.sex">\n\n            <ion-option value="">Cualquiera</ion-option>\n\n            <ion-option *ngFor="let sex of sexs" [value]="sex.id">{{sex.value}}</ion-option>\n\n          </ion-select>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>Tamaño</ion-col>\n\n        <ion-col col-6>\n\n          <ion-select [(ngModel)]="search.size">\n\n            <ion-option value="">Cualquiera</ion-option>\n\n            <ion-option *ngFor="let size of sizes" [value]="size.id">{{size.value}}</ion-option>\n\n          </ion-select>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <div class="tabs t">\n\n    <button (click)="Tab1()" [ngClass]="tab1 ? \'activo\' : \'\'">Buscando pareja</button>\n\n    <button (click)="Tab2()" [ngClass]="tab2 ? \'activo\' : \'\'">Mis candidatos</button>\n\n  </div>\n\n\n\n  <div [hidden]="!tab1">\n\n    <!-- start Banner -->\n\n    <ins data-revive-zoneid="9" data-revive-id="9d276fa041e1067786e857fe85ab98f9"></ins>\n\n    <!-- end Banner -->\n\n\n\n    <div class="slidesWrapper">\n\n      <ion-slides pager slidesPerView="4.5">\n\n        <ion-slide *ngFor="let pet of pets">\n\n          <pet-preview [pet]="pet" (click)="activarMascota(pet)" [preventDetail]="true" [isDetail]="false" [isMe]="true" [add]="false"></pet-preview>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </div>\n\n\n\n    <div class="t" *ngIf="pets.length == 0" style="text-align:center;">\n\n      No tienes ninguna mascota, conoce candidatos agregando tu primera mascota en <b>Mis Mascotas</b>\n\n    </div>\n\n\n\n    <div class="f0" *ngIf="mascota_activa.id">\n\n      <ion-grid class="t">\n\n        <ion-row>\n\n        <ion-col col-9><h1>Actualmente buscando pareja para {{mascota_activa.name}}</h1> </ion-col>\n\n        <ion-col col-3 text-center><img (click)="openFiltros();"  src="assets/img/filter.png" style="max-width: 40px;" /></ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n      <div text-center *ngIf="findpets.length == 0"><strong>No hay mascotas encontradas</strong></div>\n\n\n\n      <ion-row class="t" responsive-sm wrap>\n\n        <ion-col col-6 *ngFor="let pet of findpets">\n\n         <div class="rondme" (click)="goToDetail(pet)">\n\n          <div class="foto" [style.background-image]="\'url(\' + (pet.avatar != \'\' ? staticUrl+pet.avatar : \'assets/img/pet.png\' ) + \')\'" style="background-size: cover;">\n\n          </div>\n\n          <div class="name">{{pet.name}}</div>\n\n          <div class="sub">Especie: {{pet.type_name}}</div>\n\n          <div class="sub">Raza: {{pet.breed_name}}</div>\n\n          <div class="sub">Sexo: {{pet.sex_name}}</div>\n\n          <div class="sub">Tamaño: {{pet.size_name}}</div>\n\n          <div class="sub">Edad: {{getYearOld(pet.birthday)}}</div>\n\n           <div class="sub location"><ion-icon class="ion-icon" name="pin"></ion-icon>{{getLocation(pet)}}</div>\n\n         </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n\n\n  </div>\n\n  <div [hidden]="!tab2">\n\n    <!-- start Banner -->\n\n    <ins data-revive-zoneid="9" data-revive-id="9d276fa041e1067786e857fe85ab98f9"></ins>\n\n    <!-- end Banner -->\n\n    <div class="slidesWrapper">\n\n      <ion-slides pager slidesPerView="4.5">\n\n        <ion-slide *ngFor="let pet of pets">\n\n          <pet-preview [pet]="pet" (click)="activarMascota(pet)" [preventDetail]="true" [isDetail]="false" [isMe]="true" [add]="false"></pet-preview>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </div>\n\n\n\n    <div class="t" *ngIf="pets.length == 0" style="text-align:center;">\n\n      No tienes ninguna mascota, conoce candidatos agregando tu primera mascota en <b>Mis Mascotas</b>\n\n    </div>\n\n\n\n    <div class="f0" *ngIf="mascota_activa.id">\n\n      <ion-grid class="t" *ngIf="candidatos.length > 0">\n\n        <ion-row>\n\n          <ion-col col-12><h1>Estos son los candidatos para {{ mascota_activa.name }}</h1> </ion-col>\n\n\n\n          <ion-col col-6 *ngFor="let pet of candidatos">\n\n            <div class="rondme" (click)="goToLoveDetail(pet)">\n\n              <div class="foto" [style.background-image]="\'url(\' + (pet.avatar && pet.avatar != \'\' ? staticUrl+pet.avatar : \'assets/img/default/mascota.png\' ) + \')\'" style="background-size: cover;">\n\n              </div>\n\n              <div class="name">{{pet.name}}</div>\n\n              <div class="sub">Especie: {{pet.type_name}}</div>\n\n              <div class="sub">Raza: {{pet.breed_name}}</div>\n\n              <div class="sub">Sexo: {{pet.sex_name}}</div>\n\n              <div class="sub">Tamaño: {{pet.size_name}}</div>\n\n              <div class="sub">Edad: {{getYearOld(pet.birthday)}}</div>\n\n            </div>\n\n          </ion-col>\n\n\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n      <ion-grid class="t" *ngIf="candidatos.length == 0">\n\n        <ion-row>\n\n          <ion-col col-12><h1>No hay candidatos activos para {{ mascota_activa.name }}</h1> </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\searching\searching.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__services_pet_service__["a" /* PetService */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], Searching);

//# sourceMappingURL=searching.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lost; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pata__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_pet_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pet_pet__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_user_service__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var Lost = (function () {
    function Lost(navCtrl, service, navParams, petService, userService, barcodeScanner, loadingCtrl, storage, platform, geolocation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.service = service;
        this.navParams = navParams;
        this.petService = petService;
        this.userService = userService;
        this.barcodeScanner = barcodeScanner;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.platform = platform;
        this.geolocation = geolocation;
        this.user = null;
        this.loading = null;
        this.findpets = [];
        this.mylostpets = [];
        this.tab1 = true;
        this.tab2 = false;
        this.staticUrl = '';
        this.over = false;
        this.search = {
            breed: '',
            type: '',
            age: '',
            sex: '',
            size: ''
        };
        this.staticUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].staticUrl;
        //this.filtro();
        this.userService.getProfile().subscribe(function (data) {
            _this.user = data;
        }, function (error) { });
    }
    Lost.prototype.Tab1 = function () {
        this.tab1 = true;
        this.tab2 = false;
    };
    Lost.prototype.Tab2 = function () {
        this.tab1 = false;
        this.tab2 = true;
    };
    Lost.prototype.filtro = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create();
        this.loading.present();
        var lost = this.petService.searchLost(this.search);
        lost.subscribe(function (ok) {
            _this.findpets = ok.data;
            _this.storage.get('MP-Profile').then(function (val) {
                _this.petService.getId(val.id).subscribe(function (pets) {
                    _this.mylostpets = [];
                    for (var i = 0; i < pets.length; i++) {
                        if (pets[i].missing == 1) {
                            _this.mylostpets.push(pets[i]);
                        }
                    }
                    _this.loading.dismiss();
                });
            });
        }, function (error) {
            _this.loading.dismiss();
            console.log('error', error);
            _this.findpets = [];
        });
    };
    Lost.prototype.ionViewDidEnter = function () {
        this.staticUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].staticUrl;
        this.filtro();
    };
    Lost.prototype.scanear = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.barcodeScanner.scan().then(function (barcodeData) {
                if (barcodeData.text.indexOf('mimaskot.pe') > -1) {
                    var data = barcodeData.text.split('/');
                    var code = data[data.length - 1];
                    _this.loading = _this.loadingCtrl.create();
                    _this.loading.present();
                    _this.geolocation.getCurrentPosition().then(function (resp) {
                        var data = {
                            "code": code.trim(),
                            "lat_seen": resp.coords.latitude,
                            "lng_seen": resp.coords.longitude,
                            "user_id": _this.user.id
                        };
                        _this.petSeeIn(data);
                    }).catch(function (error) {
                        console.log('Error getting location', error);
                        /** Enviar notificación son ubicación */
                        var data = {
                            "code": code.trim(),
                            "lat_seen": '',
                            "lng_seen": '',
                            "user_id": _this.user.id
                        };
                        _this.petSeeIn(data);
                        //
                    });
                }
                else if (barcodeData.text.length > 0) {
                    _this.service.logError({}, 'QR escaneado no corresponde a MiMaskot');
                }
                else {
                    // did not take the qr code
                }
            }, function (err) {
                alert('Error: ' + JSON.stringify(err));
                _this.service.logError(null, "Servicio temporalmente no disponible");
            });
        }
        else {
        }
    };
    /** Enviar notificación cuando haya visto una mascota perdida */
    Lost.prototype.petSeeIn = function (data) {
        var _this = this;
        console.log("petSeeIn: " + JSON.stringify(data));
        var petcheck = this.petService.notifyFoundPetFromQr(data);
        petcheck.subscribe(function (ok) {
            _this.goToPetFound(ok);
        }, function (err) {
            _this.loading.dismiss();
            _this.service.logError({}, 'No fue posible validar el QR');
        });
    };
    Lost.prototype.goToPetFound = function (ok) {
        if (ok.hasOwnProperty("status")) {
            this.loading.dismiss();
            this.service.logError({}, 'Código QR no encontrado como una mascota perdida');
        }
        else {
            this.loading.dismiss();
            this.service.showOk('Enhorabuena, haz encontrado una mascota que está extraviada. Hemos enviado una notificación a su dueño, si lo deseas puedes contactarlo tú también.');
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_pet_pet__["a" /* PetPage */], {
                pet: ok,
                isDetail: 0,
                isLove: false,
                isLost: true,
                isEdit: false,
                isFound: true
            });
        }
    };
    Lost.prototype.goToDetail = function (pet, my) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_pet_pet__["a" /* PetPage */], {
            pet: pet,
            isDetail: my,
            isLove: false,
            isLost: true,
            isEdit: false,
            isFound: false,
            lastView: my
        });
    };
    Lost.prototype.openFiltros = function () {
        this.over = true;
    };
    Lost.prototype.closeFiltros = function () {
        this.over = false;
        this.filtro();
    };
    return Lost;
}());
Lost = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-lost',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\lost\lost.html"*/'<!--\n\n  Generated template for the MyPetsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <span class="icon-menu"></span>\n\n    </button>\n\n    <ion-title>{{ \'APP_MENU.LOST_PETS\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="over" *ngIf="over">\n\n    <ion-grid>\n\n      <ion-row>\n\n      <ion-col col-9><h1>Filtros de búsqueda</h1> </ion-col>\n\n      <ion-col col-3 text-center><img (click)="closeFiltros();" src="assets/img/close.png" style="max-width: 40px;" /></ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>Especie</ion-col>\n\n        <ion-col col-6>\n\n          <ion-select [(ngModel)]="search.type" (ionChange)="refreshRazas($event)">\n\n            <ion-option value="">Cualquiera</ion-option>\n\n            <ion-option *ngFor="let species of especies" [value]="species.id">{{species.species}}</ion-option>\n\n          </ion-select>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>Raza</ion-col>\n\n        <ion-col col-6>\n\n          <ion-select [(ngModel)]="search.breed">\n\n            <ion-option value="">Cualquiera</ion-option>\n\n            <ion-option *ngFor="let breed of razas" [value]="breed.id">{{breed.breed}}</ion-option>\n\n          </ion-select>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>Edad</ion-col>\n\n        <ion-col col-6>\n\n          <ion-select [(ngModel)]="search.age">\n\n            <ion-option value="">Cualquiera</ion-option>\n\n            <ion-option value="0-1">Menos de un año</ion-option>\n\n            <ion-option value="1-3">entre 1 y 3 años</ion-option>\n\n            <ion-option value="3-5">entre 3 y 5 años</ion-option>\n\n            <ion-option value="5-7">entre 5 y 7 años</ion-option>\n\n            <ion-option value="7-10">entre 7 y 10 años</ion-option>\n\n            <ion-option value="10-1000">más de 10 años</ion-option>\n\n          </ion-select>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>Sexo</ion-col>\n\n        <ion-col col-6>\n\n          <ion-select [(ngModel)]="search.sex">\n\n            <ion-option value="">Cualquiera</ion-option>\n\n            <ion-option *ngFor="let sex of sexs" [value]="sex.id">{{sex.value}}</ion-option>\n\n          </ion-select>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>Tamaño</ion-col>\n\n        <ion-col col-6>\n\n          <ion-select [(ngModel)]="search.size">\n\n            <ion-option value="">Cualquiera</ion-option>\n\n            <ion-option *ngFor="let size of sizes" [value]="size.id">{{size.value}}</ion-option>\n\n          </ion-select>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <div class="tabs">\n\n    <button (click)="Tab1()" [ngClass]="tab1 ? \'activo\' : \'\'">Mascotas perdidas</button>\n\n    <button (click)="Tab2()" [ngClass]="tab2 ? \'activo\' : \'\'">Encontré una mascota</button>\n\n  </div>\n\n\n\n  <div *ngIf="tab1">\n\n    <div class="f0">\n\n      <!-- start Banner -->\n\n      <ins data-revive-zoneid="9" data-revive-id="9d276fa041e1067786e857fe85ab98f9"></ins>\n\n      <!-- end Banner -->\n\n      <div class="t">\n\n        <h1 *ngIf="mylostpets.length > 0"><br>MIS MASCOTAS PERDIDAS<br></h1>\n\n        <ion-row responsive-sm wrap>\n\n          <ion-col col-6 *ngFor="let pet of mylostpets">\n\n           <div class="rondme" (click)="goToDetail(pet,true)">\n\n            <div class="foto" [style.background-image]="\'url(\' + (pet.avatar != \'\' ? staticUrl+pet.avatar : \'assets/img/default/pet.png\' ) + \')\'" style="background-size: cover;">\n\n            </div>\n\n            <div class="name">{{pet.name}}</div>\n\n            <div class="sub">Especie: {{pet.type_name}}</div>\n\n            <div class="sub">Raza: {{pet.breed_name}}</div>\n\n            <div class="sub">Sexo: {{pet.sex_name}}</div>\n\n            <div class="sub">Tamaño: {{pet.size_name}}</div>\n\n            <div class="sub">Edad: {{pet.name}}</div>\n\n           </div>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n      <ion-grid class="t">\n\n        <ion-row>\n\n        <ion-col col-10><h1>MASCOTAS REPORTADAS COMO PERDIDAS</h1> </ion-col>\n\n        <ion-col col-2 text-center><img (click)="openFiltros();"  src="assets/img/filter.png" style="max-width: 40px; margin: 10px 0px;q" /></ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n\n\n        <div text-center *ngIf="findpets.length == 0"><strong>No hay reportes</strong></div>\n\n\n\n        <ion-row responsive-sm wrap>\n\n          <ion-col col-6 *ngFor="let pet of findpets">\n\n           <div class="rondme" (click)="goToDetail(pet,false)">{{pet.avatar}}\n\n            <div class="foto" [style.background-image]="\'url(\' + (pet.avatar != \'\' ? staticUrl+pet.avatar : \'assets/img/default/pet.png\' ) + \')\'" style="background-size: cover;">\n\n            </div>\n\n            <div class="name">{{pet.name}}</div>\n\n            <div class="sub">Especie: {{pet.type_name}}</div>\n\n            <div class="sub">Raza: {{pet.breed_name}}</div>\n\n            <div class="sub">Sexo: {{pet.sex_name}}</div>\n\n            <div class="sub">Tamaño: {{pet.size_name}}</div>\n\n            <div class="sub">Edad: {{pet.name}}</div>\n\n           </div>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div *ngIf="tab2">\n\n    <div class="f0">\n\n      <!-- start Banner -->\n\n      <ins data-revive-zoneid="9" data-revive-id="9d276fa041e1067786e857fe85ab98f9"></ins>\n\n      <!-- end Banner -->\n\n      <div class="t">\n\n        <h1><br>ENCONTRÉ UNA MASCOTA PERDIDA<br></h1>\n\n        <p>Si encontraste una mascota perdida, escanea su código adherido a su collar para avisar a su dueño.</p>\n\n        <div class="buttonWrapper">\n\n          <button class="buttonPinkOrange" (click)="scanear()" ion-button round>{{ \'BUTTONS.SCAN\' | translate }}</button>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\lost\lost.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__pata__["a" /* Pata */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__services_pet_service__["a" /* PetService */],
        __WEBPACK_IMPORTED_MODULE_9__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */]])
], Lost);

//# sourceMappingURL=lost.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Clinic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Clinic = (function () {
    function Clinic(navCtrl, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.loaded = false;
        this.isBlurred = false;
        this.staticUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].staticUrl;
        this.clinic = navParams.get('clinic');
        this.loaded = true;
    }
    Clinic.prototype.call = function () {
        var newWindow = window.open('tel:' + this.clinic.phone);
    };
    Clinic.prototype.email = function () {
        var newWindow = window.open('mailto:' + this.clinic.email);
    };
    return Clinic;
}());
Clinic = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-clinic',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\clinic\clinic.html"*/'<ion-header>\n\n  <ion-navbar>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content [ngClass]="{\'blurred\' : isBlurred}">\n\n  <div class="mediaSlideContainer">\n\n    <ion-slides pager slidesPerView="1">\n\n      <div class="media" [style.background-image]="\'url(\' + (clinic.avatar != \'\' && clinic.avatar != null ? staticUrl+clinic.avatar : \'assets/img/pet.png\' ) + \')\'" style="background-size: cover;"></div>\n\n    </ion-slides>\n\n  </div>\n\n\n\n  <div *ngIf="loaded">\n\n   <div class="formContainer">\n\n    <h5>{{clinic.name}}</h5>\n\n    <div class="subTitle">Información de la clínica</div>\n\n    <ion-item>\n\n      <ion-label fixed>Nombre</ion-label>\n\n      <ion-input type="text" [(ngModel)]="clinic.name" [disabled]="true"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n\n\n      <ion-label fixed>Dirección</ion-label>\n\n      <ion-input type="text" [(ngModel)]="clinic.address" [disabled]="true"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label fixed>Teléfono</ion-label>\n\n      <ion-input type="text" [(ngModel)]="clinic.phone" [disabled]="true"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label fixed>Sitio web</ion-label>\n\n      <ion-input type="text" [(ngModel)]="clinic.web" [disabled]="true"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label fixed>Horario:</ion-label>\n\n      <ion-input type="text" [(ngModel)]="clinic.schedule" [disabled]="true"></ion-input>    \n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label fixed>Email</ion-label>\n\n      <ion-input type="text" [(ngModel)]="clinic.email" [disabled]="true"></ion-input>\n\n    </ion-item>\n\n\n\n    <div class="buttonWrapper">\n\n      <button class="buttonPinkOrange" (click)="call()" ion-button round>Llamar a clínica</button>\n\n    </div>\n\n    <div class="buttonWrapper">\n\n      <button class="button2" (click)="email()" ion-button round>Enviar un email</button>\n\n    </div>\n\n\n\n  </div>\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\clinic\clinic.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */]])
], Clinic);

//# sourceMappingURL=clinic.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdsMedia; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pata__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdsMedia = (function () {
    function AdsMedia(navCtrl, navParams, viewCtrl, service, userService, loadingCtrl, camera, storage) {
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
        this.image = '';
        this.title = '';
        this.text = '';
        this.link = '';
        this.storage.get("MP-Profile").then(function (val) {
            _this.userId = val.id;
        });
        this.storage.get("token").then(function (val) {
            _this.token = val;
        });
        this.image = this.navParams.get("image");
        this.title = this.navParams.get("title");
        this.text = this.navParams.get("text");
        this.link = this.navParams.get("link");
    }
    AdsMedia.prototype.ionViewDidLoad = function () {
    };
    AdsMedia.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    AdsMedia.prototype.takePicture = function () {
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
    AdsMedia.prototype.openGallery = function () {
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
    AdsMedia.prototype.dataURItoBlob = function (dataURI) {
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
    AdsMedia.prototype.processTake = function (imageData) {
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
        xhr.open("post", __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiUrl + "users/avatar");
        xhr.setRequestHeader("Authorization", "Bearer " + self0.token);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var uri = xhr.responseText;
                self0.loading.dismiss();
                if (uri.indexOf('error') > -1) {
                    self0.service.logError({}, 'Error al procesar la solicitud. Inténtelo más tarde.');
                }
                else {
                    self0.service.showOk("Foto actualizada con éxito");
                    self0.userService.getProfile().subscribe(function (result) {
                        result.avatar = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].staticUrl + uri.replace('/public/', '');
                        self0.storage.set("MP-Profile", result);
                        self0.viewCtrl.dismiss(true);
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
                      result.avatar = environment.staticUrl+uri.replace('/public/','');
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
    AdsMedia.prototype.b64toBlob = function (b64, onsuccess, onerror) {
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
    return AdsMedia;
}());
AdsMedia = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-ads',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\popovers\ads\ads.html"*/'<ion-list radio-group class="popover-page">\n\n  <div class="close" (click)="close()">\n\n    <span class="icon-cerrar"></span>\n\n  </div>\n\n  <a href="{{link}}" target="_blank">\n\n    <img src="{{image}}" />\n\n    <strong>{{title}}</strong>\n\n    <p>{{text}}</p>\n\n  </a>\n\n</ion-list>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\popovers\ads\ads.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_5__pata__["a" /* Pata */],
        __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], AdsMedia);

//# sourceMappingURL=ads.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetPreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_pet_model__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_pet_pet__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(12);
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
 * Generated class for the PetPreviewComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var PetPreviewComponent = (function () {
    function PetPreviewComponent(navCtrl) {
        this.navCtrl = navCtrl;
        this.isEdit = false;
        this.isMe = false;
        this.add = false;
        this.preventDetail = false;
        this.staticUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].staticUrl;
    }
    PetPreviewComponent.prototype.goToDetail = function () {
        //console.log('gotodetail isEdit: ',this.isEdit);
        if (this.preventDetail == false) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_pet_pet__["a" /* PetPage */], {
                pet: this.pet,
                isDetail: this.isDetail,
                isEdit: this.isEdit,
                isMe: this.isMe
            });
        }
        else {
        }
    };
    PetPreviewComponent.prototype.encodeURL = function (str) {
        return encodeURI(str);
    };
    return PetPreviewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_pet_model__["a" /* Pet */])
], PetPreviewComponent.prototype, "pet", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], PetPreviewComponent.prototype, "isDetail", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], PetPreviewComponent.prototype, "isEdit", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], PetPreviewComponent.prototype, "isMe", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], PetPreviewComponent.prototype, "add", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], PetPreviewComponent.prototype, "preventDetail", void 0);
PetPreviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'pet-preview',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\components\pet-preview\pet-preview.html"*/'<!-- Generated template for the PetPreviewComponent component -->\n\n<div *ngIf="add">\n\n  <div class="image" [style.background-image]="\'url(assets/img/add.png)\'" style="background-size: cover;"></div>\n\n  <div class="name">agregar mascota</div>\n\n</div>\n\n<div (click)="goToDetail()" *ngIf="!add">\n\n  <div class="image" [style.background-image]="\'url(\' + (pet.avatar != \'\' ? encodeURL(staticUrl+pet.avatar) : \'assets/img/default/mascota.png\' ) + \')\'" style="background-size: cover;"></div>\n\n  <div class="name">{{ pet.name }}</div>\n\n</div>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\components\pet-preview\pet-preview.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], PetPreviewComponent);

//# sourceMappingURL=pet-preview.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetInfoFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pata__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_pet_model__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pet_pet__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_my_pets_my_pets__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_owner_owner__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_pet_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_date_picker__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_barcode_scanner__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var PetInfoFormComponent = (function () {
    function PetInfoFormComponent(service, navCtrl, loadingCtrl, petService, storage, datePicker, platform, barcodeScanner) {
        var _this = this;
        this.service = service;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.petService = petService;
        this.storage = storage;
        this.datePicker = datePicker;
        this.platform = platform;
        this.barcodeScanner = barcodeScanner;
        this.pet = null;
        this.myPet = null;
        this.isEdit = false;
        this.isLove = false;
        this.isMatch = false;
        this.isNew = false;
        this.isLost = false;
        this.isFound = false;
        this.loading = null;
        this.sizes = [];
        this.sexs = [];
        this.colors = [];
        this.especies = [];
        this.razas = [];
        this.names = {
            size: '',
            sex: '',
            color: '',
            especie: '',
            raza: ''
        };
        if (this.pet == null) {
            this.pet = new __WEBPACK_IMPORTED_MODULE_5__models_pet_model__["a" /* Pet */];
        }
        if (this.myPet == null) {
            this.myPet = new __WEBPACK_IMPORTED_MODULE_5__models_pet_model__["a" /* Pet */];
        }
        this.loading = this.loadingCtrl.create();
        this.loading.present();
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].forkJoin([
            this.petService.size(),
            this.petService.color(),
            this.petService.sex(),
            this.petService.especie()
        ])
            .subscribe(function (data) {
            _this.sizes = data[0];
            _this.colors = data[1];
            _this.sexs = data[2];
            _this.especies = data[3];
            if (_this.pet.type) {
                if (_this.pet.type.toString() != "0") {
                    _this.refreshRazas(_this.pet.type);
                }
                _this.names.size = "No definido";
                for (var i = 0; i < _this.sizes.length; i++) {
                    if (_this.sizes[i].id == _this.pet.size) {
                        _this.names.size = _this.sizes[i].value;
                        break;
                    }
                }
                _this.names.color = "No definido";
                for (var i = 0; i < _this.colors.length; i++) {
                    if (_this.colors[i].id == _this.pet.color) {
                        _this.names.color = _this.colors[i].value;
                        break;
                    }
                }
                _this.names.sex = "No definido";
                for (var i = 0; i < _this.sexs.length; i++) {
                    if (_this.sexs[i].id == _this.pet.sex) {
                        _this.names.sex = _this.sexs[i].value;
                        break;
                    }
                }
                _this.names.especie = "No definido";
                for (var i = 0; i < _this.especies.length; i++) {
                    if (_this.especies[i].id == _this.pet.type) {
                        _this.names.especie = _this.especies[i].species;
                        break;
                    }
                }
            }
            _this.loading.dismiss();
        });
    }
    PetInfoFormComponent.prototype.refreshRazas = function (e) {
        var _this = this;
        this.petService.raza(e).subscribe(function (ok) {
            _this.razas = ok;
            for (var i = 0; i < _this.razas.length; i++) {
                if (_this.razas[i].id == _this.pet.breed) {
                    _this.names.raza = _this.razas[i].breed;
                    break;
                }
            }
        });
    };
    PetInfoFormComponent.prototype.setBirthDate = function (oldval) {
        var _this = this;
        var d = new Date();
        if (oldval != "" && oldval != "0000-00-00" && oldval != null) {
            oldval = oldval.split("/").reverse().join("-");
            d = new Date(oldval.replace(/-/g, "/"));
        }
        this.datePicker.show({
            date: d,
            mode: 'date',
            okText: 'Aceptar',
            cancelText: 'Cancelar',
            todayText: '',
            nowText: '',
            allowFutureDates: false,
            doneButtonLabel: 'Aceptar',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
        }).then(function (date) {
            var dd = date.getDate();
            var mm = date.getMonth() + 1;
            var yyyy = date.getFullYear();
            var dda = '';
            var mma = '';
            if (dd < 10) {
                dda = '0' + dd;
            }
            else {
                dda = mm.toString();
            }
            if (mm < 10) {
                mma = '0' + mm;
            }
            else {
                mma = mm.toString();
            }
            var newText = dd + '/' + mm + '/' + yyyy;
            _this.pet.birthday = newText;
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    PetInfoFormComponent.prototype.save = function () {
        var _this = this;
        if (this.pet.name == "" || this.pet.name == null) {
            this.service.logError(null, "Debe indicar nombre de mascota");
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: 'guardando...'
            });
            this.pet.name = this.pet.name.toString().trim();
            loading_1.present();
            this.storage.get('MP-Profile').then(function (val) {
                var saveOperation = _this.petService.update(_this.pet.id, _this.pet);
                saveOperation.subscribe(function (ok) {
                    loading_1.dismiss();
                    if (ok.hasOwnProperty("id")) {
                        _this.service.showOk();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_my_pets_my_pets__["a" /* MyPetsPage */]);
                    }
                    else {
                        _this.service.logError(null, "No fue posible guardar su mascota, recuerde completar todos los campos");
                    }
                }, function (error) {
                    loading_1.dismiss();
                    _this.service.logError(null, "No fue posible guardar su mascota, recuerde completar todos los campos");
                    console.log(error);
                });
            });
        }
    };
    PetInfoFormComponent.prototype.add = function () {
        var _this = this;
        if (this.pet.name == "" || this.pet.name == null) {
            this.service.logError(null, "Debe indicar nombre de mascota");
        }
        else if (this.pet.breed == "" || this.pet.breed == null) {
            this.service.logError(null, "Debe indicar raza de mascota");
        }
        else {
            var loading_2 = this.loadingCtrl.create({
                content: 'guardando...'
            });
            loading_2.present();
            this.pet.name = this.pet.name.toString().trim();
            this.storage.get('MP-Profile').then(function (val) {
                var addOperation = _this.petService.add(val.id, _this.pet);
                addOperation.subscribe(function (ok) {
                    loading_2.dismiss();
                    if (ok.hasOwnProperty("id")) {
                        _this.service.showOk();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_my_pets_my_pets__["a" /* MyPetsPage */]);
                    }
                    else {
                        _this.service.logError(null, "No fue posible guardar su mascota, recuerde completar todos los campos");
                    }
                }, function (error) {
                    loading_2.dismiss();
                    _this.service.logError(null, "No fue posible guardar su mascota, recuerde completar todos los campos");
                    console.log(error);
                });
            });
        }
    };
    PetInfoFormComponent.prototype.rechazar = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: ''
        });
        loading.present();
        var accept = this.petService.reject(this.pet.id);
        accept.subscribe(function (ok) {
            loading.dismiss();
            _this.service.showOk();
            _this.navCtrl.pop();
        }, function (err) {
            loading.dismiss();
            _this.service.logError(null, "No fue posible rechazar, es posible que ya no esté disponible");
        });
    };
    PetInfoFormComponent.prototype.notificar = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: ''
        });
        loading.present();
        console.log('myPetId.form:' + JSON.stringify(this.myPet));
        var accept = this.petService.notifyOwner(this.pet.id, this.petId);
        accept.subscribe(function (ok) {
            loading.dismiss();
            _this.service.showOk();
            _this.navCtrl.pop();
        }, function (err) {
            loading.dismiss();
            _this.service.logError(null, "No fue posible aplicar al candidato, es posible que ya no esté disponible");
        });
    };
    PetInfoFormComponent.prototype.aceptar = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: ''
        });
        loading.present();
        var accept = this.petService.accept(this.pet.id);
        accept.subscribe(function (ok) {
            loading.dismiss();
            _this.service.showOk();
            _this.navCtrl.pop();
        }, function (err) {
            loading.dismiss();
            _this.service.logError(null, "No fue posible aplicar al candidato, es posible que ya no esté disponible");
        });
    };
    PetInfoFormComponent.prototype.owner = function (owner) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_owner_owner__["a" /* Owner */], { owner: owner });
    };
    PetInfoFormComponent.prototype.scanear = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.barcodeScanner.scan().then(function (barcodeData) {
                if (barcodeData.text.indexOf('mimaskot.pe') > -1) {
                    var data = barcodeData.text.split('/');
                    var code = data[data.length - 1].trim();
                    _this.loading = _this.loadingCtrl.create();
                    _this.loading.present();
                    var petcheck = _this.petService.getMascotByQR(code);
                    petcheck.subscribe(function (pet) {
                        if (pet) {
                            // ir al detalle de la mascota encontrada
                            _this.service.showOk('Enhorabuena, haz encontrado una mascota que está extraviada. Hemos enviado una notificación a su dueño, si lo deseas puedes contactarlo tú también.');
                            _this.goToPetFound(pet);
                        }
                        else {
                            _this.loading.dismiss();
                            _this.service.logError({}, 'El QR leidó está asignado a otra mascota');
                        }
                    }, function (err) {
                        _this.loading.dismiss();
                        _this.service.logError({}, 'No fue posible validar el QR');
                    });
                }
                else if (barcodeData.text.length > 0) {
                    _this.service.logError({}, 'QR escaneado no corresponde a MiMaskot');
                }
                else {
                    // did not take the qr code
                }
            }, function (err) {
                _this.service.logError(null, "Servicio temporalmente no disponible");
            });
        }
    };
    PetInfoFormComponent.prototype.goToPetFound = function (pet) {
        if (pet.hasOwnProperty("status")) {
            this.loading.dismiss();
            this.service.logError({}, 'Código QR no encontrado como una mascota perdida');
        }
        else {
            this.loading.dismiss();
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_pet_pet__["a" /* PetPage */], {
                pet: pet,
                isDetail: 0,
                isLove: false,
                isLost: true,
                isEdit: false,
                isFound: true
            });
        }
    };
    return PetInfoFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__models_pet_model__["a" /* Pet */])
], PetInfoFormComponent.prototype, "pet", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__models_pet_model__["a" /* Pet */])
], PetInfoFormComponent.prototype, "myPet", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], PetInfoFormComponent.prototype, "petId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], PetInfoFormComponent.prototype, "isDetail", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], PetInfoFormComponent.prototype, "isEdit", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], PetInfoFormComponent.prototype, "isLove", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], PetInfoFormComponent.prototype, "isMatch", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], PetInfoFormComponent.prototype, "isNew", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], PetInfoFormComponent.prototype, "isLost", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], PetInfoFormComponent.prototype, "isFound", void 0);
PetInfoFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'pet-info-form',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\components\pet-info-form\pet-info-form.html"*/'<!-- Generated template for the PetInfoFormComponent component -->\n\n<div class="formContainer">\n\n  <div class="subTitle" *ngIf="!isDetail">{{ \'PET.PET_INFORMATION\' | translate }}</div>\n\n  <div class="subTitle" *ngIf="isDetail">{{ \'PET.MY_PET_INFORMATION\' | translate }}</div>\n\n  <ion-item>\n\n    <ion-label fixed>{{ \'PET.NAME\' | translate }}</ion-label>\n\n    <ion-input type="text" [(ngModel)]="pet.name" [disabled]="true" [hidden]="isEdit"></ion-input>\n\n    <ion-input type="text" [(ngModel)]="pet.name" [hidden]="!isEdit"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n\n\n    <ion-label fixed>{{ \'PET.SPECIES\' | translate }}</ion-label>\n\n    <ion-input type="text" [(ngModel)]="names.especie" [disabled]="true" [hidden]="isEdit"></ion-input>\n\n    <ion-select [(ngModel)]="pet.type" (ionChange)="refreshRazas($event)" [hidden]="!isEdit">\n\n      <ion-option *ngFor="let species of especies" [value]="species.id">{{species.species}}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label fixed>{{ \'PET.BREED\' | translate }}</ion-label>\n\n    <ion-input type="text" [(ngModel)]="names.raza" [disabled]="true" [hidden]="isEdit"></ion-input>\n\n    <ion-select [(ngModel)]="pet.breed" [hidden]="!isEdit">\n\n      <ion-option *ngFor="let breed of razas" [value]="breed.id">{{breed.breed}}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label fixed>{{ \'PET.BIRTH_DATE\' | translate }}</ion-label>\n\n\n\n    <ion-input type="text" [(ngModel)]="pet.birthday" [disabled]="true" [hidden]="isEdit"></ion-input>\n\n    <ion-input type="text" [(ngModel)]="pet.birthday" readonly [hidden]="!isEdit" (click)="setBirthDate(pet.birthday)"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label fixed>{{ \'PET.GENDER\' | translate }}</ion-label>\n\n    <ion-input type="text" [(ngModel)]="names.sex" [disabled]="true" [hidden]="isEdit"></ion-input>\n\n    <ion-select [(ngModel)]="pet.sex" [hidden]="!isEdit">\n\n      <ion-option *ngFor="let sex of sexs" [value]="sex.id">{{sex.value}}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label fixed>{{ \'PET.COLOR\' | translate }}</ion-label>\n\n    <ion-input type="text" [(ngModel)]="names.color" [disabled]="true" [hidden]="isEdit"></ion-input>\n\n    <ion-select [(ngModel)]="pet.color" [hidden]="!isEdit">\n\n      <ion-option *ngFor="let color of colors" [value]="color.id">{{color.value}}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label fixed>{{ \'PET.SIZE\' | translate }}</ion-label>\n\n    <ion-input type="text" [(ngModel)]="names.size" [disabled]="true" [hidden]="isEdit"></ion-input>\n\n    <ion-select [(ngModel)]="pet.size" [hidden]="!isEdit">\n\n      <ion-option *ngFor="let size of sizes" [value]="size.id">{{size.value}}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <!--\n\n  <div class="buttonWrapper" *ngIf="isEdit ">\n\n    <button class="buttonPinkOrange" ion-button round>{{ \'PET.UPDATE_INFO\' | translate }}</button>\n\n  </div>\n\n  -->\n\n  <div class="buttonWrapper" *ngIf="isNew">\n\n    <button class="buttonPinkOrange" (click)="add()" ion-button round>{{ \'PET.SAVE\' | translate }}</button>\n\n  </div>\n\n\n\n  <div class="buttonWrapper" *ngIf="isEdit && !isNew">\n\n    <button class="buttonPinkOrange" (click)="save()" ion-button round>{{ \'PET.UPDATE_INFO\' | translate }}</button>\n\n  </div>\n\n\n\n  <div class="buttonWrapper" *ngIf="isLove && !isMatch">\n\n    <button class="buttonPinkOrange" (click)="notificar()" ion-button round>Notificar al dueño</button>\n\n  </div>\n\n\n\n  <div class="buttonWrapper" *ngIf="isMatch">\n\n    <button class="buttonPinkOrange" (click)="aceptar()" ion-button round>Aceptar candidato</button>\n\n  </div>\n\n  <div class="buttonWrapper" *ngIf="isMatch">\n\n    <button class="button2" (click)="rechazar()" ion-button round>Rechazar candidato</button>\n\n  </div>\n\n\n\n  <div class="buttonWrapper" *ngIf="isLost && isFound && !isDetail">\n\n    <button class="buttonPinkOrange" (click)="owner(pet.user_id)" ion-button round>Ver datos del dueño</button>\n\n  </div>\n\n\n\n  <div class="buttonWrapper" *ngIf="isLost && !isFound && !isDetail">\n\n    <button class="buttonPinkOrange" (click)="scanear()" ion-button round>Escanear Mascota</button>\n\n  </div>\n\n</div>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\components\pet-info-form\pet-info-form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__pata__["a" /* Pata */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_9__services_pet_service__["a" /* PetService */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_date_picker__["a" /* DatePicker */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
], PetInfoFormComponent);

//# sourceMappingURL=pet-info-form.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_news_model__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_juntavecinos_newsDetalle__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_news_service__ = __webpack_require__(48);
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

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return News; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__option_core__ = __webpack_require__(151);
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

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pata__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_pet_model__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_pet_service__ = __webpack_require__(23);
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
 * Generated class for the QrCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var QrCardComponent = (function () {
    function QrCardComponent(barcodeScanner, service, petService, loadingCtrl, platform) {
        this.barcodeScanner = barcodeScanner;
        this.service = service;
        this.petService = petService;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.nueva = false;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loading = null;
    }
    QrCardComponent.prototype.scanear = function () {
        var _this = this;
        if (this.platform.is('ios') || this.platform.is('android')) {
            this.barcodeScanner.scan().then(function (barcodeData) {
                if (barcodeData.text.indexOf('mimaskot.pe') > -1) {
                    var data = barcodeData.text.split('/');
                    var code = data[data.length - 1].trim();
                    _this.loading = _this.loadingCtrl.create();
                    _this.loading.present();
                    var petcheck = _this.petService.uniqueQR(code);
                    petcheck.subscribe(function (ok) {
                        if (ok.status == 1) {
                            _this.okQr(code);
                        }
                        else {
                            _this.loading.dismiss();
                            _this.service.logError({}, 'El QR leidó está asignado a otra mascota');
                        }
                    }, function (err) {
                        _this.loading.dismiss();
                        _this.service.logError({}, 'No fue posible validar el QR');
                    });
                }
                else {
                    _this.service.logError({}, 'QR escaneado no corresponde a MiMaskot');
                }
            }, function (err) {
                _this.service.logError({}, 'Error al internar abrir la cámara');
            });
        }
        else {
            var code = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8).toUpperCase();
            this.loading = this.loadingCtrl.create();
            this.loading.present();
            this.okQr(code);
        }
    };
    QrCardComponent.prototype.okQr = function (codex) {
        var _this = this;
        this.pet.code = codex;
        this.pet.qr = "https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=" + codex + "&chld=H|1";
        if (this.nueva == false) {
            var scode = this.petService.setCode(this.pet.id, codex);
            scode.subscribe(function (ok) {
                _this.loading.dismiss();
                _this.setOK(true, codex);
            }, function (err) {
                _this.loading.dismiss();
                _this.service.logError({}, 'No fue posible actualizar el QR');
            });
        }
        else {
            this.loading.dismiss();
            this.setOK(true, codex);
        }
    };
    QrCardComponent.prototype.setOK = function (ok, identifier) {
        this.change.emit({ ok: ok, identifier: identifier });
    };
    QrCardComponent.prototype.getQR = function (codez) {
        return "https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=" + codez + "&chld=H|1";
    };
    return QrCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__models_pet_model__["a" /* Pet */])
], QrCardComponent.prototype, "pet", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], QrCardComponent.prototype, "nueva", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], QrCardComponent.prototype, "change", void 0);
QrCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'qr-card',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\components\qr-card\qr-card.html"*/'<!-- Generated template for the QrCardComponent component -->\n\n<div class="subTitle white">{{ \'PET.ID_MIMASKOT\' | translate }}</div>\n\n<div class="qrCard">\n\n  <img class="qr" *ngIf="pet.code" [src]="getQR(pet.code)" alt="qr">\n\n  <div class="qr emptyQr" *ngIf="!pet.code"></div>\n\n  <div class="identifierWrapper">\n\n    <div>{{ \'PET.IDENTIFIER\' | translate }}</div>\n\n    <div class="identifier">{{ pet.code }}</div>\n\n  </div>\n\n  <img id="mimaskotLogo" src="./assets/img/logo_mimaskot.png" alt="Mimaskot">\n\n  <button ion-button round (click)="scanear()" outline *ngIf="nueva">{{ \'PET.SCAN\' | translate }}</button>\n\n  <button ion-button round (click)="scanear()" outline *ngIf="!nueva">{{ \'PET.SCAN_AGAIN\' | translate }}</button>\n\n</div>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\components\qr-card\qr-card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
        __WEBPACK_IMPORTED_MODULE_3__pata__["a" /* Pata */],
        __WEBPACK_IMPORTED_MODULE_5__services_pet_service__["a" /* PetService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
], QrCardComponent);

//# sourceMappingURL=qr-card.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(12);
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

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileMedia; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pata__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(12);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__pata__["a" /* Pata */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__pata__["a" /* Pata */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]) === "function" && _h || Object])
], ProfileMedia);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=profile-media.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pata__ = __webpack_require__(9);
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
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangePasswordPage = (function () {
    function ChangePasswordPage(navCtrl, navParams, userService, service, loadingCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.user = { currentPass: '', newPass: '', repeatPass: '' };
        //this.userId = this.navParams.get('userId')
    }
    ChangePasswordPage.prototype.ionViewDidLoad = function () {
    };
    ChangePasswordPage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    ChangePasswordPage.prototype.changePassword = function () {
        var _this = this;
        if (this.user.newPass != this.user.repeatPass) {
            this.service.logError(null, "Las contraseñas no coinciden");
            return false;
        }
        var loading = this.loadingCtrl.create({
            content: 'cargando...'
        });
        loading.present();
        console.log(JSON.stringify(this.user));
        this.userService.changePassword(this.user.currentPass, this.user.newPass).subscribe(function (data) {
            loading.dismiss();
            if (data.status) {
                _this.dismiss(true);
                //this.service.showOk();
            }
            else {
                //this.dismiss(false);
                _this.service.logError(null, data.message);
            }
        }, function (error) {
            loading.dismiss();
            console.log('Change.error: ' + JSON.stringify(error));
            _this.service.logError(null, "Error al intentar cambiar la contraseña");
        });
    };
    return ChangePasswordPage;
}());
ChangePasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-change-password',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\change-password\change-password.html"*/'<!--\n\n  Generated template for the ChangePasswordPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="viewCtrl.dismiss()" class="my-style-for-modal">\n\n        <ion-icon class="ionicons" name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Cambiar Contraseña</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <div class="formContainer">\n\n    <ion-item>\n\n      <ion-label fixed>Contraseña Actual</ion-label>\n\n      <ion-input type="password" [(ngModel)]="user.currentPass"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label fixed>Nueva Contraseña</ion-label>\n\n      <ion-input type="password" [(ngModel)]="user.newPass"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label fixed>Repetir Nueva contraseña</ion-label>\n\n      <ion-input type="password" [(ngModel)]="user.repeatPass"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n    <div class="buttonWrapper">\n\n      <button (click)="changePassword()" class="buttonPinkOrange" ion-button round>Cambiar Contraseña</button>\n\n    </div>\n\n  </div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\change-password\change-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_3__pata__["a" /* Pata */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], ChangePasswordPage);

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popovers_pet_media_options_pet_media_options__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popovers_pet_state_pet_state__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_pet_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_owner_owner__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pata__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__(12);
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
 * Generated class for the PetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

var PetPage = (function () {
    function PetPage(navCtrl, navParams, petService, userService, loadingCtrl, popoverCtrl, storage, service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.petService = petService;
        this.userService = userService;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.storage = storage;
        this.service = service;
        this.imagenIndex = 0;
        this.isDetail = true;
        this.isEdit = false;
        this.isLove = false; // buscando pareja
        this.isMatch = false; // es candidato de la mascota
        this.isLost = false;
        this.isFound = false;
        this.isBlurred = false;
        this.loaded = false;
        this.lastView = false;
        this.imagenes = [];
        this.loading = null;
        this.lastSeen = false;
        this.lastSeenID = 0;
        this.lastSeenName = '';
        this.lastSeenLat = 0;
        this.lastSeenLng = 0;
        this.styles = [{ "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#6195a0" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [{ "color": "#e7e5e3" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#e6f3d6" }, { "visibility": "on" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": "-100" }, { "lightness": 45 }, { "visibility": "simplified" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#e3d6c7" }, { "visibility": "simplified" }] }, { "featureType": "road.highway", "elementType": "labels.text", "stylers": [{ "color": "#4e4e4e" }] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#f4f4f4" }] }, { "featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [{ "color": "#787878" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#eaf6f8" }, { "visibility": "on" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#eaf6f8" }] }];
        this.staticUrl = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].staticUrl;
        this.pet = navParams.get('pet');
        if (navParams.get('myPet')) {
            this.myPet = navParams.get('myPet');
            console.log('inPet.my: ' + JSON.stringify(this.myPet));
        }
        if (navParams.get('petId')) {
            this.petId = navParams.get('petId');
            console.log('petId.my: ' + JSON.stringify(this.petId));
        }
        this.isEdit = navParams.get('isEdit');
        this.isDetail = navParams.get('isDetail');
        if (navParams.get('isLove')) {
            this.isLove = navParams.get('isLove');
        }
        if (navParams.get('lastView')) {
            this.lastView = navParams.get('lastView');
        }
        if (navParams.get('isMatch')) {
            this.isMatch = navParams.get('isMatch');
        }
        if (navParams.get('isLost')) {
            this.isLost = navParams.get('isLost');
        }
        if (navParams.get('isFound')) {
            this.isFound = navParams.get('isFound');
        }
        this.loaded = true;
        //console.log(this.pet.additionalImages);
        if (this.pet.additionalImages != null && this.pet.additionalImages != "") {
            var ex = this.pet.additionalImages.split(',');
            for (var i = 0; i < ex.length; i++) {
                this.imagenes.push(ex[i]);
            }
        }
        if (this.lastView == true) {
            var spet = this.petService.getLostPetByQR(this.pet.code);
            spet.subscribe(function (data) {
                if (data.hasOwnProperty("status") && data.status == false) {
                    _this.lastSeen = false;
                }
                else {
                    _this.lastSeen = true;
                    _this.lastSeenLat = data.missingPet.lat_seen;
                    _this.lastSeenLng = data.missingPet.lng_seen;
                    _this.lastSeenID = data.missingPet.user_id;
                    var suser = _this.userService.getId(data.missingPet.user_id);
                    suser.subscribe(function (data2) {
                        _this.lastSeenName = data2.name + ' ' + data2.last_name;
                    });
                }
            });
        }
    }
    PetPage.prototype.loadAPIWrapper = function (map) {
        this.map = map;
    };
    PetPage.prototype.removeBlur = function () {
        this.isBlurred = false;
    };
    PetPage.prototype.gotoUser = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_owner_owner__["a" /* Owner */], { owner: id });
    };
    PetPage.prototype.getmarkericon = function () {
        return 'assets/img/marker.png';
    };
    PetPage.prototype.presentMediaOptionsPopover = function (event) {
        var _this = this;
        this.imagenIndex = this.slides.getActiveIndex();
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__popovers_pet_media_options_pet_media_options__["a" /* PetMediaOptionsPage */], { imagenIndex: this.imagenIndex, additionalImages: this.pet.additionalImages, id: this.pet.id });
        popover.present({
            ev: event
        });
        popover.onDidDismiss(function (data) {
            if (data && data.hasOwnProperty('reload') && data.reload == true) {
                _this.reloadPet();
            }
            _this.removeBlur();
        });
        this.isBlurred = true;
    };
    PetPage.prototype.reloadPet = function () {
        //this.loading = this.loadingCtrl.create({content:'subiendo foto...'});
        //this.loading.present();
        var _this = this;
        this.storage.get('MP-Profile').then(function (val) {
            _this.petService.getId(val.id).subscribe(function (pets) {
                for (var i = 0; i < pets.length; i++) {
                    if (pets[i].id == _this.pet.id) {
                        _this.pet = pets[i];
                    }
                }
                //this.loading.dismiss();
            });
        });
    };
    PetPage.prototype.presentStatePopover = function (event) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__popovers_pet_state_pet_state__["a" /* PetStatePage */], { id: this.pet.id, petMissing: this.pet.missing, petLoving: this.pet.available });
        popover.present({
            ev: event
        });
        popover.onDidDismiss(function (data) {
            if (data && data.hasOwnProperty("petLoving")) {
                _this.pet.available = (data.petLoving == true ? 1 : 0);
            }
            if (data && data.hasOwnProperty("petMissing")) {
                _this.pet.missing = (data.petMissing == true ? 1 : 0);
            }
            _this.removeBlur();
        });
        this.isBlurred = true;
    };
    PetPage.prototype.reportarComoEncontrado = function (code) {
        var _this = this;
        this.petService.petFound(code.trim()).subscribe(function (data) {
            _this.service.showOk();
            _this.navCtrl.pop();
        }, function (err) {
            _this.service.logError(null, "No fue posible reportar la mascota, intentalo nuevamente");
        });
    };
    return PetPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
], PetPage.prototype, "slides", void 0);
PetPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-pet',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\pet\pet.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end style="margin-right: 20px;">\n\n    <button (click)="presentMediaOptionsPopover($event)" *ngIf="isDetail && !lastView" class="buttonPinkOrange camera">\n\n      <ion-icon ios="ios-camera-outline" md="ios-camera-outline"></ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content [ngClass]="{\'blurred\' : isBlurred}">\n\n  <div class="mediaSlideContainer">\n\n    <ion-slides #mySlider pager slidesPerView="1">\n\n      <ion-slide *ngFor="let imagen of imagenes">\n\n        <div class="media" [style.background-image]="\'url(\' + staticUrl+imagen + \')\'" style="background-size: cover;"></div>\n\n      </ion-slide>\n\n      <div class="media" *ngIf="imagenes.length == 0" [style.background-image]="\'url(\' + (pet.avatar != \'\' && pet.avatar != null ? staticUrl+pet.avatar : \'assets/img/pet.png\' ) + \')\'" style="background-size: cover;"></div>\n\n    </ion-slides>\n\n  </div>\n\n  <div class="name">\n\n    {{ pet.name }}\n\n    <button *ngIf="isDetail && !lastView" ion-button round class="options buttonPinkOrange" (click)="presentStatePopover($event)">{{ \'PET.EDIT_STATE\' | translate }}</button>\n\n  </div>\n\n  <div *ngIf="loaded && !lastView">\n\n    <qr-card *ngIf="isDetail && !isLost" [pet]="pet"></qr-card>\n\n    <pet-info-form [pet]="pet" [isDetail]="isDetail" [isLost]="isLost" [isLove]="isLove" [isMatch]="isMatch" [isEdit]="isEdit" [isFound]="isFound" [myPet]="myPet" [petId]="petId"></pet-info-form>\n\n  </div>\n\n\n\n  <div *ngIf="lastView" class="lastView">\n\n    <strong>PERDIDO EL {{pet.missing_at | date: \'dd/MM/yyyy\'}}</strong>\n\n    <br /><br />\n\n    <div *ngIf="lastSeen">\n\n      Tu mascota fue vista por última vez por {{lastSeenName}}. Puedes ver su información y contactarlo para saber más.\n\n      <br /><br />\n\n      <agm-map [latitude]="lastSeenLat" [longitude]="lastSeenLng" [styles]="styles" [zoom]="13" [zoomControl]="false" [streetViewControl]="false" (onMapLoad)=\'loadAPIWrapper($event)\'>\n\n        <agm-marker [iconUrl]="getmarkericon()" [latitude]="lastSeenLat" [longitude]="lastSeenLng">\n\n        </agm-marker>\n\n      </agm-map>\n\n      <br /><br />\n\n      <div class="buttonWrapper">\n\n        <button class="buttonPinkOrange" (click)="gotoUser(lastSeenID)" ion-button round>Ver información de contacto</button>\n\n      </div>\n\n    </div>\n\n\n\n\n\n    <div *ngIf="!lastSeen">\n\n    Lo sentimos, tu mascota aún no ha sido vista por nadie\n\n    </div>\n\n    <br /><br />\n\n    Si encontraste esta mascota y tiene su collar MiMaskot haz clic en el botón para notificar a su dueño.\n\n    <br /><br />\n\n    <button class="buttonWhiting" (click)="reportarComoEncontrado(pet.code)" ion-button round>Reportar como encontrado</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\pet\pet.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__services_pet_service__["a" /* PetService */],
        __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_8__pata__["a" /* Pata */]])
], PetPage);

//# sourceMappingURL=pet.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__option_core__ = __webpack_require__(151);
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

var Pet = (function (_super) {
    __extends(Pet, _super);
    function Pet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pet.prototype.decode = function (jsonObject) {
        this.id = jsonObject['id'];
        this.name = jsonObject['name'];
        this.color = jsonObject['color'];
        this.size = jsonObject['size'];
        this.qr = jsonObject['qr'];
        this.identifier = jsonObject['identifier'];
        this.extraInfo = jsonObject['extraInfo'];
        this.principalMedia = jsonObject['principalMedia'];
        this.additionalImages = jsonObject['additionalImages'];
        this.code = jsonObject['code'];
        this.avatar = jsonObject['avatar'];
        this.media = jsonObject['media'];
        this.missing = jsonObject['missing'];
        this.available = jsonObject['available'];
        this.type = jsonObject['type'];
        this.sex = jsonObject['sex'];
        this.breed = jsonObject['breed'];
        /*
        if (jsonObject['birthday']) {
          this.birthday = new Date(jsonObject['created']);
          this.normalizeDateToUsersLocale(this.birthday);
        }
        */
    };
    Pet.prototype.getFormEntityName = function () {
        return 'pet';
    };
    Pet.prototype.normalizeDateToUsersLocale = function (date) {
        date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    };
    return Pet;
}(__WEBPACK_IMPORTED_MODULE_0__option_core__["a" /* OptEntity */]));

//# sourceMappingURL=pet.model.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise__ = __webpack_require__(62);
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

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Store; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_availability__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_contacts__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_doctor_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pata__ = __webpack_require__(9);
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
    function Store(navCtrl, navParams, alertCtrl, doctorService, geolocation, gMaps, toastCtrl, popoverCtrl, http, storage, loadingCtrl, contacts, appAvailability, platform, service, launchNavigator) {
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
    Store.prototype.email = function () {
        window.open('mailto:' + this.store.email, '_system', 'location=no');
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
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
], Store.prototype, "slides", void 0);
Store = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-store',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\home\store.html"*/'<!--\n\n  Generated template for the MyPetsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{name}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n<div *ngIf="!isLoading">\n\n\n\n  <ion-list class="list-store">\n\n    <ion-item text-wrap>\n\n      <ion-avatar item-start>\n\n        <img src="{{store.avatar != \'\' ? store.avatar : \'assets/img/default/store.png\'}}" />\n\n      </ion-avatar>\n\n      <ion-row>\n\n        <ion-col col-10>\n\n          <h2>{{store.name}}</h2>\n\n          <h3>{{store.address}} {{(store.local != "" ? "Loc. "+store.local : "")}}</h3>\n\n        </ion-col>\n\n        <ion-col col-2 text-right class="location">\n\n          <div class="vertical-align-content" *ngIf="store.lat != \'\' && store.lng != \'\'">\n\n            <img src="assets/img/map-location.png" (click)="showMap()" />\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-8>\n\n          <p class="opening {{store.open_color}}"><strong>{{store.open_now}}</strong></p>\n\n          <p class="opening">{{store.open_news}}</p>\n\n        </ion-col>\n\n        <ion-col col-4 text-right>\n\n          <div *ngIf="lat != 0 && lng != 0">\n\n            <strong>{{showDistance(lat,lng,store.lat,store.lng)}}</strong>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-list>\n\n  <hr />\n\n\n\n  <!-- Social networks --> \n\n  <ion-row class="to-right social">\n\n    <ion-col col-2 *ngIf="store.email != \'\'">\n\n      <button (click)="email()" block>\n\n        <img src="assets/img/arroba.png" />\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-2 *ngIf="store.whatsapp != \'\'">\n\n      <button (click)="whatsapp()" block>\n\n        <img src="assets/img/whatsapp.png" />\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-2 *ngIf="store.website != \'\'">\n\n      <button (click)="website()" block>\n\n        <img src="assets/img/www.png" />\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-2 *ngIf="store.facebook != \'\'">\n\n      <button (click)="facebook()" block>\n\n        <img src="assets/img/facebook.png" />\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-2 *ngIf="store.instagram != \'\'">\n\n      <button (click)="instagram()" block>\n\n        <img src="assets/img/instagram.png" />\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-2 *ngIf="store.twitter != \'\'">\n\n      <button (click)="twitter()" block>\n\n        <img src="assets/img/twitter.png" />\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n  <hr />\n\n  <ion-row>\n\n    <ion-col col-1><ion-icon name="card"></ion-icon></ion-col>\n\n    <ion-col col-11><b>Redcompra:</b> {{(store.credit_card == 1 ? "SI" : "NO")}}</ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col col-1><ion-icon name="paper-plane"></ion-icon></ion-col>\n\n    <ion-col col-11><b>Delivery:</b> {{(store.delivery == 1 ? "SI" : "NO")}}</ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col col-1><ion-icon name="bicycle"></ion-icon></ion-col>\n\n    <ion-col col-11><b>Delivery + Redcompra:</b> {{(store.credit_card_delivery == 1 ? "SI" : "NO")}}</ion-col>\n\n  </ion-row>\n\n\n\n  <div *ngIf="store.showcase == 1" class="showcase1">\n\n\n\n    <h2 *ngIf="products.length > 0">Productos</h2>\n\n    <!--<ion-card *ngIf="products.length == 0">\n\n      <ion-card-header class="no-items">\n\n        No se han publicado productos\n\n      </ion-card-header>\n\n    </ion-card>\n\n    -->\n\n\n\n    <div *ngIf="products.length > 0">\n\n      <ion-slides spaceBetween="20" slidesPerView="1.5">\n\n        <ion-slide *ngFor="let product of products" [ngStyle]="{\'background-image\': \'url(\'+(product.avatar == \'\' ? \'assets/img/default/no-pictures.png\' : product.avatar)+\')\'}">\n\n          <div class="slide-product">\n\n            <div class="slide-title">{{product.name}}</div>\n\n            <div class="slide-price">$ {{product.price | number:\'1.0-0\' }}</div>\n\n          </div>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </div>\n\n\n\n    <h2 *ngIf="services.length > 0">Servicios</h2>\n\n    <!--\n\n    <ion-card *ngIf="services.length == 0">\n\n      <ion-card-header class="no-items">\n\n        No se han publicado servicios\n\n      </ion-card-header>\n\n    </ion-card>\n\n    -->\n\n\n\n    <div *ngIf="services.length > 0">\n\n      <ion-row class="store-services" *ngFor="let service of services">\n\n        <ion-col col-8 class="tab-service-name">\n\n          <strong>{{service.name}}</strong>\n\n        </ion-col>\n\n        <ion-col col-4 class="tab-service-price">\n\n          $ {{service.price | number:\'1.0-0\' }}\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <p [innerHtml]="service.description"></p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n  </div>\n\n\n\n  <div *ngIf="store.showcase == 2">\n\n\n\n    <ion-toolbar>\n\n      <ion-segment [(ngModel)]="openTab" color="primary">\n\n        <ion-segment-button value="products">\n\n          Productos\n\n        </ion-segment-button>\n\n        <ion-segment-button value="services">\n\n          Servicios\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n    </ion-toolbar>\n\n  \n\n    <div *ngIf="openTab == \'products\'">\n\n\n\n      <ion-card *ngIf="products.length == 0">\n\n        <ion-card-header class="no-items">\n\n          No se han publicado productos\n\n        </ion-card-header>\n\n      </ion-card>\n\n\n\n      <div *ngIf="products.length > 0">\n\n        <ion-row class="store-grid">\n\n          <ion-col col-6 *ngFor="let product of products">\n\n            <img src="{{product.avatar == \'\' ? \'assets/img/default/no-pictures.png\' : product.avatar}}" />\n\n            <div class="slide-product">\n\n              <div class="slide-title">{{product.name}}</div>\n\n              <div class="slide-price">$ {{product.price | number:\'1.0-0\' }}</div>\n\n            </div>\n\n          </ion-col>\n\n         </ion-row>\n\n      </div>\n\n\n\n    </div>\n\n\n\n    <div *ngIf="openTab == \'services\'">\n\n      \n\n      <ion-card *ngIf="services.length == 0">\n\n        <ion-card-header class="no-items">\n\n          No se han publicado servicios\n\n        </ion-card-header>\n\n      </ion-card>\n\n\n\n      <div *ngIf="services.length > 0">\n\n        <ion-row class="store-services" *ngFor="let service of services">\n\n          <ion-col col-8 class="tab-service-name">\n\n            <strong>{{service.name}}</strong>\n\n          </ion-col>\n\n          <ion-col col-4 class="tab-service-price">\n\n            $ {{service.price | number:\'1.0-0\' }}\n\n          </ion-col>\n\n          <ion-col col-12 class="tab-service-name">\n\n            <p [innerHtml]="service.description"></p>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n\n\n    </div>\n\n\n\n  </div>\n\n\n\n</div>\n\n</ion-content>'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\home\store.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_8__services_doctor_service__["a" /* DoctorService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* GoogleMapsAPIWrapper */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_contacts__["c" /* Contacts */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_availability__["a" /* AppAvailability */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_10__pata__["a" /* Pata */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__["a" /* LaunchNavigator */]])
], Store);

//# sourceMappingURL=store.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pata__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(297);
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
    LoginPage.prototype.gotoSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__signup_signup__["a" /* SignupPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"D:\Mobile\sateliteapp\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content scrollX="false" scrollY="false" scroll="false" class="noscroll">\n\n	<ion-scroll scrollX="false" scrollY="true">\n\n	  <img class="logo" src="assets/img/logo.png" alt="">\n\n	  <div *ngIf="welcome0">\n\n		  <div class="welcome">Bienvenido</div>\n\n		  <div class="listWrapper" scroll="false">\n\n		    <ion-list>\n\n		      <ion-item>\n\n		        <ion-input type="email" [(ngModel)]="login.name" placeholder="Tu nombre y apellido"></ion-input>\n\n		      </ion-item>\n\n		      <ion-item>\n\n		        <ion-input type="text" [(ngModel)]="login.email" placeholder="Tu email"></ion-input>\n\n		      </ion-item>\n\n		    </ion-list>\n\n		  </div>\n\n		  <div class="buttonWrapper">\n\n		    <button class="buttonPinkOrange" ion-button round full (click)="next()">Comenzar</button>\n\n		  </div>\n\n	  </div>\n\n	  <div *ngIf="welcome1">\n\n		  <div class="welcome">Ingrese clave de acceso</div>\n\n		  <p>Esta cuenta está protegida por contraseña.</p>\n\n		  <div class="listWrapper" scroll="false">\n\n		    <ion-list>\n\n		      <ion-item>\n\n		        <ion-input type="password" [(ngModel)]="login.passwd" placeholder=""></ion-input>\n\n		      </ion-item>\n\n		    </ion-list>\n\n		  </div>\n\n		  <div class="buttonWrapper">\n\n		    <button class="buttonPinkOrange" ion-button round full (click)="withPassword()">Comenzar</button>\n\n		  </div>\n\n	  </div>\n\n\n\n	</ion-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Mobile\sateliteapp\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__pata__["a" /* Pata */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pata; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_forkJoin__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modals_ok_ok__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modals_err_err__ = __webpack_require__(295);
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

/***/ })

},[315]);
//# sourceMappingURL=main.js.map