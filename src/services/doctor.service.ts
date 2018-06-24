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

  getMaps() {
    return this.get('maps');
  }

  getAll() {
    return this.get('categs');
  }

  getStores(id:number) {
    return this.get('categs/'+id);
  }

  getStore(id:number) {
    return this.get('store/'+id);
  }

  buscar(buscar:string, categ: number) {
    return this.get('search/'+categ+'/'+buscar);
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


  // JJVV
  getWall() {
    return this.get('jjvv');
  }
  getFaqs(id: number) {
    return this.get('faqs/'+id)
  }
  getContent(id: number) {
    return this.get('content/'+id)
  }
  sendContacto(obj:any) {
    return this.post('jjvv/contact', {
      name: obj.name,
      email: obj.email,
      message: obj.message
    });
  }

  sendDenuncia(obj:any) {
    return this.post('jjvv/denuncia', {
      name: obj.name,
      email: obj.email,
      message: obj.message
    });
  }

}
