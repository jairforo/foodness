import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { SearchModalPage } from './search-modal';

@NgModule({
  declarations: [
    SearchModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchModalPage),
    TranslateModule.forChild()
  ],
  exports: [
    SearchModalPage
  ]
})
export class SearchModalPageModule { }
