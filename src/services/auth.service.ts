import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Device } from '@ionic-native/device';

import { environment } from '../environments/environment';

@Injectable()
export class AuthService  {

  @Output() loginOk = new EventEmitter<any>();
  public push: string = '';

  constructor(public http: HttpClient, private storage: Storage, private device: Device) {}

  /** login */
  public login(params: { email: string, name: string }) {
    let req = this.http.post(environment.apiUrl+'users/login', params);
    /*
    req.subscribe(data => {
      this.loginOk.emit(data);
    });*/
    return req;
  }

  /** signup */
  public register(params: any) {
    let req = this.http.post(environment.apiUrl+'users/register', params);
    return req;
  }

  public evaluate(params: any) {
    let req = this.http.post(environment.apiUrl+'users/evaluate', params);
    return req;
  }

  public setToken(token) {
    this.storage.set('token', token);
  }

  public getStates() {
    let req = this.http.get(environment.apiUrl+'states');
    return req;
  }

  public getCities(id: any) {
    let req = this.http.get(environment.apiUrl+'cities/'+id);
    return req;
  }

  /** verification sms */
  public verifyPhone(params: { email: string, code:string }) {
    let req = this.http.post(environment.apiUrl+'users/verification', params);
    return req;
  }

  public requestPassword(email: string) {
    return this.http.post(environment.apiUrl+'resetPassword', { email: email });
  }

  setPush(token) {
    this.push = token;
  }

  sendPushToServer(id:number) {
    console.log('send push user.service', this.push);
    this.http.post(environment.apiUrl+'users/device', {
      id: id,
      token: this.push,
      os: this.device.platform,
      osversion: this.device.version,
      appversion: environment.version
    }).subscribe((ok) => {
      console.log('push ok', ok);
    }, (err) => {
      console.log('push err', err);
    });
  }

  getVersionInfo() {
    return this.http.post(environment.apiUrl+'version', {
      appversion: environment.version
    });
  }
  /** logout */
  logout() {}
}
