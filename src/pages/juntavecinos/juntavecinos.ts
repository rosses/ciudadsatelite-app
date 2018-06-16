import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { NewsService } from '../../services/news.service';

import { environment } from "../../environments/environment"

@Component({
  selector: 'page-juntavecinos',
  templateUrl: 'juntavecinos.html'
})
export class JuntaVecinosPage {
  sections: any = [];
  headers: any = [];
  active: number = 0;
  section: string = '';
  image: string = '';
  title: string = '';
  public staticUrl: string;
  public isLoading: boolean = true;
  public openTab: string = 'news';
  public load: any;

  constructor(
    public navCtrl: NavController,
    private newsService: NewsService,
    private loadingCtrl: LoadingController
  ) {
    
    this.title = 'JUNTA DE VECINOS';
    this.load = this.loadingCtrl.create();
    this.load.present();

    this.newsService.getSections(0).subscribe(
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

  changeActive(o:any) {
    this.active = o.id;
    this.section = o.name;
    this.image = o.icon;
    this.title = o.name;
  }

  changeBack() {
    this.active = 0;
    this.section = '';
    this.image = '';
    this.title = 'JUNTA DE VECINOS';
  }

}


