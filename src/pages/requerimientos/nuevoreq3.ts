import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, NavParams } from 'ionic-angular';

import { Pata } from '../../pata';
import { News } from '../../models/news.model';
import { AuthService } from '../../services/auth.service';
import { DoctorService } from '../../services/doctor.service';
import { NuevoReq2 } from '../../pages/requerimientos/nuevoreq2';
import { NuevoReq1 } from '../../pages/requerimientos/nuevoreq1';

import { environment } from "../../environments/environment"

@Component({
  selector: 'page-nuevoreq3',
  templateUrl: 'nuevoreq3.html'
})
export class NuevoReq3 {

  public address_id: number = 0;
  public delivery_address: number = 0;
  public extended: any = {
    trucktype: "",
    loadtype: "",
    servicetype: "",
    withdraw_time: "",
    delivery_time: "",
    expire_at: ""
  };
  public requirement: any;
  public delivery: any;

  private loading: any;
  private page = 1;
  public cities = [];
  public states = [];
  public addresses = [];
  public trucktype = [];
  public loadtype = [];
  public servicetype = [];


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private doctorService: DoctorService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    public auth: AuthService,
    private service: Pata)
  {

    this.loading = this.loadingCtrl.create();
    this.loading.present();

    this.auth.getStates().subscribe((data: any) => {
      this.states = data.data;
      this.loading.dismiss();
    });

    this.doctorService.address().subscribe((data: any) => {
      this.addresses = data;
      if (data.length > 0) {
        this.address_id = data[0].id;
      }
    });

    this.doctorService.masterdata().subscribe((data: any) => {
      this.trucktype = data.trucktype;
      this.loadtype = data.loadtype;
      this.servicetype = data.servicetype;
    });



  }
  
  changeCities(newObj) {

    this.requirement.city = "";
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

  cancelRequerimiento() {

    let confirm = this.alertCtrl.create({
      title: 'Detener publicación',
      message: "Deseas anular este requerimiento",
      buttons: [
        {
          text: 'No, Continuar',
          handler: () => {
            
          }
        },
        {
          text: 'Si, Anular',
          handler: () => {
            this.navCtrl.popToRoot();
          }
        }
      ]
    });
    confirm.present();

  }

  next() {
    this.navCtrl.push(NuevoReq2);
  }
}


