import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Pet } from '../../models/pet.model';
import { PetService } from '../../services/pet.service';
import { News } from '../../models/news.model';
import { NewsService } from '../../services/news.service';

import { environment } from "../../environments/environment"

@Component({
  selector: 'page-camiones',
  templateUrl: 'camiones.html'
})
export class CamionesPage {
  pets: any = [];
  news: any = [];

  public staticUrl: string;
  private pageNews = 1;
  private perPegeNews = 2;


  constructor(
    public navCtrl: NavController,
    private petService: PetService,
    private newsService: NewsService)
  {
    this.staticUrl = environment.staticUrl;
    this.petService.getLast().subscribe((pets) => this.pets = pets);
    this.newsService.geList(this.pageNews, this.perPegeNews).subscribe(
      (news:any) =>{
        this.pageNews++;
        this.news = news
      },
      error => {
        console.log(error);
      }
    )
  }
  
  doRefresh(refresher){
    this.pageNews = 1;
    this.petService.getLast().subscribe((pets) => this.pets = pets);
    this.newsService.geList(this.pageNews, this.perPegeNews).subscribe(
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
    )
  }

  doInfinite(infiniteScroll) {
      console.log('doInfinite...');
      this.newsService.geList(this.pageNews, this.perPegeNews).subscribe(
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
      )
  }
}


