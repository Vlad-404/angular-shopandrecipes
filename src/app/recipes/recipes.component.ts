import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  recipeObj: {};

  constructor() { 
    console.log('From recipes.component: '+this.selectedRecipe);
  }

  ngOnInit(): void {
  }

}
