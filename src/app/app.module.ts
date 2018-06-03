import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, LOCALE_ID, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { OptionCoreModule } from '@option/core';
import { IonicStorageModule } from '@ionic/storage';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DatePicker } from '@ionic-native/date-picker';
import { FCM } from '@ionic-native/fcm';
import { Device } from '@ionic-native/device';

import { MyApp } from './app.component';

// Pages
import { Profile } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { NewsDetalle } from '../pages/juntavecinos/newsDetalle';
import { ListPage } from '../pages/list/list';
import { PetPage } from '../pages/pet/pet';
import { MyPetsPage } from '../pages/my-pets/my-pets';
import { OnboardingPage } from '../pages/onboarding/onboarding';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { SignupPage2 } from '../pages/signup/signup2';
import { SignupPage3 } from '../pages/signup/signup3';
import { RequerimientosPage } from '../pages/requerimientos/requerimientos';
import { NuevoReq1 } from '../pages/requerimientos/nuevoreq1';
import { NuevoReq2 } from '../pages/requerimientos/nuevoreq2';
import { NuevoReq3 } from '../pages/requerimientos/nuevoreq3';
import { CamionesPage } from '../pages/camiones/camiones';
import { ConductoresPage } from '../pages/conductores/conductores';
import { ServiciosPage } from '../pages/servicios/servicios';
import { JuntaVecinosPage } from '../pages/juntavecinos/juntavecinos';
import { Searching } from '../pages/searching/searching';
import { Lost } from '../pages/lost/lost';
import { Owner } from '../pages/owner/owner';
import { Doctor } from '../pages/doctor/doctor';
import { Clinic } from '../pages/clinic/clinic';
import { StoreProfile } from '../pages/storeprofile/storeprofile';
import { StoreProducts } from '../pages/storeproducts/storeproducts';
import { StoreServices } from '../pages/storeservices/storeservices';
import { Ng2Rut, RutValidator } from 'ng2-rut';
import { Pata } from '../pata';

// Popovers
import { PetMediaOptionsPage } from '../pages/popovers/pet-media-options/pet-media-options';
import { PetStatePage } from '../pages/popovers/pet-state/pet-state';
import { ProfileMedia } from '../pages/popovers/profile-media/profile-media';
import { AdsMedia } from '../pages/popovers/ads/ads';

// Services
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { PetService } from '../services/pet.service';
import { NewsService } from '../services/news.service';
import { DoctorService } from '../services/doctor.service';

// Components
import { PetPreviewComponent } from '../components/pet-preview/pet-preview';
import { PetInfoFormComponent } from '../components/pet-info-form/pet-info-form';
import { NewsPreviewComponent } from '../components/news-preview/news-preview';
import { QrCardComponent } from '../components/qr-card/qr-card';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Constant
import { environment } from '../environments/environment';

// Modals
import { ModalOK } from '../modals/ok/ok';
import { ModalERR } from '../modals/err/err';
import {SocialSharing} from "@ionic-native/social-sharing";
import {ChangePasswordPage} from "../pages/change-password/change-password";
import {DatePipe} from "@angular/common";
import {EmailComposer} from "@ionic-native/email-composer";
import {CallNumber} from "@ionic-native/call-number";

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PetPage,
    MyPetsPage,
    NewsDetalle,
    PetMediaOptionsPage,
    PetStatePage,
    ProfileMedia,
    OnboardingPage,
    LoginPage,
    Profile,
    Owner,
    SignupPage,
    SignupPage2,
    SignupPage3,
    CamionesPage,
    AdsMedia,
    StoreProfile,
    StoreProducts,
    StoreServices,
    RequerimientosPage,
    NuevoReq1,
    NuevoReq2,
    NuevoReq3,
    ConductoresPage,
    ServiciosPage,
    JuntaVecinosPage,
    ModalOK,
    ModalERR,
    Searching,
    Lost,
    Doctor,
    Clinic,
    PetPreviewComponent,
    PetInfoFormComponent,
    NewsPreviewComponent,
    QrCardComponent,
    ChangePasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      backButtonIcon: 'ios-arrow-back',
      iconMode: 'ios',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition',
      scrollAssist: false,
      autoFocusAssist: false
    }),
    HttpModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    OptionCoreModule.forRoot(environment.apiUrl),
    IonicStorageModule.forRoot({
      name: "__mipata",
      driverOrder: ['indexeddb','websql']
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAIUiGU1E22l2VqgP5XXEK_Bt36n0eOcxE'
    }),
    Ng2Rut
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PetPage,
    NewsDetalle,
    MyPetsPage,
    Searching,
    Lost,
    Doctor,
    Clinic,
    Owner,
    PetMediaOptionsPage,
    PetStatePage,
    ProfileMedia,
    OnboardingPage,
    LoginPage,
    SignupPage,
    SignupPage2,
    SignupPage3,
    CamionesPage,
    AdsMedia,
    StoreProfile,
    StoreProducts,
    StoreServices,
    RequerimientosPage,
    NuevoReq1,
    NuevoReq2,
    NuevoReq3,
    ConductoresPage,
    ServiciosPage,
    JuntaVecinosPage,
    PetPreviewComponent,
    PetInfoFormComponent,
    NewsPreviewComponent,
    QrCardComponent,
    ModalOK,
    ModalERR,
    Profile,
    ChangePasswordPage
  ],
  providers: [
    AuthService,
    UserService,
    PetService,
    NewsService,
    DoctorService,
    StatusBar,
    SplashScreen,
    GoogleMapsAPIWrapper,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Pata,
    BarcodeScanner,
    Geolocation,
    Camera,
    DatePicker,
    FCM,
    Device,
    { provide: LOCALE_ID, useValue: "es-ES" },
    SocialSharing,
    DatePipe,
    EmailComposer,
    CallNumber,
    RutValidator

  ]
})
export class AppModule {
  constructor(private translate: TranslateService) {
    this.initTranslate();
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('es-cl');
    this.translate.use('es-cl');
  }
}

