import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-search-modal',
  templateUrl: 'search-modal.html'
})
export class SearchModalPage {
  searchQuery: string;

  constructor(public viewCtrl: ViewController, navParams: NavParams) {
    this.searchQuery = navParams.get('searchQuery');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
