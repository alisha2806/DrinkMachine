import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LemonComponent } from './lemon/lemon.component';
import { AppRoutingModule } from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FirstDisplayComponent } from './first-display/first-display.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { ChocolateComponent } from './chocolate/chocolate.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstDisplayComponent,
    LemonComponent,
    CoffeeComponent,
    ChocolateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
