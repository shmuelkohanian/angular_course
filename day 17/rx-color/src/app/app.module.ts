import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { BoxColorComponent } from './components/box-color/box-color.component';

@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
    BoxColorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
