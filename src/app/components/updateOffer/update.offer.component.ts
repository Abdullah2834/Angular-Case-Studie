import { CommonModule } from "@angular/common";
import { Component, ElementRef, HostListener, Input, SimpleChanges } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";


@Component({
    selector: "update-offer",
    standalone: true,
    imports: [CommonModule,ReactiveFormsModule],
    templateUrl: "./update.offer.component.html",
    styleUrls: ["./update.offer.component.scss"]
})

export class UpdateOfferComponent{
   updateOfferForm!:FormGroup;
   showError:boolean = false;
   @Input() isOpenVal:any;
   @Input() id:any;
   @Input() closeLb:any;
   @Input() toggleLb:any;
   @Input() currentData:any;
   getData:any = JSON.parse(localStorage.getItem("offerData") || "[]")
   formData:any = []
   updatedData:any=[]
   
   constructor(private element:ElementRef){}

   ngOnInit(){
    this.updateOfferForm = new FormGroup({
        offerTitle: new FormControl("",[Validators.required]),
        offerDesc: new FormControl("",[Validators.required])
    })
   
   }

   ngOnChanges(changes: SimpleChanges) {
    if (changes['currentData'] && changes['currentData'].currentValue) {
      this.setFormData();
    }
  }

  updateData(){
    let updatedData = {
        id: this.currentData.id,
        offerTitle: this.updateOfferForm.value.offerTitle,
        offerDesc: this.updateOfferForm.value.offerDesc
    };
    let index = this.getData.findIndex((data:any)=>data.id === updatedData.id)
    
    if(index !== -1){
        
        this.getData[index].offerTitle = updatedData.offerTitle
        this.getData[index].offerDesc = updatedData.offerDesc
        localStorage.setItem("offerData",JSON.stringify(this.getData))
        this.closeLb()
        
        
       
    }
  }

   setFormData(){
    this.formData={
        title: this.currentData.offerTitle,
        desc: this.currentData.offerDesc
    }
   }
   

   @HostListener("document: click",["$event"])
        outsideClick(e:Event){
        if(this.isOpenVal && !this.element.nativeElement.contains(e.target)){
            this.isOpenVal=false
        }
    }

    onSubmit(){
        if(this.updateOfferForm.invalid){
           this.showError = true
        }else{
           this.showError = false
           this.updateData()
        }
    }
    
}