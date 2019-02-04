import { PushProvider } from './../../providers/push/push';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DailyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-daily',
  templateUrl: 'daily.html',
})
export class DailyPage {

  daily: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private save: PushProvider) {
    this.getAllDailyMed();
  }

  getAllDailyMed(){
    this.save.getAllDailyMeditation().then(result => {
      this.daily = result;
      console.log(this.daily);
      return this.daily;
    });
  }

}
