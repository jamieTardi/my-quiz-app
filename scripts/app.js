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
    questionText.innerText = questions[0].question
    startBtn.classList.add('hide-startBtn')
    answerBtns.classList.remove('hide')
    submitBtn.classList.remove('hide')
}

nextQuestion = () => {
    const randomElement = questions[Math.floor(Math.random() * questions.length)];
    questionText.innerText = randomElement.question

}

//questions
let questions = [{
        question: 'what is 2 + 2',
        answer1: '4',
        answer2: '5',
        answer3: '6',
        answer4: '7'
    },
    {
        question: 'What is 3 + 3',
        answer1: '4',
        answer2: '5',
        answer3: '6',
        answer4: '7'
    }
]


//event listners
startBtn.addEventListener('click', startQuiz)
submitBtn.addEventListener('click', nextQuestion)