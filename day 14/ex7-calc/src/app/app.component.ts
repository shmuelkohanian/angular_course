import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   a : number = 0;
   b : number = 0;
   sum1: number=0;
   sub1: number=0;
   mult1: number=0;
   results: string[] =[];
   isgo: boolean = false;
   
   sum(): number{
     return this.a+ this.b;
   }

   sub(): number{
    return this.a - this.b;
  }

  mult(): number{
    return this.a * this.b;
  }

  go(a:string,b:string){
    this.isgo = true;
    this.a = Number(a);
    this.b = Number(b);
    this.sum1 =this.sum();
    this.sub1 =this.sub();
    this.mult1 =this.mult();
  }
}
