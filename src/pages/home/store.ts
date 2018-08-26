import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, NavParams, Platform, ToastController, LoadingController, ModalController, PopoverController, Slides } from 'ionic-angular';
import { GoogleMapsAPIWrapper  } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClient } from '@angular/common/http';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { AppAvailability } from '@ionic-native/app-availability';
import { Contacts, Contact, ContactFieldType, ContactFindOptions, ContactField, ContactName } from '@ionic-native/contacts';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { DoctorService } from '../../services/doctor.service';
import { Storage } from '@ionic/storage';
import { ModalDetail } from '../../modals/detail/detail';
import { CallNumber } from '@ionic-native/call-number';

import { Pata } from '../../pata';

declare let cordova: any;

@Component({
  selector: 'page-store',
  templateUrl: 'store.html'
})
export class Store {

  public isLoading: boolean = true;
  public rootMode: boolean = false;
  public preloadElement: string = '';
  public preloadType: string = '';
  public store: any;
  public name: string = '';
  public products: any = [];
  public comments: any = [];
  public services: any = [];
  public load: any;
  public openTab: string = 'products';
  public lat: number = 0;
  public lng: number = 0;
  public totalRate: number = 0;
  public comentarios: string = '';
  public editorConfig: any = {
    "editable": true,
    "height": "auto",
    "minHeight": "50",
    "width": "auto",
    "minWidth": "0",
    "toolbar": [
        ["bold", "italic", "underline"]
    ]
  }

  @ViewChild(Slides) slides: Slides;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private doctorService: DoctorService,
    private geolocation: Geolocation,
    public gMaps: GoogleMapsAPIWrapper,
    private toastCtrl: ToastController,
    public popoverCtrl: PopoverController,
    public http: HttpClient,
    private storage: Storage,
    private loadingCtrl: LoadingController,
    private contacts: Contacts,
    public modalCtrl: ModalController,
    private appAvailability: AppAvailability, 
    private platform: Platform,
    public service: Pata,
    private launchNavigator: LaunchNavigator,
    private callNumber: CallNumber,
    private iab: InAppBrowser
  ) {

    this.store = this.navParams.get("store");
    this.rootMode = (this.navParams.get("rootMode") ? true : false);
    this.preloadElement = (this.navParams.get("preloadElement") ? this.navParams.get("preloadElement") : '');
    this.preloadType = (this.navParams.get("preloadType") ? this.navParams.get("preloadType") : '');


    this.geolocation.getCurrentPosition().then((resp) => {
     this.lat = resp.coords.latitude;
     this.lng = resp.coords.longitude;
    }).catch((error) => {
      
    });

    this.reloadStore(0);

  }

  reloadStore(isreload: number) {

    if (isreload == 0) {
      this.load = this.loadingCtrl.create();
      this.load.present();
    }

    this.doctorService.getStore(this.store.id).subscribe((data: any)=> {
      this.isLoading=false;
      this.store=data.data;
      this.name = this.store.name;
      this.products=data.products;
      this.services=data.services;
      this.comments=data.comments;
      this.load.dismiss();

      if (this.preloadType == "product") {
        let element = {};
        for (let i = 0; i < this.products.length ; i++) {
          if (this.products[i].id == this.preloadElement) {
            element = this.products[i];
          }
        }
        if (element.hasOwnProperty("id")) {
          this.detail(element, this.preloadType);
        }
      }
      else if (this.preloadType == "service") {
        let element = {};
        for (let i = 0; i < this.services.length ; i++) {
          if (this.services[i].id == this.preloadElement) {
            element = this.services[i];
          }
        }
        if (element.hasOwnProperty("id")) {
          this.detail(element, this.preloadType);
        }
      }

      this.totalRate = parseInt(data.totalRate) || 0;
      this.store.rate = Math.round(parseFloat(this.store.rate));
      console.log(this.store.rate);

      if (isreload == 0) {
        if (this.products.length == 0 && this.services.length > 0) {
          this.openTab = 'services';
        }
      }
    });
  }

  onChangeRating(e:any) {
      this.load = this.loadingCtrl.create();
      this.load.present();
      this.doctorService.setRanking(this.store.id, e).subscribe((data: any)=> {
        this.load.dismiss();
        this.load = this.loadingCtrl.create({
          spinner: 'hide',
          content: 'Gracias por votar'
        });
        this.load.present();
        this.store.rate = data.rate;
        setTimeout(() => { 
          this.load.dismiss();
        }, 2000);
        
      });
  }

  enviarComentario() {
    if (this.comentarios.trim() == "" || this.comentarios.length < 2) {
      this.service.logError({}, "Tu comentario es muy corto, por favor escribe un comentario más largo");
    }
    else {

      this.load = this.loadingCtrl.create({content: "posteando..."});
      this.load.present();
      this.doctorService.addComment({
        store: this.store.id,
        comment: this.comentarios
      }).subscribe((data: any)=> {
        
        this.comentarios = "";
        this.load.dismiss();
        this.load = this.loadingCtrl.create({
          spinner: 'hide',
          content: 'Gracias por comentar'
        });
        this.load.present();
        setTimeout(() => { 
          this.load.dismiss();
          this.reloadStore(0);
        }, 2000);
      });
    }
  }

  showMap() {
    let options: LaunchNavigatorOptions = {
      destinationName: this.store.name,
      start: [parseFloat(this.store.lat), parseFloat(this.store.lng)]
    };

    this.launchNavigator.navigate([parseFloat(this.store.lat), parseFloat(this.store.lng)], options);

  }

  detail(detail: any, type: string) { 
    
    console.log('detail open: '+type+' | '+detail.id);
    if (type == 'service') {
      this.doctorService.addSs(detail.id);
    }
    else if (type == 'product') {
     this.doctorService.addPd(detail.id);
    }

    this.navCtrl.push(ModalDetail, { detail: detail });
    
    /*let dtModal = this.modalCtrl.create(ModalDetail, { detail: detail });
    dtModal.present();
    dtModal.onDidDismiss(data => {
     
    });*/

  }
  email() {
    this.doctorService.addTracking('email', this.store.id);
    window.open('mailto:'+this.store.email, '_system', 'location=no');
  }

  call() {
    this.doctorService.addTracking('call', this.store.id);
    this.callNumber.callNumber(this.store.phone, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
  showDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
    var dif = this.calcCrow(lat1, lon1, lat2, lon2);
    if (dif < 1) {
      return Math.round(dif*1000)+" mts";
    } else {
      return (Math.round(dif * 10) / 10)+" kms";
    }
  }

  calcCrow(lat1: number, lon1: number, lat2: number, lon2: number) {
    var R = 6371;
    var dLat = this.toRad(lat2-lat1);
    var dLon = this.toRad(lon2-lon1);
    var lat1 = this.toRad(lat1);
    var lat2 = this.toRad(lat2);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    return d;
  }


  toRad(Value) {
      return Value * Math.PI / 180;
  }

  whatsapp() {

    let app;
    this.doctorService.addTracking('whatsapp', this.store.id);

    if (this.platform.is('ios')) {
      app = 'whatsapp://';
    } else if (this.platform.is('android')) {
      app = 'com.whatsapp';
    }

    this.appAvailability.check(app).then((yes: boolean) => {
      this.load = this.loadingCtrl.create();
      this.load.present();

      let contactsfound;

      let fields:ContactFieldType[];

      const options = new ContactFindOptions();
      options.filter = this.store.name;
      options.multiple = true;
      options.hasPhoneNumber = true;

      this.contacts.find(["displayName", "phoneNumbers","photos"], options).then((contactos) => {
        console.log(contactos);
        let create = 0;
        if (contactos.length > 0) {        
          setTimeout(() => { 
            this.goWhatsapp();
          }, 2000);
        } else {

          var contact = this.contacts.create();
          contact.displayName = this.store.name;
          contact.nickname = this.store.name;
          
          var field = new ContactField();
          field.value = this.store.whatsapp;
          field.pref = true;
          
          var numberSection = [];
          numberSection.push( field );
          contact.phoneNumbers = numberSection;
          
          contact.save().then((value) => {
            setTimeout(() => { 
              this.goWhatsapp();
            }, 2000);
          }, (error) => {
            this.load.dismiss();
            this.service.logError("No hemos podido acceder a tu agenda e ir a WhatsApp.");
          })   

        }

      }, () => {
        this.load.dismiss();
        this.service.logError("No hemos podido acceder a tu agenda e ir a WhatsApp.");
      });


    },
    (no: boolean) => {
      this.service.logError({}, "WhatsApp parece no estar disponible o no se ha autorizado la conexión");
    });

  }

  goWhatsapp() {
    this.load.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Contacto creado',
      message: 'Se ha creado el contacto '+this.store.name+' ¿Desea continuar a WhatsApp?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            alert.dismiss();
          }
        },
        {
          text: 'OK',
          handler: () => {
            if (this.platform.is('android')) {
              //cordova.plugins.Whatsapp.send(this.store.whatsapp);
              window.open('https://wa.me/'+this.store.whatsapp.replace('+',''), '_system');
            }
            else if (this.platform.is('ios')) {
              window.open('https://wa.me/'+this.store.whatsapp.replace('+',''), '_system');
              /*window.open('whatsapp://send?text=Hola&phone='+this.store.whatsapp+'&abid='+this.store.whatsapp, '_system', 'location=no');*/
            }
          }
        }
      ]
    });
    alert.present();
  }
  twitter() {

    let app;
    this.doctorService.addTracking('twitter', this.store.id);
    if (this.platform.is('ios')) {
      app = 'twitter://';
    } else if (this.platform.is('android')) {
      app = 'com.twitter.android';
    }

    this.appAvailability.check(app).then((yes: boolean) => {
      window.open('twitter://user?screen_name='+this.store.twitter, '_system', 'location=no');
    },
    (no: boolean) => {
      window.open('https://www.twitter.com/'+this.store.twitter, '_system');
    });
  
  }
  facebook() {

    let app;
    this.doctorService.addTracking('facebook', this.store.id);
    if (this.platform.is('ios')) {
      app = 'fb://';
    } else if (this.platform.is('android')) {
      app = 'com.facebook.katana';
    }

    this.appAvailability.check(app).then((yes: boolean) => {
      if (this.platform.is('ios')) {
        if (this.store.fb_ios != "") {
          window.open(this.store.fb_ios, '_system', 'location=no');
        }
        else {
          window.open('fb://page/'+this.store.facebook, '_system', 'location=no');
        }
      } else {
        if (this.store.fb_android != "") {
          window.open(this.store.fb_android, '_system', 'location=no'); 
        } 
        else {
          window.open('fb://facewebmodal/f?href=https://www.facebook.com/'+this.store.facebook, '_system', 'location=no');
        }
      }
    },
    (no: boolean) => {
      window.open('https://www.facebook.com/'+this.store.facebook, '_system');
    });
  
  }
  instagram() {

    let app;
    this.doctorService.addTracking('instagram', this.store.id);
    if (this.platform.is('ios')) {
      app = 'instagram://';
    } else if (this.platform.is('android')) {
      app = 'com.instagram.android';
    }

    this.appAvailability.check(app).then((yes: boolean) => {
      window.open('instagram://user?username='+this.store.instagram, '_system', 'location=no');
    },
    (no: boolean) => {
      window.open('https://www.instagram.com/'+this.store.instagram, '_system');
    });
  
  }
  website() {
    this.doctorService.addTracking('website', this.store.id);
    window.open(this.store.website, '_system');
  }

}


