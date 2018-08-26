import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NavController, LoadingController, ModalController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UserService } from '../../services/user.service';
import { DoctorService } from '../../services/doctor.service';
import { environment } from "../../environments/environment"
import { Pata } from '../../pata';
import { Store } from '../../pages/home/store';
import { Categoria } from '../../pages/home/categoria';
import { ModalDetail } from '../../modals/detail/detail';
import { Badge } from '@ionic-native/badge';

@Component({
  selector: 'page-notificaciones',
  templateUrl: 'notificaciones.html'
})
export class Notificaciones {
  notificaciones: any = [];
  public isLoading: boolean = true;
  public x: any;

  constructor(
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private userService: UserService,
    private doctorService: DoctorService,
    public storage: Storage,
    public modalCtrl: ModalController,
    public service: Pata,
    public navParams: NavParams,
    private badge: Badge,
    private sanitizer: DomSanitizer
  ) {
    
    this.x = this.loadingCtrl.create();
    this.x.present();

    this.userService.getNotifications().subscribe((cdata: any) => {
      this.notificaciones = cdata.data;
      this.isLoading = false;
      this.x.dismiss();
      
      let number = parseInt(cdata.total);
      if (isNaN(number)) {
        // nothing
        console.log('Notification number is NaN, no updated');
      }
      else if (number == 0) {
        this.userService.changeNotifications.emit(number);
        this.badge.clear();  
      }
      else {
        this.userService.changeNotifications.emit(number);
        this.badge.set(number);
      }

      if (this.navParams.get("preloadType") && this.navParams.get("preloadReference")) {
        this.goToAction(this.navParams.get("preloadType"), this.navParams.get("preloadReference"));
      }
    });
  }

  doRefresh(refresher) {

    this.isLoading = true;
    this.userService.getNotifications().subscribe((cdata: any) => {
      this.notificaciones = cdata.data;
      this.isLoading = false;
      refresher.complete();
    });
  }

  goToAction(type:string, reference: number, idpush?: any) {
    console.log('goToAction type: ',type,' - reference: ',reference, ' - idpush: ', idpush);
    if (idpush) { this.userService.setReadPush(idpush).subscribe((t) => { console.log('setReadPush '+t); }); }
    if (type=='store') {
      this.doctorService.addQty(reference);
      this.navCtrl.push(Store, { store: {id: reference} });
    }
    else if (type=='product') {
      this.doctorService.addPd(reference);
      this.navCtrl.push(Store, { store: {id: reference}, preloadType: 'product', preloadElement: reference });
    }
    else if (type=='service') {
      this.doctorService.addSs(reference);
      this.navCtrl.push(Store, { store: {id: reference}, preloadType: 'service', preloadElement: reference });
    }
    else if (type=='category') {
      /*this.doctorService.addTracking('category', '');*/
      this.navCtrl.push(Categoria, { categ: reference });
    }
  }
}


