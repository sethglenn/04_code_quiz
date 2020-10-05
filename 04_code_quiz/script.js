// declaring variables
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
        

    ],


    

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










btnStart.addEventListener("click", quizStart);





    

