import { Component, Renderer2, OnDestroy } from '@angular/core';
import { NavController, Loading, LoadingController, ViewController, NavParams } from 'ionic-angular';
import { environment } from "../../environments/environment"
import { ImageViewerController } from 'ionic-img-viewer';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'page-modalGal',
  templateUrl: 'gal.html'
})
export class ModalGal implements OnDestroy {
  
  public arr: any = [];
  loading: Loading;

  constructor(
    public viewCtrl: ViewController,
    public params: NavParams,
    public loadingCtrl: LoadingController,
    private renderer: Renderer2,
    private domSanitizer: DomSanitizer
  ) {
    this.arr = params.get('arr');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }


  ngOnDestroy(){
    
  }


}

