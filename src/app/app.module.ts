import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, LOCALE_ID, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Platform } from 'ionic-angular';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { OptionCoreModule } from '@option/core';
import { IonicStorageModule } from '@ionic/storage';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Geolocation } from '@ionic-native/geolocation';
import { AppAvailability } from '@ionic-native/app-availability';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { DatePicker } from '@ionic-native/date-picker';
import { FCM } from '@ionic-native/fcm';
import { Device } from '@ionic-native/device';
import { Badge } from '@ionic-native/badge';
import { Autosize} from '../components/autosize';
import { SafePipe} from '../components/safepipe';
import { MyApp } from './app.component';

// Pages
import { Profile } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { NewsDetalle } from '../pages/juntavecinos/newsDetalle';
import { LoginPage } from '../pages/login/login';
import { Categoria } from '../pages/home/categoria';
import { Store } from '../pages/home/store';
import { Contacto } from '../pages/contacto/contacto';
import { JuntaVecinosPage } from '../pages/juntavecinos/juntavecinos';
import { StoreProfile } from '../pages/storeprofile/storeprofile';
import { StoreProducts } from '../pages/storeproducts/storeproducts';
import { StoreServices } from '../pages/storeservices/storeservices';
import { Ng2Rut, RutValidator } from 'ng2-rut';
import { Mapa } from '../pages/mapa/mapa';

import { Pata } from '../pata';

// Popovers
import { ProfileMedia } from '../pages/popovers/profile-media/profile-media';

// Services
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { NewsService } from '../services/news.service';
import { DoctorService } from '../services/doctor.service';

// Components
import { NewsPreviewComponent } from '../components/news-preview/news-preview';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Constant
import { environment } from '../environments/environment';

// Modals
import { ModalOK } from '../modals/ok/ok';
import { ModalERR } from '../modals/err/err';
import { ModalDetail } from '../modals/detail/detail';
import {SocialSharing} from "@ionic-native/social-sharing";
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
    NewsDetalle,
    ProfileMedia,
    LoginPage,
    Profile,
    Contacto,
    Categoria,
    Store,
    StoreProfile,
    StoreProducts,
    StoreServices,
    JuntaVecinosPage,
    ModalOK,
    ModalERR,
    ModalDetail,
    Mapa,
    NewsPreviewComponent,
    Autosize,
    SafePipe
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
      name: "__satelite",
      driverOrder: ['indexeddb','websql']
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBrUo6PdRjbF03o4_xeEoYl9kTD5V7pp7g'
    }),
    Ng2Rut
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewsDetalle,
    Mapa,
    ProfileMedia,
    LoginPage,
    Contacto,
    Categoria,
    Store,
    StoreProfile,
    StoreProducts,
    StoreServices,
    JuntaVecinosPage,
    NewsPreviewComponent,
    ModalOK,
    ModalERR,
    ModalDetail,
    Profile
  ],
  providers: [
    AuthService,
    UserService,
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
    Contacts,
    AppAvailability,
    LaunchNavigator,
    DatePicker,
    Badge,
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

