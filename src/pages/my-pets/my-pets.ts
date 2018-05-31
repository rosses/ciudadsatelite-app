import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Pet } from '../../models/pet.model';
import { PetService } from '../../services/pet.service';


@Component({
  selector: 'page-my-pets',
  templateUrl: 'my-pets.html',
})
export class MyPetsPage {
  activePet: Pet = null;
  pets: any = [];
  newPet: Pet = new Pet({});
  addPetForm: boolean = false;
  addPetForm2: boolean = false;
  loading: any = null;
  loadok: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private petService: PetService, private storage: Storage, private loadingCtrl: LoadingController) {
    this.loadok = false;
  }

  ionViewWillEnter() {
    this.refreshMyPets();
  }

  refreshMyPets() {
    this.loadok = false;
    this.loading = this.loadingCtrl.create();
    this.loading.present();

    this.storage.get('MP-Profile').then((val) => {
      this.petService.getId(val.id).subscribe((pets) => { this.pets = pets; this.loadok = true; this.loading.dismiss(); });
    });
  }

  qrChange(obj: any) {
    this.addPetForm2 = obj.ok;
    this.newPet.code = obj.identifier;
  }
  addPet() {
    this.addPetForm = true;
  }
}
