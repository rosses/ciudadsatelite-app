import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { UserService } from '../../../services/user.service';
import { Pata } from '../../../pata';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'page-ads',
  templateUrl: 'ads.html',
})
export class AdsMedia {

  loading: any = null;
  token: string = '';
  base64Image: string;
  userId: any = null;
  image: string = '';
  title: string = '';
  text: string = '';
  link: string = '';

  constructor(public navCtrl: NavController, 
  		      public navParams: NavParams, 
  		      public viewCtrl: ViewController, 
  		      public service: Pata, 
  		      public userService: UserService, 
  		      public loadingCtrl: LoadingController,
  		      private camera: Camera,
  		      public storage: Storage
  		) {

    
    this.storage.get("MP-Profile").then((val) => {
      this.userId = val.id;
    });

    this.storage.get("token").then((val) => {
      this.token = val;
    });

    this.image = this.navParams.get("image");
    this.title = this.navParams.get("title");
    this.text = this.navParams.get("text");
    this.link = this.navParams.get("link");

  }

  ionViewDidLoad() {
    
  }

  close() {
    this.viewCtrl.dismiss();
  }



  public takePicture() {
    this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 300,
        targetHeight: 300,
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
      quality: 60,
      targetWidth: 320,
      targetHeight: 320,
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
    this.loading = this.loadingCtrl.create({content:'actualizando...'});
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
    formData.append('userId', self0.userId);

    
    var xhr = new XMLHttpRequest();
    xhr.open("post", environment.apiUrl+"users/avatar");
    xhr.setRequestHeader("Authorization", "Bearer "+self0.token);

    xhr.onreadystatechange = function () {

      if(xhr.readyState === 4 && xhr.status === 200) {
        var uri = xhr.responseText;
        self0.loading.dismiss();

        if (uri.indexOf('error') > -1) {
          self0.service.logError({}, 'Error al procesar la solicitud. Inténtelo más tarde.');
        }
        else {
          self0.service.showOk("Foto actualizada con éxito");

          self0.userService.getProfile().subscribe(
            (result)=>{
              result.avatar = environment.staticUrl+uri.replace('/public/','');
              self0.storage.set("MP-Profile", result);
              self0.viewCtrl.dismiss(true);
            },
            err => {
              console.log(JSON.stringify(err));
            }
          );
        }
      }
      

      
    };

    xhr.send(formData);

    /*
    this.b64toBlob(this.base64Image,
    function(blob) {

        var url = window.URL.createObjectURL(blob);

        var formData = new FormData();
        formData.append('avatar', blob, 'avatar.jpg');
        formData.append('userId', self0.userId);

        
        var xhr = new XMLHttpRequest();
        xhr.open("post", environment.apiUrl+"users/avatar");
        xhr.setRequestHeader("Authorization", "Bearer "+self0.token);

        xhr.onreadystatechange = function () {

          if(xhr.readyState === 4 && xhr.status === 200) {
            var uri = xhr.responseText;
            self0.loading.dismiss();

            if (uri.indexOf('error') > -1) {
              self0.service.logError({}, 'Error al procesar la solicitud. Inténtelo más tarde.');
            }
            else {
              self0.service.showOk("Foto actualizada con éxito");

              self0.userService.getProfile().subscribe(
                (result)=>{
                  result.avatar = environment.staticUrl+uri.replace('/public/','');
                  self0.storage.set("MP-Profile", result);
                  self0.viewCtrl.dismiss(true);
                },
                err => {
                  console.log(JSON.stringify(err));
                }
              );
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

}