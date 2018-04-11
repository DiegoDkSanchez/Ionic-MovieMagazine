import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Pelicula} from '../../app/pelicula';
import {PeliculaService} from '../../app/peliculas.service';
import {DetallePeliculaPage} from '../../pages/detalle-pelicula/detalle-pelicula';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[PeliculaService]
})
export class HomePage {

  item:any;
  pelis:Pelicula[];

  constructor(public navCtrl: NavController, private peliculaservice:PeliculaService) {

  }

  getPeliculas():void{
    this.peliculaservice.getPeliculas().then(pelis=>this.pelis=pelis);
  }

  ngOnInit():void{
    this.getPeliculas();
  }

  viewItem(items){
    this.navCtrl.push(DetallePeliculaPage,{
      items:items
    })
  }

}
