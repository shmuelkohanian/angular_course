import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { TodoList } from 'src/app/core/models/TodoList.model';
import { DataService } from 'src/app/core/services/data.service';
import {  map, switchMap } from 'rxjs/operators';
import { TodoItem } from 'src/app/core/models/TodoItem.model';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { wordsCountValidator } from 'src/app/core/validations/general-validators';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  id$!: Observable<number>
  list$!: Observable<TodoList>;
  items$!: Observable<TodoItem[]>;
  showAskDelete :boolean =false;

  newItemControl!: FormControl;


  constructor(
    private data:DataService,
    private route: ActivatedRoute,
    private router: Router,
    private formBilder: FormBuilder
    ) { }

  ngOnInit(): void {

    this.newItemControl = this.formBilder.control("", [Validators.required, Validators.minLength(10), wordsCountValidator(3),]);

    this.id$ = this.route.params.pipe(
      map(prms =>+prms['id']));

    this.list$= this.id$.pipe(
      map(id=>this.data.getList(id)),
      switchMap(a => a));

    this.items$ = this.id$.pipe(
      map(id=> this.data.getItemsPerListId(id)),
      switchMap(a=>a));
  }




  addList(){
    this.router.navigate(['lists', -1 , 'edit'])
  }

  editList(id:number){
    this.router.navigate(['lists', id , 'edit'])
  }

  async deleteList(id:number){
    await this.data.deleteList(id);
    this.router.navigate(['home']);}

  askDelete(){this.showAskDelete= true;}

  cancelDelete(){this.showAskDelete= false;}


  async addNewItem(id:number){
    let item: TodoItem ={
      "id" :0,
      "caption": this.newItemControl.value,
      "listId": id,
      "isCompleted": false
    }
    await this.data.postItem(item);
    this.list$= this.id$.pipe(
      map(id=>this.data.getList(id)),
      switchMap(a => a));
    this.newItemControl.reset()
  }



    async updateItem(item:TodoItem, event:boolean){
    item.isCompleted = event;
    await this.data.putItem(item);
  }


}


