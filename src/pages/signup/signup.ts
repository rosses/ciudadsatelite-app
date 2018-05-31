import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { SignupPage2 } from '../signup/signup2';
import { Pata } from '../../pata';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {

  public login: any = null;
  public loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: Pata,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    private alertCtrl: AlertController,
    private auth: AuthService
  ){
  	this.login = {
  		type: '',
  		email: '',
      isCompany: 0
  	};
  }

  next() {
  	let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if (this.login.email == "" || !emailRegex.test(this.login.email)) {
  		this.service.logError({}, "Email no puede estar vacío o es incorrecto");
  	}
  	else if (this.login.type == "") {
  		this.service.logError({}, "Debe indicar tipo de registro.");
  	}
  	else {

      this.loading = this.loadingCtrl.create();
      this.loading.present();

  	  this.auth.evaluate(this.login).subscribe((data: any) => {
          this.loading.dismiss();
          if(data.res == "OK"){

            if (this.login.type == "2" || this.login.type == "3") {
              let alert = this.alertCtrl.create({
                title: '¿Eres una empresa?',
                message: 'Queremos personalizar tu registro',
                buttons: [
                  {
                    text: 'No',
                    role: 'cancel',
                    handler: () => {
                      this.login.isCompany = 0;
                      this.goToForm();
                    }
                  },
                  {
                    text: 'Si',
                    handler: () => {
                      this.login.isCompany = 1;
                      this.goToForm();
                    }
                  }
                ]
              });

              alert.present();

            } else {

              let alert = this.alertCtrl.create({
                title: '¿Trabajas en una empresa que ya está en Camión Go?',
                message: 'Por favor selecciona SI para continuar indicando el RUT de la empresa que perteneces o NO para registrarte como transportista particular',
                buttons: [
                  {
                    text: 'Si',
                    role: 'cancel',
                    handler: () => {
                      this.login.isCompany = 0;
                      this.login.type = "2";
                      this.goToForm();
                    }
                  },
                  {
                    text: 'No',
                    handler: () => {
                      this.login.isCompany = 0;
                      this.goToForm();
                    }
                  }
                ]
              });
              alert.present();

            }

          }
          else if(data.res == "ADD"){
            this.service.showOk(data.msg);
            this.navCtrl.pop();
          }
          else {
            this.service.logError({}, data.msg);
          }
        },
        err => {
          this.loading.dismiss();
          this.service.logError({});
        }
      );
  	}
  }

  goToForm() {
    this.navCtrl.push(SignupPage2, {
      login: this.login
    });
  }

  gotoLogin(){
    this.navCtrl.pop();
  }
}