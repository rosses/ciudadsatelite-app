import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, PopoverController } from 'ionic-angular';
import { GoogleMapsAPIWrapper  } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClient } from '@angular/common/http';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';


import { Contacto } from '../../pages/contacto/contacto';
import { Store } from '../../pages/home/store';
import { AdsMedia } from '../../pages/popovers/ads/ads';
import { DoctorService } from '../../services/doctor.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html'
})
export class Categoria {

  public isLoading: boolean = true;
  public categ: any;
  public title: string = '';
  public stores: any = [];

  public searchActive: boolean = false;
  public isSearching: boolean = false;
  public isSearchingLoad: boolean = false;
  public searchAction: any;
  public search: string = '';
  public searchStores: any = [];
  public searchProducts: any = [];
  public searchServices: any = [];
  public lat: number = 0;
  public lng: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private doctorService: DoctorService,
    private geolocation: Geolocation,
    public gMaps: GoogleMapsAPIWrapper,
    private toastCtrl: ToastController,
    public popoverCtrl: PopoverController,
    public http: HttpClient,
    private storage: Storage,
    private launchNavigator: LaunchNavigator
  ) {

    this.categ = this.navParams.get("categ");
    this.title = this.categ.name;

    this.doctorService.getStores(this.categ.id).subscribe((data: any)=> {
      this.isLoading=false;
      this.stores=data.data;
    });

    this.geolocation.getCurrentPosition().then((resp) => {
     this.lat = resp.coords.latitude;
     this.lng = resp.coords.longitude;
    }).catch((error) => {
      
    });

  }

  goToStore(store: any) {
    this.navCtrl.push(Store, { store: store });
  }
  
  goContacto() {
    this.navCtrl.push(Contacto);
  }

  showDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
    var dif = this.calcCrow(lat1, lon1, lat2, lon2);
    if (dif < 1) {
      return Math.round(dif*1000)+" mts";
    } else {
      return (Math.round(dif * 10) / 10)+" kms";
    }
  }

  calcCrow(lat1: number, lon1: number, lat2: number, lon2: number) {
    var R = 6371;
    var dLat = this.toRad(lat2-lat1);
    var dLon = this.toRad(lon2-lon1);
    var lat1 = this.toRad(lat1);
    var lat2 = this.toRad(lat2);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    return d;
  }


  toRad(Value) {
      return Value * Math.PI / 180;
  }

  doRefresh(refresher) {
    this.isLoading=true;
    this.doctorService.getStores(this.categ.id).subscribe((data: any)=> {
      this.isLoading=false;
      this.stores=data.data;
      refresher.complete();
    });
  }

  verStore(store:any) {
    this.searchActive = false;
    this.onClear(false);
    this.searchStores = [];
    this.searchProducts = [];
    this.searchServices = [];
    this.search='';
    this.isSearching = false;
    this.navCtrl.push(Store, { store: store });
  }
  showMap(selStore:any) {
    let options: LaunchNavigatorOptions = {
      destinationName: selStore.name,
      start: [parseFloat(selStore.lat), parseFloat(selStore.lng)]
    };

    this.launchNavigator.navigate([parseFloat(selStore.lat), parseFloat(selStore.lng)], options);

  }

  onSearch(ev: any) {
    const val = ev.target.value;
    if (val && val.length > 2) {
      this.isSearching = true;
      this.isSearchingLoad = true;
      this.searchAction = this.doctorService.buscar(val,this.categ.id);
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


}


