import { Component, Input } from '@angular/core';
import { Storage } from '@ionic/storage';
import {LoadingController, NavController, Platform} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Pata } from '../../pata';
import { Pet } from '../../models/pet.model';
import { PetPage } from '../../pages/pet/pet';
import { MyPetsPage } from '../../pages/my-pets/my-pets';
import { Owner } from '../../pages/owner/owner';
import { PetService } from '../../services/pet.service';
import { DatePicker } from '@ionic-native/date-picker';
import {BarcodeScanner} from "@ionic-native/barcode-scanner";

@Component({
  selector: 'pet-info-form',
  templateUrl: 'pet-info-form.html'
})
export class PetInfoFormComponent {
  @Input() pet: Pet = null;
  @Input() myPet: Pet = null;
  @Input() petId: number;
  @Input() isDetail: boolean;
  @Input() isEdit: boolean = false;
  @Input() isLove: boolean = false;
  @Input() isMatch: boolean = false;
  @Input() isNew: boolean = false;
  @Input() isLost: boolean = false;
  @Input() isFound: boolean = false;

  loading: any = null;
  sizes: any = [];
  sexs: any = [];
  colors: any = [];
  especies: any = [];
  razas: any = [];

  names: any = {
    size: '',
    sex: '',
    color: '',
    especie: '',
    raza: ''
  };

  constructor(private service: Pata,
              public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public petService: PetService,
              public storage: Storage,
              private datePicker: DatePicker,
              private platform: Platform,
              private barcodeScanner: BarcodeScanner
             ) {
  	if (this.pet == null) {
  		this.pet = new Pet;
  	}

    if (this.myPet == null) {
      this.myPet = new Pet;
    }

    this.loading = this.loadingCtrl.create();
    this.loading.present();

    Observable.forkJoin([
       this.petService.size(),
       this.petService.color(),
       this.petService.sex(),
       this.petService.especie()
    ])
    .subscribe(data => {

        this.sizes = data[0];
        this.colors = data[1];
        this.sexs = data[2];
        this.especies = data[3];

        if (this.pet.type) {
          if (this.pet.type.toString() != "0") {
            this.refreshRazas(this.pet.type);
          }

          this.names.size = "No definido";
          for (var i = 0; i < this.sizes.length;i++) {
            if (this.sizes[i].id == this.pet.size) { this.names.size = this.sizes[i].value; break; }
          }

          this.names.color = "No definido";
          for (var i = 0; i < this.colors.length;i++) {
            if (this.colors[i].id == this.pet.color) { this.names.color = this.colors[i].value; break; }
          }

          this.names.sex = "No definido";
          for (var i = 0; i < this.sexs.length;i++) {
            if (this.sexs[i].id == this.pet.sex) { this.names.sex = this.sexs[i].value; break; }
          }

          this.names.especie = "No definido";
          for (var i = 0; i < this.especies.length;i++) {
            if (this.especies[i].id == this.pet.type) { this.names.especie = this.especies[i].species; break; }
          }
        }

        this.loading.dismiss();
    });

  }

  refreshRazas(e: any) {
    this.petService.raza(e).subscribe((ok) => {
      this.razas = ok;

      for (var i = 0; i < this.razas.length;i++) {
        if (this.razas[i].id == this.pet.breed) { this.names.raza = this.razas[i].breed; break; }
      }
    });
  }

  setBirthDate(oldval: string) {
    var d = new Date();

    if (oldval!="" && oldval!="0000-00-00" && oldval!=null) {
      oldval = oldval.split("/").reverse().join("-");
      d = new Date(oldval.replace(/-/g, "/"));
    }

    this.datePicker.show({
      date: d,
      mode: 'date',
      okText: 'Aceptar',
      cancelText: 'Cancelar',
      todayText: '',
      nowText: '',
      allowFutureDates: false,
      doneButtonLabel: 'Aceptar',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then(
      date => {
        var dd = date.getDate();
        var mm = date.getMonth()+1;
        var yyyy = date.getFullYear();
        var dda = '';
        var mma = '';
        if(dd<10){
            dda='0'+dd;
        } else {
            dda=mm.toString();
        }
        if(mm<10){
            mma='0'+mm;
        } else {
            mma=mm.toString();
        }
        var newText = dd+'/'+mm+'/'+yyyy;
        this.pet.birthday = newText;
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  save() {
    if (this.pet.name == "" || this.pet.name == null) {
      this.service.logError(null, "Debe indicar nombre de mascota");
    }
    else {
      let loading = this.loadingCtrl.create({
        content: 'guardando...'
      });


      this.pet.name = this.pet.name.toString().trim();

      loading.present();

      this.storage.get('MP-Profile').then((val) => {
        let saveOperation = this.petService.update(this.pet.id, this.pet);

        saveOperation.subscribe((ok) => {
          loading.dismiss();
          if (ok.hasOwnProperty("id")) {
            this.service.showOk();
            this.navCtrl.setRoot(MyPetsPage);
          }
          else {
            this.service.logError(null, "No fue posible guardar su mascota, recuerde completar todos los campos");
          }
        }, (error) => {
          loading.dismiss();
          this.service.logError(null, "No fue posible guardar su mascota, recuerde completar todos los campos");
          console.log(error);
        });
      });
    }
  }

  add() {
  	if (this.pet.name == "" || this.pet.name == null) {
  		this.service.logError(null, "Debe indicar nombre de mascota");
  	}
    else if (this.pet.breed == "" || this.pet.breed == null) {
      this.service.logError(null, "Debe indicar raza de mascota");
    }
  	else {
  	  let loading = this.loadingCtrl.create({
  	    content: 'guardando...'
  	  });

  	  loading.present();

      this.pet.name = this.pet.name.toString().trim();

      this.storage.get('MP-Profile').then((val) => {
        let addOperation = this.petService.add(val.id, this.pet);

        addOperation.subscribe((ok) => {
          loading.dismiss();
          if (ok.hasOwnProperty("id")) {
            this.service.showOk();
            this.navCtrl.setRoot(MyPetsPage);
          }
          else {
            this.service.logError(null, "No fue posible guardar su mascota, recuerde completar todos los campos");
          }
        }, (error) => {
          loading.dismiss();
          this.service.logError(null, "No fue posible guardar su mascota, recuerde completar todos los campos");
          console.log(error);
        });
      });
  	}
  }

  rechazar() {
    let loading = this.loadingCtrl.create({
      content: ''
    });
    loading.present();
    let accept = this.petService.reject(this.pet.id);
    accept.subscribe((ok) => {
      loading.dismiss();
      this.service.showOk();
      this.navCtrl.pop();
    }, (err) => {
      loading.dismiss();
      this.service.logError(null, "No fue posible rechazar, es posible que ya no esté disponible");
    })
  }

  notificar() {
    let loading = this.loadingCtrl.create({
      content: ''
    });
    loading.present();
    console.log('myPetId.form:' + JSON.stringify(this.myPet));
    let accept = this.petService.notifyOwner(this.pet.id, this.petId);
    accept.subscribe((ok) => {
      loading.dismiss();
      this.service.showOk();
      this.navCtrl.pop();
    }, (err) => {
      loading.dismiss();
      this.service.logError(null, "No fue posible aplicar al candidato, es posible que ya no esté disponible");
    })
  }

  aceptar() {
    let loading = this.loadingCtrl.create({
      content: ''
    });
    loading.present();
    let accept = this.petService.accept(this.pet.id);
    accept.subscribe((ok) => {
      loading.dismiss();
      this.service.showOk();
      this.navCtrl.pop();
    }, (err) => {
      loading.dismiss();
      this.service.logError(null, "No fue posible aplicar al candidato, es posible que ya no esté disponible");
    })
  }

  owner(owner: any) {
    this.navCtrl.push(Owner, { owner: owner });
  }

  scanear() {
    if (this.platform.is('cordova')) {
      this.barcodeScanner.scan().then((barcodeData) => {
        if (barcodeData.text.indexOf('mimaskot.pe') > -1) {
          var data = barcodeData.text.split('/');
          var code = data[data.length-1].trim();

          this.loading = this.loadingCtrl.create();
          this.loading.present();
          let petcheck = this.petService.getMascotByQR(code)

          petcheck.subscribe((pet:any) => {
            if (pet) {  // definir status mascota perdida
              // ir al detalle de la mascota encontrada
              this.service.showOk('Enhorabuena, haz encontrado una mascota que está extraviada. Hemos enviado una notificación a su dueño, si lo deseas puedes contactarlo tú también.');
              this.goToPetFound(pet);
            }
            else {
              this.loading.dismiss();
              this.service.logError({}, 'El QR leidó está asignado a otra mascota');
            }
          }, (err) => {
            this.loading.dismiss();
            this.service.logError({}, 'No fue posible validar el QR');
          });
        } else if(barcodeData.text.length > 0) {
          this.service.logError({}, 'QR escaneado no corresponde a MiMaskot');
        }else{
          // did not take the qr code
        }

      }, (err) => {
        this.service.logError(null, "Servicio temporalmente no disponible");
      });
    }
  }

  goToPetFound(pet){
    if (pet.hasOwnProperty("status")) {
      this.loading.dismiss();
      this.service.logError({}, 'Código QR no encontrado como una mascota perdida');
    }
    else {
      this.loading.dismiss();
      this.navCtrl.push(PetPage, {
        pet: pet,
        isDetail: 0,
        isLove: false,
        isLost: true,
        isEdit: false,
        isFound:true
      });
    }
  }
}
