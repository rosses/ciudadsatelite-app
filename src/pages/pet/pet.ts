import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, PopoverController, Slides, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Pet } from '../../models/pet.model';
import { PetMediaOptionsPage } from '../popovers/pet-media-options/pet-media-options';
import { PetStatePage } from '../popovers/pet-state/pet-state';
import { UserService } from '../../services/user.service';
import { PetService } from '../../services/pet.service';
import { Owner } from '../../pages/owner/owner';
import { Pata } from '../../pata';
/**
 * Generated class for the PetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

import { environment } from "../../environments/environment"

@Component({
  selector: 'page-pet',
  templateUrl: 'pet.html',
})
export class PetPage {

  @ViewChild(Slides) slides: Slides;
  public staticUrl: string;
  pet: Pet;
  myPet: Pet;
  petId: number;
  imagenIndex: number = 0;
  isDetail: boolean = true;
  isEdit: boolean = false;
  isLove: boolean = false; // buscando pareja
  isMatch: boolean = false; // es candidato de la mascota
  isLost: boolean = false;
  isFound: boolean = false;
  isBlurred: boolean = false;
  loaded: boolean = false;
  lastView: boolean = false;
  imagenes: any = [];
  loading: any = null;
  lastSeen: boolean = false;
  lastSeenID: number = 0;
  lastSeenName: string = '';
  lastSeenLat: number = 0;
  public map: any;
  lastSeenLng: number = 0;

  public styles: any = [ { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [ { "color": "#6195a0" } ] }, { "featureType": "landscape", "elementType": "all", "stylers": [ { "color": "#f2f2f2" } ] }, { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [ { "color": "#e7e5e3" } ] }, { "featureType": "poi", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [ { "color": "#e6f3d6" }, { "visibility": "on" } ] }, { "featureType": "road", "elementType": "all", "stylers": [ { "saturation": "-100" }, { "lightness": 45 }, { "visibility": "simplified" } ] }, { "featureType": "road.highway", "elementType": "all", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [ { "color": "#e3d6c7" }, { "visibility": "simplified" } ] }, { "featureType": "road.highway", "elementType": "labels.text", "stylers": [ { "color": "#4e4e4e" } ] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [ { "color": "#f4f4f4" } ] }, { "featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [ { "color": "#787878" } ] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "featureType": "transit", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "water", "elementType": "all", "stylers": [ { "color": "#eaf6f8" }, { "visibility": "on" } ] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [ { "color": "#eaf6f8" } ] } ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private petService: PetService,
    private userService: UserService,
    public loadingCtrl: LoadingController,
    public popoverCtrl: PopoverController,
    public storage: Storage,
    public service: Pata
  ) {

    this.staticUrl = environment.staticUrl;
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
      for (var i = 0; i < ex.length ; i++) {
        this.imagenes.push(ex[i]);
      }
    }

    if (this.lastView == true) {
      var spet = this.petService.getLostPetByQR(this.pet.code);
      spet.subscribe((data: any) => {
        if (data.hasOwnProperty("status") && data.status == false) {
          this.lastSeen = false;
        }
        else {
          this.lastSeen = true;
          this.lastSeenLat = data.missingPet.lat_seen;
          this.lastSeenLng = data.missingPet.lng_seen;
          this.lastSeenID = data.missingPet.user_id;
          var suser = this.userService.getId(data.missingPet.user_id)
          suser.subscribe((data2: any) => {
            this.lastSeenName = data2.name+' '+data2.last_name;
          })

        }
      });
    }
  }
  public loadAPIWrapper(map) {
    this.map = map;
  }
  removeBlur() {
    this.isBlurred = false;
  }

  gotoUser(id) {
    this.navCtrl.push(Owner, { owner: id });
  }

  getmarkericon() {
    return 'assets/img/marker.png';
  }
  presentMediaOptionsPopover(event) {

    this.imagenIndex = this.slides.getActiveIndex();

    let popover = this.popoverCtrl.create(PetMediaOptionsPage, { imagenIndex: this.imagenIndex, additionalImages: this.pet.additionalImages, id: this.pet.id });
    popover.present({
      ev: event
    });
    popover.onDidDismiss((data: any) => {
      if (data && data.hasOwnProperty('reload') && data.reload == true) {
        this.reloadPet();
      }
      this.removeBlur();
    });
    this.isBlurred = true;
  }

  reloadPet() {
    //this.loading = this.loadingCtrl.create({content:'subiendo foto...'});
    //this.loading.present();

    this.storage.get('MP-Profile').then((val) => {
      this.petService.getId(val.id).subscribe((pets: any) => {

        for (var i = 0; i < pets.length ; i++ ) {
          if (pets[i].id == this.pet.id) {
            this.pet = pets[i];
          }
        }
        //this.loading.dismiss();
      });
    });
  }

  presentStatePopover(event) {

    let popover = this.popoverCtrl.create(PetStatePage, {id: this.pet.id, petMissing: this.pet.missing, petLoving: this.pet.available });
    popover.present({
      ev: event
    });
    popover.onDidDismiss((data) => {
      if (data && data.hasOwnProperty("petLoving")) {
        this.pet.available = (data.petLoving == true ? 1 : 0);
      }
      if (data && data.hasOwnProperty("petMissing")) {
        this.pet.missing = (data.petMissing == true ? 1 : 0);
      }
      this.removeBlur();
    });
    this.isBlurred = true;
  }


  reportarComoEncontrado(code: string) {
    this.petService.petFound(code.trim()).subscribe((data: any) => {
      this.service.showOk();
      this.navCtrl.pop();
    }, (err) => {
      this.service.logError(null, "No fue posible reportar la mascota, intentalo nuevamente");
    });
  }
}
