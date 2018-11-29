import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Ingredient } from '../../models/ingredient';
import { Ingredients } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  ingredients: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public ingredientService: Ingredients) { }

  /**
   * Perform a service for the proper items.
   */
  ngOnInit() { 
    this.ingredientService.query().subscribe( data => {
      this.ingredients = data 
    });
  }
}
