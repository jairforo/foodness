import { NgModule } from '@angular/core';
import { SeeAllComponent } from './see-all/see-all';
import { IngredientChipComponent } from './ingredient-chip/ingredient-chip';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [SeeAllComponent,
    IngredientChipComponent],
	imports: [
		CommonModule,
		IonicModule,
		TranslateModule
	],
	exports: [SeeAllComponent,
    IngredientChipComponent]
})
export class ComponentsModule {}
