import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { GoogleMapsAPIWrapper  } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClient } from '@angular/common/http';

import { Clinic } from '../../pages/clinic/clinic';
import { DoctorService } from '../../services/doctor.service';

declare var google;
@Component({
  selector: 'page-doctor',
  templateUrl: 'doctor.html',
})
export class Doctor {
  public lat: number = -12.1215155;
  public lng: number = -77.0376026;
  public styles: any = [ { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [ { "color": "#6195a0" } ] }, { "featureType": "landscape", "elementType": "all", "stylers": [ { "color": "#f2f2f2" } ] }, { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [ { "color": "#e7e5e3" } ] }, { "featureType": "poi", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [ { "color": "#e6f3d6" }, { "visibility": "on" } ] }, { "featureType": "road", "elementType": "all", "stylers": [ { "saturation": "-100" }, { "lightness": 45 }, { "visibility": "simplified" } ] }, { "featureType": "road.highway", "elementType": "all", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [ { "color": "#e3d6c7" }, { "visibility": "simplified" } ] }, { "featureType": "road.highway", "elementType": "labels.text", "stylers": [ { "color": "#4e4e4e" } ] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [ { "color": "#f4f4f4" } ] }, { "featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [ { "color": "#787878" } ] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "featureType": "transit", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "water", "elementType": "all", "stylers": [ { "color": "#eaf6f8" }, { "visibility": "on" } ] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [ { "color": "#eaf6f8" } ] } ];

  public list: any = [];
  public buscando: any = [];
  public buscar: string = '';
  public map: any;
  public secureSearch: string = '';
  public activo: any = null;
  public verDetalle: boolean = false;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	private doctorService: DoctorService,
  	private geolocation: Geolocation,
  	public gMaps: GoogleMapsAPIWrapper,
  	private toastCtrl: ToastController,
    public http: HttpClient
  ) {

	this.lat = -12.0732813;
  this.lng = -77.0205312;

	this.doctorService.getAll().subscribe((data: any)=> {
    this.list=data.data;
    console.log(JSON.stringify(data));
    console.log(JSON.stringify(data.data));
    console.log(this.list.length);

    for(var i = 0;i<this.list.length;i++) {
      this.list[i].lat = parseFloat(this.list[i].lat);
      this.list[i].lng = parseFloat(this.list[i].lng);
      this.list[i].icon = "assets/img/marker.png";
    }
  });

  }

  clearBuscar() {
    this.buscando = [];
    this.lat = -12.0732813;
    this.lng = -77.0205312;
    this.buscar = '';
  }

  gotome() {
    this.geolocation.getCurrentPosition().then((resp) => {
     this.lat=resp.coords.latitude;
     this.lng=resp.coords.longitude;

     //const position = new google.maps.LatLng(this.lat, this.lng);
     //this.map.panTo(position);

    }).catch((error) => {
      let toast = this.toastCtrl.create({
        message: 'No podemos activar tu GPS',
        duration: 1500,
        position: 'bottom',
        showCloseButton: true,
        closeButtonText: 'OK'
      });
      toast.present();

    });
  }
  search(event){
    console.log(event.target.value);
  }
  mapclick(obj) {
    this.activo = obj;
    this.verDetalle = true;
  }

  gotoPlace(o) {
    this.buscando = [];
    this.buscar = o.description;
    console.log(o);
    this.http.get("http://www.enlanube.cl/apis/mipata.php?site="+o.reference).subscribe(
      (data: any) => {
        this.lat = data.result.geometry.location.lat;
        this.lng = data.result.geometry.location.lng;
      }
    );
  }
  close() {
    this.verDetalle = false;
  }
  moveTo(buscar: string) {
    this.secureSearch = buscar; // not used
    if (buscar.length > 2) {
      this.http.get("http://www.enlanube.cl/apis/mipata.php?buscar="+buscar).subscribe(
        (data: any) => {
          if (data.predictions) {
            this.buscando = data.predictions;
          }
        }
      );
    }
    else {
      this.buscando = [];
    }
    // console.log('MOVETO:' + buscar);
  	// TODO: como no se conoce reply de API, se debe iterar los nombres, y mover el centro del mapa a esa coordenada.
  	// mover con:
  	

  	/*setTimeout(() => {

  		if (this.secureSearch == this.buscar) {
  			this.secureSearch = '';

			let toast = this.toastCtrl.create({
				message: 'No hay resultados para '+buscar,
				duration: 1500,
				position: 'bottom',
				showCloseButton: true,
				closeButtonText: 'OK'
			});

			toast.onDidDismiss(() => {

			});

			toast.present();
  		}

  	},1500);*/
  }

  public vermas(obj) {
    this.navCtrl.push(Clinic, {
      clinic: obj
    });
  }

  public loadAPIWrapper(map) {
    this.map = map;
  }


}
