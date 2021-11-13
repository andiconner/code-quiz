var btnStart = document.querySelector(".btn-start")
var quizIntro = document.querySelector(".quiz-intro")
var quizBox = document.querySelector(".quiz-box")
var countDown = document.querySelector('#count-down')
var question = document.querySelector('#question')
var btn0 = document.querySelector('#btn0')
var btn1 = document.querySelector('#btn1')
var btn2 = document.querySelector('#btn2')
var btn3 = document.querySelector('#btn3')

var clockId

var timeLeft = 75

var index = 0
var score = 0





var questionsArr = [
    {
        question:"Commonly used data types DO not include:",
        choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        solution: 2
    },
    

    {
        question:"The condition in an if / else statement is enclosed with _______",
        choices: ["a. quotes", "b. curly brackets", "c. parenthesis", "d. square braquets"],
        solution: 1
    },

    {
        question:"Arrays in JavaScript can be used to store _________.",
        choices: ["a. numbers and strings", "b. other arrays", "c. booleans", "d. all of the above"],
        solution: 3
    },

    {
        question:"Strings values must be enclosed within _____when being assigned to variables.",
        choices: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
        solution: 2
    },
    {
        question:"A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["a. javaScript", "b. terminal/bash", "c. for loops", "d. console.log"],
        solution: 0
    },
]



btnStart.addEventListener("click", function () {
    quizIntro.classList.add("hide")
    quizBox.classList.remove("hide")
    displayQuestion ()
    clockId = setInterval(startCountDown, 1000)
})

function startCountDown() {
    countDown.textContent=timeLeft
    timeLeft--
}


// DISPLAY QUESTION
function displayQuestion (){
    
    //show questions and options (choices)
    question.textContent=questionsArr[index].question
    btn0.textContent=questionsArr[index].choices[0]
    btn1.textContent=questionsArr[index].choices[1]
    btn2.textContent=questionsArr[index].choices[2]
    btn3.textContent=questionsArr[index].choices[3]
    
    }


//display answer
function displayAnswer (){
    
    
}




btn0.addEventListener("click",function(){
    index++
    displayQuestion ()
})

btn1.addEventListener("click",function(){
    index++
    displayQuestion ()
})

btn2.addEventListener("click",function(){
    index++
    displayQuestion ()
})

btn3.addEventListener("click",function(){
    index++
    displayQuestion ()
    
})


