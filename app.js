'use strict'

/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2020',
        '2005'
      ],
      correctAnswer: '2020'
    },
    {
      question: 'Where is the Eiffel Tower',
      answers: [
        'Right next to me',
        'The North Pole',
        'The South Pole',
        'Paris'
      ],
      correctAnswer: 'Paris'
    },
    {
      question: 'How many inches are in a foot?',
      answers: [
        '12',
        '2097',
        '4',
        '15'
      ],
      correctAnswer: '12'
    },
    {
      question: 'What is yellow?',
      answers: [
        'A year',
        'A color',
        'An animal',
        'A molecule'
      ],
      correctAnswer: 'A color'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};



function renderStartPageMain(){
  return `
    <div id="startpage">
      
      <h2>Score 3 of 5 to win!</h2>
      <button id="start">START</button>
    </div>
  `;
}

function renderStartPageHeader() {
  return `
    <h1>Stupid Questions Quiz</h1>
      <p id="hide">Question: ${store['questionNumber']}/5</p>
      <p id="hide">Score: ${store['score']}</p>
  `;
}

function renderStartPageReset() {
  return `
    <h1>Stupid Questions Quiz</h1>
  `
}

function renderEndPageHeader() {
  return `
    <h1>Stupid Questions Quiz</h1>
  `;
}

function renderCorrectAnswer() {
  return `
    <div>
      <h3>The correct answer was: ${store['questions'][(store['questionNumber'] - 1)]['correctAnswer']}</h3>
      <button id="next">Next</button>
    </div>
  `;
}

function renderModel(){
  if(store['quizStarted'] === false){
    $('main').html(renderStartPageMain);
  }
}

function headerPage() {
  if (store['questionNumber'] == 6) {
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
  if (store['questionNumber'] <=5) {
    return `
      <form>
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
  if (store['question'] == 6){
  }
  else {
    $('main').html(renderQuestion);
    selectAnswer();
  }
}

function endScreenWin() {
  return `
  <div id="endpage">
    <h1>You scored ${store['score']}/5. You did it!</h1>
    <input type="reset" id="reset"></input>
  </div>
  `
}

function endScreenLose() {
  return `
  <div id="endpage">
    <h1>You scored ${store['score']}/5. Try Again!</h1>
    <input type="reset" id="reset"></input>
  </div>
  `
}

function selectAnswer() {
  $('#submit').click(function(event){
    var radioValue = $("input:checked").val()
    if (radioValue){
      $("main").html(renderCorrectAnswer);
      if (radioValue === store['questions'][(store['questionNumber'] - 1)]['correctAnswer']) {
        store['score'] += 1;
        headerPage();
      }
      if (store['questionNumber'] <= 5){
        store['questionNumber'] += 1
      }
      if (store['questionNumber'] == 6) {
        if (store['score'] > 2){
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
  if (store['questionNumber'] == 6) {
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


/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)