import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platform } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Storage } from '@ionic/storage';

import { BaseService } from "./base.service"

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class DoctorService extends BaseService{

  constructor(public http: HttpClient, public storage: Storage, public platform: Platform, public nativeStorage: NativeStorage) {
    super(http, storage, platform, nativeStorage);
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
    return this.get('faqs/'+id);
  }
  getContent(id: number) {
    return this.get('content/'+id);
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

  addQty(id:number) {
    this.post('store/see/'+id).subscribe((data: any)=> { console.log('addQty', data); });
  }

  addPd(id:number) {
    this.post('store/pd/'+id).subscribe((data: any)=> { console.log('addPd', data); });
  }

  addSs(id:number) {
    this.post('store/ss/'+id).subscribe((data: any)=> { console.log('addSs', data); });
  }

  // store admin
  getProducts(id:number) {
    return this.get('store/products/'+id)
  }
  setProduct(product) {
    return this.post('store/products/save', product);
  }
  delProduct(id:number) {
    return this.post('store/products/delete', { id: id });
  }
  getServices(id:number) {
    return this.get('store/services/'+id)
  }
  setService(product) {
    return this.post('store/services/save', product);
  }
  delService(id:number) {
    return this.post('store/services/delete', { id: id });
  }
  addComment(obj: any) {
    return this.post('store/comments/add', {
      store: obj.store,
      comment: obj.comment
    }); 
  }

}
