
import { CommonModule } from "@angular/common";
import { Component, Input, Output } from "@angular/core";
import { FormControl, FormGroup,ReactiveFormsModule, Validators } from "@angular/forms";
import { OFFERS_PAGE } from "src/app/constants/routePath";

import { AuthService } from "src/app/service/authService";


@Component({
    selector: "app-login",
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
})

export class LoginComponent{
    constructor (private authService: AuthService){}
    loginForm!: FormGroup; 
    showError:boolean = false;
    userName:any = localStorage.setItem("userName","Abdullah");
    password:any = localStorage.setItem("password","abdullah123");
    getUserName:any = localStorage.getItem("userName");
    getPassword:any = localStorage.getItem("password");
   
    

    ngOnInit(){
        this.loginForm = new FormGroup({
            userName: new FormControl("",
            [Validators.required],
        ),
            password: new FormControl("",
            [Validators.required])
        })
    }

    ngOnChanges(){
        this.onSubmit()
    }

    onSubmit(){
        if(this.loginForm.value.userName === this.getUserName && this.loginForm.value.password === this.getPassword) {
            this.showError = false
            this.authService.changeStatus(1)
            window.location.replace(OFFERS_PAGE)
        }else{
            this.showError = true
            this.authService.changeStatus(0)
        }
    }
}

