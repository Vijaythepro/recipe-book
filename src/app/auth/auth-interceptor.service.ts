import { UserModel } from './model/user.model';
import { exhaustMap, take} from 'rxjs/operators';
import { AppRoutingModule } from './../app-routing.module';
import { AuthService } from './../shared/service/auth.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';


@Injectable()

export class AuthInterceptor implements HttpInterceptor{
    constructor(private authService: AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): any{
        return this.authService.user.pipe(take(1), exhaustMap( user => {
            if(!user){
                return next.handle(req);
            }
            const modifiedReq = req.clone({
                params: new HttpParams().set('auth', user.token)});
            return next.handle(modifiedReq);
        }));
    }
}
