import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage';
import { HomePage } from '../home/home';
import { Pata } from '../../pata';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  public loading: any;

  public login: { email:string, name:string, passwd: string } = {
    email: '',
    name:'',
    passwd: ''
  };

  public welcome0: boolean = true;
  public welcome1: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: Pata,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    private nativeStorage: NativeStorage,
    private auth: AuthService
  ){
  	this.login = {
  		name: '',
  		email: '',
      passwd: ''
  	};
  }

  next() {
  	let emailRegex = /\S+@\S+\.\S+/;

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
      this.auth.login(this.login).subscribe((data: any) => {
          this.auth.loginOk.emit(data);
          this.loading.dismiss();

          if (data.res == "OK"){
          	this.nativeStorage.setItem("token", data.token);
            this.auth.setToken(data.token);
            this.storage.set("MP-Profile", data.profile);
            this.navCtrl.setRoot(HomePage);
          }
          else if (data.res == "PASSWD") {
            this.welcome0 = false;
            this.welcome1 = true;
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

  withPassword() {
    if (this.login.passwd == "") {
      this.service.logError({}, "Clave no puede estar vacío");
    }
    else {
      this.loading = this.loadingCtrl.create();
      this.loading.present();

      this.auth.login(this.login).subscribe((data: any) => {
          this.auth.loginOk.emit(data);
          this.loading.dismiss();
          
          if (data.res == "OK"){
          	this.nativeStorage.setItem("token", data.token);
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

}

