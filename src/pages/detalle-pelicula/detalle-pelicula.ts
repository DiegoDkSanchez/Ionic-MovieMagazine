import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetallePeliculaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-pelicula',
  templateUrl: 'detalle-pelicula.html',
})
export class DetallePeliculaPage {
item:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item=navParams.get('items');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePeliculaPage');
  }

}
