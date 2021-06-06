import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPageComponent } from './compenents/search-page/search-page.component';
import { JokePageComponent } from './compenents/joke-page/joke-page.component';
import { JokeTypeFillterComponent } from './compenents/joke-type-fillter/joke-type-fillter.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    JokePageComponent,
    JokeTypeFillterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
