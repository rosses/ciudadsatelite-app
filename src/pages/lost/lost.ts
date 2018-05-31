import { Component } from '@angular/core';
import {NavController, NavParams, LoadingController, Platform} from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { Pata } from '../../pata';
import { PetService } from '../../services/pet.service';
import { environment } from "../../environments/environment"
import { PetPage } from '../../pages/pet/pet';
import { Storage } from '@ionic/storage';
import {Geolocation} from "@ionic-native/geolocation";
import {UserService} from "../../services/user.service";


@Component({
  selector: 'page-lost',
  templateUrl: 'lost.html',
})
export class Lost {

  user: any = null;
  loading: any = null;
  findpets: any = [];
  mylostpets: any = [];
  tab1: boolean = true;
  tab2: boolean = false;
  staticUrl: string = '';
  over: boolean = false;
  search: any = {
    breed: '',
    type: '',
    age: '',
    sex: '',
    size: ''
  };

  constructor(public navCtrl: NavController,
              public service: Pata,
              public navParams: NavParams,
              private petService: PetService,
              private userService: UserService,
              private barcodeScanner: BarcodeScanner,
              private loadingCtrl: LoadingController,
              private storage: Storage,
              private platform: Platform,
              private geolocation: Geolocation)
  {
    this.staticUrl = environment.staticUrl;
    //this.filtro();
    this.userService.getProfile().subscribe(
      (data:any) => {
        this.user = data;
      },
      error => {}
    )
  }

  Tab1() {
    this.tab1 = true;
    this.tab2 = false;
  }
  Tab2() {
    this.tab1 = false;
    this.tab2 = true;
  }

  filtro() {
    this.loading = this.loadingCtrl.create();
    this.loading.present();

    let lost = this.petService.searchLost(this.search);
    lost.subscribe((ok:any) => {
      this.findpets = ok.data;
      this.storage.get('MP-Profile').then((val) => {
        this.petService.getId(val.id).subscribe((pets: any) => {
          this.mylostpets = [];
          for (var i = 0; i < pets.length; i++) {
            if (pets[i].missing == 1) {
              this.mylostpets.push(pets[i]);
            }
          }
          this.loading.dismiss();
        });
      });

    }, (error) => {
      this.loading.dismiss();
      console.log('error', error);
      this.findpets = [];
    });
  }

  ionViewDidEnter() {
    this.staticUrl = environment.staticUrl;
    this.filtro();
  }

  scanear() {
    if (this.platform.is('cordova')) {
      this.barcodeScanner.scan().then((barcodeData) => {
        if (barcodeData.text.indexOf('mimaskot.pe') > -1) {
          var data = barcodeData.text.split('/');
          var code = data[data.length-1];
          this.loading = this.loadingCtrl.create();
          this.loading.present();
          this.geolocation.getCurrentPosition().then((resp) => {
            let data ={
              "code":code.trim(),
              "lat_seen":resp.coords.latitude,
              "lng_seen":resp.coords.longitude,
              "user_id": this.user.id
            };
            this.petSeeIn(data);
          }).catch((error) => {
            console.log('Error getting location', error);
            /** Enviar notificación son ubicación */
            let data ={
              "code":code.trim(),
              "lat_seen":'',
              "lng_seen":'',
              "user_id": this.user.id
            };
            this.petSeeIn(data);
            //

          });
        } else if(barcodeData.text.length > 0) {
          this.service.logError({}, 'QR escaneado no corresponde a MiMaskot');
        }else{
          // did not take the qr code
        }
      }, (err) => {
          alert('Error: ' + JSON.stringify(err));
          this.service.logError(null, "Servicio temporalmente no disponible");
      });
    }
    else {
    }
  }

  /** Enviar notificación cuando haya visto una mascota perdida */
  petSeeIn(data){
    console.log("petSeeIn: " + JSON.stringify(data));
    let petcheck = this.petService.notifyFoundPetFromQr(data);
    petcheck.subscribe((ok:any) => {
      this.goToPetFound(ok);
    }, (err) => {
      this.loading.dismiss();
      this.service.logError({}, 'No fue posible validar el QR');
    });
  }

  goToPetFound(ok){
    if (ok.hasOwnProperty("status")) {
      this.loading.dismiss();
      this.service.logError({}, 'Código QR no encontrado como una mascota perdida');
    }
    else {
      this.loading.dismiss();
      this.service.showOk('Enhorabuena, haz encontrado una mascota que está extraviada. Hemos enviado una notificación a su dueño, si lo deseas puedes contactarlo tú también.');
      this.navCtrl.push(PetPage, {
        pet: ok,
        isDetail: 0,
        isLove: false,
        isLost: true,
        isEdit: false,
        isFound:true
      });
    }
  }

  goToDetail(pet: any, my: boolean) {
    this.navCtrl.push(PetPage, {
      pet: pet,
      isDetail: my,
      isLove: false,
      isLost: true,
      isEdit: false,
      isFound:false,
      lastView: my
    });
  }

  openFiltros() {
    this.over = true;
  }
  closeFiltros() {
    this.over = false;
    this.filtro();
  }
}
