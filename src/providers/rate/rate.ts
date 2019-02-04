import { Injectable } from '@angular/core';
import { AppRate } from '@ionic-native/app-rate';

/*
  Generated class for the RateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RateProvider {

  constructor(private AppRate: AppRate) {
  }

  init(){
    this.AppRate.preferences = {
      displayAppName: 'Divine mercy',
      usesUntilPrompt: 3,
      promptAgainForEachNewVersion: false,
      inAppReview: true,
      storeAppURL: {
        android: 'market://details?id=com.divinemercyorg.android',
      },
      customLocale: {
        title: "Would you mind rating %@?",
        message: "If you enjoy %@. Would you mind taking a minute to rate our app?. Thanks for your support!",
        cancelButtonLabel: "No, Thanks",
        rateButtonLabel: "Rate It Now",
        laterButtonLabel: "Remind Me Later",
      }
     }
    this.AppRate.promptForRating(false);
  }
}
