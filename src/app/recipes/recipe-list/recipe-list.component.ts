import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a Test', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_1280.jpg'),
    new Recipe('A Second Recipe', 'Second recipe description', 'https://pixnio.com/free-images/2021/03/17/2021-03-17-11-55-34-1800x1200.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
