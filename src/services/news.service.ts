import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platform } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Storage } from '@ionic/storage';

import { BaseService } from "./base.service"

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';
import {environment} from "../environments/environment";

@Injectable()
export class NewsService extends BaseService{

  constructor(public http: HttpClient, public storage: Storage, public platform: Platform, public nativeStorage: NativeStorage) {
    super(http, storage, platform, nativeStorage);
  }

  geList(page, perPage) {
    let apiNewsUrl = environment.apiUrl + 'jjvv?page='+page+'&per_page='+perPage;
    return  this.http.get(apiNewsUrl, {
      params: null
    });
  }

  getSections(id:number) {
    return this.get('sections/'+id);
  }

  getPhones() {
    return this.get('phones'); 
  }

}
