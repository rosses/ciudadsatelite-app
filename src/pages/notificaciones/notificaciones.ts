import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NavController, LoadingController, ModalController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UserService } from '../../services/user.service';
import { DoctorService } from '../../services/doctor.service';
import { environment } from "../../environments/environment"
import { Pata } from '../../pata';
import { Store } from '../../pages/home/store';
import { ModalDetail } from '../../modals/detail/detail';

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
    private sanitizer: DomSanitizer
  ) {
    
    this.x = this.loadingCtrl.create();
    this.x.present();

    this.userService.getNotifications().subscribe((cdata: any) => {
      this.notificaciones = cdata.data;
      this.isLoading = false;
      this.x.dismiss();

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

  goToAction(type:string, reference: number) {
    if (type=='store') {
      this.doctorService.addQty(reference);
      this.navCtrl.push(Store, { store: {id: reference} });
    }
  }
}


