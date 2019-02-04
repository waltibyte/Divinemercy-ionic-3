import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the PushProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const STORAGE_KEY = 'dailymeditation';
const STORAGE_KEY2 = 'appactive';


@Injectable()
export class PushProvider {

  constructor(public storage: Storage) {
  }

  getAllDailyMeditation() {
    return this.storage.get(STORAGE_KEY);
  }

  getAlreadyWelcomed() {
    return this.storage.get(STORAGE_KEY2);
  }

}
