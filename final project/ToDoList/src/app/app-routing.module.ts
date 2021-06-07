import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditListComponent } from './components/edit-list/edit-list.component';
import { HomeComponent } from './components/home/home.component';
import { ItemsComponent } from './components/items/items.component';
import { ListsComponent } from './components/lists/lists.component';
import { ShowListComponent } from './components/show-list/show-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home' , component:HomeComponent},
  {path: 'lists' , component: ListsComponent},
  { path: 'lists/:id', component: ShowListComponent },
  { path: 'lists/:id/edit', component: EditListComponent},
  {path: 'items' , component: ItemsComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
