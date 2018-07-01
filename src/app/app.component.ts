import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Config, AlertController, LoadingController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { Badge } from '@ionic-native/badge';

import { Profile } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { Contacto } from '../pages/contacto/contacto';
import { HomePage } from '../pages/home/home';
import { Emergencia } from '../pages/emergencia/emergencia';
import { Mapa } from '../pages/mapa/mapa';
import { StoreProfile } from '../pages/storeprofile/storeprofile';
import { StoreProducts } from '../pages/storeproducts/storeproducts';
import { StoreServices } from '../pages/storeservices/storeservices';
import { JuntaVecinosPage } from '../pages/juntavecinos/juntavecinos';
import { Notificaciones } from '../pages/notificaciones/notificaciones';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { UserService } from "../services/user.service";
import { AuthService } from '../services/auth.service';
import { Pata } from '../pata';
import { FCM } from '@ionic-native/fcm';
import { NativeStorage } from '@ionic-native/native-storage';

import { environment } from "../environments/environment"
import {IonicApp } from 'ionic-angular';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = null;
  public staticUrl:string;

  pages: Array<{title: string, component: any, selected: boolean}>;

  user: any;
  active: any;
  zones: any = [];
  loading: any; 
  notifications: number = 0;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private translate: TranslateService,
    private config: Config,
    private storage: Storage,
    private service: Pata,
    private alertCtrl: AlertController,
    private userService:UserService,
    private loadingController: LoadingController,
    private authService:AuthService,
    private fcm: FCM,
    private sanitizer: DomSanitizer,
    public menu: MenuController,
    private badge: Badge,
    private nativeStorage: NativeStorage,
    private ionicApp: IonicApp
  ){
    this.initializeApp();
    this.staticUrl = environment.staticUrl;

    this.userService.changeAvatar.subscribe((st) => {
      console.log('change_avatar_main_fire', st);
      this.user.avatar = st;
    });

    this.userService.changeNotifications.subscribe((st) => {
      console.log('changeNotifications fire', st);
      this.notifications = st;
    });


  }

  initializeApp() {
    console.log('initialize');
    this.platform.ready().then(() => {
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      console.log('ready');
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleLightContent();
      setTimeout(() => {
        this.splashScreen.hide();
      },0);

      if (this.platform.is('cordova')) {

        this.platform.registerBackButtonAction(() => {
          let activeModal=this.ionicApp._modalPortal.getActive();
          if(activeModal){
            activeModal.dismiss();
            return;
          }
          else if(this.menu.isOpen()){
            this.menu.close()
            return;
          }
          else if(this.nav.canGoBack()){
            this.nav.pop();
            return;
          }
          else{
            //don't do anything
          }
        });

        this.fcm.getToken().then(token=>{
          //alert('push:'+ token);
          this.userService.setPush(token);
          this.authService.setPush(token);
        })

        this.fcm.onNotification().subscribe(data=>{
          //alert('Push:' + JSON.stringify(data));
          if(data.wasTapped){
            console.log("Received in background", data);
            this.userService.setReadPush(data.click_id).subscribe((ok) => {
              this.userService.getNotificationStatus().subscribe((cdata: any) => {
                console.log('cdata', cdata);
                let number = parseInt(cdata.total);
                if (isNaN(number)) {
                  console.log('Notification number is NaN, no updated');
                }
                else if (number == 0) {
                  this.notifications = number;
                  this.badge.clear();  
                }
                else {
                  this.notifications = number;
                  this.badge.set(number);
                }

                if (data.type != '' && data.reference != '') {
                  this.nav.setRoot(Notificaciones, {preloadType: data.type, preloadReference: data.reference});
                }
                
              });
            });
          } else {
            console.log("Received in foreground", data);
            this.userService.getNotificationStatus().subscribe((cdata: any) => {
              console.log('cdata', cdata);
              let number = parseInt(cdata.total);
              if (isNaN(number)) {
                console.log('Notification number is NaN, no updated');
              }
              else if (number == 0) {
                this.notifications = number;
                this.badge.clear();  
              }
              else {
                this.notifications = number;
                this.badge.set(number);
              }
            });
          };

        })

        this.fcm.onTokenRefresh().subscribe(token=>{
          //alert('push:'+ token);
          this.userService.setPush(token);
          this.authService.setPush(token);
        });
      }

      this.authService.loginOk.subscribe(data => {
        console.log('login emmiter discovered');
        if (data.res == "OK") {
          if (data.profile.avatar == null || data.profile.avatar == "") {
            data.profile.avatar = "assets/img/default/avatar.png";
          }
          this.user = data.profile;
          this.active = data.profile.types[0];
          this.storage.set("active", this.active);

          this.reloadSide(); 

          this.authService.sendPushToServer(this.user.id);
        }

      });
      this.storage.get("token").then((token) => {
        if (token) {
          this.startWithToken(token);
        } else {
          console.log('Token is clean, check nativeStorage');
          this.nativeStorage.getItem('token').then((token2) => {
            console.log('Token recovered');
            this.storage.set("token", token2);
            this.startWithToken(token2);
          }, (err) => { 
            console.log('nativeStorage not available');
            this.rootPage = LoginPage;
            this.loadingHidden();
          });

        }
      }, () => {
        console.log('Fail in storage element'); 
        this.rootPage = LoginPage; 
        this.loadingHidden();
      });
    });

  }

  startWithToken(token: string) {
    this.userService.getProfileMe().subscribe((result:any)=> {

      if (result.res == "OK") {
        this.storage.set("MP-Profile", result.data);
        this.user = result.data;

        if (this.user.avatar == null || this.user.avatar == "") {
          this.user.avatar = "assets/img/default/avatar.png";
        }

        this.active = this.user.types[0];
        this.reloadSide(); 
        // FCM
        this.userService.sendPushToServer();
        // Start
        this.rootPage = HomePage;
        this.loadingHidden();
      } else {
        this.service.logError(null, "No sesión de usuario está caducada. Por favor accede nuevamente");
        this.rootPage = LoginPage;
        this.loadingHidden();
      }
    }, () => {
      this.service.logError(null, "No fue posible recuperar tu perfil. Por favor accede nuevamente.");
      this.rootPage = LoginPage;
      this.loadingHidden();
    });

  }

  switchActive(zone:any) {

    console.log("switch zone: ",zone);

    this.active = zone;
    this.storage.set("active", this.active);

    document.getElementById("custom-overlay").style.display = "";

    this.reloadSide(); 

    setTimeout(() => { 
      document.getElementById("custom-overlay").style.display = "none";
    },500);

    this.nav.setRoot(HomePage);

  }
  loadingHidden() {
    setTimeout(() => {
      document.getElementById("loader-spinner").classList.add("animated-start");
      setTimeout(() => {
        document.getElementById("custom-overlay").style.display = "none";
      }, 200);
    },200);
    
  }

  profile() {
    this.nav.setRoot(Profile);
  }

  contacto() {
    this.nav.setRoot(Contacto);
  }

  reloadSide() {

    this.pages = [];
    this.pages.push({ title: 'Categorias', component: HomePage, selected: true });
    this.pages.push({ title: 'Mapa', component: Mapa, selected: false });
    this.pages.push({ title: 'Notificaciones  <strong class="badges"></strong>', component: Mapa, selected: false });

    if (this.active.profile_id == "2") { // Vendedor
      this.pages.push({ title: 'Perfil de tienda', component: StoreProfile, selected: false });
      this.pages.push({ title: 'Mis productos', component: StoreProducts, selected: false });
      this.pages.push({ title: 'Mis servicios', component: StoreServices, selected: false });
    }
    else {
      this.pages.push({ title: 'Junta de vecinos', component: JuntaVecinosPage, selected: false });
    }

    this.zones = [];
    if (this.user.markets.length > 0) {
      for (let i=0; i < this.user.markets.length ; i++) {
        this.zones.push(this.user.markets[i]);
      }
    }

  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
  openPageComponent(id: number) {
    if (id == 1) { this.nav.setRoot(HomePage); }
    else if (id == 2) { this.nav.setRoot(Mapa); }
    else if (id == 3) { this.nav.setRoot(Notificaciones); } 
    else if (id == 4) { this.nav.setRoot(JuntaVecinosPage); }   
    else if (id == 5) { this.nav.setRoot(Emergencia); }   
  }
  closeSession() {
  let alert = this.alertCtrl.create({
    title: 'Hasta pronto',
    message: 'Deseas salir de tu cuenta',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {}
      },
      {
        text: 'Confirmar',
        handler: () => {
          this.storage.remove("token");
          this.storage.remove("MP-Profile");
          this.storage.remove("active");
          this.nativeStorage.remove("token");
          this.nav.setRoot(LoginPage);
        }
      }
    ]
  });
  alert.present();
  }
}
