import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditListComponent } from './components/edit-list/edit-list.component';
import { HomeComponent } from './components/home/home.component';
import { ItemsComponent } from './components/items/items.component';
import { ListsComponent } from './components/lists/lists.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { NoListsGuard } from './core/gards/no-lists.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home' , component:HomeComponent},
  {path: 'lists' , component: ListsComponent,},// canActivate: [NoListsGuard]
  { path: 'lists/:id', component: ShowListComponent },
  { path: 'lists/:id/edit', component: EditListComponent},
  {path: 'items' , component: ItemsComponent},
  { path: '404', component: NotFoundComponent},
  {path: '**' , redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
