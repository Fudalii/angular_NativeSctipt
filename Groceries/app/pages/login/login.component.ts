import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { UserService } from "../../shared/user/user.service";
import { User } from "../../shared/user/user";
import { Router } from "@angular/router";
import { Page } from 'ui/page';
import { Color } from "color";
import { View } from "ui/core/view";


 @Component({
   selector: "my-app",
   providers: [UserService],
   templateUrl: "./pages/login/login.html",
   styleUrls: ["./pages/login/login-common.css", "./pages/login/login.css"]
 })
 export class LoginComponent implements OnInit {
   
   @ViewChild("container") container: ElementRef;

   user: User;
   isLoggingIn = true;

   constructor(private userService: UserService, private router: Router, private page: Page) {
     this.user = new User();
   }

   ngOnInit(): void {
     this.user.email = 'kontakt@cvsklep.pl';
     this.user.password = 'test';
     this.login();
     this.page.actionBarHidden = true;
     this.page.backgroundImage = "res://bg_login";

   }

   submit() {
     if (this.isLoggingIn) {
       this.login();
     } else {
       this.signUp();
     }
   }

   login() {
     this.userService.login(this.user);
   }

   signUp() {
     this.userService.register(this.user).subscribe(() => {
         alert("Konto utworzone pomyslnie.");
         this.toggleDisplay();
       }, err => alert(err));
   }

   toggleDisplay() {
     this.isLoggingIn = !this.isLoggingIn;
     let container = <View>this.container.nativeElement;
     container.animate({
       backgroundColor: this.isLoggingIn
         ? new Color("white")
         : new Color("#301217"),
       duration: 200
     });
   }
 }
