import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipesandshoplist';
  showRecipes: boolean = true;
  showList: boolean = true;

  listAndRecipesVisibility(visibilityArr: boolean[]) {
    console.log('APP - ' + visibilityArr);
    this.showRecipes = visibilityArr[0];
    this.showList = visibilityArr[1];
  }

  showAllComponents() {
    this.showRecipes = true;
    this.showList = true;
  }
}
