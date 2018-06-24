import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { UserService } from '../../../services/user.service';
import { Pata } from '../../../pata';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'page-profile-media',
  templateUrl: 'profile-media.html',
})
export class ProfileMedia {

  loading: any = null;
  token: string = '';
  base64Image: string;
  userId: any = null;

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
    /*
    this.processTake("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");
    */
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
    xhr.open("post", environment.apiUrl+"users/avatar/"+self0.userId);
    xhr.setRequestHeader("Authorization", "Bearer "+self0.token);

    xhr.onreadystatechange = function () {

      if(xhr.readyState === 4 && xhr.status === 200) {
        let ari = xhr.responseText;
        let uri = JSON.parse(ari);

        self0.loading.dismiss();

        if (uri.res == "ERR") {
          self0.service.logError({}, 'Error al procesar la solicitud. Inténtelo más tarde.');
        }
        else {
          self0.service.showOk("Foto actualizada con éxito");
          console.log('uri',uri);
          self0.userService.getProfile().subscribe(
            (result)=>{
              console.log('result', result);
              result.avatar = uri.url;
              self0.storage.set("MP-Profile", result);
              console.log('set profile OK -> dismiss');
              self0.viewCtrl.dismiss(true);
              console.log('dismissed!');
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
                  result.avatar = uri.url;
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
