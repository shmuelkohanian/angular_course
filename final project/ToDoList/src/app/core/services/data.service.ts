import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoList } from '../models/TodoList.model';
import { HttpClient } from '@angular/common/http';
import {  map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getLists():Observable<TodoList[]>{
    const url = `${this.baseUrl}/lists`;
    return this.http.get<TodoList[]>(url);
  }

  getList(id: number): Observable<TodoList>{
    const url = `${this.baseUrl}/lists`
    let res = this.http.get<TodoList[]>(url)
    .pipe(
      map(lists => {
        let list:TodoList = lists.filter(list => list.id === id)[0]
        console.log('list service: ', list)
        if(list === undefined){
          list = { id: -1, caption: '',descrption: '',image:'',url: '',color: ''}
        }
        return list;
      })
    )
    return res;
  }
}
