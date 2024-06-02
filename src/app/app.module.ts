import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AuthService } from './service/authService';
import { OffersComponent } from './pages/offers/offers.component';
import { CreateOfferComponent } from './pages/createOffer/create.offer.component';
import { SuccessComponent } from './components/success/success.component';
import { UpdateOfferComponent } from './components/updateOffer/update.offer.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OffersComponent,
    CreateOfferComponent,
    LoginComponent,
    HeaderComponent,
    AppRoutingModule,
    SidebarComponent,
    SuccessComponent,
    UpdateOfferComponent
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
