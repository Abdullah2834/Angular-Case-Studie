
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { SuccessComponent } from "src/app/components/success/success.component";


@Component({
    selector: "create-offer",
    standalone: true,
    imports:[CommonModule, ReactiveFormsModule, SuccessComponent],
    templateUrl: "./create.offer.component.html",
    styleUrls: ["./create.offer.component.scss"],
})

export class CreateOfferComponent {
    createOfferForm!:FormGroup;
    showError:boolean = false;
    date:any = new Date();
    currentDate: any;
    currentNumber:number = 0;
    offerData:any = []
    isAdded:any;
    showMsg:boolean = false;


    ngOnInit(){
        this.currentDate = this.date.toLocaleDateString();
        this.createOfferForm = new FormGroup({
            offerTitle: new FormControl("",[Validators.required]),
            offerDesc: new FormControl("",[Validators.required]),
            currentDate: new FormControl(this.currentDate),
            offerScore: new FormControl(this.currentNumber)
        })
    }

    addOfferData(){
        let currentDate = this.date.toLocaleDateString();
        let id = Math.floor(Math.random()*100)
        this.offerData = JSON.parse(localStorage.getItem("offerData") || '[]');
        this.offerData.push({
            id:id,
            offerTitle: this.createOfferForm.value.offerTitle,
            offerDesc: this.createOfferForm.value.offerDesc,
            offerDate: this.createOfferForm.value.currentDate,
            offerScore: this.currentNumber
        })
        this.isAdded = true;
        this.createOfferForm.reset()
        this.createOfferForm.patchValue({currentDate})
        localStorage.setItem("offerData",JSON.stringify(this.offerData))
    }

    showMsgFunc(){
        this.showMsg= true;
        setTimeout(()=>{
            this.showMsg=false
        },2000)
    }


    onSubmit(){
        if(this.createOfferForm.invalid){
            this.showError=true
        }else{
            this.showError= false    
            this.addOfferData()
            this.showMsgFunc()
        }
    }

    
    

}
