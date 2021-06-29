import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';
import { ListsComponent } from './components/lists/lists.component';
import { ItemsComponent } from './components/items/items.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShowListComponent } from './components/show-list/show-list.component';
import { EditListComponent } from './components/edit-list/edit-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    ListsComponent,
    ItemsComponent,
    ShowListComponent,
    EditListComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
