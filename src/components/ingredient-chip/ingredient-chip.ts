import { Component, Input } from '@angular/core';
import { Ingredient } from '../../models/ingredient';

/**
 * Generated class for the IngredientChipComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ingredient-chip',
  templateUrl: 'ingredient-chip.html'
})
export class IngredientChipComponent {

  @Input() ingredient: Ingredient;

  constructor() {
  }

}
