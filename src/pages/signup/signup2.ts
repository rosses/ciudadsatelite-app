import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { SignupPage3 } from '../signup/signup3';
import { Pata } from '../../pata';

import { AuthService } from '../../services/auth.service';
import { Ng2Rut, RutValidator, RutDirective } from 'ng2-rut';

@Component({
  selector: 'page-signup2',
  templateUrl: 'signup2.html'
})

export class SignupPage2 {

  public login: any = null;
  public cities: any = null;
  public states: any = null;
  public loading: any;

  constructor(
    public navCtrl: NavController,
    public service: Pata,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    public navParams: NavParams,
    private auth: AuthService
  ){

    this.login = navParams.get('login');

    if (!this.login.card_code) { this.login.card_code = ""; }
    if (!this.login.first_name) { this.login.first_name = ""; }
    if (!this.login.last_name) { this.login.last_name = ""; }
    if (!this.login.company) { this.login.company = ""; }
    if (!this.login.fantasy) { this.login.fantasy = ""; }
    if (!this.login.agent_card_code) { this.login.agent_card_code = ""; }
    if (!this.login.agent_first_name) { this.login.agent_first_name = ""; }
    if (!this.login.agent_last_name) { this.login.agent_last_name = ""; }
    if (!this.login.street) { this.login.street = ""; }
    if (!this.login.housenum) { this.login.housenum = ""; }
    if (!this.login.floornum) { this.login.floornum = ""; }
    if (!this.login.departament) { this.login.departament = ""; }
    if (!this.login.region) { this.login.region = ""; }
    if (!this.login.city) { this.login.city = ""; }
    if (!this.login.passwd) { this.login.passwd = ""; }
    if (!this.login.passwd2) { this.login.passwd2 = ""; }

    this.loading = this.loadingCtrl.create();
    this.loading.present();

    this.auth.getStates().subscribe((data: any) => {
      this.states = data.data;
      this.loading.dismiss();
    },
    err => {
      this.loading.dismiss();
      this.service.logError({});
    });
  }

  next() {

    if (this.login.card_code == "") {
  		this.service.logError({}, "RUT no puede estar vacío");
  	}
    else if (this.login.isCompany == 0 && this.login.first_name == "") {
      this.service.logError({}, "Debe indicar su nombre");
    }
    else if (this.login.last_name == 0 && this.login.last_name == "") {
      this.service.logError({}, "Debe indicar apellidos");
    }
  	else if (this.login.isCompany == 1 && this.login.company == "") {
  		this.service.logError({}, "Debe indicar nombre de la empresa");
  	}
    else if (this.login.isCompany == 1 && this.login.agent_card_code == "") {
      this.service.logError({}, "Debe indicar RUT del representante");
    }
    else if (this.login.isCompany == 1 && this.login.agent_first_name == "") {
      this.service.logError({}, "Debe indicar nombre de la empresa");
    }
    else if (this.login.isCompany == 1 && this.login.agent_last_name == "") {
      this.service.logError({}, "Debe indicar nombre de la empresa");
    }
    else if (this.login.isCompany == 1 && this.login.agent_last_name == "") {
      this.service.logError({}, "Debe indicar una calle");
    }
    else if (this.login.state == "" || this.login.city == "") {
      this.service.logError({}, "Debe indicar una región y comuna");
    }
    else if (this.login.passwd == "") {
      this.service.logError({}, "Tu clave no puede estar vacía");
    }
    else if (this.login.passwd != this.login.passwd2) {
      this.service.logError({}, "Las claves no coinciden, ingresa en los 2 campos una misma clave");
    }

  	else {

      this.loading = this.loadingCtrl.create();
      this.loading.present();

  	  this.auth.register(this.login).subscribe((data: any) => {
          this.loading.dismiss();
          if(data.res == "OK"){
            this.navCtrl.push(SignupPage3);
          }
          else{
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

  changeCities(newObj) {

    this.login.city = "";
    this.loading = this.loadingCtrl.create();
    this.loading.present();

    this.auth.getCities(newObj).subscribe((data: any) => {
      this.cities = data.data;
      this.loading.dismiss();
    },
    err => {
      this.loading.dismiss();
      this.service.logError({});
    });
  }

  gotoLogin(){
    this.navCtrl.pop().then(()=>{
      //this.navCtrl.parent.navCtrl.pop()
    });
  }
}