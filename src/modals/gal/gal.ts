import { Component, Renderer2, OnDestroy, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { NavController, Loading, LoadingController, ViewController, NavParams, Slides } from 'ionic-angular';
import { environment } from "../../environments/environment"
import { ImageViewerController } from 'ionic-img-viewer';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'page-modalGal',
  templateUrl: 'gal.html'
})
export class ModalGal implements OnDestroy {
  
  public arr: any = [];
  public ini: number = 0;
  @ViewChild(Slides) slides2: Slides;
  @ViewChildren(Slides) sliders: QueryList<Slides>;

  constructor(
    public viewCtrl: ViewController,
    public params: NavParams,
    public loadingCtrl: LoadingController,
    private renderer: Renderer2,
    private domSanitizer: DomSanitizer
  ) {
    this.arr = params.get('arr');
    this.ini = params.get('ini');
  }
  ngAfterViewInit() {
    //console.log('afv',this.sliders);
  }
  closeModal() {
    this.viewCtrl.dismiss();
  }


  ngOnDestroy(){
    
  }

  onSwipe(event:any) {
    // left or right swipe...
  }
  onSwipeUp(event:any) {
    this.viewCtrl.dismiss(); 
  }
  onSwipeDown(event:any) {
    this.viewCtrl.dismiss();
  }
}

