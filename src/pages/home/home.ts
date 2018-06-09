import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, PopoverController } from 'ionic-angular';
import { GoogleMapsAPIWrapper  } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClient } from '@angular/common/http';

import { Clinic } from '../../pages/clinic/clinic';
import { AdsMedia } from '../../pages/popovers/ads/ads';
import { DoctorService } from '../../services/doctor.service';
import { Storage } from '@ionic/storage';
import { Categoria } from '../../pages/home/categoria';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public isLoading: boolean = true;
  public categs: any = [];

  public searchActive: boolean = false;
  public isSearching: boolean = false;
  public isSearchingLoad: boolean = false;
  public searchAction: any;
  public search: string = '';
  public searchStores: any = [];
  public searchProducts: any = [];
  public searchServices: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private doctorService: DoctorService,
    private geolocation: Geolocation,
    public gMaps: GoogleMapsAPIWrapper,
    private toastCtrl: ToastController,
    public popoverCtrl: PopoverController,
    public http: HttpClient,
    private storage: Storage
  ) {

    setTimeout(() => {
      this.doctorService.getAll().subscribe((data: any)=> {
        this.isLoading=false;
        this.categs=data.data;
      });
    },2000);
  }

  onSearch(ev: any) {
    const val = ev.target.value;
    if (val && val.length > 2) {
      this.isSearching = true;
      this.isSearchingLoad = true;
      this.searchAction = this.doctorService.buscar(val,0);
      this.searchAction.subscribe((data:any) => {
        this.isSearchingLoad = false;
        this.searchStores = data.stores;
        this.searchProducts = data.products;
        this.searchServices = data.services;
      });

    } else {

      this.isSearching = false;
      this.isSearchingLoad = false;
      this.searchStores = [];
      this.searchProducts = [];
      this.searchServices = [];
    }
  }
  onClear(ev:any) {
      this.isSearching = false;
      this.isSearchingLoad = false;
      this.searchStores = [];
      this.searchProducts = [];
      this.searchServices = [];
  }

  toggleSearch() { 
    if (this.searchActive) {
      this.searchActive = false;
      this.onClear(false);
      this.searchStores = [];
      this.searchProducts = [];
      this.searchServices = [];
      this.search='';
      this.isSearching = false;
    } else {
      this.searchActive = true;
    }
  }

  doRefresh(refresher) {
    this.isLoading=true;
    this.doctorService.getAll().subscribe((data: any)=> {
      this.isLoading=false;
      this.categs=data.data;
      refresher.complete();
    });
  }

  verCategoria(categ:any) {
    this.navCtrl.push(Categoria, { categ: categ });
  }

}


