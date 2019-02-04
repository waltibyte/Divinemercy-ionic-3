import { Storage } from '@ionic/storage';
import { PushProvider } from './../../providers/push/push';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Intro page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class Intro {

  active: string = "active";

  constructor(public navCtrl: NavController, public navParams: NavParams, private save: PushProvider,
    private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Intro');
  }

  nextPage() {
    this.storage.set('appactive', [this.active]);
    this.navCtrl.setRoot('HomePage');
  }

}
