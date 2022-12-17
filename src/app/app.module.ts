import "bootstrap";

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home/home.component";
import { BeerService } from "./common/services";
import { GlobalBeerState, GLOBAL_BEER_STATE } from "./common/states";
import { RxState } from "@rx-angular/state";
import { BeerCardComponent } from "./components/beer-card/beer-card.component";



@NgModule({
  declarations: [
    BeerCardComponent,
    HomeComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    BeerService,
    { provide: GLOBAL_BEER_STATE, useFactory: ()=> new RxState<GlobalBeerState>() },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
