import {Component, ViewChild} from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, NavParams, PopoverController, LoadingController, ModalController } from 'ionic-angular';

import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { Pata } from '../../pata';
import { ProfileMedia } from '../popovers/profile-media/profile-media';

import { environment } from "../../environments/environment"
import {DatePicker} from "@ionic-native/date-picker";
import {DatePipe} from "@angular/common";
import {HomePage} from "../home/home";


@Component({
  selector: 'page-storeprofile',
  templateUrl: 'storeprofile.html',
})
export class StoreProfile {

  @ViewChild('datepicker') datepicker;

  store: any;
  timers: any;
  main: any;
  loaded: boolean = false;
  states: any = [];
  cities: any = [];
  tabs: string = 'home';

  constructor(public navCtrl: NavController,
              public storage: Storage,
              public navParams: NavParams,
              public popoverCtrl: PopoverController,
              private loadingCtrl: LoadingController,
              public service: Pata,
              public userService: UserService,
              public authService: AuthService,
              private datePicker: DatePicker,
              public modalCtrl: ModalController,
              public datePipe: DatePipe)
  {

    let loading = this.loadingCtrl.create({
      content: 'cargando...'
    });

    loading.present();

    this.store = this.navParams.get("store");

    this.userService.getStore(this.store.id).subscribe((ok:any) => {
      this.store = ok.data;
      this.timers = ok.timers;
      this.main = ok.main;
      this.loaded = true;
      if (this.store.avatar == null && this.store.avatar == "") {
        this.store.avatar = "assets/img/default/avatar.png";
      }
      //this.changeAvatar(this.store.avatar);

      this.authService.getStates().subscribe((data:any) => {
        this.states = data.data;
      });

      this.authService.getCities(this.main.state).subscribe((data:any) => {
        this.cities = data.data;
      });

      loading.dismiss();

    }, (err) => {
      this.service.logError(null, "No fue posible recuperar perfil de tienda. Verifica la disponibilidad de internet");
    });



  }

  mainCreditCardToggle() {
    if (this.main.credit_card == '1') { 
      this.main.credit_card = '0';
    } else {
      this.main.credit_card = '1';
    }
  }

  mainCreditCardDeliveryToggle() {
    if (this.main.credit_card_delivery == '1') { 
      this.main.credit_card_delivery = '0';
    } else {
      this.main.credit_card_delivery = '1';
    }
  }

  mainDeliveryToggle() {
    if (this.main.delivery == '1') { 
      this.main.delivery = '0';
    } else {
      this.main.delivery = '1';
    }
  }  

  refreshDistrito(e: any) {
    this.authService.getCities(this.store.state).subscribe((data:any) => {
      this.cities = data.data;
    });
  }

  save() {
      let loading = this.loadingCtrl.create({
        content: 'guardando...'
      });

      loading.present();
      

      let updateOperation = this.userService.updateStore({
        name: this.store.name,
        email: this.store.email,
        phone: this.store.phone,
        facebook: this.store.facebook,
        instagram: this.store.instagram,
        whatsapp: this.store.whatsapp,
        twitter: this.store.twitter,
        website: this.store.website,
        timers: JSON.stringify(this.timers),
        main: JSON.stringify(this.main)
      }, this.store.id);

      updateOperation.subscribe((ok: any) => {
        loading.dismiss();
        if (ok.res == "OK") {
          this.service.showOk();
        }
        else {
          loading.dismiss();
          this.service.logError(null, "No fue posible guardar sus datos, intente nuevamente");
        }
      }, (error) => {
        loading.dismiss();
        this.service.logError(null, "No fue posible guardar sus datos, intente nuevamente");
      });
  }

  presentMediaOptionsPopover(event) {
    let popover = this.popoverCtrl.create(ProfileMedia, { store: this.store });
    popover.present({
      ev: event
    });
    popover.onDidDismiss((change?:any) => {
      if (change) {  
        this.store = change;
        if (this.store.avatar == null || this.store.avatar == "") {
          this.store.avatar = "assets/img/default/avatar.png";
        }
        this.changeStoreAvatar(this.store.avatar);
        this.loaded = true;
      }
    });
  }

  changeStoreAvatar(avatar:string) {
    this.userService.changeStoreAvatar.emit(avatar);
  }

  /** Birthday Date Picker */
  openDatepicker(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => {
        let d = this.datePipe.transform(date, 'dd/MM/yyyy');
        console.log('Got date: ', d);
        this.store.birthday = d;
      },err => {
        console.log('Error occurred while getting date: ', err)
      }
    );
  }


  formatDate(date){
    return date;
  }

  gotoHome(){
    this.navCtrl.setRoot(HomePage);
  }
}
