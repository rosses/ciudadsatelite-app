import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NavController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NewsService } from '../../services/news.service';
import { DoctorService } from '../../services/doctor.service';
import { environment } from "../../environments/environment"
import { Pata } from '../../pata';



@Component({
  selector: 'page-juntavecinos',
  templateUrl: 'juntavecinos.html'
})
export class JuntaVecinosPage {
  sections: any = [];
  headers: any = [];
  active: number = 0;
  section: string = '';
  image: string = '';
  title: string = '';
  public staticUrl: string;
  public isLoading: boolean = true;
  public openTab: string = 'news';
  public load: any;
  public actionLoaded: boolean = false;

  public wall: any = []; // news
  public faqs: any = []; // faqs
  public content: string = '';
  public contactoForm: boolean = false;
  public denunciaForm: boolean = false;
  public denuncia: any = { name: '', email: '', message: '' };
  public contacto: any = { name: '', email: '', message: '' };

  constructor(
    public navCtrl: NavController,
    private newsService: NewsService,
    private loadingCtrl: LoadingController,
    private doctorService: DoctorService,
    public storage: Storage,
    public service: Pata,
    private sanitizer: DomSanitizer
  ) {
    
    this.title = 'JUNTA DE VECINOS';
    this.load = this.loadingCtrl.create();
    this.load.present();

    this.newsService.getSections(0).subscribe(
      (data:any) =>{
        this.isLoading = false;
        this.sections = data.data;
        this.headers = data.headers;
        this.load.dismiss();
      },
      error => {
        console.log(error);
      }
    );

    this.storage.get("MP-Profile").then((data) => {
      this.denuncia.name = data.first_name;
      this.contacto.name = data.first_name;
      this.denuncia.email = data.email;
      this.contacto.email = data.email;
    });
    
  }

  changeActive(o:any) {
    this.active = o.id;
    this.section = o.name;
    this.image = o.icon;
    this.title = o.name;

    this.load = this.loadingCtrl.create();
    this.load.present();

    if (o.id == 1) {
      this.doctorService.getWall().subscribe((data: any)=> {
        this.wall = data.data;
        this.load.dismiss();
        this.actionLoaded = true;
      });
    }
    else if (o.id == 2 || o.id == 3) {
      this.doctorService.getContent(o.id).subscribe((data: any)=> {
        this.content = data.data;
        this.load.dismiss();
        this.actionLoaded = true;
      });
    }
    else if (o.id == 4) {
      this.doctorService.getFaqs(0).subscribe((data: any)=> {
        this.faqs = data.data;
        this.load.dismiss();
        this.actionLoaded = true;
      });
    }
    else if (o.id == 5) {
      this.actionLoaded = true;
      this.denunciaForm = true;
      this.load.dismiss();
    }
    else if (o.id == 6) {
      this.actionLoaded = true;
      this.contactoForm = true;
      this.load.dismiss();
    }
    else {
      this.load.dismiss();
    }

  }

  toggleDetails(data) {
    if (data.showDetails) {
        data.showDetails = false;
        data.icon = 'ios-add-circle-outline';
    } else {
        data.showDetails = true;
        data.icon = 'ios-remove-circle-outline';
    }
  }
  changeBack() {
    this.active = 0;
    this.section = '';
    this.image = '';
    this.title = 'JUNTA DE VECINOS';

    this.actionLoaded = false;
    this.wall = [];
    this.faqs = [];
    this.content = '';
    this.denunciaForm = false;
    this.contactoForm = false;
  }

  sendDenuncia() {

      if (this.denuncia.message.length < 4) {
        this.service.logError(null,"Por favor especifique un mensaje más largo");
      }
      else {
        let loading = this.loadingCtrl.create({
          content: 'enviando...'
        });

        loading.present();

        let sendMessage = this.doctorService.sendDenuncia({
          name: this.denuncia.name,
          email: this.denuncia.email,
          message: this.denuncia.message
        });

        sendMessage.subscribe((ok: any) => {
          loading.dismiss();
          if (ok.res == "OK") {
            this.service.showOk("Mensaje enviado con éxito. Nos contactaremos a la brevedad");
            this.denuncia.message = '';
          }
          else {
            this.service.logError(null, "No fue posible enviar el mensaje, intente nuevamente");
          }
        }, (error) => {
          loading.dismiss();
          this.service.logError(null, "No fue posible enviar el mensaje, intente nuevamente");
        });      
      }
  }

  sendContacto() {

      if (this.contacto.message.length < 4) {
        this.service.logError(null, "Por favor especifique un mensaje más largo");
      }
      else {
        let loading = this.loadingCtrl.create({
          content: 'enviando...'
        });

        loading.present();

        let sendMessage = this.doctorService.sendContacto({
          name: this.contacto.name,
          email: this.contacto.email,
          message: this.contacto.message
        });

        sendMessage.subscribe((ok: any) => {
          loading.dismiss();
          if (ok.res == "OK") {
            this.service.showOk("Mensaje enviado con éxito");
            this.contacto.message = '';
          }
          else {
            this.service.logError(null, "No fue posible enviar el mensaje, intente nuevamente");
          }
        }, (error) => {
          loading.dismiss();
          this.service.logError(null, "No fue posible enviar el mensaje, intente nuevamente");
        });      
      }

  }


}


