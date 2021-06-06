import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokePageComponent } from './compenents/joke-page/joke-page.component';
import { JokeTypeFillterComponent } from './compenents/joke-type-fillter/joke-type-fillter.component';
import { SearchPageComponent } from './compenents/search-page/search-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchPageComponent },
  { path: 'joke/:keyword/:index', component: JokePageComponent },
  { path: 'joke/:type/:keyword/:index', component: JokeTypeFillterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
