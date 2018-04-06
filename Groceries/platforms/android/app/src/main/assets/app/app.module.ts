import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule,
    NativeScriptRouterModule, // routing
    NativeScriptRouterModule.forRoot(routes) // routing i jego nazwa tablicy z app.route
  ],

  declarations: [
    AppComponent,
    navigatableComponents // routing podajhemy w app.routing nazwy komponentów które tu s wstawiane.
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
