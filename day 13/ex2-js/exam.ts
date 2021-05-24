import { Question } from "./question";

export class Exam {

    private questions: Question[] = [];

    

    addQuestion(question:Question): void{
        this.questions.push(question);
    }

    print(): void{
        this.questions.forEach(question => {
            console.log(question.caption);
            question.answers.forEach(answer => {
                console.log(answer);
                              
            });
            console.log("------------------------------------");
        });
    }

    grade(answers: number[]): number {
        let totalCorrect = 0;

        
        for (let i = 0; i < this.questions.length; i++) {
            let question = this.questions[i];
            let answer = answers[i];


                if (answer === question.correctIndex) totalCorrect++;
            
        }


        return totalCorrect / this.questions.length * 100;
    }

}