import { Ingredients } from './../ingredients.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  ingrideientsAdded = new Subject<Ingredients>();
  itemClick = new Subject<number>();
  private ingridients:Ingredients[] = [
    new Ingredients("Apples", 10),
    new Ingredients("Tomato", 5),
    new Ingredients("Onion", 7)
  ];

  getIngrideints(): Ingredients[]{
    return this.ingridients;
  }

  getSelectedIngridients(i: number): Ingredients {
    return this.ingridients[i];
  }

  onAddIngridients(data: Ingredients): void {
    this.ingridients.push(data);
  }

  onAddRecepieIngredients(data: any): void{
    this.ingridients.push(...data);
  }

  updateIngridient(i: number, ing: Ingredients): void {
     this.ingridients[i] = ing;
  }

  deleteIngridient(i: number){
    return this.ingridients.splice(i, 1);
  }
}
