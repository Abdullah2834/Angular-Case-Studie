import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AuthService } from './service/authService';
import { CREATE_OFFER, OFFERS_PAGE } from './constants/routePath';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  isLogin:any;
  isOfferPage:any = window.location.pathname === `/${OFFERS_PAGE}`? true : false;
  isCreateOfferPage:any=  window.location.pathname=== `/${CREATE_OFFER}`? true : false;;
  constructor(private authService: AuthService){}
   
  ngOnInit(){
      this.authService.currentStatus$.subscribe(status => {this.isLogin = status})
  }
}
