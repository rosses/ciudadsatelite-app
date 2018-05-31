import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, NavParams } from 'ionic-angular';

import { Pata } from '../../pata';
import { News } from '../../models/news.model';
import { AuthService } from '../../services/auth.service';
import { DoctorService } from '../../services/doctor.service';
import { NuevoReq2 } from '../../pages/requerimientos/nuevoreq2';
import { NuevoReq3 } from '../../pages/requerimientos/nuevoreq3';

import { environment } from "../../environments/environment"

@Component({
  selector: 'page-nuevoreq1',
  templateUrl: 'nuevoreq1.html'
})
export class NuevoReq1 {

  public address_id: number = 0;
  requirement: any = {
    street: "",
    housenum: "",
    floornum: "",
    departament: "",
    state: "",
    city: ""
  };
  private loading: any;
  private page = 1;
  public cities = [];
  public states = [];
  public addresses = [];

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
    this.navCtrl.push(NuevoReq2, { requirement: this.requirement, address_id: this.address_id });
  }
}


