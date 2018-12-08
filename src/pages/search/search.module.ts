import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { SearchPage } from './search';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SearchPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPage),
    TranslateModule.forChild(),
    ComponentsModule //Avoid imports all components like this <--
  ],
  exports: [
    SearchPage,
  ]
})
export class SearchPageModule { }
