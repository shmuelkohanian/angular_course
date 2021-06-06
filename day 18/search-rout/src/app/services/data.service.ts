import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Joke } from '../models/joke.model';
import { distinct, map } from 'rxjs/operators';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class dataService {
  readonly baseUrl: string = 'http://localhost:3000';
  keyword!: string
  type!:string

  constructor(private http: HttpClient) { }

  getJoke(keyword: string, index: number): Promise<Joke>{

    const url = `${this.baseUrl}/jokes?q=${keyword}&_start=${index}&_end=${index+1}`;
     //this.keyword = keyword;
     return this.http
    .get<Joke[]>(url).pipe(
    map(m=>m[0]))
    .toPromise();
  }

  getNumberOfJokes(keyword:string): Promise<number> {
    const url = `${this.baseUrl}/jokes?q=${keyword}`;
    return this.http
        .get<Joke[]>(url)
        .pipe(map(list => list.length))
        .toPromise();
  }

  getJokeWithType(type :string, keyword: string, index: number):Promise<Joke>{
    const url = `${this.baseUrl}/jokes?q=${keyword}&type=${type}&_start=${index}&_end=${index+1}`;
    this.keyword = keyword;
    this.type= type;
    let x= type;
    return this.http
   .get<Joke[]>(url).pipe(
    map(m=>m[0]))
   .toPromise();
  }

  getNumberOfTypeJokes(type :string, keyword: string): Promise<number> {
    const url = `${this.baseUrl}/jokes?q=${this.keyword}&type=${this.type}`;

    return this.http
        .get<Joke[]>(url)
        .pipe(map(list => list.length))
        .toPromise();
  }

  getTypes():Promise<string[]>{
    const url = `${this.baseUrl}/jokes`;

    return this.http
    .get<Joke[]>(url)
    .pipe(map(list => list.map(m=>m.type).filter((item,i,ar)=>ar.indexOf(item)===i))).toPromise();
  }

  
  hasdata(num: number){
    console.log("1123456789");
    console.log(typeof(num));
    console.log(num)
    if(num==null){
      console.log("404-undefined")
    }
    return num;
  }




}


