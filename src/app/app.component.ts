import { AuthService } from './shared/service/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService){}
  title = 'shopping-hub';
  ngOnInit(){
      this.authService.autoLogIn();
  }
}
