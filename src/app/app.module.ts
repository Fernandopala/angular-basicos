
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.modulo';
import { ContadorModule } from './contador/contador.module';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [
    AppComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
