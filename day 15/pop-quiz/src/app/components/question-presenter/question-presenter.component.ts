import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/model/question';


@Component({
  selector: 'app-question-presenter',
  templateUrl: './question-presenter.component.html',
  styleUrls: ['./question-presenter.component.css']
})
export class QuestionPresenterComponent implements OnInit {

  constructor() { }

  @Output()
  selectedAnswer = new EventEmitter<number>();

  @Input()
  question : Question = {
    caption: '',
    answers: [],
    correctAnswer: -1,
    userAnswer: -1
  }



  ngOnInit(): void {
  }

  selectAnswer(answer: number){
    this.selectedAnswer.emit(answer);
  }

}
