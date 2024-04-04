import { Ingredients } from './../../shared/ingredients.model';
import { RecepieService } from './../../shared/service/recepie.service';
import { Recepie } from './../model/recepie.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recepie-details',
  templateUrl: './recepie-details.component.html',
  styleUrls: ['./recepie-details.component.scss']
})
export class RecepieDetailsComponent implements OnInit {

  recepieDetailsReceived!: Recepie;
  id!: number;
  constructor(private recepieService: RecepieService,
              private route: ActivatedRoute,
              private router: Router) {

              }

  ngOnInit(): void{
    /*
    this line also can get the id, but in runtime, if param changes it will not able to detect
     this.id = this.route.snapshot.params[' id '];
     */
     this.route.params.subscribe(
          (param: Params) => {
                this.id = +param['id'];
                this.recepieDetailsReceived = this.recepieService.getRecipeById(this.id);
            console.log("recepie details component");
            });
  }

  onManageClick(e: any){
    this.recepieService.addRecepieIngredients(this.recepieDetailsReceived.ingredients)
  }

  onEditClick() {
      this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route})
  }

  onDeleteClick() {
    this.recepieService.deleteRecepie(this.id);
    this.router.navigate(['/recipes'], {relativeTo: this.route});
  }

}
