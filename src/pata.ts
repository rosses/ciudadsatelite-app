import {Injectable} from '@angular/core'
import { AlertController, ModalController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { of } from 'rxjs/observable/of';
import { ModalOK } from './modals/ok/ok';
import { ModalERR } from './modals/err/err';

@Injectable()
export class Pata {
  
  public p: any;
  send: any[] = [];
  backup: any[] = [];
  public perfil: any;

  constructor(public alertCtrl: AlertController, private storage: Storage, private http: Http, public modalCtrl: ModalController) {

  }
  
  logError(o: any, msg?: string, cb?: any) {

    if (!msg) { msg = "Ha ocurrido un error, intente nuevamente"; }
    let errModal = this.modalCtrl.create(ModalERR, { msg: msg });
    errModal.present();

    errModal.onDidDismiss(data => {
     if (cb) {
      cb();
     }
    });
  }
  showMsg(msg: string) {
    let alert = this.alertCtrl.create({
      title: '',
      cssClass: 'alertSuccess',
      subTitle: msg,
      buttons: ['Aceptar']
    });
    alert.present();
  }

  showOk(msg?: string) {
    if (!msg) { msg = "La acción fue realizada exitosamente!"; }
    let okModal = this.modalCtrl.create(ModalOK, { msg: msg });
    okModal.present();
  }

  private headers() {
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', this.perfil.token);
      let options = new RequestOptions({ headers: headers });
      return options;
  }


}