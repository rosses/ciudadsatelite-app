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
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class Profile {

  @ViewChild('datepicker') datepicker;

  me: any;
  loaded: boolean = false;
  states: any = [];
  cities: any = [];
  passwd: string = '';
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

    this.userService.getProfileMe().subscribe((ok:any) => {
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

  }


  refreshDistrito(e: any) {
    this.authService.getCities(this.me.address.state).subscribe((data:any) => {
      this.cities = data.data;
    });
  }

  save() {
      this.loading = this.loadingCtrl.create({
        content: 'guardando...'
      });

      this.loading.present();
      
      let updateOperation = this.userService.update({
        name: this.me.first_name,
        state: this.me.address.state,
        city: this.me.address.city,
        email: this.me.email,
        phone: this.me.phone,
        passwd: this.passwd
      });

      updateOperation.subscribe((ok: any) => {
        this.loading.dismiss();
        if (ok.res == "OK") {
          this.service.showOk();
        }
        else {
          this.service.logError(null, "No fue posible guardar sus datos, intente nuevamente");
        }
      }, (error) => {
        this.loading.dismiss();
        this.service.logError(null, "No fue posible guardar sus datos, intente nuevamente");
      });


  }

  presentMediaOptionsPopover(event) {
    let popover = this.popoverCtrl.create(ProfileMedia);
    popover.present({
      ev: event
    });
    popover.onDidDismiss((change?:any) => {
      if (change) {     
        this.me = change;
        if (this.me.avatar == null || this.me.avatar == "") {
          this.me.avatar = "assets/img/default/avatar.png";
        }
        this.storage.set("MP-Profile", change);
        this.changeAvatar(this.me.avatar);
        this.loaded = true;
      }
    });

  }

  changeAvatar(avatar:string) {
    console.log('change avatar listerner', avatar);
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

  formatDate(date){
    return date;
  }

  gotoHome(){
    this.navCtrl.setRoot(HomePage);
  }
}
