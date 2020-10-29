'use strict'

const store = {
  questions: [
    {
      question: "What was Tandem previous name?",
      answers: ["Tandem", "Burger Shack", "Extraordinary Humans", "Devmynd"],
      correctAnswer: "Devmynd"
    },
    {
      question: "In Shakespeare's play Julius Caesar, Caesar's last words were...",
      answers: ["Iacta alea est!", "Vidi, vini, vici", "Et tu, Brute?", "Aegri somnia vana"],
      correctAnswer: "Et tu, Brute?"
    },
    {
      question: "A group of tigers are referred to as:",
      answers: ["Chowder", "Pride", "Destruction", "Ambush"],
      correctAnswer: "Ambush"
    },
    {
      question: "What is the top speed an average cat can travel?",
      answers: ["31 mph", "42 mph", "13 mph", "9 mph"],
      correctAnswer: "31 mph"
    },
    {
      question: "A cat can jump to _____ times its own height:",
      answers: ["3", "9", "7", "5"],
      correctAnswer: "5"
    },
    {
      question: "What is the only letter that doesn't appear in a US state name?",
      answers: ["M", "Z", "X", "Q"],
      correctAnswer: "Q"
    },
    {
      question: "What is the name for a cow-bison hybrid?",
      answers: ["Cowson", "Bicow", "Beefalo", "Mooson"],
      correctAnswer: "Beefalo"
    },
    {
      question: "What is the largest freshwater lake in the world?",
      answers: ["Lake Baikal", "Lake Superior", "Lake Michigan", "Lake Victoria"],
      correctAnswer: "Lake Superior"
    },

    {
      question: "In a website address bar, what does WWW stand for?",
      answers: ["Wild Wild West", "War World Web", "World Wide Web", "What What WHAT"],
      correctAnswer: "World Wide Web"
    },
    {
      question: "In a game of bingo, what number is represented by the name two little ducks?",
      answers: ["20", "22", "55", "77"],
      correctAnswer: "22"
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
}




function renderStartPageMain(){
  return `
    <div id="startpage">
      
      <h2>Score 7 of 10 to win!</h2>
      <button id="start">START</button>
    </div>
  `;
}

function renderStartPageHeader() {
  return `
    <h1>The "Can You Trivia?" Quiz</h1>
      <p id="hide">Question: ${store['questionNumber']}/10</p>
      <p id="hide">Score: ${store['score']}</p>
  `;
}

function renderStartPageReset() {
  return `
    <h1>The "Can You Trivia?" Quiz</h1>
  `
}

function renderEndPageHeader() {
  return `
    <h1>The "Can You Trivia?" Quiz</h1>
  `;
}

function renderCorrectAnswer() {
  return `
    <div class="hider">
      <h3>Nice! You got it right! </h3>
      <button id="next" class="next">Next</button>
    </div>
  `;
}

function renderIncorrectAnswer() {
  return `
    <div class="hider">
      <h3>Wrong! The correct answer was: ${store['questions'][(store['questionNumber'] - 1)]['correctAnswer']} </h3>
      <button id="next" class="next">Next</button>
    </div>
  `;
}

function renderModel(){
  if(store['quizStarted'] === false){
    $('main').html(renderStartPageMain);
  }
}

function headerPage() {
  if (store['questionNumber'] == 11) {
    $('header').html(renderEndPageHeader);
  }
  else {
    $('header').html(renderStartPageHeader);
  }
}

function newHeaderPage() {
  $('header').html(renderStartPageReset);
}
function renderQuestion() {
  if (store['questionNumber'] <=10) {
    return `
      <form class="hider">
        <h2>${store['questions'][(store['questionNumber'] - 1)]['question']}</h2>
          <label><input name="question${store['questionNumber']}" type="radio" value="${store['questions'][(store['questionNumber'] - 1)]['answers'][0]}">
            ${store['questions'][(store['questionNumber'] - 1)]['answers'][0]}</label><br>
          <label><input name="question${store['questionNumber']}" type="radio" value="${store['questions'][(store['questionNumber'] - 1)]['answers'][1]}">
            ${store['questions'][(store['questionNumber'] - 1)]['answers'][1]}</label><br>
          <label><input name="question${store['questionNumber']}" type="radio" value="${store['questions'][(store['questionNumber'] - 1)]['answers'][2]}">
            ${store['questions'][(store['questionNumber'] - 1)]['answers'][2]}</label><br>
          <label><input name="question${store['questionNumber']}" type="radio" value="${store['questions'][(store['questionNumber'] - 1)]['answers'][3]}">
            ${store['questions'][(store['questionNumber'] - 1)]['answers'][3]}</label><br>
      </form>
      <button id="submit">Submit</button>
  `;
  }
}


function runQ1() {
  if (store['question'] == 11){
  }
  else {
    $('main').html(renderQuestion);
    $( ".hider" ).slideToggle( 1500 );
    selectAnswer();
  }
}

function endScreenWin() {
  return `
  <div id="endpage">
    <h1>You scored ${store['score']}/10. You did it!</h1>
    <input type="reset" id="reset"></input>
  </div>
  `
}

function endScreenLose() {
  return `
  <div id="endpage">
    <h1>You scored ${store['score']}/10. Try Again!</h1>
    <input type="reset" id="reset"></input>
  </div>
  `
}

function selectAnswer() {
  $('#submit').click(function(event){
    var radioValue = $("input:checked").val()
      if (radioValue){
        if (radioValue !== store['questions'][(store['questionNumber'] - 1)]['correctAnswer']) {
          $("main").html(renderIncorrectAnswer)
          $( ".hider" ).slideDown( 1500 );
          headerPage();
        }  
        if (radioValue === store['questions'][(store['questionNumber'] - 1)]['correctAnswer']) {
          $("main").html(renderCorrectAnswer);
          $( ".hider" ).slideDown( 1500 );
          store['score'] += 1;
          headerPage();
        }
        if (store['questionNumber'] <= 10){
          store['questionNumber'] += 1
        }
        if (store['questionNumber'] == 11) {
          if (store['score'] > 6){
            $('main').html(endScreenWin)
          }
          else {
            $('main').html(endScreenLose)
          }
        }
        $('#next').click(function(event){
          runQ1()
        })
        resetAll();
      }
  })
}

function startQuiz() {
  $('#start').click(function(event) {
    $('#startpage').hide();
    store['quizStarted'] = true;
    store['questionNumber'] += 1;
    headerPage()
    runQ1()
  });
}


function resetAll() {
  if (store['questionNumber'] == 11) {
    $("#reset").click(function(event) {
      $('#endpage').hide();
      $('#startpage').show();
      store['questionNumber'] = 0
      store['score'] = 0
      store['quizStarted'] = false
      newHeaderPage()
      renderModel();
      startQuiz();
    })
  }
}

function main(){
  newHeaderPage()
  renderModel();
  startQuiz();
  resetAll();
}

$(main);
