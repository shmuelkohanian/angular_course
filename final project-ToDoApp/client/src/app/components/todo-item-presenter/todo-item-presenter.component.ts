import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from 'src/app/core/models/TodoItem.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-todo-item-presenter',
  templateUrl: './todo-item-presenter.component.html',
  styleUrls: ['./todo-item-presenter.component.css']
})
export class TodoItemPresenterComponent implements OnInit {

  @Input() caption: string = '';
  @Input() isCompleted: boolean=false;
  @Output() complete = new EventEmitter<boolean>();

  constructor(private data:DataService) { }
  ngOnInit(): void {
  }

  update(){
    console.log('Update');

      this.isCompleted =  !this.isCompleted//event.target.checked;
      console.log(this.isCompleted);

      this.complete.emit(this.isCompleted);
  }

}
