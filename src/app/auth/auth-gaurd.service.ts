import { AuthService } from './../shared/service/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class AuthGaurd implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        boolean | Observable<boolean | UrlTree> | Promise<boolean> {
        return this.authService.user.pipe(take(1) ,map(user =>{
            if(user){
                return !!user;
            }
               return this.router.createUrlTree(['/auth']);         
        }))
    }
}