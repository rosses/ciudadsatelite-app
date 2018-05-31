import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HomePage } from '../home/home';
import { Pata } from '../../pata';

import { AuthService } from '../../services/auth.service';
import { SignupPage } from "../signup/signup";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  public loading: any;

  public login: { email:string, name:string } = {
    email: '',
    name:''
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: Pata,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    private auth: AuthService
  ){
  	this.login = {
  		name: '',
  		email: ''
  	};
  }

  next() {
  	let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (this.login.name == "") {
      this.service.logError({}, "Por favor ingresa tu nombre");
    }
  	else if (this.login.email == "" || !emailRegex.test(this.login.email)) {
  		this.service.logError({}, "Email no puede estar vacío o es incorrecto");
  	}
  	else {
      this.loading = this.loadingCtrl.create();
      this.loading.present();

      console.log('login start');
      this.auth.login(this.login).subscribe(
        (data: any) => {
          this.auth.loginOk.emit(data);
          this.loading.dismiss();
          console.log('login response');
          if (data.res == "OK"){
            this.auth.setToken(data.token);
            this.storage.set("MP-Profile", data.profile);
            this.navCtrl.setRoot(HomePage);
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

  gotoSignup(){
    this.navCtrl.push(SignupPage);
  }

}

