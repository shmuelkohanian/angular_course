import { Component, Input, OnInit } from '@angular/core';
import { GameServiceService } from 'src/app/services/game-service.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  constructor(private gameServiceService :GameServiceService) { }
  @Input()
  colorName: string ="";


  ngOnInit(): void {
  }
  validData(value:string):number{
    let val = Math.round(Number(value));
    return Math.min(255,Math.max(0,val))
  }
  setR(color:string){
    let temp =this.validData(color);
    this.gameServiceService.SetRed(temp);
  }

  setG(color:string){
    let temp =this.validData(color);
    this.gameServiceService.SetGreen(temp);
  }

  setB(color:string){
    let temp =this.validData(color);
    this.gameServiceService.SetBlue(temp);
  }

}
