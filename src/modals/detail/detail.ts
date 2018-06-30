import { Component, Renderer2, OnDestroy } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { environment } from "../../environments/environment"
import { ImageViewerController } from 'ionic-img-viewer';

@Component({
  selector: 'page-modalDetail',
  templateUrl: 'detail.html'
})
export class ModalDetail implements OnDestroy {
  
  public detail: any;
  constructor(
    public viewCtrl: ViewController,
    public params: NavParams,
    private renderer: Renderer2
  ) {
    this.detail = params.get('detail');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  ngOnDestroy(){
    
  }


}

