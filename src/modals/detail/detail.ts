import { Component, Renderer2, OnDestroy } from '@angular/core';
import { NavController, Loading, LoadingController, ViewController, NavParams, ModalController } from 'ionic-angular';
import { environment } from "../../environments/environment"
import { ImageViewerController } from 'ionic-img-viewer';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { ModalGal } from '../../modals/gal/gal';

@Component({
  selector: 'page-modalDetail',
  templateUrl: 'detail.html'
})
export class ModalDetail implements OnDestroy {
  
  public detail: any;
  loading: Loading;

  constructor(
    public viewCtrl: ViewController,
    public params: NavParams,
    public loadingCtrl: LoadingController,
    private renderer: Renderer2,
    private domSanitizer: DomSanitizer,
    private youtube: YoutubeVideoPlayer,
    public modalCtrl: ModalController
  ) {
    this.detail = params.get('detail');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  ionGal() {
    if (this.detail.avatar) {

      let arr = [];
      arr.push(this.detail.avatar);
      for (let x=0;x<this.detail.extras.length;x++) {
        arr.push(this.detail.extras[x].file);
      }
      
      let galModal = this.modalCtrl.create(ModalGal, { arr: arr });
      galModal.present();
      galModal.onDidDismiss(data => {
       
      });

    }

  }

  secure(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
  secureYoutube(videoId: string) {
    return 'https://www.youtube.com/embed/'+videoId+'?playsinline=1&rel=0&modestbranding=1&showinfo=1&controls=0&autoplay=1&enablejsapi=1';
  }

  playVideo() {
    this.youtube.openVideo(this.detail.video);
  }
  ngOnDestroy(){
    
  }


}

