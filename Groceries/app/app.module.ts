import {NativeScriptHttpClientModule} from 'nativescript-angular/http-client';
import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppComponent } from "./app.component";
import { NativeScriptHttpModule } from 'nativescript-angular/http';


@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptHttpClientModule
  ],

  declarations: [AppComponent],

  bootstrap: [AppComponent]
})
export class AppModule {}
