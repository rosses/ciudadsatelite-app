import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController, PopoverController, Content } from 'ionic-angular';
import { GoogleMapsAPIWrapper  } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClient } from '@angular/common/http';
import { Badge } from '@ionic-native/badge';

import { Store } from '../../pages/home/store';
import { DoctorService } from '../../services/doctor.service';
import { UserService } from '../../services/user.service';
import { Storage } from '@ionic/storage';
import { Categoria } from '../../pages/home/categoria';
import { JuntaVecinosPage } from '../../pages/juntavecinos/juntavecinos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  @ViewChild(Content) content: Content;

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
  public promociones: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userService: UserService,
    private doctorService: DoctorService,
    private geolocation: Geolocation,
    public gMaps: GoogleMapsAPIWrapper,
    private toastCtrl: ToastController,
    public popoverCtrl: PopoverController,
    public http: HttpClient,
    private storage: Storage,
    private badge: Badge
  ) {

  	this.doctorService.getPromos().subscribe((data:any) => {
  		this.promociones = data.data;
  	});
    setTimeout(() => {
      this.doctorService.getAll().subscribe((data: any)=> {
        this.isLoading=false;
        this.categs=data.data;
      });
    },1000);

    this.userService.getNotificationStatus().subscribe((cdata: any) => {
      console.log('cdata', cdata);
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
      
    });

  }
  procesarPromo(promocion: any) {
  	this.doctorService.addTracking('slider', promocion.id);
  	if (promocion.type == "1") {
  		window.open(promocion.value, '_system');
  	}
  	else if (promocion.type == "2") {
  		let id = promocion.value.substring(1,100);
	    this.doctorService.addQty(id);
	    this.navCtrl.push(Store, { store: { id: id } });
  	}
  	else if (promocion.type == "3") {
  		let id = promocion.value.substring(1,100);
  		if (promocion.value.substring(0,1) == "P") {
  			this.doctorService.addPd(id);
  			this.navCtrl.push(Store, { store: { id: promocion.parent }, preloadType: 'product', preloadElement: id });
  		}
  		if (promocion.value.substring(0,1) == "S") {
  			this.doctorService.addSs(id);
  			this.navCtrl.push(Store, { store: { id: promocion.parent }, preloadType: 'product', preloadElement: id });
  		}
  	}
  }
  goToStore(store: any) {
    this.doctorService.addQty(store.id);
    this.navCtrl.push(Store, { store: store });
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
    this.content.resize();
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
    console.log(categ);
    this.searchActive = false;
    this.onClear(false);
    this.searchStores = [];
    this.searchProducts = [];
    this.searchServices = [];
    this.search='';
    this.isSearching = false;
    this.navCtrl.push(Categoria, { categ: categ });
  }

  goToJJVV() {
    this.navCtrl.setRoot(JuntaVecinosPage);
  }

}


