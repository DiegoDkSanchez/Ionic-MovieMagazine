import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Pelicula} from '../../app/pelicula';
import {PeliculaService} from '../../app/peliculas.service';
import {AlertController} from 'ionic-angular'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers:[PeliculaService]
})
export class ContactPage {

  SelPeliculas:string="0";
  pelis:Pelicula[];
  numerop:string="0";
  listaFiltrada:Array<String> = new Array;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private peliculaservice:PeliculaService) {

  }

  soloAccion(){
    let alert = this.alertCtrl.create({
      title:'Solo Accion'
    })
    alert.present();
    var nombrePeli: String;

    for(var i=0;i<this.pelis.length;i++){
    this.listaFiltrada.splice(i);
    }

    for(var i=0;i<this.pelis.length;i++){
        if(this.pelis[i].categoria == 'Accion'){
          nombrePeli = this.pelis[i].titulo;
          this.listaFiltrada.push(nombrePeli);
        }
    }
  }

  soloTerror(){
    let alert = this.alertCtrl.create({
      title:'Solo Terror'
    })
    alert.present();
    var nombrePeli: String;

    for(var i=0;i<this.pelis.length;i++){
      this.listaFiltrada.splice(i);
      }

    for(var i=0;i<this.pelis.length;i++){
        if(this.pelis[i].categoria == 'Terror'){
          nombrePeli = this.pelis[i].titulo;
          this.listaFiltrada.push(nombrePeli);
        }
    }
  }

  soloRomance(){
    let alert = this.alertCtrl.create({
      title:'Solo Romance'
    })
    alert.present();
    var nombrePeli: String;

    for(var i=0;i<this.pelis.length;i++){
    this.listaFiltrada.splice(i);
    }

    for(var i=0;i<this.pelis.length;i++){
        if(this.pelis[i].categoria == 'Romance'){
          nombrePeli = this.pelis[i].titulo;
          this.listaFiltrada.push(nombrePeli);
        }
    }
  }

  soloAnimada(){
    let alert = this.alertCtrl.create({
      title:'Solo Animadas'
    })
    alert.present();
    var nombrePeli: String;

    for(var i=0;i<this.pelis.length;i++){
      this.listaFiltrada.splice(i);
      }

    for(var i=0;i<this.pelis.length;i++){
        if(this.pelis[i].categoria == 'Animada'){
          nombrePeli = this.pelis[i].titulo;
          this.listaFiltrada.push(nombrePeli);
        }
    }
  }

  soloFantasia(){
    let alert = this.alertCtrl.create({
      title:'Solo Fantasia'
    })
    alert.present();
    var nombrePeli: String;

    for(var i=0;i<this.pelis.length;i++){
      this.listaFiltrada.splice(i);
      }

    for(var i=0;i<this.pelis.length;i++){
        if(this.pelis[i].categoria == 'Fantasia'){
          nombrePeli = this.pelis[i].titulo;
          this.listaFiltrada.push(nombrePeli);
        }
    }
  }

  getPeliculas():void{
    this.peliculaservice.getPeliculas().then(pelis=>this.pelis=pelis);
  }

  ngOnInit():void{
    this.getPeliculas();
  }

  getItems(ev){
    var val = ev.target.value;
    if(val&&val.trim()!=""){
      this.pelis=this.pelis.filter((item)=>{
        return(item.categoria.toLowerCase().indexOf(val.toLowerCase())>-1);
      })
    }else{
      this.getPeliculas();
    }
  }

  

}
