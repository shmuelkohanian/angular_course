"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exam_1 = require("./exam");
console.log("sskjsfd");
var E = new exam_1.Exam;
E.addQuestion({
    caption: 'How much is 2 times 2?',
    answers: ['0', '4', '2', '3'],
    correctIndex: 1
});
E.addQuestion({
    caption: 'How much is 5 times 3?',
    answers: ['15', '21', '12', '17'],
    correctIndex: 1
});
E.addQuestion({
    caption: 'How much is 6 times 3?',
    answers: ['20', '24', '12', '18'],
    correctIndex: 3
});
E.addQuestion({
    caption: 'How much is 2 times 3?',
    answers: ['20', '8', '6', '9'],
    correctIndex: 2
});
E.print();
var ans1 = [1, 1, 2, 3];
var ans2 = [0, 4, 3, 3];
var ans3 = [1, 1, 3, 2, 4, 7, 4];
console.log(ans1);
console.log(E.grade(ans1));
console.log(ans2);
console.log(E.grade(ans2));
console.log(ans3);
console.log(E.grade(ans3));
//# sourceMappingURL=main.js.map