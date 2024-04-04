import { RecepieService } from './../../shared/service/recepie.service';
import { Recepie } from './../model/recepie.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'; 

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.scss']
})
export class RecepiesComponent implements OnInit, OnDestroy {

  // recepieDetails:Recepie = {} as Recepie;
  // showSelectedRecepie:boolean = false;
  recepieSelectedSubscription!: Subscription;
  constructor(private recepieService: RecepieService) { }

  ngOnInit(): void {
 /*the code below is to emit the selected to details component, this can be achivey by routing
   this.recepieSelectedSubscription = this.recepieService.recepieSelected.subscribe(
      (recepie:Recepie)=>{
        this.recepieDetails = recepie;
        this.showSelectedRecepie = true;
      }
    ) */


  }

  ngOnDestroy(): void{
    // this.recepieSelectedSubscription.unsubscribe();
  }

}
