import {Component, ViewChild} from '@angular/core';
import { Storage } from '@ionic/storage';
import { FormsModule } from '@angular/forms';
import { NavController, NavParams, PopoverController, LoadingController, ModalController, AlertController } from 'ionic-angular';

import { DoctorService } from '../../services/doctor.service';
import { Pata } from '../../pata';
import { ProfileMedia } from '../popovers/profile-media/profile-media';
import { environment } from "../../environments/environment"
import { Camera, CameraOptions } from '@ionic-native/camera';

import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';
import Quill from 'quill';


@Component({
  selector: 'page-storeproducts',
  templateUrl: 'storeproducts.html',
})
export class StoreProducts {

  loaded: boolean = false;
  products: any = [];
  store: any;
  loading: any;
  editMode: boolean = false;
  edit: any;
  tabs: string = 'info';
  base64Image: string = '';
  activeUpload: string = '';
  editorConfig: any = {
    "editable": true,
    "height": "auto",
    "minHeight": "200",
    "width": "auto",
    "minWidth": "0",
    "toolbar": [
        ["bold", "italic", "underline"]
    ]
  }

  constructor(public navCtrl: NavController,
              public storage: Storage,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              public popoverCtrl: PopoverController,
              private loadingCtrl: LoadingController,
              public service: Pata,
              public doctorService: DoctorService,
              private camera: Camera,
              public modalCtrl: ModalController)
  {

    this.store = this.navParams.get("store");
    this.cargarProductos();

  }

  add() {
    this.edit = {
      aux1: '',
      aux2: '',
      aux3: '',
      avatar: '',
      created_at: '',
      deleted: '0',
      description: '',
      id: '0',
      marketplace_id: this.store.id,
      name: '',
      offer: '0',
      price: '0',
      qty: '',
      tags: '',
      updated_at: '',
      video: ''
    };
    this.editMode = true;
  }

  editar(product: any) {
    this.edit = Object.assign({}, product);;
    this.editMode = true;
  }

  cancel() {
    this.editMode = false;
  }


  cargarProductos() {
    this.loading = this.loadingCtrl.create({
      content: 'cargando productos...'
    });

    this.loading.present();
    this.loaded = false;
    this.doctorService.getProducts(this.store.id).subscribe((data:any)=> {
      this.loaded = true;
      this.products = data.data;
      this.loading.dismiss();
    });
  }
  mainOfferToggle() {
    if (this.edit.offer == '0') {
      this.edit.offer = '1';
    } else {
      this.edit.offer = '0';
    }
  }
  save() {
      let loading = this.loadingCtrl.create({
        content: 'guardando...'
      });

      loading.present();
           
      let updateOperation = this.doctorService.setProduct(this.edit);

      updateOperation.subscribe((ok: any) => {
        loading.dismiss();
        if (ok.res == "OK") {
          this.service.showOk();
          this.editMode = false;
          this.cargarProductos();
        }
        else {
          loading.dismiss();
          this.service.logError(null, "No fue posible guardar, intente nuevamente");
        }
      }, (error) => {
        loading.dismiss();
        this.service.logError(null, "No fue posible guardar, intente nuevamente");
      });  
  }

  delete(product:any) {
    let alert = this.alertCtrl.create({
      title: '¿Confirma eliminación?',
      message: 'Vas a eliminar el producto',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Eliminar',
          handler: () => {

            this.doctorService.delProduct(product.id).subscribe((data:any) => {
              this.service.showOk();
              this.cargarProductos();
            });

          }
        }
      ]
    });
    alert.present();
  }
  public takePicture(element:string) {
    this.activeUpload = element;
    this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000,
        correctOrientation: true
    }).then((imageData) => {
        this.processTake(imageData);
    }, (err) => {      
        console.log(err);
    });
  }

  private openGallery (element:string): void {
    this.activeUpload = element;
    let cameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,      
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: this.camera.EncodingType.JPEG,      
      correctOrientation: true
    }
    this.camera.getPicture(cameraOptions)
      .then(file_uri => {
        this.processTake(file_uri);
      }, 
      err => {
        console.log(err)
      }); 
 
  }
  private dataURItoBlob(dataURI) {
    var byteString;

    if (dataURI.split(',')[0].indexOf('base64') >= 0)
      byteString = atob(dataURI.split(',')[1]);
    else
      byteString = (dataURI.split(',')[1]);

    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], {
      type: mimeString
    });
  }

  public processTake(imageData) {

    this.base64Image = "data:image/jpeg;base64," + imageData;
    this.loading = this.loadingCtrl.create({content:'subiendo...'});
    this.loading.present();   

    var self0 = this;
    var blob = this.dataURItoBlob(this.base64Image);

    var objURL = window.URL.createObjectURL(blob);
    var image = new Image();
    image.src = objURL;
    window.URL.revokeObjectURL(objURL);

    var url = window.URL.createObjectURL(blob);

    var formData = new FormData();
    formData.append('avatar', blob, 'avatar.jpg');
    
    var xhr = new XMLHttpRequest();
    xhr.open("post", environment.apiUrl+"uploadService");
    xhr.setRequestHeader("Authorization", "Bearer "+this.storage.get("token"));

    xhr.onreadystatechange = function () {

      if(xhr.readyState === 4 && xhr.status === 200) {
        let ari = xhr.responseText;
        let uri = JSON.parse(ari);

        self0.loading.dismiss();

        if (uri.res == "ERR") {
          self0.service.logError({}, 'Error al procesar la solicitud. Inténtelo más tarde.');
        }
        else {
          self0.edit
          let alert = self0.alertCtrl.create({
          title: 'Listo!',
          subTitle: 'Foto precargada con éxito',
          buttons: ['OK']
          });
          alert.present();
          self0.changeImage(uri.url);
        }
      } 
    };
    xhr.send(formData);
  }

  changeImage(url:string) {
    if (this.activeUpload == 'avatar') {
       this.edit.avatar = url;
    }
    else if (this.activeUpload == 'aux1') {
       this.edit.aux1 = url;
    }
    else if (this.activeUpload == 'aux2') {
       this.edit.aux2 = url;
    }
    else if (this.activeUpload == 'aux3') {
       this.edit.aux3 = url;
    }
  }

  b64toBlob(b64, onsuccess, onerror) {
      var img = new Image();
      img.onerror = onerror;
      img.onload = function onload() {
          var canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          var ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          canvas.toBlob(onsuccess);
      };
      img.src = b64;
  }  

}
