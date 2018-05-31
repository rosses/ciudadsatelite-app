import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { environment } from "../../environments/environment"
declare var window;

@Component({
  selector: 'page-clinic',
  templateUrl: 'clinic.html',
})
export class Clinic {

  public staticUrl: string;
  clinic: any;
  loaded: boolean = false;
  isBlurred: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController
  ) {
    this.staticUrl = environment.staticUrl;
    this.clinic = navParams.get('clinic');
    this.loaded = true;
  }

  call() {
    var newWindow = window.open('tel:'+this.clinic.phone);
  }

  email() {
    var newWindow = window.open('mailto:'+this.clinic.email);
  }

}
