import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() listAndRecipesVisibility = new EventEmitter<boolean[]>();
  showRecipes: boolean = true;
  showList: boolean = false;
  visibility = [this.showRecipes, this.showList];
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  goToRecipes() {
    this.showRecipes = true;
    this.showList = false;
    this.componentVisibility();
  }
  
  goToList() {
    this.showRecipes = false;
    this.showList = true;
    this.componentVisibility();
  }

  showAll() {
    this.showRecipes = true;
    this.showList = true;
    this.componentVisibility();
  }

  componentVisibility() {
    this.visibility[0] = this.showRecipes;
    this.visibility[1] = this.showList;
    this.listAndRecipesVisibility.emit(this.visibility);
  }
  
}


// console.log('NAV - Recipes: '+ this.showRecipes + ' List: ' + this.showList);
// console.log('NAV - Visibility(Recipes/List): ' + this.visibility);