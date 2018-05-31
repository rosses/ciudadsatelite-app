import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, NavParams, PopoverController, LoadingController } from 'ionic-angular';

import { UserService } from '../../services/user.service';
import { Pata } from '../../pata';

import { environment } from "../../environments/environment"
import {EmailComposer} from "@ionic-native/email-composer";
import {CallNumber} from "@ionic-native/call-number";

@Component({
  selector: 'page-owner',
  templateUrl: 'owner.html',
})
export class Owner {
  me: any;
  isBlurred: boolean = false;
  loaded: boolean = false;
  owner: number = 0;
  staticUrl: string = '';
  regiones: any = [];
  distritos: any = [];

  constructor(public navCtrl: NavController,
              public storage: Storage,
              public navParams: NavParams,
              public popoverCtrl: PopoverController,
              private loadingCtrl: LoadingController,
              public service: Pata,
              public userService: UserService,
              private emailComposer: EmailComposer,
              private callNumber: CallNumber) {

    this.staticUrl = environment.staticUrl;

    let loading = this.loadingCtrl.create({
      content: 'recuperando...'
    });

    loading.present();


    let getOp = this.userService.getId(this.navParams.get("owner"));

    getOp.subscribe((ok) => {
      loading.dismiss();
      this.me = ok;
      if (this.me.avatar != null && this.me.avatar != "") {
        this.me.avatar = this.me.avatar.replace('/public/','');
      }
      else {
        //this.me.avatar = "assets/img/default/avatar.png";
      }

      this.me.region_name = "";
      this.me.distrito_name = "";
      this.me.genero = "No especifica";

      if (parseInt(this.me.genero) == 1) {
        this.me.genero = "Masculino";
      }
      if (parseInt(this.me.genero) == 2) {
        this.me.genero = "Femenino";
      }

      this.userService.region().subscribe((ok) => {
        this.regiones = ok;
        for (var i = 0; i < this.regiones.length; i++) {
          if (this.regiones[i].id == this.me.region) {
            this.me.region_name = this.regiones[i].region;
            break;
          }
        }
      });

      if (this.me.region.toString() != "0") {
        this.userService.distrito(this.me.region).subscribe((ok) => {
          this.distritos = ok;
          for (var i = 0; i < this.distritos.length; i++) {
            if (this.distritos[i].id == this.me.district) {
              this.me.distrito_name = this.distritos[i].distrito;
              break;
            }
          }
        });
      }

      this.loaded = true;
    }, (error) => {
      loading.dismiss();
      this.service.logError(null, "No fue posible recuperar los datos, intente más tarde");
      console.log(error);
    });

  }


  /** Call to Owner */
  call(phoneNumber){
    this.callNumber.callNumber(phoneNumber, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }

  /** Send Email to Owner */
  sendEmail(emailOwner){
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(true) {
        let email = {
          to: emailOwner,
          subject: this.me.name + ' encontré a tu Mascota',
          body: 'Hola ' + this.me.name + ', ¡Encontré a tu Mascota perdida!',
          isHtml: true
        };

        // Send a text message using default options
        this.emailComposer.open(email);
      }else {
       // this.service.logError({}, 'Debes tener una cuenta de email registada en el teléfono antes de enviar el email');
      }
    },
      error => {
      console.log('send.email.error: ' + JSON.stringify(error));
    });
  }




}
