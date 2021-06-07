import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { Observable } from 'rxjs';
import {  map, switchMap, tap} from 'rxjs/operators';
import { TodoList } from 'src/app/core/models/TodoList.model';
import { DataService } from 'src/app/core/services/data.service';
@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {
id$!: Observable<string>
list$!: Observable<TodoList>;
  constructor(
    private data:DataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id$ = this.route.params.pipe(
      map(prms =>prms['id']));

      this.list$ = this.id$.pipe(
         tap(a => console.log('tap: ',a)),
        map(id => this.data.getList(+id)),
        switchMap(a => a)
      )

      this.list$.subscribe(a => {
        console.log('subscribe', a)
      })
  }


print(id: string){
  console.log(id)

}
}
