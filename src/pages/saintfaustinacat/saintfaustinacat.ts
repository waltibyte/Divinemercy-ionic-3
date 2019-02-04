import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SaintfaustinacatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-saintfaustinacat',
  templateUrl: 'saintfaustinacat.html',
})
export class SaintfaustinacatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaintfaustinacatPage');
  }

  overview() {
    this.navCtrl.push('SaintfaustinaPage');
  }
  bio() {
    this.navCtrl.push('SaintfaustinabioPage');
  }

}
