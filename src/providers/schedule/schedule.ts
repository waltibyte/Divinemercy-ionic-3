import { Injectable } from '@angular/core';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications';

/*
  Generated class for the ScheduleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ScheduleProvider {

  constructor(private localNotifications: LocalNotifications) {
  }

  initSchedule() {
    // Schedule multiple notifications
    let time1 = new Date()
    time1.setDate(time1.getDate() + 1);
    time1.setHours(14);
    time1.setMinutes(35);
    time1.setSeconds(0);

    let time2 = new Date()
    time2.setDate(time2.getDate() + 1);
    time2.setHours(15);
    time2.setMinutes(0);
    time2.setSeconds(0);

    this.localNotifications.schedule([{
      id: 1,
      title: 'Prayer alert',
      text: '25 minutes to prayer',
      trigger: { firstAt : new Date(time1), every: ELocalNotificationTriggerUnit.DAY },
      led: 'FF0000',
      sound: null,
      vibrate: true
    },
    {
      id: 2,
      title: 'Prayer alert',
      text: 'Time for prayer',
      trigger: { firstAt : new Date(time2), every: ELocalNotificationTriggerUnit.DAY },
      led: 'FF0000',
      sound: null,
      vibrate: true

    }
    ]);

  }
}
