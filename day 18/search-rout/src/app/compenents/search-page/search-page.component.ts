import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { dataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  types$!: Promise<string[]>;
  constructor(private router: Router,private data: dataService) {
    this.types$= this.data.getTypes();
  }
  thistypes = ['general','programming','knock-knock'];

  startSearch(joke:string, type: string){
     if(type==="ALL"){
       this.router.navigate(['joke', joke , 0]);
     }
     else{
      this.router.navigate(['joke',type, joke , 0]);
     }
  }


  ngOnInit(): void {
  }
}
