import { Recepie } from './../model/recepie.model';
import { RecepieService } from './../../shared/service/recepie.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

  id!: number;
  editMode = false;
  recipieForm!: FormGroup;
  constructor(private route: ActivatedRoute,
              private receipeService: RecepieService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (param: Params) => {
        this.id = +param['id'];
        this.editMode = param['id'] != null;
        this.initForm();
      }
    );
  }

  initForm(): void {
    let recepieName = '';
    let recepieImg = '';
    let recepieDesc = '';
    let recepieIngridient = new FormArray([]);
    if (this.editMode){
      const recepie = this.receipeService.getRecipeById(this.id);
      recepieName = recepie.name;
      recepieImg = recepie.imgPath;
      recepieDesc = recepie.description;

      if (recepie['ingredients']){
        for (let ingredient of recepie.ingredients){
          recepieIngridient.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern('[1-9]*')])
            })
          );
        }
      }
    }
// *ngFor="let ingredient of recipieForm.get('ingridient'); let i=index" [formGroupName]='i'
    this.recipieForm = new FormGroup({
      'name': new FormControl(recepieName, Validators.required),
      'imgPath': new FormControl(recepieImg, Validators.required),
      'description': new FormControl(recepieDesc, Validators.required),
      'ingredients': recepieIngridient
    });

  }

  get controls() { // a getter!
     return (<FormArray>this.recipieForm.get('ingredients')).controls;

     
}

onAddIngridient(): void {
  (<FormArray>this.recipieForm.get('ingredients')).push(
     new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern('[1-9]*')])
      })
  );
}

onSubmit(): void{
  console.log(this.recipieForm);
  if (this.editMode) {
    this.receipeService.updateRecepie(this.id, this.recipieForm.value);
  } else {
    this.receipeService.addRecepie(this.recipieForm.value);
  }
  this.onCancelClick();
}

onCancelClick(): void {
  this.router.navigate(['../'], {relativeTo: this.route});
}

onRemoveIng(i: number) {
  (<FormArray>this.recipieForm.get('ingredients')).removeAt(i);
}



}
