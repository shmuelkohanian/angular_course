import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,  Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import {  map, switchMap} from 'rxjs/operators';
import { TodoList } from 'src/app/core/models/TodoList.model';
import { DataService } from 'src/app/core/services/data.service';
import { requiredAndTouched, wordsCountValidator } from 'src/app/core/validations/general-validators';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit, OnDestroy {

  colorList: string[] = [
    'red', 'green', 'blue', 'steelblue', 'magenta', 'brown', 'orange'
  ];

  iconList: string[] = [
    '\uf07a', '\uf073', '\uf6d3', '\uf77c', '\uf11b', '\uf1fd','\uf434', '\uf09d', '\uf06b', '\uf20b'
  ];
id$!: Observable<number>
list$!: Observable<TodoList>;
listForm!: FormGroup;
subscription = new Subscription;


  constructor(
    private data:DataService,
    private route: ActivatedRoute,
    private router: Router,
    private formBilder: FormBuilder) { }


  ngOnInit(): void {
    this.id$ = this.route.params.pipe(
      map(prms =>+prms['id']));

    this.list$ = this.id$.pipe(
        map(id => this.data.getList(id)),
        switchMap(a => a)
      )

      this.subscription =  this.list$.subscribe(list => {
        if(!list){
          list = {
            id: -1,
            caption: '',
            description: '',
            image: '',
            color: ''
          }
        }
          this.buildForm(list)
      })


  }


    buildForm(list: TodoList){
      this.listForm = this.formBilder.group({
          caption: [list.caption, [Validators.required, requiredAndTouched]],
          description: [list.description, [Validators.required, requiredAndTouched,  wordsCountValidator(10), Validators.minLength(30)]],
          image: [list.image, [Validators.required]],
          color: [list.color, [Validators.required]],
        })
    }

  async save(){
    let id = +this.route.snapshot.params['id']
    let list = {
      ...this.listForm.value,
      id: id
    };
    console.log(list)

      if(id===-1){
        list.id=0;
          await this.data.postList(list);
       }
       else{
          await this.data.putList(list);
       }
       this.router.navigate(['lists']);
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  get(fieldName: string) {
    return this.listForm.get(fieldName);
}






}
