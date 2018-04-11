import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PeliculaService} from '../../app/peliculas.service';
import { Pelicula } from '../../app/pelicula';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers:[PeliculaService]
})
export class AboutPage {
pelis:Pelicula[];
  constructor(public navCtrl: NavController, private peliculaservice:PeliculaService) {

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
        return(item.titulo.toLowerCase().indexOf(val.toLowerCase())>-1);
      })
    }else{
      this.getPeliculas();
    }
  }

}
