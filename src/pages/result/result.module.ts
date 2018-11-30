import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ResultPage } from './result';

@NgModule({
  declarations: [
    ResultPage,
  ],
  imports: [
    IonicPageModule.forChild(ResultPage),
    TranslateModule.forChild()
  ],
  exports: [
    ResultPage
  ]
})
export class ResultPageModule { }
