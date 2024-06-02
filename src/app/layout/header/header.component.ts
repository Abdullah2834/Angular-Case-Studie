
import { Component, Input } from "@angular/core";
import { LOGIN } from "../../constants/routePath";
import { CommonModule } from "@angular/common";
import { AuthService } from "src/app/service/authService";





@Component({
    selector: "header",
    standalone : true,
    imports: [CommonModule],
    templateUrl: "header.component.html",
    styleUrls: ["./header.component.scss"],
})

export class HeaderComponent {
    isLogin:any;
    title:string = "Moneytolia";
    logo:any= "https://media.licdn.com/dms/image/D4D0BAQHvCxtz8PKF1A/company-logo_200_200/0/1703594711119/moneytolia_logo?e=1724889600&v=beta&t=0g5J8-zAPkI5cuM6kbXI4ZYeus3UegYihPWDDhfC-Wc";

    constructor(private authService: AuthService){}

    ngOnInit(){
        this.authService.currentStatus$.subscribe(status => {this.isLogin = status})
    }

    logOut(){
        this.authService.changeStatus(0);
        window.location.href = LOGIN;
      
    }
}

