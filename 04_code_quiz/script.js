// declaring variables and Arrays
var secondsLeft = 120;

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

// Questions object
var questions = {
    "question set 1": [
        "What is wrapped around a string?",
        "Brackets",
        "Quotations",
        "Curly brackets",
        "None of the above"
    ],
    "question set 2" : [
        "What does JS mean?",
        "Just Study",
        "John Stamos",
        "July September",
        "Java Script"

    ],
    "question set 3" :[
        "test",
        "test",
        "test",
        "test"

    ]

    

}
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
        quizQuestions.textContent = (questions["question set 1"][0]);
        choiceA.textContent = (questions["question set 1"][1]);
        choiceB.textContent = (questions["question set 1"][2]);
        choiceC.textContent = (questions["question set 1"][3]);
        choiceD.textContent = (questions["question set 1"][4]);

    startTimer()

    }
   
}
// Function(s) that advances quiz through question sets
function quizAdvance(event){
    event.preventDefault();
    quizQuestions.textContent = (questions["question set 2"][0]);
    choiceA.textContent = (questions["question set 2"][1]);
    choiceB.textContent = (questions["question set 2"][2]);
    choiceC.textContent = (questions["question set 2"][3]);
    choiceD.textContent = (questions["question set 2"][4]);  
}
// function quizAdvance2(event){
//     event.preventDefault();
//     quizQuestions.textContent = (questions["question set 3"][0]);
//     choiceA.textContent = (questions["question set 3"][1]);
//     choiceB.textContent = (questions["question set 3"][2]);
//     choiceC.textContent = (questions["question set 3"][3]);
//     choiceD.textContent = (questions["question set 3"][4]);

// }



// Event listeners
btnStart.addEventListener("click", quizStart);

for (let i = 0; i <= btnAdvance.length; i++){
     btnAdvance[i].addEventListener("click", quizAdvance);   
}



    

