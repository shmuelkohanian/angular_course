import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService implements OnInit{
  private colorBox$ = new BehaviorSubject<[number, number, number]>([40,150,170]);
  private r$ = new BehaviorSubject(0);
  private g$ = new BehaviorSubject(0);
  private b$ = new BehaviorSubject(0);
  private r : number =0
  private g : number =0
  private b : number =0


  constructor() { }
  ngOnInit(): void {
  }


  GetRed(): Observable<number>{
    console.log("red -",this.r$);
    return this.r$.asObservable();
  }
  GetGreen(): Observable<number>{
    return this.g$.asObservable();
  }
  GetBlue(): Observable<number>{
    return this.b$.asObservable();
  }
  SetRed(value: number): void{
    this.r=value;
    this.r$.next(this.r);
  }
  SetGreen(value: number): void{
    this.g=value;
    this.g$.next(this.g);
  }
  SetBlue(value: number): void{
    this.b=value;
    this.b$.next(this.b);
  }
   GetComputerColor(): Observable<[number, number, number]>{
    return this.colorBox$.asObservable();
   }
  RandomizeColor(): void{
    let red = Math.floor(Math.random()*256)
    let green = Math.floor(Math.random()*256)
    let blue = Math.floor(Math.random()*256)
    this.colorBox$.next([red,green,blue]);

  }






}
