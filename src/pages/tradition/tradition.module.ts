import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TraditionPage } from './tradition';

@NgModule({
  declarations: [
    TraditionPage,
  ],
  imports: [
    IonicPageModule.forChild(TraditionPage),
  ],
})
export class TraditionPageModule {}
