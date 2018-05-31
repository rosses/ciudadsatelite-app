import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Pet } from '../../models/pet.model';
import { PetPage } from '../../pages/pet/pet';

import { environment } from "../../environments/environment"

/**
 * Generated class for the PetPreviewComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'pet-preview',
  templateUrl: 'pet-preview.html'
})
export class PetPreviewComponent {

  public staticUrl:string;
  @Input() pet: Pet;
  @Input() isDetail: boolean;
  @Input() isEdit: boolean = false;
  @Input() isMe: boolean = false;
  @Input() add: boolean = false;
  @Input() preventDetail: boolean = false;

  constructor(public navCtrl: NavController) {
    this.staticUrl = environment.staticUrl;
  }

  goToDetail() {
    //console.log('gotodetail isEdit: ',this.isEdit);
    if (this.preventDetail == false) {
      this.navCtrl.push(PetPage, {
        pet: this.pet,
        isDetail: this.isDetail,
        isEdit: this.isEdit,
        isMe: this.isMe
      });
    } else {
    }
  }

  public encodeURL(str){
    return encodeURI(str);
  }

}
