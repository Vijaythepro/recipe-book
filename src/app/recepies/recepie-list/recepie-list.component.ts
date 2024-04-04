import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { RecepieService } from './../../shared/service/recepie.service';
import { Recepie } from './../model/recepie.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.scss']
})
export class RecepieListComponent implements OnInit, OnDestroy {


  recepies!: Recepie[];
  recepieSubscription!: Subscription;

  constructor(private recepieService: RecepieService,
              private router: Router,
              private route: ActivatedRoute) {
   }

  ngOnInit(): void {
 
   this.recepies = this.recepieService.getRecepie();
   this.recepieSubscription = this.recepieService.recepieAdded.subscribe(
     (recepie: Recepie[]) => {
      this.recepies = recepie;
     }
   );
  }

  onAddNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.recepieSubscription.unsubscribe();
  }
}
