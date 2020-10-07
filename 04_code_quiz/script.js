// declaring variables and Arrays
var secondsLeft = 120;
var questionNum = 0;

var timer = document.querySelector("#timer");
var btnStart = document.querySelector("#btnStart");
var preQuiz = document.querySelector(".preQuiz");
var preQuizQuestions = document.querySelector(".preQuizQuestions");
var quizQuestions = document.querySelector("#q");
var choiceA = document.querySelector("#a");
var choiceB = document.querySelector("#b");
var choiceC = document.querySelector("#c");
var choiceD = document.querySelector("#d");



var btnAdvance = [choiceA, choiceB, choiceC, choiceD];



var questions2 = [
    {
        question: "What is wrapped around a string",
        answer: ["Brackets",
        "Quotations",
        "Curly brackets",
        "None of the above"]
    },
    {
        question: "What does JS mean?",
        answer: [ "Just Study",
        "John Stamos",
        "July September",
        "Java Script"
        ]

    }

]
// Timer function
function startTimer(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          sendMessage();
        }
    
      }, 1000);

}
// Function that starts quiz

function quizStart(event){
    if (event.target.matches("#btnStart")) {  
        event.preventDefault();
        preQuiz.style.display = "none";
        preQuizQuestions.style.display = "block";
        quizQuestions.textContent = questions2[questionNum].question;
        choiceA.textContent = questions2[questionNum].answer[0];
        choiceB.textContent = questions2[questionNum].answer[1];
        choiceC.textContent = questions2[questionNum].answer[2];
        choiceD.textContent = questions2[questionNum].answer[3];

    startTimer()

    }
   
}
// Function(s) that advances quiz through question sets
function quizAdvance(event){
    event.preventDefault();
    quizQuestions.textContent = questions2[1].question;
    choiceA.textContent = questions2[1].answer[0];
    choiceB.textContent = questions2[1].answer[1];
    choiceC.textContent = questions2[1].answer[2];
    choiceD.textContent = questions2[1].answer[3];  
}




// Event listeners
btnStart.addEventListener("click", quizStart);


for (let i = 0; i < btnAdvance.length; i++){
     btnAdvance[i].addEventListener("click", quizAdvance); 
       
}



    

