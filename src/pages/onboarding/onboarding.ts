import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides, MenuController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the OnboardingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.html',
})
export class OnboardingPage {
  @ViewChild('slider') slider: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, private storage: Storage) {
    this.menu.swipeEnable(false, 'leftMenu');
  }

  onIonDrag(event) {
    // if (this.slider.getPreviousIndex() >= (this.slider.length() - 1)) {
    //   this.skip();
    // }
  }

  skip() {
    this.storage.set("MP-FirstTime", true);
    this.navCtrl.setRoot(LoginPage, {}, {animate: true, direction: 'forward'});
  }

  next() {
    if (this.slider.isEnd()) {
      this.skip();
    } else {
      this.slider.slideNext();
    }
  }

}
