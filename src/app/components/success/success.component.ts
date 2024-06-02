import { CommonModule } from "@angular/common";
import { Component, ElementRef, Input, ViewChild } from "@angular/core";


@Component({
    selector: "success",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./success.component.html",
    styleUrls: ["./success.component.scss"]
})

export class SuccessComponent{
   @ViewChild("scssMsg") scssMsg?:ElementRef;
   @Input() showMsg:any; 
}