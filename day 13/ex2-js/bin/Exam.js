"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exam = void 0;
var Exam = /** @class */ (function () {
    function Exam() {
        this.questions = [];
    }
    Exam.prototype.addQuestion = function (question) {
        this.questions.push(question);
    };
    Exam.prototype.print = function () {
        this.questions.forEach(function (question) {
            console.log(question.caption);
            question.answers.forEach(function (answer) {
                console.log(answer);
            });
            console.log("------------------------------------");
        });
    };
    Exam.prototype.grade = function (answers) {
        var totalCorrect = 0;
        for (var i = 0; i < this.questions.length; i++) {
            var question = this.questions[i];
            var answer = answers[i];
            if (answer === question.correctIndex)
                totalCorrect++;
        }
        return totalCorrect / this.questions.length * 100;
    };
    return Exam;
}());
exports.Exam = Exam;
//# sourceMappingURL=exam.js.map