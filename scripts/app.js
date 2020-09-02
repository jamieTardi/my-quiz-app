//variables
const startBtn = document.querySelector('.start-button');
const questionText = document.querySelector('.question');
const answerBtns = document.querySelector('.button-container');
const answerBtn1 = document.querySelector('.answer1');
const answerBtn2 = document.querySelector('.answer2');
const answerBtn3 = document.querySelector('.answer3');
const answerBtn4 = document.querySelector('.answer4');
const submitBtn = document.querySelector('.submit-answer');

//start function

startQuiz = () => {
    startBtn.classList.add('hide-startBtn')
    answerBtns.classList.remove('hide')
    submitBtn.classList.remove('hide')
    nextQuestion()
}




correctAnswer = () => {
    if (randomQuestion.answers[0].correctAnswer === false) {
        console.log('answer 1 wrong')
    } else if (randomQuestion.answers[0].correctAnswer === true) {
        console.log('answer 1 works')
    }


}
correctAnswer2 = () => {
    if (randomQuestion.answers[1].correctAnswer === false) {
        console.log('answer 2 wrong')
    } else if (randomQuestion.answers[1].correctAnswer === true) {
        console.log('answer 2 works')
    }

}

correctAnswer3 = () => {
    if (randomQuestion.answers[2].correctAnswer === false) {
        console.log('answer 3 wrong')
    } else if (randomQuestion.answers[2].correctAnswer === true) {
        console.log('answer 3 works')
    }

}

correctAnswer4 = () => {
    if (randomQuestion.answers[3].correctAnswer === false) {
        console.log('wrong')
    } else if (randomQuestion.answers[3].correctAnswer === true) {
        alert('answer 4 works')
    }

}
nextQuestion = () => {
    randomQuestion = questions[Math.floor(Math.random() * questions.length)]
    questionText.innerText = randomQuestion.question
    answerBtn1.innerText = randomQuestion.answers[0].answer1
    answerBtn2.innerText = randomQuestion.answers[1].answer2
    answerBtn3.innerText = randomQuestion.answers[2].answer3
    answerBtn4.innerText = randomQuestion.answers[3].answer4

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
    }

]


//event listners
startBtn.addEventListener('click', startQuiz)
submitBtn.addEventListener('click', nextQuestion)

answerBtn1.addEventListener('click', correctAnswer)
answerBtn2.addEventListener('click', correctAnswer2)
answerBtn3.addEventListener('click', correctAnswer3)
answerBtn4.addEventListener('click', correctAnswer4)
let randomQuestion;