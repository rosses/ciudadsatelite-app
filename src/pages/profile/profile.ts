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
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class Profile {

  @ViewChild('datepicker') datepicker;

  me: any;
  isBlurred: boolean = false;
  loaded: boolean = false;
  states: any = [];
  cities: any = [];

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

    this.storage.get("MP-Profile").then((val) => {
      this.userService.getId(val.id).subscribe((ok:any) => {
        this.me = ok.data;
        this.loaded = true;
        if (this.me.avatar == null && this.me.avatar == "") {
          this.me.avatar = "assets/img/default/avatar.png";
        }
        this.changeAvatar(this.me.avatar);

        this.authService.getStates().subscribe((data:any) => {
          this.states = data.data;
        });

        this.authService.getCities(this.me.address.state).subscribe((data:any) => {
          this.cities = data.data;
        });
      }, (err) => {
        this.service.logError(null, "No fue posible recuperar tu perfil. Verifica la disponibilidad de internet");
      });
    });

  }


  refreshDistrito(e: any) {
    this.authService.getCities(this.me.address.state).subscribe((data:any) => {
      this.cities = data.data;
    });
  }

  save() {
      let loading = this.loadingCtrl.create({
        content: 'guardando...'
      });

      loading.present();
      /*

      this.storage.get('MP-Profile').then((val) => {
        let updateOperation = this.userService.update({
          name: this.me.name,
          last_name: this.me.last_name,
          birthday: this.me.birthday,
          address: this.me.address,
          phone: this.me.phone,
          email: this.me.email,
          region: this.me.region,
          district: this.me.district,
          gender: this.me.gender
        });

        updateOperation.subscribe((ok: any) => {
          loading.dismiss();
          if (ok.status == 1) {
            this.service.showOk();
          }
          else {
            this.service.logError(null, "No fue posible guardar sus datos, intente nuevamente");
          }
        }, (error) => {
          loading.dismiss();
          this.service.logError(null, "No fue posible guardar sus datos, intente nuevamente");
          console.log(error);
        });
      });
      */
      this.service.logError(null, "No fue posible guardar sus datos, intente nuevamente");
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

        this.storage.get("MP-Profile").then((val) => {
          this.me = val;
          this.loaded = true;
          if (this.me.avatar != null && this.me.avatar != "") {
            this.me.avatar = this.me.avatar.replace('/public/','');
          }
          this.changeAvatar(this.me.avatar);
        });
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
        this.me.birthday = d;
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