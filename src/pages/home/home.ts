import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  stream: string = "mercy";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }


  mercyDefinition() {
    this.navCtrl.push('MercyDefinitionPage');
  }

  thePrayer() {
    this.navCtrl.push('TheprayerPage');
  }

  formsOfDevo() {
    this.navCtrl.push('FormsofdevotionPage');
  }

  mercyinScripture() {
    this.navCtrl.push('MercyinscripturePage');
  }

  history() {
    this.navCtrl.push('HistoryPage');
  }

  tradition() {
    this.navCtrl.push('TraditionPage');
  }

  spirituality() {
    this.navCtrl.push('SpiritualityPage');
  }

  saintFaustina() {
    this.navCtrl.push('SaintfaustinacatPage');
  }

  marians() {
    this.navCtrl.push('ThemariansPage');
  }

  thepop() {
    this.navCtrl.push('ThepopPage');
  }

}
