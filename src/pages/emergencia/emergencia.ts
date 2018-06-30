import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NavController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NewsService } from '../../services/news.service';
import { DoctorService } from '../../services/doctor.service';
import { environment } from "../../environments/environment"
import { Pata } from '../../pata';
import { CallNumber } from '@ionic-native/call-number';



@Component({
  selector: 'page-emergencia',
  templateUrl: 'emergencia.html'
})
export class Emergencia {
  sections: any = [];
  headers: any = [];
  active: number = 0;
  public staticUrl: string;
  public isLoading: boolean = true;
  public openTab: string = 'news';
  public load: any;
  public actionLoaded: boolean = false;

  constructor(
    public navCtrl: NavController,
    private newsService: NewsService,
    private loadingCtrl: LoadingController,
    private doctorService: DoctorService,
    public storage: Storage,
    public service: Pata,
    private sanitizer: DomSanitizer,
    private callNumber: CallNumber
  ) {
    
    this.load = this.loadingCtrl.create();
    this.load.present();

    this.newsService.getSections(1).subscribe(
      (data:any) =>{
        this.isLoading = false;
        this.sections = data.data;
        this.headers = data.headers;
        this.load.dismiss();
      },
      error => {
        console.log(error);
      }
    );

    
  }


  callToNumber(s:any) {
    this.callNumber.callNumber(s.content, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }


}


