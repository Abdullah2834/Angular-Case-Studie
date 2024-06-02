import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
   providedIn: 'root',
 })
 export class AuthService {
   private currentStatusSubject = new BehaviorSubject<any>(typeof localStorage !== "undefined" ? localStorage.getItem("isLogin"):0);
   currentStatus$ = this.currentStatusSubject.asObservable();
 
   changeStatus(status: number) {
     this.currentStatusSubject.next(status.toString());
     if(typeof localStorage !== "undefined" ){
       localStorage.setItem("isLogin",status.toString());
     }
   }
   
   
 }