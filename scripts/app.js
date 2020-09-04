

//variables
const startBtn = document.querySelector('.start-button');
const questionText = document.querySelector('.question');
const answerBtns = document.querySelector('.button-container');
const answerBtn1 = document.querySelector('.answer1');
const answerBtn2 = document.querySelector('.answer2');
const answerBtn3 = document.querySelector('.answer3');
const answerBtn4 = document.querySelector('.answer4');
const submitBtn = document.querySelector('.submit-answer');
const buttonGrp = document.querySelectorAll('.answer-buttons');
const popup = document.querySelector('.popup-container')
const tryBtn = document.querySelector('.try-again')
const score = document.querySelector('.score')
const winner = document.querySelector('.winner-container')
const playAgain = document.querySelector('.play-again')

let newScore;



//start function

startQuiz = () => {
    startBtn.classList.add('hide-startBtn')
    answerBtns.classList.remove('hide')
    submitBtn.classList.remove('hide')
    newScore = 1
    nextQuestion()
}

correctAnswer = () => {
    if (randomQuestion.answers[0].correctAnswer === true) {
        answerBtn1.classList.remove('background-color')
        answerBtn2.classList.remove('background-color')
        answerBtn3.classList.remove('background-color')
        answerBtn4.classList.remove('background-color')
        answerBtn1.classList.add('correct')
        answerBtn2.classList.add('incorrect')
        answerBtn3.classList.add('incorrect')
        answerBtn4.classList.add('incorrect')
        score.innerText = newScore
        if(newScore === 2){
            winner.classList.add('active')
        }else{
        newScore++
        }
    } else{
        popup.classList.add('active')
    }
}
correctAnswer2 = () => {
    if (randomQuestion.answers[1].correctAnswer === true) {
        answerBtn1.classList.remove('background-color')
        answerBtn2.classList.remove('background-color')
        answerBtn3.classList.remove('background-color')
        answerBtn4.classList.remove('background-color')
        answerBtn1.classList.add('incorrect')
        answerBtn2.classList.add('correct')
        answerBtn3.classList.add('incorrect')
        answerBtn4.classList.add('incorrect')
        score.innerText = newScore
        if(newScore === 2){
            winner.classList.add('active')
        }else{
        newScore++
        }
    }
    else{
        popup.classList.add('active')
    }

}

correctAnswer3 = () => {
    if (randomQuestion.answers[2].correctAnswer === true) {
        answerBtn1.classList.remove('background-color')
        answerBtn2.classList.remove('background-color')
        answerBtn3.classList.remove('background-color')
        answerBtn4.classList.remove('background-color')
        answerBtn1.classList.add('incorrect')
        answerBtn2.classList.add('incorrect')
        answerBtn3.classList.add('correct')
        answerBtn4.classList.add('incorrect')
        score.innerText = newScore
        if(newScore === 2){
            winner.classList.add('active')
        }else{
        newScore++
        }
    }
    else{
        popup.classList.add('active')
    }
}

correctAnswer4 = () => {
    if (randomQuestion.answers[3].correctAnswer === true) {
        answerBtn1.classList.remove('background-color')
        answerBtn2.classList.remove('background-color')
        answerBtn3.classList.remove('background-color')
        answerBtn4.classList.remove('background-color')
        answerBtn1.classList.add('incorrect')
        answerBtn2.classList.add('incorrect')
        answerBtn3.classList.add('incorrect')
        answerBtn4.classList.add('correct')
        score.innerText = newScore
        if(newScore === 2){
            winner.classList.add('active')
        }else{
        newScore++
        }
    }
    else{
        popup.classList.add('active')
    }

}
nextQuestion = () => {
    randomQuestion = questions[Math.floor(Math.random() * questions.length)]
    questionText.innerText = randomQuestion.question
    answerBtn1.innerText = randomQuestion.answers[0].answer1
    answerBtn2.innerText = randomQuestion.answers[1].answer2
    answerBtn3.innerText = randomQuestion.answers[2].answer3
    answerBtn4.innerText = randomQuestion.answers[3].answer4

    buttonGrp.forEach((button) => {
        button.classList.remove('correct')
        button.classList.remove('incorrect')
        button.classList.add('background-color')
    })
}

//questions


let questions = [{
    question: 'What is 2 + 2',
    answers: [{
            answer1: '4',
            correctAnswer: true
        },
        {
            answer2: '5',
            correctAnswer: false
        },
        {
            answer3: '6',
            correctAnswer: false
        },
        {
            answer4: '7',
            correctAnswer: false
        }
    ]
},
{
    question: 'What is 3 + 3',
    answers: [{
            answer1: '9',
            correctAnswer: false
        },
        {
            answer2: '8',
            correctAnswer: false
        },
        {
            answer3: '6',
            correctAnswer: true
        },
        {
            answer4: '100',
            correctAnswer: false
        }
    ]
},
{
    question: 'Is this awesome?',
    answers: [{
            answer1: 'yes',
            correctAnswer: true
        },
        {
            answer2: 'no',
            correctAnswer: false
        },
        {
            answer3: 'maybe',
            correctAnswer: false
        },
        {
            answer4: 'cheese?',
            correctAnswer: false
        }
    ]
},
{
    question: 'What is a boolean?',
    answers: [{
            answer1: 'A true statement',
            correctAnswer: false
        },
        {
            answer2: 'A false statement',
            correctAnswer: false
        },
        {
            answer3: 'True/False Statement',
            correctAnswer: true
        },
        {
            answer4: 'cheese?',
            correctAnswer: false
        }
    ]
},
{
    question: 'In what part of the body would you find the fibula?',
    answers: [{
            answer1: 'Back',
            correctAnswer: false
        },
        {
            answer2: 'Head',
            correctAnswer: false
        },
        {
            answer3: 'Arm',
            correctAnswer: false
        },
        {
            answer4: 'Leg',
            correctAnswer: true
        }
    ]
},
{
    question: 'In what part of the body would you find the fibula?',
    answers: [{
            answer1: 'Back',
            correctAnswer: false
        },
        {
            answer2: 'Head',
            correctAnswer: false
        },
        {
            answer3: 'Arm',
            correctAnswer: false
        },
        {
            answer4: 'Leg',
            correctAnswer: true
        }
    ]
},
{
    question: 'What is the capital city of Switzerland?',
    answers: [{
            answer1: 'London',
            correctAnswer: false
        },
        {
            answer2: 'Bern',
            correctAnswer: true
        },
        {
            answer3: 'Zurich',
            correctAnswer: false
        },
        {
            answer4: 'Paris',
            correctAnswer: false
        }
    ]
},
{
    question: 'What is seven cubed?',
    answers: [{
            answer1: '22',
            correctAnswer: false
        },
        {
            answer2: '49',
            correctAnswer: false
        },
        {
            answer3: '125',
            correctAnswer: false
        },
        {
            answer4: '343',
            correctAnswer: true
        }
    ]
},

]




//event listners
startBtn.addEventListener('click', startQuiz)
submitBtn.addEventListener('click', nextQuestion)

answerBtn1.addEventListener('click', correctAnswer)
answerBtn2.addEventListener('click', correctAnswer2)
answerBtn3.addEventListener('click', correctAnswer3)
answerBtn4.addEventListener('click', correctAnswer4)
tryBtn.addEventListener('click', () => {
    popup.classList.remove('active')
})
playAgain.addEventListener('click', () => {
    winner.classList.remove('active')
    newScore += 0
    startQuiz()
    
})
let randomQuestion;