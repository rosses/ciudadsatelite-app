import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { PetService } from '../../services/pet.service';
import { environment } from "../../environments/environment"
import { PetPage } from '../../pages/pet/pet';
import { Storage } from '@ionic/storage';
import {Pet} from "../../models/pet.model";

/**
 * Generated class for the MyPetsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-searching',
  templateUrl: 'searching.html',
})
export class Searching {
  over: boolean = false;
  tab1: boolean = true;
  tab2: boolean = false;
  loading: any = null;
  findpets: any = [];
  mascota_activa: Pet;
  pets: any = [];
  candidatos: any = [];
  especies: any = [];
  razas: any = [];
  sizes: any = [];
  sexs: any = [];

  search: any = {
    breed: '',
    type: '',
    age: '',
    sex: '',
    size: ''
  };

  public staticUrl:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private petService: PetService, private barcodeScanner: BarcodeScanner, private loadingCtrl: LoadingController) {
    this.staticUrl = environment.staticUrl;
    this.mascota_activa = new Pet();
    let load = this.loadingCtrl.create();
    load.present();

    let search = this.petService.searchAvailable(this.search);
    search.subscribe((ok:any) => {
      load.dismiss();
      this.findpets = ok.data;
    }, (error) => {
      load.dismiss();
      console.log('error', error);
      this.findpets = [];
    });

    this.petService.especie().subscribe((ok) => {
      this.especies = ok;
    });

    this.petService.size().subscribe((ok) => {
      this.sizes = ok;
    });

    this.petService.sex().subscribe((ok) => {
      this.sexs = ok;
    });

    this.storage.get('MP-Profile').then((val) => {
      this.petService.getId(val.id).subscribe((pets) => {
        this.pets = pets;
      });
    });
  }


  refreshRazas(e: any) {
    if (e != "") {
      this.petService.raza(e).subscribe((ok) => {
        this.razas = ok;
      });
    }
    else {
      this.razas = [];
    }
  }


  activarMascota(pet: any) {

    this.mascota_activa = pet;
    let load = this.loadingCtrl.create();
    load.present();

   // let find = this.petService.getMyLove();

   /* find.subscribe((ok) => {
      load.dismiss();
    }, (error) => {
      load.dismiss();
    });*/


    let search = this.petService.searchAvailable(this.search);
    search.subscribe((ok:any) => {
      load.dismiss();
      this.findpets = ok.data;
    }, (error) => {
      load.dismiss();
      console.log('error', error);
      this.findpets = [];
    });

    let recived = this.petService.getMyLoveRecived(this.mascota_activa.id);

    recived.subscribe((pets: any) => {
      console.log(JSON.stringify(pets));
      console.log(JSON.stringify(pets.applicant_pet));
      this.candidatos = pets;
      //load.dismiss();
    }, (error) => {
      //load.dismiss();
    });

  }

  Tab1() {
    this.tab1 = true;
    this.tab2 = false;
  }
  Tab2() {
    this.tab1 = false;
    this.tab2 = true;
  }
  openFiltros() {
    this.over = true;
  }
  closeFiltros() {
    this.over = false;
    let loading = this.loadingCtrl.create({
      content: 'filtrando...'
    });

    loading.present();

    let search = this.petService.searchAvailable(this.search);
    search.subscribe((ok:any) => {
      this.findpets = ok.data;
      loading.dismiss();
    }, (error) => {
      loading.dismiss();
      this.findpets = [];
    });

  }
  goToDetail(pet: any) {
    console.log('candidato:' + JSON.stringify(pet));
    console.log('search.myPet:' + JSON.stringify(this.mascota_activa));
    this.navCtrl.push(PetPage, {
      pet: pet,
      myPet: this.mascota_activa,
      petId: this.mascota_activa.id,
      isDetail: false,
      isLove: true,
      isMatch:false,
      isEdit: false
    });
  }

  // 0 solicitud
  // 1 aceptado
  // 2 reject
  goToLoveDetail(pet: any) {
    this.navCtrl.push(PetPage, {
      pet: pet,
      myPet: this.mascota_activa,
      petId: this.mascota_activa.id,
      statusMatch: pet.status,
      isDetail: false,
      isLove: true,
      isMatch:true,
      isEdit: false
    });
  }

  getYearOld(date) {
    let d = new Date(date);
    let c = new Date();
    d.getFullYear();
    let year = (c.getFullYear() - d.getFullYear());
    return (year >= 0) ? year : 'sin especificar';
  }

  getLocation(pet) {
    let location = 'sin especificar';
    let district = this.capitalizeFirstLetter(pet.district.toLowerCase());
    let region = this.capitalizeFirstLetter(pet.region.toLowerCase());
    if(district.length > 0 && region.length > 0){
      location = district + ', ' + region;
    }else if(district.length > 0 || region.length > 0){
      location = district + region;
    }
    return location;
  }

  private capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
