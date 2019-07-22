function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
    var timeLeft=30
    var timer=document.getElementById('timer');
    var timerID = setInterval(countdown, 1000);
function countdown(){
        if (timeLeft === 0){
            clearTimeout(timerID);
            alert("Times Up!");
            showResults(questions, quizContainer, resultsContainer);
        }else{
            timer.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;
        }
        }
function showQuestions(questions, quizContainer){
 var output=[];
 var answers;
 for (var i =0; i<questions.length; i++){
     answers= [];
     for(letter in questions[i].answers){
         answers.push(
             '<label>'+'<input type="radio" name="question'+ i +'"value="'+letter+'">'+ letter + ':'+ questions[i].answers[letter]+'</label>'
         );  
     }
     output.push(
        '<div class="question">' + questions[i].question + '</div>'+'<div class="answers">' + answers.join('') +'</div>'
    );
    }
    quizContainer.innerHTML = output.join('');
}

function showResults(questions, quizContainer, resultsContainer){
    var answerContainers = quizContainer.querySelectorAll('.answers');
    var userAnswer = '';
    var numCorrect=0;
    var numIncorrect=0

    for(var i=0; i<questions.length; i++){
        userAnswer=(answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        if(userAnswer===questions[i].correctAnswer){
            numCorrect++;
        }else {
            numIncorrect++;
        }
    }
    resultsContainer.innerHTML = "Right Answers " + numCorrect + "  Incorrect Answers " + numIncorrect 
}

showQuestions(questions, quizContainer);

submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);

}
}
var myQuestions = [
    {
        question: "In Amazing Spider-Man 41 who first appears?",
        answers:{
            a: ' Electro',
            b: ' Rhino',
            c: ' Green Goblin',  
        },
        correctAnswer: 'b'
    },
    { question: "Which comic does Venom first appear?",
      answers:{
            a: ' Spectacular Spiderman 90',
            b: ' Spiderman Unlimited 15',
            c: ' Amazing Spiderman 300',
    },
    correctAnswer: 'c'
    },
    { question: "Which of these is the spawn of Venom?",
      answers:{
            a: ' Carnage',
            b: ' Venom 2',
            c: ' Anti-Venom',
    },
    correctAnswer: 'a'
    },
    { question: "Spiderman Gets his Iconic Black Suit in which comic first?",
      answers:{
            a: ' Amazing Spiderman',
            b: ' Secret Wars',
            c: ' Fantastic Four',
    },
    correctAnswer: 'b'
    },
    { question: "Spiderman first appears in which series?",
      answers:{
            a: ' Amazing Fantasy',
            b: ' Amazing Spiderman',
            c: ' Spiderman',
    },
    correctAnswer: 'a'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
