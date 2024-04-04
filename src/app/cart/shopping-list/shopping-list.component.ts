import { ShoppingService } from './../../shared/service/shopping.service';
import { Ingredients } from '../../shared/ingredients.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingridients!: Ingredients[];

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.ingridients = this.shoppingService.getIngrideints();
  }

  onItemClick(index: number): void{
    this.shoppingService.itemClick.next(index);
  }

}
