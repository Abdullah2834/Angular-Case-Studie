import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CREATE_OFFER, OFFERS_PAGE } from "src/app/constants/routePath";

@Component({
    selector: "sidebar",
    standalone: true,
    imports:[CommonModule,RouterLink],
    templateUrl: "./sidebar.component.html",
    styleUrls: ["./sidebar.component.scss"]
})

export class SidebarComponent{
    offersPage:any = OFFERS_PAGE;
    createOffer:any = CREATE_OFFER;
    isOffersPage:any = window.location.pathname === `/${OFFERS_PAGE}`;
    isCreateOfferPage:any = window.location.pathname === `/${CREATE_OFFER}`;
   
}