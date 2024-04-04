import { Router } from '@angular/router';
import { UserModel } from './../../auth/model/user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from './authResponse';
import { throwError, BehaviorSubject, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  private expirationTimer: any;
  user = new BehaviorSubject<any>(null);

  signUp(email: string, password: string) {
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDbs_IRJXVv8K-BcJk5rgXoxFSr5urnQ58',
      {
        email: email,
        password: password,
        returnSecureToken: true
      })
      .pipe(catchError(this.handleError), tap(res => {
        this.handleAuthentication(res.email, res.localId, res.idToken, +res.expiresIn)
      }));
  }

  signIn(email: string, password: string) {
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDbs_IRJXVv8K-BcJk5rgXoxFSr5urnQ58',
      {
        email: email,
        password: password,
        returnSecureToken: true
      })
      .pipe(catchError(this.handleError), tap(res => {
        this.handleAuthentication(res.email, res.localId, res.idToken, +res.expiresIn)
      }));
  }


  autoLogIn() {
    const userData: { email: string, id: string, _token: string, _tokennExpirationDate: string } = JSON.parse(localStorage.getItem('userData') || '{}');
    if (!userData) {
      return;
    }
    const loggedUser = new UserModel(userData.email, userData.id, userData._token, new Date(userData._tokennExpirationDate));
    if (loggedUser.token) {
      this.user.next(loggedUser);
    }
    const expirationDuration = new Date(userData._tokennExpirationDate).getTime() - new Date().getTime();
    this.autoLogOut(expirationDuration);
  }

  logOut() {
    this.user.next(null);
    localStorage.removeItem('userData');
    if(this.expirationTimer){
      clearTimeout(this.expirationTimer);
    }
    console.log(this.expirationTimer);  
  }

  autoLogOut(expirationTime: number) {
    this.expirationTimer = setTimeout(() => {
      this.logOut();
    }, expirationTime)
  }


  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = "An Unknown error occured";
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case "EMAIL_EXISTS":
        errorMessage = "This email  is already exist";
        break;
      default:
        errorMessage = errorRes.error.error.message;
    }
    return throwError(errorMessage);
  }

  private handleAuthentication(email: string, id: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new UserModel(email, id, token, expirationDate);
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
    this.autoLogOut(expiresIn * 1000);
  }


}
