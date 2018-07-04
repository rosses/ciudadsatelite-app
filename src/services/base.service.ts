import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Platform } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Storage } from '@ionic/storage';
import { environment } from '../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';

export class BaseService {

  constructor(public http: HttpClient, public storage: Storage, public platform: Platform, public nativeStorage: NativeStorage) {}

  /** get token */
  private getAuthToken() {
    if (this.platform.is('cordova')) {
      return Observable.fromPromise(this.nativeStorage.getItem('token'));
    }
    else {
      return Observable.fromPromise(this.storage.get('token'));
    }
  }

  /** GET */
  public get(url:string, body?:any) {
    return this.getAuthToken().flatMap( token => {
      return  this.http.get(environment.apiUrl+url, {
        params: body,
        headers: new HttpHeaders().append('Authorization', "Bearer "+token)
      });
    })
  }

  /** POST */
  public post(url:string, body?:any) {
    return this.getAuthToken().flatMap( token => {
      return  this.http.post(environment.apiUrl+url, body,{
        headers: new HttpHeaders().append('Authorization', "Bearer "+token)
      });
    })
  }

  /** PUT */
  public put(url:string, body?:any) {
    return this.getAuthToken().flatMap( token => {
      return  this.http.put(environment.apiUrl+url, body,{
        headers: new HttpHeaders().append('Authorization', "Bearer "+token)
      });
    })
  }

  /** DELETE */
  public delete(url:string, body?:any) {
    return this.getAuthToken().flatMap( token => {
      return  this.http.delete(environment.apiUrl+url, {
        headers: new HttpHeaders().append('Authorization', "Bearer "+token)
      });
    })
  }

}
