import { Component, Input, Output, EventEmitter } from '@angular/core';
import {LoadingController, Platform} from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Pata } from '../../pata';

import { Pet } from '../../models/pet.model';
import { PetService } from '../../services/pet.service';


/**
 * Generated class for the QrCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'qr-card',
  templateUrl: 'qr-card.html'
})
export class QrCardComponent {
  @Input() pet: Pet;
  @Input() nueva: boolean = false;
  @Output() change: EventEmitter<any> = new EventEmitter<any>();
  loading: any = null;

  constructor(private barcodeScanner: BarcodeScanner,
              public service: Pata,
              private petService: PetService,
              public loadingCtrl: LoadingController,
              private platform: Platform) {

  }

  scanear() {

    if ( this.platform.is('ios') || this.platform.is('android')) {

      this.barcodeScanner.scan().then((barcodeData) => {
       if (barcodeData.text.indexOf('mimaskot.pe') > -1) {
        var data = barcodeData.text.split('/');
        var code = data[data.length-1].trim();

        this.loading = this.loadingCtrl.create();
        this.loading.present();
        let petcheck = this.petService.uniqueQR(code);

        petcheck.subscribe((ok:any) => {
          if (ok.status == 1) {
            this.okQr(code);
          }
          else {
            this.loading.dismiss();
            this.service.logError({}, 'El QR leidó está asignado a otra mascota');
          }
        }, (err) => {
          this.loading.dismiss();
          this.service.logError({}, 'No fue posible validar el QR');
        });

       }
       else {
        this.service.logError({}, 'QR escaneado no corresponde a MiMaskot');
       }
      }, (err) => {
       this.service.logError({}, 'Error al internar abrir la cámara');
      });

    }
    else {
      var code = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8).toUpperCase();
      this.loading = this.loadingCtrl.create();
      this.loading.present();
      this.okQr(code);
    }
  }

  okQr(codex: string) {
    this.pet.code = codex;
    this.pet.qr = "https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl="+codex+"&chld=H|1";
    if (this.nueva == false) {
        let scode = this.petService.setCode(this.pet.id, codex);

        scode.subscribe((ok:any) => {
          this.loading.dismiss();
          this.setOK(true, codex);
        }, (err) => {
          this.loading.dismiss();
          this.service.logError({}, 'No fue posible actualizar el QR');
        });
    }
    else {
      this.loading.dismiss();
      this.setOK(true, codex);
    }
  }

  setOK(ok: boolean, identifier: string) {
    this.change.emit({ok: ok, identifier: identifier});
  }

  getQR(codez: string) {
    return "https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl="+codez+"&chld=H|1";
  }
}
