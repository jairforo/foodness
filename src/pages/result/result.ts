import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';

import { Ingredients, Meals } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html'
})
export class ResultPage {

  ingredient: any;
  ingredients: any = [];
  meals: any = [];

  constructor (
    public navCtrl: NavController, 
    public modalCtrl: ModalController,
    public navParams: NavParams, 
    public ingredientService: Ingredients,
    public mealService: Meals
  ) { 
    this.ingredient = navParams.get('ingredient');
  }

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

}
