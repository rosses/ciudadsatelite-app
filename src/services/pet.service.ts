import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

import { BaseService } from "./base.service"

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class PetService extends BaseService {

  constructor(public http: HttpClient, public storage: Storage) {
    super(http, storage);
  }

  getLast() {
    return this.get('pets/last/');
  }

  getId(id: number) {
    return this.get('pets/'+id+'/');
  }

  update(id: number, data: any) {
    return this.post('pets/'+id, {
      "_method": "PUT",
      name: data.name,
      type: data.type,
      breed: data.breed,
      size: data.size,
      sex: data.sex,
      color: data.color,
      birthday: data.birthday,
      identifier: data.code,
      code: data.code,
      description: ''
    });
  }
  uniqueQR(code:string) {
    return this.post('pets/checkqr', {
      code: code
    });
  }
  getMascotByQR(code:string) {
    return this.post('missing-pet/found', {
      code: code
    });
  }

  /** Get My Missing Pet  */
  getMyMissingPet(idPet:string){
    return this.get('pets/missing/'+idPet, {});
  }

  /** El dueño marca como mascota encontrada */
  petFound(code:string){
    return this.post('missing-pet/found', {
      code: code
    });
  }

  /** Notificar al usuario de la mascota perdida */
  notifyFoundPetFromQr(body:any){
    return this.post('missing-pet/seen', body);
    /*
    * {
      "code":body.code,
      "lat_seen":body.lat_seen,
      "lng_seen":body.lng_seen,
      "user_id":body.user_id
    }*/
  }
  /** saber si el QR pertenece a una mascota perdida */
  getLostPetByQR(code:string){
    return this.get('missing-pet/code/'+code);
  }

  setCode(id:number,code:string) {
    return this.post('pets/code', {
      id: id,
      code: code
    });
  }
  add(id: number, data: any) {
    return this.post('pets/', {
      user_id: id,
      name: data.name,
      type: data.type,
      breed: data.breed,
      size: data.size,
      sex: data.sex,
      color: data.color,
      birthday: data.birthday,
      identifier: data.code,
      code: data.code,
      description: ''
    });
  }

  setState(id:number, state: string, obj: any) {
    if (state == 'searching') {
      return this.post('pets/available/', {
        id: id,
        available: 1
      });
    }
    if (state == 'nosearching') {
      return this.post('pets/available/', {
        id: id,
        available: 0
      });
    }
    else if (state == 'remove') {
      return this.delete('pets/'+id);
    }
    else if (state == 'lost') {
      return this.post('missing-pet/', {
        pet_id: id,
        lat: obj.lat,
        lng: obj.lng
      });
    }
    else if (state == 'found') {
      return this.post('missing-pet/found/', {
        id: id
      });
    }
  }

  /** Notificar al dueño */
  notifyOwner(id:number, myPetId:number){
    return this.post('applications/'+id, {
      requester_pet_id: myPetId
    });
  }

  accept(id:number) {
    return this.get('applications/accept/'+id);
  }

  reject(id:number) {
    return this.get('applications/reject/'+id);
  }

  searchAvailable(data: any) {
    return this.post('pets/search/', data);
  }

  searchLost(data: any) {
    return this.post('missing-pet/search/', data);
  }

  getMyLove(data: any) {
    return this.post('pets/search/', data);
  }


  getMyLoveRecived(id) {
    return this.get('applications/received/'+id);
  }

  mainImage(id: number, index: number) {
    return this.post('pets/image/main/', {
      pet_id: id,
      index: index
    });
  }

  deleteImage(id: number, index: number) {
    return this.post('pets/image/delete/', {
      pet_id: id,
      index: index
    });
  }
  especie() {
    return this.get('species');
  }
  raza(raza: any) {
    return this.get('species/'+raza+'/breeds');
  }
  region() {
    return this.get('region');
  }
  distrito(region: any) {
    return this.get('region/'+region+'/district');
  }
  color() {
    return this.get('color');
  }
  size() {
    return this.get('size');
  }
  sex() {
    return this.get('petsex');
  }

}
