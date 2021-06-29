import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsPresenterComponent } from './components/errors-presenter/errors-presenter.component';
import { TodoItemPresenterComponent } from './components/todo-item-presenter/todo-item-presenter.component';






@NgModule({
  declarations: [
    ErrorsPresenterComponent,
    TodoItemPresenterComponent

  ],
  exports: [
    ErrorsPresenterComponent,
    TodoItemPresenterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }


