import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

import { BaseService } from "./base.service"

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class DoctorService extends BaseService{

  constructor(public http: HttpClient, public storage: Storage) {
    super(http, storage);
  }

  getAll() {
    return this.get('clinics/');
  }
  ads() {
    return this.get('ads');
  }

  search(params: any) {
    return this.post('deals', params);
  }

  requirements(page: number) {
    return this.get('requirements?page='+page);
  }

  address() {
    return this.get('address');
  }

  masterdata() {
    return this.get('masterdata');
  }

}