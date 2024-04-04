import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './../shared/service/auth.service';
import { DataStorageService } from './../shared/service/data-storage.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor(private dataStorageService: DataStorageService, private authService: AuthService,
              private router: Router) { }
  isAuthenticated = false;
  authSubscription!: Subscription;

  ngOnInit(): void {
    this.authSubscription = this.authService.user.subscribe(user=>{
      this.isAuthenticated = !!user;
      console.log(this.isAuthenticated);
    })
  }

  onStoreRecepie() {
    this.dataStorageService.storeRecepie();
  }

  onFetchData() {
    this.dataStorageService.fetchStorage().subscribe();
  }

  onLogout() {
    this.authService.logOut();
    this.router.navigate(['/auth']);
  }

  ngOnDestroy(){
    this.authSubscription.unsubscribe();
  }
}
