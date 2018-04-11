import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Pelicula} from '../../app/pelicula';
import {PeliculaService} from '../../app/peliculas.service';
import {AlertController} from 'ionic-angular'

/**
 * Generated class for the TicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket',
  templateUrl: 'ticket.html',
  providers:[PeliculaService]
})
export class TicketPage {

  SelPeliculas:string="0";
  pelis:Pelicula[];
  numerop:string="0";
  constructor(public navCtrl: NavController, private peliculaservice:PeliculaService,
    public alerCtrl:AlertController) {
  }

  getPeliculas():void{
    this.peliculaservice.getPeliculas().then(pelis=>this.pelis=pelis);
  }

  ngOnInit():void{
    this.getPeliculas();
  }

  showConfirm(){
    let confirm = this.alerCtrl.create({
      title:'Detalle de Compra',
      message:'Usted comprara : '+this.numerop+' boletos <br>a precio de : $'+
      this.SelPeliculas+' c/u <br>Su total es: $'+ parseFloat(this.SelPeliculas)*
      parseFloat(this.numerop)+'<br>¿Desea terminar su compra?',
      buttons:[{
        text:'Comprar',
        handler:()=>{
          this.SelPeliculas="";
          this.numerop="0";
        }},
      {
        text:'Cancelar',
        handler:()=>{}
      }
    ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketPage');
  }

}
