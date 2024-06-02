import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CREATE_OFFER, LOGIN, OFFERS_PAGE } from './constants/routePath';

import { OffersComponent } from './pages/offers/offers.component';
import { CreateOfferComponent } from './pages/createOffer/create.offer.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  {path: LOGIN, component: LoginComponent},
  {path: OFFERS_PAGE, component: OffersComponent},
  {path: CREATE_OFFER, component: CreateOfferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{initialNavigation: 'enabledBlocking'})],
 
  exports: [RouterModule]
})

export class AppRoutingModule { }
