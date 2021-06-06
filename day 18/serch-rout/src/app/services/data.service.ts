import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Joke } from '../models/joke.model';
import { map } from 'rxjs/operators';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class dataService {
  readonly baseUrl: string = 'http://localhost:3000';
  keyword!: string
  type!:string

  constructor(private http: HttpClient) { }

  getJoke(keyword: string, index: number): Promise<Joke[]>{

    const url = `${this.baseUrl}/jokes?q=${keyword}&_start=${index}&_end=${index+1}`;
     this.keyword = keyword;
     return this.http
    .get<Joke[]>(url)
    .toPromise();
  }

  getNumberOfJokes(): Promise<number> {
    const url = `${this.baseUrl}/jokes?q=${this.keyword}`;
    return this.http
        .get<Joke[]>(url)
        .pipe(map(list => list.length))
        .toPromise();
  }

  getJokeWithType(type :string, keyword: string, index: number):Promise<Joke[]>{
    const url = `${this.baseUrl}/jokes?q=${keyword}&type=${type}&_start=${index}&_end=${index+1}`;
    this.keyword = keyword;
    this.type= type;
    let x= type;
    return this.http
   .get<Joke[]>(url)
   .toPromise();
  }

  getNumberOfTypeJokes(): Promise<number> {
    const url = `${this.baseUrl}/jokes?q=${this.keyword}&type=${this.type}`;

    return this.http
        .get<Joke[]>(url)
        .pipe(map(list => list.length))
        .toPromise();
  }






}


