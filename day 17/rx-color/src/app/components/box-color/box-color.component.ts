import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameServiceService } from 'src/app/services/game-service.service';

@Component({
  selector: 'app-box-color',
  templateUrl: './box-color.component.html',
  styleUrls: ['./box-color.component.css']
})
export class BoxColorComponent implements OnInit {
  colorBox$! : Observable<[number, number, number]>;


  constructor(private gameServiceService :GameServiceService) { }

  ngOnInit(): void {
  }
  @Input()
  color: string | null = '';
}
