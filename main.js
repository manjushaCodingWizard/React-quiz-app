//getting all the required elements
const startBtn = document.querySelector(".window-one button");
const infoBox = document.querySelector(".rules-box");
const exitBtn = infoBox.querySelector(".buttons .quit");
const continueBtn = infoBox.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quiz-box");
const optionList = document.querySelector(".option-list");
const timeCount = quizBox.querySelector(".timer .timer-sec");


// by clicking on the lets begin button
startBtn.onclick = () =>{
  infoBox.classList.add("activeInfo");
}


// by clicking on the quit button
exitBtn.onclick = () =>{
  infoBox.classList.remove("activeInfo");
}

// by clicking on the start button
continueBtn.onclick = () =>{
  infoBox.classList.remove("activeInfo");
  quizBox.classList.add("activeQuiz");
  showQuestions(0);
  queNumberCounter(1);
  timerStart(50);
}

let queCount = 0;
let queNumber = 1;
let timercounter;
let timevalue = 50;
let userScore = 0;

const nextBtn = quizBox.querySelector(".next-btn");
const resultBox = document.querySelector(".result-box");
const restartQuiz = resultBox.querySelector(".buttons .restart");
const quitQuiz = resultBox.querySelector(".buttons .quit");

restartQuiz.onclick = () => {
  resultBox.classList.remove("activeResult");
  quizBox.classList.add("activeResult");
  let queCount = 0;
  let queNumber = 1;
  let timercounter;
  let timevalue = 50;
  let userScore = 0;
  showQuestions(queCount);
  queNumberCounter(queNumber); 
  clearInterval(timercounter); 
  timerStart(timevalue); 
  nextBtn.style.display = "none";
} 

quitQuiz.onclick = () => {
  window.location.reload();
}

//on clicking that next button
nextBtn.onclick = () => {
  if(queCount < questions.length-1){
    queCount++;
    queNumber++;
    showQuestions(queCount);
    queNumberCounter(queNumber); 
    clearInterval(timercounter); 
    timerStart(timevalue); 
    nextBtn.style.display = "none";

  }else{
    console.log("que completed");
    showResultBox();
  }
}

//fetch que,options. Selection of the answer
function showQuestions(index){
  const queText = document.querySelector(".que-text");
  let queTag = '<span>'+ questions[index].number +". " + questions[index].question +'</span>';  

  //for fetching options
  let optionTag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
                  +'<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                  +'<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                  +'<div class="option">'+ questions[index].options[3] +'<span></span></div>';
  optionList.innerHTML = optionTag; 
  queText.innerHTML = queTag;

  //selection of the ans
  const option = optionList.querySelectorAll(".option");
  for(let i=0; i<option.length; i++){
    option[i].setAttribute("onclick", "selectedOption(this)");
  }
}

let iconTick = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let iconCross = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function selectedOption(answer){
  let selectedAns = answer.textContent;
  let correctAns = questions[queCount].answer;
  let allOptionsDisable = optionList.children.length;

  if(selectedAns == correctAns){
    userScore += 1;
    console.log(userScore);
    answer.classList.add("correct");
    console.log("correctAns");
    answer.insertAdjacentHTML("beforeend", iconTick); 
  }else{
    answer.classList.add("incorrect");
    console.log("wrongAns");
    answer.insertAdjacentHTML("beforeend", iconCross);
  }
        //autoshow the correct ans after choosen wrong answer
        for(let i = 0; i< allOptionsDisable; i++){
          if(optionList.children[i].textContent == correctAns){
            optionList.children[i].setAttribute("class","option correct");            
          }
        }

  //disable other options after selecting one of the option
  for(let i = 0; i<allOptionsDisable; i++){
    optionList.children[i].classList.add("disabled");
  }
  nextBtn.style.display = "block";
}

function timerStart(time){
  timercounter = setInterval(timer,1000);
  function timer(){
    timeCount.textContent = time;
    time--;
    if(time < 9){
      let addzero = timeCount.textContent;
      timeCount.textContent = "0" + addzero;
    }
    if(time < 0){
      clearInterval(timercounter);
      timeCount.textContent = "00";

      let correctAns = questions[queCount].answer;
      let allOptionsDisable = optionList.children.length;

      for(let i = 0; i< allOptionsDisable; i++){
        if(optionList.children[i].textContent == correctAns){
          optionList.children[i].setAttribute("class","option correct");            
        }
      }

      for(let i = 0; i<allOptionsDisable; i++){
        optionList.children[i].classList.add("disabled");
      }
      nextBtn.style.display = "block";
    }
  }
}


// footer que counter
function queNumberCounter(index){
  const footerQueCounter = quizBox.querySelector(".total-que");
  let totalQuestionCounter = '<span><p>'+ index +'</p>of<p>'+ questions.length+'</p> Questions</span>';
  footerQueCounter.innerHTML = totalQuestionCounter;
}

function showResultBox(){
  infoBox.classList.remove("activeInfo");
  quizBox.classList.remove("activeQuiz");
  resultBox.classList.add("activeResult");
  const scoreText = resultBox.querySelector(".score-text");
  if(userScore > 23){
    let scoreTag = '<span>Congratulations.. You got <p>'+ userScore+'</p> out of <p>'+ questions.length +'</p></span';
    scoreText.innerHTML = scoreTag;
  }
  if(userScore > 18){
    let scoreTag = '<span>Very Good.. You got <p>'+ userScore+'</p> out of <p>'+ questions.length +'</p></span';
    scoreText.innerHTML = scoreTag;
  }
  if(userScore > 12 && userScore < 18){
    let scoreTag = '<span>Nice.. You got <p>'+ userScore+'</p> out of <p>'+ questions.length +'</p></span';
    scoreText.innerHTML = scoreTag;
  }
  if(userScore < 12){
    let scoreTag = '<span>Hard Luck.. You got <p>'+ userScore+'</p> out of <p>'+ questions.length +'</p></span';
    scoreText.innerHTML = scoreTag;
  }
}