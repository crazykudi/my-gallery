const PACMAN = '&#9786;';
var gPacmanImg = `<img src="img/pacman-left.jpg" class="pacman-image">`;

var gPacman;

function createPacman(board) {
  gPacman = {
    location: {
      i: 3,
      j: 5
    },
    isSuper: false
  };
  board[gPacman.location.i][gPacman.location.j] = gPacmanImg;
}

function movePacman(eventKeyboard) {
  if (!gGame.isOn) return;
  // console.log('eventKeyboard:', eventKeyboard);

  var nextLocation = getNextLocation(eventKeyboard);
  // User pressed none-relevant key in the keyboard
  if (!nextLocation) return;

  var nextCell = gBoard[nextLocation.i][nextLocation.j];

  // Hitting a WALL, not moving anywhere
  if (nextCell === WALL) return;

  // Hitting FOOD? update score
  if (nextCell === FOOD) updateScore(1);
  else if (nextCell === GHOST && !gPacman.isSuper) {
    gameOver()
    renderCell(gPacman.location, EMPTY);
    return;
  }

  // Hiting SUPER FOOD?
  if (nextCell === SUPER_FOOD && !gPacman.isSuper) {
    gPacman.isSuper = true;
    activateSuperPowers();
    setTimeout(function () {
      gPacman.isSuper = false
      deactivateSuperPowers();
    }, 5000);
  }

  // Update the model to reflect movement
  gBoard[gPacman.location.i][gPacman.location.j] = EMPTY;
  // Update the DOM
  renderCell(gPacman.location, EMPTY);

  // Update the pacman MODEL to new location  
  gPacman.location = nextLocation;

  gBoard[gPacman.location.i][gPacman.location.j] = PACMAN;

  // Render updated model to the DOM
  renderCell(gPacman.location, getPacmanHTML());

  // Is game done?
  if (isGameDone()) {
    gameOver(isGameDone());
  }
}

function getNextLocation(keyboardEvent) {
  var nextLocation = {
    i: gPacman.location.i,
    j: gPacman.location.j
  };

  switch (keyboardEvent.code) {
    case 'ArrowUp':
      nextLocation.i--;
      gPacmanImg = `<img src="img/pacman-up.jpg" class="pacman-image">`;
      break;
    case 'ArrowDown':
      nextLocation.i++;
      gPacmanImg = `<img src="img/pacman-down.jpg" class="pacman-image">`;
      break;
    case 'ArrowLeft':
      nextLocation.j--;
      gPacmanImg = `<img src="img/pacman-left.jpg" class="pacman-image">`;
      break;
    case 'ArrowRight':{
      nextLocation.j++;
      gPacmanImg = `<img src="img/pacman-right.jpg" class="pacman-image">`;
      break;
  }
    default: return null;
  }
  return nextLocation;
}


function isGameDone() {
  var isVictory = false;
  for (i = 1; i < gBoard.length - 1; i++) {
    for (j = 1; j < gBoard.length - 1; j++) {
      if (gBoard[i][j] === FOOD) break;
    }
    if (j !== gBoard.length - 1) break;
  }
  if (i === gBoard.length - 1) isVictory = true;

  return isVictory;
}


function activateSuperPowers() {
  // Change ghosts colors to blue
  for (var i = 0; i < gGhosts.length; i++) {
    var ghost = gGhosts[i];
    ghost.color = '#0000FF';
    renderCell(ghost.location, getGhostHTML(ghost));
  }
}

function deactivateSuperPowers() {
  for (var i = 0; i < gGhosts.length; i++) {
    var ghost = gGhosts[i];
    ghost.color = getRandomColor();
    renderCell(ghost.location, getGhostHTML(ghost));
  }
}

function getPacmanHTML() {
  return `<span>${gPacmanImg}</span>`
}