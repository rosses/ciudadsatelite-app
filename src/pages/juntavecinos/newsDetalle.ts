import {Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { News } from '../../models/news.model';

import { environment } from "../../environments/environment"
import {SocialSharing} from "@ionic-native/social-sharing";
import {NewsService} from "../../services/news.service";

@Component({
  selector: 'page-newsDetalle',
  templateUrl: 'newsDetalle.html'
})
export class NewsDetalle implements OnInit{


  public staticUrl: string;
  public image = '';
  public link = '';
  news: News = null;
  private isSharing: boolean;


  constructor(public navCtrl: NavController,
              private navParams: NavParams,
              private socialSharing: SocialSharing,
              private newsService: NewsService)
  {
    this.staticUrl = environment.staticUrl;
    this.news = this.navParams.get("news");
  }

  ngOnInit(){
    /*
    this.newsService.getFeatured(this.news.featured_media).subscribe(
      (data: any) => {
        this.image =  data.guid.rendered;
      },
      error => {
        console.log(error);
      }
    )
    */
  }


  share(){
    /*
    if(this.isSharing) return false;
    this.isSharing = true;
    this.socialSharing.share(this.news.title.rendered,this.news.description, this.image, this.news.link).then(() => {
      this.isSharing = false;
    }).catch(() => {
      this.isSharing = false;
    });
    */
  }


}
