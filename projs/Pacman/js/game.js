'use strict';
const WALL = '🎇';
const FOOD = '.';
const EMPTY = ' ';
const SUPER_FOOD = '🍌';
const CHERRY = '🍒';

var gBoard;
var gGame = {
  score: 0,
  isOn: false,
};

function init() {

  gBoard = buildBoard();

  createPacman(gBoard);
  createGhosts(gBoard);

  printMat(gBoard, '.board-container');
  gGame.isOn = true;
}

function buildBoard() {
  var SIZE = 10;
  var board = [];
  for (var i = 0; i < SIZE; i++) {
    board.push([]);
    for (var j = 0; j < SIZE; j++) {
      board[i][j] = FOOD;

      if (i === 0 || i === SIZE - 1 ||
        j === 0 || j === SIZE - 1 ||
        (j === 3 && i > 4 && i < SIZE - 2)) {

        board[i][j] = WALL;
      }
      if ((i === 1 && j === 1) ||
        (i === SIZE - 2 && j === SIZE - 2)||
        (i === SIZE - 2 && j === 1) ||
        (i === 1 && j === SIZE - 2)) {
        board[i][j] = SUPER_FOOD;
      }
    }
  }
  return board;
}

function updateScore(value) {
  // Update both the model and the dom for the score
  gGame.score += value;
  document.querySelector('header h3 span').innerText = gGame.score;
}

function gameOver(isGameDone) {

  var elModal = document.querySelector('.modal');
  gGame.isOn = false;
  clearInterval(gIntervalGhosts);
  gIntervalGhosts = null;

  // announce a victory if game is accomplished
  if (isGameDone) elModal.querySelector('h1').innerText = 'WELL DONE!';
  console.log('elmodal:', elModal);
  elModal.style.display = 'block';
}

function playAgain() {
  init();
  var elModal = document.querySelector('.modal');
  elModal.style.display = 'none';
}

function closeGame() {
  window.close();
}



