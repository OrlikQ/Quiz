const form = document.querySelector(`.quiz-box`)
const answers = document.querySelectorAll(`.answer`)

const modal = document.querySelector(`.modal`)
const modalInfo = modal.querySelector(`p`)
const modalBtn = modal.querySelector(`.close-modal`)

const handleQuiz = e => {
    e.preventDefault();
   
    const checkedAnswers = answers.filter(answer => answer.checked)
    console.log(checkedAnswers);
}



