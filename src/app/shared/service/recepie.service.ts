import { Subject } from 'rxjs';
import { ShoppingService } from './shopping.service';
import { Ingredients } from './../ingredients.model';
import { Recepie } from './../../recepies/model/recepie.model';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RecepieService {
  recepieSelected = new Subject<Recepie>();
  recepieAdded = new Subject<any>();
  constructor(private shoppingService: ShoppingService) { }

  // private recepies:Recepie[] = [
  //   new Recepie(
  //     "Idly",
  //     "A famous south indian dish",
  //     "data:image/jpeg;base64,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",
  //   [
  //     new Ingredients('maavu', 2),
  //     new Ingredients('salt', 1)
  //   ]),
  //   new Recepie(
  //     "Dosa",
  //     "A dosa is a thin pancake or crepe originating from South India.",
  //      "https://static.toiimg.com/thumb/63841432.cms?width=1200&height=900",
  //     [
  //     new Ingredients('maavu', 2),
  //     new Ingredients('salt', 1)
  //     ]),
  //   new Recepie(
  //     "Noodles",
  //     "A japanese food which is favourite for everyone",
  //      "https://static.toiimg.com/thumb/52467119.cms?width=1200&height=900",
  //     [
  //     new Ingredients('noodles packet', 2),
  //     new Ingredients('flavour', 1)
  //     ])
  // ];

 private recepies: Recepie[] = [];

  getRecepie() {
   return this.recepies.slice();
  }

  fetchRecepie(recepie: Recepie[]) {
    this.recepies = recepie;
    this.recepieAdded.next(this.recepies);
  }
  getRecipeById(i:number){
    return this.recepies[i];
  }
  addRecepieIngredients(data:any){
    this.shoppingService.onAddRecepieIngredients(data);
  }

  updateRecepie(id: number, recepie: Recepie){
    this.recepies[id] = recepie;
    this.recepieAdded.next(this.recepies);
  }

  addRecepie(recepie: Recepie){
    this.recepies.push(recepie);
    this.recepieAdded.next(this.recepies);
  }

  deleteRecepie(id: number): void{
    this.recepies.splice(id, 1);
    this.recepieAdded.next(this.recepies);
  }
}
