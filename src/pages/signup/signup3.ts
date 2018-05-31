import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { LoginPage } from '../login/login';
import { Pata } from '../../pata';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-signup3',
  templateUrl: 'signup3.html',
})

export class SignupPage3 {

  public login: any = null;
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

    if (this.login == null) {
      this.login = {
        type: '',
        email: ''
      };    
    }
  }

  next() {
  	this.navCtrl.setRoot(LoginPage, {}, {animate: true, direction: 'forward'});
  }

  gotoLogin(){
    this.navCtrl.setRoot(LoginPage, {}, {animate: true, direction: 'forward'});
  }
}