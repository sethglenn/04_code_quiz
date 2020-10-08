// declaring variables and Arrays
var secondsLeft = 120;
var questionNum = 0;

// highscore/clear vars
var highScoreInput = document.querySelector(".highScoreInput");
var highScoreList = document.querySelector("#highScoreList");

// var highScoreForm = document.querySelector("");
var highScoreBoard = document.querySelector(".highScoreBoard");
var submitBtn = document.querySelector(".submitBtn");
var finalScore = document.querySelector(".finalScore");

// Buttons
var goBack = document.querySelector(".goBack");
var clearScores = document.querySelector(".clearScores");
var highScoreSubmit = document.querySelector(".highScoreSubmit");
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
var scores = [];


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

    },
    {
        question: "Where should JavaScript tag be implemented into an HTML file?",
        answer: [ "Script tag",
        "Bottom of body tag",
        "Header tag",
        "Outside of the html tag"
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
          quizAdvance3();  
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
        console.log(secondsLeft);

        var wrongClicks = choiceA;
        
        // for (let i = 0; i < wrongClicks.length; i++){
        wrongClicks.addEventListener("click", function(){
                timer.textContent -= 15;
        })

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

    document.getElementById("a").id = 'a2';
    document.getElementById("b").id = 'b2';
    document.getElementById("c").id = 'c2';
    document.getElementById("d").id = 'd2';

    var choiceA2 = document.querySelector("#a2");
    var choiceB2 = document.querySelector("#b2");
    var choiceC2 = document.querySelector("#c2");
    var choiceD2 = document.querySelector("#d2");
    var btnAdvance2 = [choiceA2, choiceB2, choiceC2, choiceD2];

    for (let i = 0; i < btnAdvance2.length; i++){
        btnAdvance2[i].addEventListener("click", quizAdvance2); 
          
    }


}
function quizAdvance2(event){
    event.preventDefault();
    quizQuestions.textContent = questions2[2].question;
    choiceA.textContent = questions2[2].answer[0];
    choiceB.textContent = questions2[2].answer[1];
    choiceC.textContent = questions2[2].answer[2];
    choiceD.textContent = questions2[2].answer[3];

    document.getElementById("a2").id = 'a3';
    document.getElementById("b2").id = 'b3';
    document.getElementById("c2").id = 'c3';
    document.getElementById("d2").id = 'd3';

    var choiceA3 = document.querySelector("#a3");
    var choiceB3 = document.querySelector("#b3");
    var choiceC3 = document.querySelector("#c3");
    var choiceD3 = document.querySelector("#d3");
    var btnAdvance3 = [choiceA3, choiceB3, choiceC3, choiceD3];

    for (let i = 0; i < btnAdvance3.length; i++){
        btnAdvance3[i].addEventListener("click", quizAdvance3);

    }
}
function highScores(){
    highScoreList.innerHTML = "";

    for (var i = 0; i < scores.length; i++){
        var score = scores[i];

        var li = document.createElement("li");
        li.textContent = (score) + (" ") + (secondsLeft);
        li.setAttribute("data-index", i);

        highScoreList.appendChild(li);

    }


}
function quizAdvance3(event) {
    var highScoreInput = document.querySelector(".highScoreInput");
    finalScore.textContent = secondsLeft;

    event.preventDefault();
    preQuizQuestions.style.display = "none";
    highScoreSubmit.style.display = "block";
        submitBtn.addEventListener("click", function(){
            highScoreSubmit.style.display = "none";
            highScoreBoard.style.display = "block";

            var scoreText = highScoreInput.value.trim();

            scores.push(scoreText);
            highScoreInput.value = ""

            highScores();

                if (scoreText === "");{
                    return;
            }
        })
        document.getElementById("a3").id = 'a';
        document.getElementById("b3").id = 'b';
        document.getElementById("c3").id = 'c';
        document.getElementById("d3").id = 'd';


}
// function renderHighScores () {
//     var score = localStorage.getItem("");

//     if (!score){
//         return;
//     }
// }

// Event listeners
btnStart.addEventListener("click", quizStart);


for (let i = 0; i < btnAdvance.length; i++){
     btnAdvance[i].addEventListener("click", quizAdvance); 
       
}
goBack.addEventListener("click", function(){
    highScoreBoard.style.display = "none";
    preQuiz.style.display = "block";


})


    

