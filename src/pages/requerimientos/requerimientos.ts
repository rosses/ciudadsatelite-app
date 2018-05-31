import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { News } from '../../models/news.model';
import { DoctorService } from '../../services/doctor.service';
import { NuevoReq1 } from '../../pages/requerimientos/nuevoreq1';

import { environment } from "../../environments/environment"

@Component({
  selector: 'page-requerimientos',
  templateUrl: 'requerimientos.html'
})
export class RequerimientosPage {
  requirements: any = [];

  private page = 1;

  constructor(
    public navCtrl: NavController,
    private doctorService: DoctorService)
  {

    this.doctorService.requirements(this.page).subscribe(
      (requirements:any) =>{
        this.page++;
        this.requirements = requirements
      },
      error => {
        console.log(error);
      }
    )
  }
  
  doRefresh(refresher){
    this.page = 1;
    /*this.newsService.requirements(this.page).subscribe(
      (news:any) =>{
        this.pageNews++;
        this.news = news;
        console.log(news);
        refresher.complete();
      },
      error => {
        console.log(error);
        refresher.complete();
      }
    )*/
  }

  doInfinite(infiniteScroll) {
      console.log('doInfinite...');
      /*this.newsService.geList(this.pageNews, this.perPegeNews).subscribe(
        (news: any) =>{
          this.pageNews++;
          news.forEach( (value) => {
            this.news.push(value);
          });
          infiniteScroll.complete();
        },
        error => {
          console.log(error);
          infiniteScroll.complete();
        }
      )*/
  }

  addRequerimiento() {
    this.navCtrl.push(NuevoReq1);
  }
}


