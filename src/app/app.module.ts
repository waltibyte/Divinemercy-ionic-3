import { SplashPage } from './../pages/splash/splash';
import { Push } from '@ionic-native/push';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
import { IonicStorageModule } from '@ionic/storage';
import { BackgroundMode } from '@ionic-native/background-mode';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { ParallaxHeader } from '../components/parallax-header/parallax-header';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PushProvider } from '../providers/push/push';
import { RateProvider } from '../providers/rate/rate';
import { AppRate } from '@ionic-native/app-rate';

@NgModule({
  declarations: [
    MyApp,
    ParallaxHeader,
    SplashPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SplashPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Calendar,
    PushProvider,
    Push,
    AppRate,
    RateProvider,
    BackgroundMode,
    LocalNotifications
  ]
})
export class AppModule {}
