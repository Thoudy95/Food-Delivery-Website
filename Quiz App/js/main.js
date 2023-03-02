const quizData = [
{
    question: "How old is USA?",
    a: "10",
    b: "17",
    c: "26",
    d: "110",
    correct: "c"

}, {
    question: "What is the best remote job according to researches?",
    a: "Programmist",
    b: "Accountant",
    c: "Self-Employed",
    correct: "a"

}, {
    question: "What is the most known German car brand?",
    a: "Audi",
    b: "BMW",
    c: "Lamborghini",
    d: "Toyota",
    correct: "b"




} , {
    question: "What is the easiest programming language to learn?",
    a: "Java",
    b: "Python",
    c: "Javascript",
    d: "C#",
    correct: "c"
} , {
    question: "What is the hottest country in Europe?",
    a: "Italy",
    b: "United Kingdom",
    c: "Spain",
    d: "France",
    correct: "c"
}


]

const questionEl = document.getElementById("question");
const aText = document.getElementById("a-text");
const bText = document.getElementById("b-text");
const cText = document.getElementById("c-text");
const dText = document.getElementById("d-text");
const submitBtn = document.getElementById('submit');



let currentQuiz = 0;
let currentQuestion


loadQuiz()

function loadQuiz() {
const currentQuizData = quizData[currentQuiz];

questionEl.innerText = currentQuizData.question;
aText.innerText = currentQuizData.a;
bText.innerText = currentQuizData.b;
cText.innerText = currentQuizData.c;
dText.innerText = currentQuizData.d;

    currentQuestion++
}




submitBtn.addEventListener('click', () => {
currentQuiz++;

loadQuiz()

})




// function areaOfRectangle({ l,b }) {
//     return l * b;
//  }
//  let rectangle = {
//     l: 22,
//     b: 10
//  };
 
//  areaOfRectangle(rectangle);



let person = {
    firstName: 'Jim',
    lastName: 'Cooper',
    age: 18,
    isAdult: function() { return this.age >= 18; }
};

console.log(person.isAdult())

function Player(name, age) {
this.name = name
this.age = age

this.introduction = function () {
    console.log(`Cześć ${this.name}`)
}
}



const Player2 = new Player('Adam', 55)
const Player3 = new Player('Kasia', 26) 




 