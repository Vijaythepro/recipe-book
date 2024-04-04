import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RecepieDetailsComponent } from './recepie-details/recepie-details.component';
import { RecepieItemComponent } from './recepie-list/recepie-item/recepie-item.component';
import { RecepieHomeComponent } from './recepie-home/recepie-home.component';
import { RecepieListComponent } from './recepie-list/recepie-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecepieRoutingModule } from './recepie-routing.module';

@NgModule({
    declarations: [ 
        RecepiesComponent,
        RecipeEditComponent,
        RecepieListComponent,
        RecepieHomeComponent,
        RecepieDetailsComponent,
        RecepieItemComponent
    ],
    imports: [
        CommonModule,
        RecepieRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class RecepieModule{}