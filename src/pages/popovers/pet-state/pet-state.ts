import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { Pet } from '../../../models/pet.model';
import { PetService } from '../../../services/pet.service';
import { Pata } from '../../../pata';
import { MyPetsPage } from '../../../pages/my-pets/my-pets';
import { AgmCoreModule, GoogleMapsAPIWrapper  } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-pet-state',
  templateUrl: 'pet-state.html',
})
export class PetStatePage {

  petId: number = 0;
  petMissing: boolean = false;
  petLoving: boolean = false;
  lat: number = 0;
  lng: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private petService: PetService, private loadingCtrl: LoadingController, public service: Pata, private geolocation: Geolocation) {
    this.petId = this.navParams.get("id");
    this.petMissing = (this.navParams.get("petMissing").toString() == "0" ? false : true);
  	this.petLoving = (this.navParams.get("petLoving").toString() == "0" ? false : true);

    this.geolocation.getCurrentPosition().then((resp) => {
     this.lat=resp.coords.latitude;
     this.lng=resp.coords.longitude;

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  ionViewDidLoad() {

  }

  setEstado(id: number, state: string) {
  	this.close();
  	console.log('set state: '+id+' - '+state);

  	var obj = {
  		lat: this.lat,
  		lng: this.lng
  	};

  	let setState = this.petService.setState(id, state, obj);

  	let loading = this.loadingCtrl.create({
  		content: ''
  	});
    loading.present();

    setState.subscribe((ok) => {
      loading.dismiss();

      if (state == 'lost') {
        this.service.showOk("Has reportado a tu mascota como perdida. Recibirás una notificación si alguiente tiene información o si tu mascota ha sido encontrada.");
        this.petMissing = true;
        /*this.viewCtrl.dismiss({
          petMissing: this.petMissing,
          petLoving: this.petLoving
        });*/
      }
      else if (state == 'searching') {
        this.service.showOk("Desde ahora, tu mascota está disponible en la sección buscando pareja");
        this.petLoving = true;
        /*this.viewCtrl.dismiss({
          petMissing: this.petMissing,
          petLoving: this.petLoving
        });*/
      }
      else if (state == 'nosearching') {
        this.service.showOk("Desde ahora, tu mascota dejó de estár disponible en la sección buscando pareja");
        this.petLoving = false;
        this.viewCtrl.dismiss({
          petMissing: this.petMissing,
          petLoving: this.petLoving
        });
      }
      else if (state == 'found') {
        this.service.showOk("Has reportado a tu mascota como encontrada");
        this.petMissing = false;
        /*this.viewCtrl.dismiss({
          petMissing: this.petMissing,
          petLoving: this.petLoving
        });*/
      }
      else if (state == 'remove') {
        this.service.showOk();
        this.navCtrl.setRoot(MyPetsPage);
      }

    }, (error) => {
      loading.dismiss();
      this.service.logError(null, "No fue posible procesar la solicitud. intente nuevamente");
    });


  }
  close() {
    this.viewCtrl.dismiss({
      petMissing: this.petMissing,
      petLoving: this.petLoving
    });
  }

}
