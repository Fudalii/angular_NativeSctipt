import { Injectable } from "@angular/core";
import { Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { User } from "./user";
import { Config } from "../config";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  register(user: User) {

    return this.http.post(Config.apiUrl + "user/" + Config.appKey, user, { headers: this.getCommonHeaders() });
      
  
  }

  getCommonHeaders() {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", Config.authHeader);
    return headers;
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}
