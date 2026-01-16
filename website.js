'use strict'

const HOME = document.getElementById('home');
const PLAY = document.getElementById('play');
const HOW_TO_PLAY = document.getElementById('how-to-play');
const LEADERBOARD = document.getElementById('leaderboard');
const QUESTION = document.getElementById('question');
const HINT = document.getElementById('hint');
const ANSWER = document.getElementById('answer');
const TIMER_DISPLAY = document.getElementById('timer-display');
const SCORE_DISPLAY = document.getElementById('score-display');

let animals = [
    'Lions', 'Elephants', 'Giraffes', 'Rhinos', 'Hippos', 'Cheetahs', 
    'Leopards', 'Hyenas', 'Aardvarks', 'Ostriches'
];

let questions = [
    'what is the name of a group of lions?',
    'which animal has the largest land brain?',
    'how many neck vertabrae does a giraffe have?',
    'what is a rhinos horn made of?',
    'which land animal kills more people in africa than lions?',
    'what is the top speed of a cheetah',
    'which big cat is best known for dragging prey into trees?',
    'do hyenas laugh because they are happy or because communication?',
    'what does the name "aardvark" mean?',
    'what is the largest bird in the world?'
];

let hints = [
    'think about the special name used for a lion family',
    'it\'s the biggest brain found on land',
    'it is the same number as humans',
    'it\'s made from the same material as hair and nails',
    'this animal looks calm but is extremely territorial',
    'it can outrun cars in school zones',
    'this cat uses trees to protect it\'s food',
    'the sound has a purpose',
    'the name comes from africans',
    'it cannot fly but runs very fast'
];

let answers = [
    'pride', 
    'elephant',
    '7',
    'keratin',
    'hippo',
    '120 km/h',
    'leopard',
    'communication', 
    'earth pig',
    'ostrich'
];

let currentQuestionIndex = 0;
let score = 0;
let timer = 0;
let seconds = 0;
let questionsPerGame = 8;
let timeLimit = 10;


function loadQuestion(){
    if (currentQuestionIndex >= questionsPerGame){
        
    }
}