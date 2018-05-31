import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { UserService } from '../../../services/user.service';
import { PetService } from '../../../services/pet.service';
import { Pata } from '../../../pata';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'page-pet-media-options',
  templateUrl: 'pet-media-options.html',
})
export class PetMediaOptionsPage {

  public imagenIndex: number = 0;
  loading: any = null;
  token: string = '';
  base64Image: string;
  petId: any = null;
  additionalImages: string = null;
  canDelete: boolean = false;
  canMark: boolean = false;

  constructor(public navCtrl: NavController,
  		      public navParams: NavParams,
  		      public viewCtrl: ViewController,
  		      public service: Pata,
            public userService: UserService,
  		      public petService: PetService,
  		      public loadingCtrl: LoadingController,
  		      private camera: Camera,
  		      public storage: Storage
  		) {
  	this.imagenIndex = this.navParams.get("imagenIndex");
  	this.additionalImages = this.navParams.get("additionalImages");
  	this.petId = this.navParams.get("id");

  	if (this.additionalImages != "") {
  		this.canMark = true;
  		this.canDelete = true;
  	}

    this.storage.get("token").then((val) => {
      this.token = val;
    });

  }

  ionViewDidLoad() {

  }

  close() {
    this.viewCtrl.dismiss({reload:false});
  }

  public takePicture() {
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

  private openGallery (): void {

    let cameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 70,
      targetWidth: 620,
      targetHeight: 620,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    }
    this.camera.getPicture(cameraOptions)
      .then(file_uri => this.processTake(file_uri),
      err => console.log(err));

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

    this.loading = this.loadingCtrl.create({content:'subiendo foto...'});
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
    xhr.open("post", environment.apiUrl+"pets/avatar/"+self0.petId);
    xhr.setRequestHeader("Authorization", "Bearer "+self0.token);

    xhr.onreadystatechange = function () {

      if(xhr.readyState === 4 && xhr.status === 200) {
        var uri = xhr.responseText;
        self0.loading.dismiss();

        if (uri.indexOf('error') > -1) {
          self0.service.logError({}, 'Error al procesar la solicitud. Inténtelo más tarde.');
        }
        else {
          self0.service.showOk("Foto agregada con éxito");
          self0.viewCtrl.dismiss({reload:true});
        }
      }
    };

    xhr.send(formData);


    /*
    this.b64toBlob(this.base64Image,
    function(blob) {
        var url = window.URL.createObjectURL(blob);
        // do something with url
        var formData = new FormData();
        formData.append('avatar', blob, 'avatar.jpg');

        var xhr = new XMLHttpRequest();
        xhr.open("post", environment.apiUrl+"pets/avatar/"+self0.petId);
        xhr.setRequestHeader("Authorization", "Bearer "+self0.token);

        xhr.onreadystatechange = function () {

          if(xhr.readyState === 4 && xhr.status === 200) {
            var uri = xhr.responseText;
            self0.loading.dismiss();

            if (uri.indexOf('error') > -1) {
              self0.service.logError({}, 'Error al procesar la solicitud. Inténtelo más tarde.');
            }
            else {
              self0.service.showOk("Foto agregada con éxito");
              self0.viewCtrl.dismiss({reload:true});
            }
          }



        };

        xhr.send(formData);

    }, function(error) {
        console.log('error',error);
    });

    */
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


  markMain(index:number) {
    this.loading = this.loadingCtrl.create({content:'guardando...'});
    this.loading.present();

    let ps = this.petService.mainImage(this.petId, index);
    ps.subscribe((ok) => {
      this.loading.dismiss();
      this.service.showOk("Foto marcada como principal");
      this.viewCtrl.dismiss({reload:false});
    }, (error) => {
      this.loading.dismiss();
      this.service.logError({}, 'Error al procesar la solicitud. Inténtelo más tarde.');
      this.viewCtrl.dismiss({reload:false});
    });

  }

  delete(index:number) {
    this.loading = this.loadingCtrl.create({content:'guardando...'});
    this.loading.present();

    let ps = this.petService.deleteImage(this.petId, index);
    ps.subscribe((ok) => {
      this.loading.dismiss();
      this.service.showOk("Foto eliminada");
      this.viewCtrl.dismiss({reload:true});
    }, (error) => {
      this.loading.dismiss();
      this.service.logError({}, 'Error al procesar la solicitud. Inténtelo más tarde.');
      this.viewCtrl.dismiss({reload:false});
    });

  }

}
