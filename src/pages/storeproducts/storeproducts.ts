import {Component, ViewChild} from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, NavParams, PopoverController, LoadingController, ModalController } from 'ionic-angular';

import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { Pata } from '../../pata';
import { ProfileMedia } from '../popovers/profile-media/profile-media';

import { environment } from "../../environments/environment"
import {DatePicker} from "@ionic-native/date-picker";
import {ChangePasswordPage} from "../change-password/change-password";
import {DatePipe} from "@angular/common";
import {HomePage} from "../home/home";


@Component({
  selector: 'page-storeproducts',
  templateUrl: 'storeproducts.html',
})
export class StoreProducts {

  @ViewChild('datepicker') datepicker;

  store: any;
  isBlurred: boolean = false;
  loaded: boolean = false;
  states: any = [];
  cities: any = [];
  loading: any;

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

      this.loading = this.loadingCtrl.create({
        content: 'cargando listado...'
      });

      this.loading.present();

      setTimeout(() => {
        this.loading.dismiss();
      },2000);

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
        state: this.store.state,
        city: this.store.city,
        email: this.store.email,
        phone: this.store.phone,
        address: this.store.address,
        whatsapp: this.store.whatsapp,
        website: this.store.website
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

  removeBlur() {
    this.isBlurred = false;
  }

  presentMediaOptionsPopover(event) {
    let popover = this.popoverCtrl.create(ProfileMedia);
    popover.present({
      ev: event
    });
    popover.onDidDismiss((change?:any) => {
      if (change) {
        /*
        this.storage.get("MP-Profile").then((val) => {
          this.store = val;
          this.loaded = true;
          if (this.store.avatar != null && this.store.avatar != "") {
            this.store.avatar = this.store.avatar.replace('/public/','');
          }
          this.changeAvatar(this.store.avatar);
        });
        */
      }
      this.removeBlur();
    });
    this.isBlurred = true;
  }

  changeAvatar(avatar:string) {
    this.userService.changeAvatar.emit(avatar);
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

  changePassword(){
    let profileModal = this.modalCtrl.create(ChangePasswordPage, {});
    profileModal.onDidDismiss(data => {
      if(data){
        this.service.showOk();
      }else{
        //this.service.showOk();
      }
    });
    profileModal.present();
  }

  formatDate(date){
    return date;
  }

  gotoHome(){
    this.navCtrl.setRoot(HomePage);
  }
}
