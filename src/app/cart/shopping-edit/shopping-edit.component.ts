import { Subscription } from 'rxjs';
import { ShoppingService } from './../../shared/service/shopping.service';
import { Ingredients } from '../../shared/ingredients.model';
import { Component, OnInit, ViewChild,
         ElementRef, Output, EventEmitter,
         OnDestroy, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('addForm', {static: false}) updateForm!: NgForm;
  @ViewChild('inputName', {static: true}) inputNameValue: any;
  @ViewChild('inputAmount', {static: true}) inputAmountValue: any;
  itemClickSubscription!: Subscription;
  editedItem!: Ingredients;
  editMode = false;
  editeItemIndex!: number;
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.itemClickSubscription = this.shoppingService.itemClick.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editeItemIndex = index;
        this.editedItem = this.shoppingService.getSelectedIngridients(this.editeItemIndex);
        this.updateForm.setValue(
          {
            name: this.editedItem.name,
            amount: this.editedItem.amount
          }
        );
        console.log(this.shoppingService.getSelectedIngridients(index));
      }
    );
  }

  onAddClick(): void {
    // (click)="onAddClick()" add this line in html add button for viewchild approach/ alternatively i'm getting the values by TDF
    const ingdrientName = this.inputNameValue.nativeElement.value;
    const ingdrientAmount = this.inputAmountValue.nativeElement.value;
    const ingridient = new Ingredients(ingdrientName, ingdrientAmount);
    this.shoppingService.onAddIngridients(ingridient);
  }

  // getting input form values using template driven approach
  onAddButton(form: NgForm): void{
    const ingdrientName = form.value.name;
    const ingdrientAmount = form.value.amount;
    const ingridient = new Ingredients(ingdrientName, ingdrientAmount);
    if (this.editMode) {
      this.shoppingService.updateIngridient(this.editeItemIndex, ingridient);
      this.editMode = false;
    } else {
       this.shoppingService.onAddIngridients(ingridient);
    }
    this.updateForm.reset();
  }

  onClear(): void {
    this.updateForm.reset();
    this.editMode = false;
  }

  onDelete(): void {
    this.onClear();
    this.shoppingService.deleteIngridient(this.editeItemIndex);
  }

  ngOnDestroy(): void {
    this.itemClickSubscription.unsubscribe();
  }

}
