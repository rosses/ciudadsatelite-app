import { Component, Renderer2, OnDestroy } from '@angular/core';
import { NavController, Loading, LoadingController, ViewController, NavParams } from 'ionic-angular';
import { environment } from "../../environments/environment"
import { ImageViewerController } from 'ionic-img-viewer';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

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
    private youtube: YoutubeVideoPlayer
  ) {
    this.detail = params.get('detail');
  }

  closeModal() {
    this.viewCtrl.dismiss();
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

