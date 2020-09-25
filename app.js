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

function renderStartPageHeader () {
  return `
    <h1>Stupid Questions Quiz</h1>
      <p>Question: ${store['questionNumber']}/5</p>
      <p>Score: ${store['score']}/5</p>
  `;
}

function headerPage() {
  $('header').html(renderStartPageHeader);
}

function renderModel(){
  if(store['quizStarted'] === false){
    $('main').html(renderStartPageMain);
  }
}

function renderQuestion() {
  return `
    <div>Question ${store['questionNumber']}
  `;
}

function startQuiz() {
  $('#start').click(function(event) {
    $('#startpage').hide();
    store['quizStarted'] = true
    store['questionNumber'] += 1

  })
}





function main(){
  headerPage();
  renderModel();
  startQuiz();

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