import { RecepieService } from './recepie.service';
import { Recepie } from './../../recepies/model/recepie.model';
import { DataStorageService } from './data-storage.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<Recepie[]> {

  constructor(private dataStorageService: DataStorageService, private recepieService: RecepieService){ }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recepie = this.recepieService.getRecepie();
    if(recepie.length ===0){
       console.log("resolve method calling");
      return this.dataStorageService.fetchStorage();
    }
   else{
     return recepie;
   }

    
  }
}
