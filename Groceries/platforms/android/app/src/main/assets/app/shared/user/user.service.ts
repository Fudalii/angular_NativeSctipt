import { Injectable } from "@angular/core";
//import { Headers, Response, Http } from "@angular/http";
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { User } from "./user";
import { Config } from "../config";

@Injectable()
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}

  register(user: User) {
    var userObj ={
        username: user.email,
        email: user.email,
        password: user.password
    }
    return this.http.post(Config.apiUrl + "user/" + Config.appKey, userObj, {
      headers: this.createRequestOptions()
    });
  }

  private createRequestOptions() {
    let headers = new HttpHeaders({
      Authorization: Config.authHeader
    });
    return headers;
  }

  login(user: User) {
    var userObj ={
        username: user.email,
        password: user.password
    }

    return this.http
      .post(Config.apiUrl + "user/" + Config.appKey + "/login", userObj, {
        headers: this.createRequestOptions()
      })
      .subscribe( res => {
        
          console.dir(res);
          this.router.navigate(["/list"]);
          var xyz = JSON.parse(JSON.stringify(res))
          Config.token = xyz._kmd.authtoken;  
        }, error => alert(error));
   
  }
}
