import { Router } from '@angular/router';
import { AuthService } from './../shared/service/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  showLoading = false;
  showAlert = false;
  errorMessage:string | null = null;

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmitForm(data: NgForm) {
    this.showLoading = true;
    const email = data.value.email;
    const password = data.value.password;
    if(this.isLoginMode){
        this.authService.signIn(email, password).subscribe(
          res=>{
            console.log(res);
            this.route.navigate(['recipes']);
            this.showLoading = false;
          },
          err =>{
            this.errorMessage = err;
            this.showLoading = false;
          }
        )
       
    } else
    {
      this.authService.signUp(email, password).subscribe(
      response =>{  
        this.showLoading = false;
        this.route.navigate(['recipes']);
        console.log(response);
      },
      errorMesage => {
        this.showLoading = false;
        this.showAlert = true;
        this.errorMessage = errorMesage;
      }
    )
    }
    
    data.reset();
  }

  onClose() {
    this.errorMessage = null;
  }
  
}
