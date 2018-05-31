import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

import { BaseService } from "./base.service"

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';
import {environment} from "../environments/environment";

@Injectable()
export class NewsService extends BaseService{

  constructor(public http: HttpClient, public storage: Storage) {
    super(http, storage);
  }

  geList(page, perPage) {
    let apiNewsUrl = environment.apiUrl + 'news?page='+page+'&per_page='+perPage;
    return  this.http.get(apiNewsUrl, {
      params: null
    });
  }

}
