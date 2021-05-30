import { Component } from '@angular/core';
import { Questions } from 'src/app/model/questions';
import { Question } from './model/question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Pop Quiz';
  answeredQuestions:Question[] = [];
  currentQuestion:Question = Questions[0];
  currentIndex:number = 0;
  quizOver:boolean =false;

  goNextQuestion(answerIndex: number){
    this.currentQuestion.userAnswer = answerIndex;
    this.answeredQuestions.push(this.currentQuestion);
    this.currentIndex++;
    this.currentQuestion = Questions[this.currentIndex];
    this.quizOver = !(this.currentQuestion);
  }

}
