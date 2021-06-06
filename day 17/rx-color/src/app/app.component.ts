import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { GameServiceService } from './services/game-service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  computerColor$! : Observable<string>;
  myColor$! : Observable<string>;
  seccess$! : Observable<boolean>;

  constructor(private gameServiceService :GameServiceService){}

  ngOnInit(): void {
    let r$ = this.gameServiceService.GetRed();
    let g$ = this.gameServiceService.GetGreen();
    let b$ = this.gameServiceService.GetBlue();

    this.computerColor$=this.gameServiceService.GetComputerColor().pipe(
        map(comp => this.rgbToCss(comp)));

    this.myColor$ = combineLatest([r$, g$, b$]).pipe(
        map(tpl => this.rgbToCss(tpl)));
    this.seccess$= combineLatest([this.computerColor$, this.myColor$]).pipe(
        map(s=> s[0]===s[1]));



  }
  setRandomColor(){
    this.gameServiceService.RandomizeColor();
  }

  private rgbToCss(rgb: [Number,Number,Number]) {
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
}





}
