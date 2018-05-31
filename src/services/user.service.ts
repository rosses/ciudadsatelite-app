import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Device } from '@ionic-native/device';

import { BaseService } from "./base.service"

import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';


import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class UserService extends BaseService{

  public changeAvatar: EventEmitter<any> = new EventEmitter();
  public push: string = '';

  constructor(public http: HttpClient, public storage: Storage, private device: Device) {
    super(http, storage);
  }

  setPush(token) {
    this.push = token;
  }

  sendPushToServer() {
    this.getProfile().subscribe((result:any)=>{
      this.post('users/device', {
        id: result.id,
        token: this.push,
        os: this.device.platform,
        osversion: this.device.version,
        appversion: environment.version
      }).subscribe((ok) => {
        console.log('push ok', ok);
      }, (err) => {
        console.log('push err', err);
      });
    });
  }

  getProfile() {
    return Observable.fromPromise(this.storage.get('MP-Profile'));
  }

  getId(id: number) {
    return this.get('users/profile/'+id);
  }

  update(obj: any) {
  	return this.post('users/profile/update', obj);
  }

  region() {
    return this.get('region');
  }
  distrito(region: any) {
    return this.get('region/'+region+'/district');
  }

  changePassword(currentPass, newPass){
    return this.getProfile().flatMap( (result: any) => {
      return this.post('users/password', {new:newPass, old:currentPass, user_id:result.id});
    });
  }
}
