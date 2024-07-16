const questions = [
    {
        question:"What is your name??",
        answer:[
            {text:"suraj",correct:"true"},
            {text:"dhiraj",correct:"false"},
            {text:"miraj",correct:"false"},
            {text:"kiran",correct:"false"}
        ]
    },
    {
        question:"What is your father name?",
        answer:[
            {text:"suraj",correct:"false"},
            {text:"harendra",correct:"true"},
            {text:"miraj",correct:"false"},
            {text:"kiran",correct:"false"}
        ]
    },
    {
        question:"What is your mother name?",
        answer:[
            {text:"suraj",correct:"false"},
            {text:"dhiraj",correct:"false"},
            {text:"miraj",correct:"false"},
            {text:"roshani",correct:"true"}
        ]
    },
    {
        question:"What is your uncle name?",
        answer:[
            {text:"suraj",correct:"false"},
            {text:"dhiraj",correct:"false"},
            {text:"jogindra",correct:"true"},
            {text:"kiran",correct:"false"}
        ]
    },
    {
        question:"What is your aunty name?",
        answer:[
            {text:"suraj",correct:"false"},
            {text:"sita",correct:"true"},
            {text:"miraj",correct:"false"},
            {text:"kiran",correct:"false"}
        ]
    }
]

const questionElement=document.getElementById("questionElement");
const answerButton=document.getElementById("answerButton");
const nextButton=document.getElementById("next");
const result=document.getElementsByClassName("result");

let indexOfQuestion;
let score;
function startQuiz(){
    indexOfQuestion=0;
    score=0;
    nextButton.innerHTML="NEXT";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[indexOfQuestion];
    let questionNo=indexOfQuestion+1;

    questionElement.innerHTML= questionNo+". "+currentQuestion.question;

    currentQuestion.answer.forEach((answer)=>{
        let button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("ans");
        answerButton.appendChild(button);
        button.dataset.correct=answer.correct;
        button.addEventListener("click",(e)=>{
            const selectedButton=e.target;
            const isCorrect=selectedButton.dataset.correct==="true";
            if (isCorrect) {
                selectedButton.classList.add("correct");
                score +=1;
            }
            else{
                selectedButton.classList.add("wrong");
            }
            Array.from(answerButton.children).forEach((button)=>{
                if (button.dataset.correct==="true") {
                    button.classList.add("correct");
                }
                button.disabled=true;
            })
            nextButton.style.display="block";
        })
    });

}

function resultOfTest(){
    questionElement.style.display="none";
    answerButton.style.display="none";
    nextButton.innerHTML="SUBMIT";
    let h1=document.createElement("h1");
    if (((score/questions.length)*100)<=50) {        
        h1.innerHTML="You have score "+score +" in the test. your result is average";
    }
    else{
        h1.innerHTML="You have score "+score +" in the test. your result is good";
    }
    result[0].appendChild(h1);
    //next button need to fixed to run only one time...
}

nextButton.addEventListener("click",()=>{
    if (indexOfQuestion+1<questions.length) {
        indexOfQuestion++;
        showQuestion();
    }
    else{
        resultOfTest();
    }
})

function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
startQuiz();