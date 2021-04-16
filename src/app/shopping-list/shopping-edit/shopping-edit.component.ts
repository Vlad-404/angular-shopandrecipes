import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { ɵInternalFormsSharedModule } from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addingIngredient = new EventEmitter<Ingredient>();
  // alternatively, you can get a value from DOM with @ViewChild
  //     - ViewChild and ElementRef need to be imported from @angular/core:
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  
  constructor() { }

  ngOnInit(): void {
  }

  // Use this if you are passing parameters from the view through a function
  // addShoppingItem(itemName: string, itemQuantity: number) {
  //   console.log('Name: ' + itemName, 'Amount: ' + itemQuantity);
  //   const newItem = new Ingredient(itemName, itemQuantity);
  //   console.log(newItem);
  //   this.addingIngredient.emit(newItem);
  // }

  // If using @ViewChild, use this:
  addShoppingItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    console.log(newIngredient);
    this.addingIngredient.emit(newIngredient);
  }

}
