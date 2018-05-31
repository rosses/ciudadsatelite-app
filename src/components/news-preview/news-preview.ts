import {Component, Input, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';

import { News } from '../../models/news.model';
import { NewsDetalle } from '../../pages/juntavecinos/newsDetalle';

import { environment } from "../../environments/environment"
import {NewsService} from "../../services/news.service";

/**
 * Generated class for the NewsPreviewComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'news-preview',
  templateUrl: 'news-preview.html'
})

export class NewsPreviewComponent implements OnInit {

  public staticUrl: string;
  @Input() news: News;

  public image = '';

  constructor(public navCtrl: NavController,
              private newsService: NewsService) {
    this.staticUrl = environment.staticUrl;
  }

  
  ngOnInit(){
    
    /*console.log('A::' + this.news.featured_media);
    this.newsService.getFeatured(this.news.featured_media).subscribe(
      (data: any) => {
        this.image =  data.guid.rendered;
      },
      error => {
        console.log(error);
      }
    )*/
  }
  

  detalleNews(obj: any) {
    this.navCtrl.push(NewsDetalle, {
      news: this.news
    });
  }

}
