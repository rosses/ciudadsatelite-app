import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Config, AlertController, LoadingController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

import { Profile } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { SignupPage2 } from '../pages/signup/signup2';
import { SignupPage3 } from '../pages/signup/signup3';
import { Contacto } from '../pages/contacto/contacto';
import { HomePage } from '../pages/home/home';
import { OnboardingPage } from '../pages/onboarding/onboarding';
import { MyPetsPage } from '../pages/my-pets/my-pets';
import { ListPage } from '../pages/list/list';
import { Searching } from '../pages/searching/searching';
import { Lost } from '../pages/lost/lost';
import { Clinic } from '../pages/clinic/clinic';
import { Mapa } from '../pages/mapa/mapa';
import { StoreProfile } from '../pages/storeprofile/storeprofile';
import { StoreProducts } from '../pages/storeproducts/storeproducts';
import { StoreServices } from '../pages/storeservices/storeservices';
import { RequerimientosPage } from '../pages/requerimientos/requerimientos';
import { CamionesPage } from '../pages/camiones/camiones';
import { ConductoresPage } from '../pages/conductores/conductores';
import { ServiciosPage } from '../pages/servicios/servicios';
import { JuntaVecinosPage } from '../pages/juntavecinos/juntavecinos';


import { MimaskotUser } from '../models/mimaskot-user.model';
import {UserService} from "../services/user.service";
import { AuthService } from '../services/auth.service';
import { Pata } from '../pata';
import { FCM } from '@ionic-native/fcm';

import { environment } from "../environments/environment"


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
    public menu: MenuController
  ){
    this.initializeApp();
    this.staticUrl = environment.staticUrl;

    this.userService.changeAvatar.subscribe((st) => {
      console.log(st);
      this.user.avatar = st;
    });


  }

  initializeApp() {
    console.log('initialize');
    this.platform.ready().then(() => {
      console.log('ready');
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      setTimeout(() => {
        this.splashScreen.hide();
      },0);

      if (this.platform.is('cordova')) {

        this.platform.registerBackButtonAction(() => {
          if(this.menu.isOpen()){
             this.menu.close()
          }
          else if(this.nav.canGoBack()){
            this.nav.pop();
          }else{
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
          } else {
            console.log("Received in foreground", data);
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

          this.storage.get("MP-FirstTime").then((val) => {
            console.log('MP-FT Res: ', val);
            console.log('get Token');
            this.storage.get("token").then((token) => {
              if (token) {
                console.log('token true / getProfile()');
                this.userService.getProfile().subscribe((result:any)=>{
                    this.user = result;
                    this.userService.getId(result.id).subscribe((ok:any) => {

                      this.user = ok.data;
                      if (this.user.avatar == null || this.user.avatar == "") {
                        this.user.avatar = "assets/img/default/avatar.png";
                      }

                      this.storage.get("active").then((active) => {
                        this.active = active;
                        this.reloadSide(); 
                      }, (err) => {
                        this.active = ok.data.types[0];
                        this.storage.set("active", this.active);
                        this.reloadSide(); 
                      });                     
                      
                      this.userService.sendPushToServer();
                      this.rootPage = HomePage;
                      this.loadingHidden();


                    }, (err) => {
                      this.service.logError(null, "No fue posible recuperar tu perfil. Por favor accede nuevamente.");
                      this.rootPage = LoginPage;
                      this.loadingHidden();
                    });


                }, (err) => {
                  this.rootPage = LoginPage;
                  this.loadingHidden();
                });

              } else {
                this.rootPage = LoginPage; 
                this.loadingHidden();
              }
            });
          }, () => {
            this.rootPage = LoginPage; 
            this.loadingHidden();
          });
        /*}
        else {
          this.rootPage = LoginPage; //OnboardingPage;
          this.loadingHidden();
        }*/
      /*})*/

    });

  }
  switchActive(zone:any) {

    console.log("switch zone: ",zone);

    this.active = zone;
    this.storage.set("active", this.active);

    document.getElementById("custom-overlay").style.display = "";

    this.reloadSide(); 

    setTimeout(() => { 

    },200);

    setTimeout(() => { 
      document.getElementById("custom-overlay").style.display = "none";
    },100);

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
    /*
    if (this.user.types.length > 1) {
      for (let i=0; i < this.user.types.length ; i++) {
        if (this.user.types[i].profile_id != this.active.profile_id ) {
          this.zones.push(this.user.types[i]);
        }
      }
    }
    */

  }

  openPage(page) {
    this.nav.setRoot(page.component);
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
          this.nav.setRoot(LoginPage);
        }
      }
    ]
  });
  alert.present();
  }
}
