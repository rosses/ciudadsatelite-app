import { Component, Renderer2, OnDestroy } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { environment } from "../../environments/environment"

@Component({
  selector: 'page-modalERR',
  templateUrl: 'err.html'
})
export class ModalERR implements OnDestroy {
  public msg: string;
  constructor(
    public viewCtrl: ViewController,
    public params: NavParams,
    private renderer: Renderer2
  ) {
    this.msg = params.get('msg');
    //this.renderer.addClass(document.body.querySelector("ng-component.app-root"), 'blur');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  ngOnDestroy(){
    //this.renderer.removeClass(document.body.querySelector("ng-component.app-root"), 'blur');
  }


}

