import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Pet } from '../../models/pet.model';
import { PetService } from '../../services/pet.service';
import { News } from '../../models/news.model';
import { NewsService } from '../../services/news.service';

import { environment } from "../../environments/environment"

@Component({
  selector: 'page-juntavecinos',
  templateUrl: 'juntavecinos.html'
})
export class JuntaVecinosPage {
  pets: any = [];
  news: any = [];

  public staticUrl: string;
  private pageNews = 1;
  private perPegeNews = 3;
  public isLoading: boolean = true;
  public openTab: string = 'news';

  constructor(
    public navCtrl: NavController,
    private petService: PetService,
    private newsService: NewsService)
  {
    
    this.newsService.geList(this.pageNews, this.perPegeNews).subscribe(
      (news:any) =>{
        this.isLoading = false;
        this.pageNews++;
        this.news = news.data
      },
      error => {
        console.log(error);
      }
    );
    
  }
  
  doRefresh(refresher){
    this.pageNews = 1;
    this.isLoading = true;
    this.newsService.geList(this.pageNews, this.perPegeNews).subscribe(
      (news:any) =>{
        this.isLoading = false;
        this.pageNews++;
        this.news = news.data;
        refresher.complete();
      },
      error => {
        console.log(error);
        refresher.complete();
      }
    )
  }

  doInfinite(infiniteScroll) {
      console.log('doInfinite...');
      this.newsService.geList(this.pageNews, this.perPegeNews).subscribe(
        (news: any) =>{
          this.pageNews++;
          news.data.forEach( (value) => {
            this.news.push(value);
          });
          infiniteScroll.complete();
        },
        error => {
          console.log(error);
          infiniteScroll.complete();
        }
      )
  }
}


