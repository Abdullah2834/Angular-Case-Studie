
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { UpdateOfferComponent } from "../../components/updateOffer/update.offer.component";


@Component({
    selector: "offers",
    standalone: true,
    imports: [CommonModule,UpdateOfferComponent],
    templateUrl: "./offers.component.html",
    styleUrls: ["./offers.component.scss"]
})

export class OffersComponent {
    getData = JSON.parse(localStorage.getItem("offerData")||"[]")
    isOpen:any;
    offerId: any;
    currentNumber:number = 0;
    currentData:any;

    deleteCard(id:any){
        this.getData = this.getData.filter((item:any)=> item.id !== id)
        localStorage.setItem("offerData",JSON.stringify(this.getData))
    }
    
 
    toggleLightbox(id:any){
     this.currentData = this.getData.find((item:any) => item.id === id)
     if(this.currentData){
        this.isOpen = true
        console.log("isOpen",this.isOpen);
        
     }
    }

    closeLb(){
        this.isOpen = false 
    }

    increment(id:any){
        let item = this.getData.find((item:any)=>item.id === id)
        if(item){
            item.offerScore++
            localStorage.setItem("offerData",JSON.stringify(this.getData))
        }  
        return item;
    }

    decrement(id:any){
        let item = this.getData.find((item:any)=>item.id === id)
        if(item){
            item.offerScore--
            localStorage.setItem("offerData",JSON.stringify(this.getData))
        } return item;
    }

    
}

