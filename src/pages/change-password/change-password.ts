import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';
import {UserService} from "../../services/user.service";
import {Pata} from "../../pata";

/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {

  public user:{currentPass:string, newPass: string, repeatPass: string} = {currentPass: '', newPass:'', repeatPass:''};
  private userId:string;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private userService: UserService,
              private service: Pata,
              private loadingCtrl: LoadingController,
              private viewCtrl: ViewController)
  {
    //this.userId = this.navParams.get('userId')
  }

  ionViewDidLoad() {
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }

  changePassword(){

    if(this.user.newPass != this.user.repeatPass){
      this.service.logError(null, "Las contraseñas no coinciden");
      return false;
    }

    let loading = this.loadingCtrl.create({
      content: 'cargando...'
    });
    loading.present();
    console.log(JSON.stringify(this.user));

    this.userService.changePassword(this.user.currentPass, this.user.newPass).subscribe(
      (data: any) => {
        loading.dismiss();
        if(data.status){
          this.dismiss(true);
          //this.service.showOk();
        }else{
          //this.dismiss(false);
          this.service.logError(null, data.message);
        }
      },
      error => {
        loading.dismiss();
        console.log('Change.error: ' + JSON.stringify(error));
        this.service.logError(null, "Error al intentar cambiar la contraseña");
      }
    )
  }
}
