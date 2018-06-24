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
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class Contacto {

  isBlurred: boolean = false;
  loaded: boolean = false;
  loading: any;
  name: string = '';
  email: string = '';
  message: string = '';

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

    this.storage.get("MP-Profile").then((data) => {
      this.name = data.first_name;
      this.email = data.email;
    });

  }

  send() {

      if (this.message.length < 4) {
        this.service.logError(null,"Por favor especifique un mensaje más largo");
      }
      else {
        let loading = this.loadingCtrl.create({
          content: 'enviando...'
        });

        loading.present();

        let sendMessage = this.userService.sendContact({
          name: this.name,
          email: this.email,
          message: this.message
        });

        sendMessage.subscribe((ok: any) => {
          loading.dismiss();
          if (ok.res == "OK") {
            this.service.showOk("Mensaje enviado con éxito");
            this.message = '';
          }
          else {
            this.service.logError(null, "No fue posible enviar el mensaje, intente nuevamente");
          }
        }, (error) => {
          loading.dismiss();
          this.service.logError(null, "No fue posible enviar el mensaje, intente nuevamente");
        });      
      }
  }

  removeBlur() {
    this.isBlurred = false;
  }

  gotoHome(){
    this.navCtrl.setRoot(HomePage);
  }
}
