import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoList } from 'src/app/core/models/TodoList.model';
import { DataService } from 'src/app/core/services/data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists$!: Observable<TodoList[]>;

  constructor(private data:DataService,
             private router:Router) { }

  ngOnInit(): void {
    this.lists$ = this.data.getLists();

  }

  goToList(id:number){
    this.router.navigate(['lists', id])
  }

  // addList(id:number){
  //   this.lists$.pipe(
  //     map(list =>
  //       {
  //         let id = list.slice(-1)[0].id;
  //         this.router.navigate(['lists', id]);
  //     }
  //         ))}
  addList(){
    this.router.navigate(['lists', "new" , 'edit'])
  }

}
