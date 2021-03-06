import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';

import { Ingredients, Meals } from '../../providers';
import { Ingredient} from '../../models/ingredient'

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  ingredients: any = [];
  meals: any = [];

  constructor (
    public navCtrl: NavController, 
    public modalCtrl: ModalController,
    public navParams: NavParams, 
    public ingredientService: Ingredients,
    public mealService: Meals
  ) { }

  /** Perform a service for the proper items. */
  ngOnInit() {
    // Ingredients
    this.ingredientService.query({filter: "id;name"}).subscribe( data => {
      this.ingredients = data 
    });

    // Meal
    this.mealService.query().subscribe( data => {
      this.meals = data 
    });
  }

  showSearchPage(ev) {
    let searchQuery = ev.target.value;

    let profileModal = this.modalCtrl.create('SearchModalPage', {searchQuery});
    profileModal.present();
  }

  showResults(ingredient: Ingredient) {
    this.navCtrl.push('ResultPage', { ingredient });
  }
}
