import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ResultPage } from './result';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ResultPage,
  ],
  imports: [
    IonicPageModule.forChild(ResultPage),
    TranslateModule.forChild(),
    ComponentsModule
  ],
  exports: [
    ResultPage
  ]
})
export class ResultPageModule { }
