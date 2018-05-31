import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, NavParams } from 'ionic-angular';

import { Pata } from '../../pata';
import { News } from '../../models/news.model';
import { AuthService } from '../../services/auth.service';
import { DoctorService } from '../../services/doctor.service';
import { NuevoReq1 } from '../../pages/requerimientos/nuevoreq1';
import { NuevoReq3 } from '../../pages/requerimientos/nuevoreq3';

import { environment } from "../../environments/environment"

@Component({
  selector: 'page-nuevoreq2',
  templateUrl: 'nuevoreq2.html'
})
export class NuevoReq2 {

  public delivery_address: number = 0;
  public address_id: number;
  public requirement: any;
  public delivery: any = {
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

    this.requirement = this.navParams.get("requirement");
    this.address_id = this.navParams.get("address_id");

    this.loading = this.loadingCtrl.create();
    this.loading.present();

    this.auth.getStates().subscribe((data: any) => {
      this.states = data.data;
      this.loading.dismiss();
    });

    this.doctorService.address().subscribe((data: any) => {
      this.addresses = data;
      if (data.length > 0) {
        this.delivery_address = data[0].id;
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
    this.navCtrl.push(NuevoReq3, {
      requirement: this.requirement,
      address_id: this.address_id,
      delivery_address: this.delivery_address,
      delivery: this.delivery
    });
  }
}

