import { AuthService } from './auth.service';
import { Recepie } from './../../recepies/model/recepie.model';
import { RecepieService } from './recepie.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { UserModel } from '../../auth/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient,
    private recepieService: RecepieService,
    private authService: AuthService) { }

  storeRecepie() {
    const recepie = this.recepieService.getRecepie();
    this.http.put('https://recepie-book-5e4a9-default-rtdb.firebaseio.com/recepies.json', recepie).
      subscribe(response => {

      })
  }

  fetchStorage() {
    return this.http.get<Recepie[]>('https://recepie-book-5e4a9-default-rtdb.firebaseio.com/recepies.json').pipe(
      map(recepies => {
        return recepies.map(recepie => {
          return { ...recepie, ingredients: recepie.ingredients ? recepie.ingredients : [] }
        })
      }
      ), tap(recepies => {
        this.recepieService.fetchRecepie(recepies);
      }));
  }
}
