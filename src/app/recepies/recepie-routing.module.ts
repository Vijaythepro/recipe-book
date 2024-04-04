import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataResolverService } from './../shared/service/data-resolver.service';
import { RecepieDetailsComponent } from './recepie-details/recepie-details.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecepieHomeComponent } from './recepie-home/recepie-home.component';
import { AuthGaurd } from './../auth/auth-gaurd.service';
import { RecepiesComponent } from './recepies/recepies.component';


const route: Routes =[
    {path: '', canActivate: [AuthGaurd], component: RecepiesComponent, children: [
    {path: '', component: RecepieHomeComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecepieDetailsComponent, resolve: [DataResolverService]},
    {path: ':id/edit', component: RecipeEditComponent, resolve: [DataResolverService]}
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})

export class RecepieRoutingModule {}