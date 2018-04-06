
import { Injectable } from "@angular/core";
//import { Headers, Response, Http } from "@angular/http";
import { HttpClient, HttpHeaders, HttpResponse, HttpParams} from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { Config } from "../config";
import { Grocery } from "./grocery";




@Injectable()
export class GroceryListService {
  baseUrl = Config.apiUrl + "appdata/" + Config.appKey + "/Groceries";

  private items = new Array<Grocery>(
    { id: "1", name: "Banany" },
    { id: "2", name: "Pomaracze" },
    { id: "3", name: "Cukir" },
    { id: "4", name: "Chleb" }
  );
  apiKey = "?apiKey=DJPhE_TBTU9RPRsgBLtr7C8tMfOJGkwV";
  mongoDb = "https://api.mlab.com/api/1/databases/products/collections/";

  constructor(private http: HttpClient) {}


  load() {

   var groceryList: Array<Grocery> = [];

   return this.http.get(this.mongoDb + "Grocery" + this.apiKey)
   
  }

  getCommonHeaders () {
    let headers = new HttpHeaders({
      Authorization: "Kinvey " + Config.token
    });
    return headers;
  }


  add(grocery: Grocery){
    return this.http.post(this.mongoDb + "Grocery" + this.apiKey, grocery)
  }

  // handleErrors(error: Response) {
  //   console.log(JSON.stringify(error.json()));
  //   return Observable.throw(error);
  // }
}
