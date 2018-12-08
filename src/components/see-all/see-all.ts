import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'see-all',
  templateUrl: 'see-all.html'
})
export class SeeAllComponent {
  page: string;

  constructor(public navCtrl: NavController) {
    this.page = 'ResultPage';
  }

  seeAll() {
    this.navCtrl.push(this.page);
  }
}
