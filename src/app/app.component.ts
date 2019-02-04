import { SplashPage } from './../pages/splash/splash';
import { RateProvider } from './../providers/rate/rate';
import { PushProvider } from './../providers/push/push';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { AppRate } from '@ionic-native/app-rate';
import { BackgroundMode } from '@ionic-native/background-mode';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { Storage } from '@ionic/storage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string;

  pages: Array<{ title: string, component: any, icon: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar,
    private save: PushProvider, private rateapp: RateProvider, private appRate: AppRate,
     private modalCtrl: ModalController, private push: Push,
    private alertCtrl: AlertController, private storage: Storage,
    private localnot: LocalNotifications, private bmode: BackgroundMode
  ) {
    this.save.getAlreadyWelcomed().then(skipinto => {
      if (skipinto) {
        this.rootPage = 'HomePage';
      }
      else {
        this.rootPage = 'Intro';
      }
    })
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      let splash = this.modalCtrl.create(SplashPage);
      splash.present();
      this.bmode.isEnabled();
      //this.splashScreen.hide();
      this.initSchedule();
      this.runpush();
      this.rateapp.init();

    });
  }


  runpush() {
/*
    if (!this.platform.is('cordova')) {
      console.log('No cordova device recognised');
    }
    else {
*/
      // to initialize push notifications

      const options: PushOptions = {
        android: {
          senderID: '288669256757',
          sound: true
        },
        ios: {
          alert: 'true',
          badge: true,
          sound: 'false'
        },
        windows: {},
        browser: {
          pushServiceURL: 'http://push.api.phonegap.com/v1/push'
        }
      };

      const pushObject: PushObject = this.push.init(options);


      pushObject.on('notification').subscribe((notification: any) => {
        // if the user is using the app and the push notification comes
        if (notification.additionData.foreground) {
          let alert = this.alertCtrl.create({
            title: 'Daily Meditation',
            subTitle: notification.message,
            buttons: [{
              text: 'Ignore',
              role: 'cancel'
            }, {
              text: 'View',
              handler: () => {
                this.save.getAllDailyMeditation().then(result => {
                  if (result) {
                    this.storage.remove('dailymeditation');
                    this.storage.set('dailymeditation', [notification]);
                    this.nav.setRoot('DailyPage');
                  }
                  else {
                    this.nav.setRoot('DailyPage');
                  }
                }
                );
              }
            }]
          });
          alert.present();
        }
        else {
          // if user not using the app and the push notification come
          this.save.getAllDailyMeditation().then(result => {
            if (result) {
              this.storage.remove('dailymeditation');
              this.storage.set('dailymeditation', [notification]);
              this.nav.setRoot('DailyPage');
            }
            else {
              this.nav.setRoot('DailyPage');
            }
          }
          );
          console.log('Received a notification', notification);
        }
      });

      pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

      pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }
  // }

  initSchedule() {
    /*
    if (!this.platform.is('cordova')) {
      console.log('No cordova device recognised');
    }
    else {
      */
      this.localnot.on('click').subscribe(noti => {
      if (this.bmode.isActive()) {
        this.bmode.moveToForeground()
        let alert = this.alertCtrl.create({
          title:  noti.title,
          subTitle: noti.text
        });
        alert.present();
        }
        else {
          let alert = this.alertCtrl.create({
            title:  noti.title,
            subTitle: noti.text
          });
          alert.present();
        }
    });
  }

//  }



  homePage() {
    this.nav.setRoot('HomePage');
  }

  recitation() {
    this.nav.setRoot('DailyPage');
  }

  openRate() {
    this.appRate.preferences.storeAppURL = {
      android: 'market://details?id=com.divinemercyorg.android',
    };
    this.appRate.promptForRating(true);
  }

  aboutPage() {
    this.nav.setRoot('AboutPage');
  }
}
