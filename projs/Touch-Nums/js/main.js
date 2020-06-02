'use strict'
var gNextNum;
var gSecCount = 0;
var gIntervalId;
var gNumsBoardSize = 4;
var gElTimer = document.querySelector('.timer');
var gTimePassed;
var gTimeStart;

function init() {
    gNextNum = 1;
    gSecCount = 0;
    if (gIntervalId) {
        clearInterval(gIntervalId);
        gTimeStart = 0;
        gElTimer.innerText = "Game time";
        var elNextNum = document.querySelector('.next-num');
        elNextNum.innerText = 'Next number';

    }
    // console.log('new is clicked');
    var gNumsBoard = createBoard(gNumsBoardSize);
    renderNumsBoard(gNumsBoard);
}

function changeLevel(elBtn) {
    switch (elBtn.value) {
        case 'Easy':
            gNumsBoardSize = 16;
            break;
        case 'Medium':
            gNumsBoardSize = 25;
            break;
        case 'Hard':
            gNumsBoardSize = 36;
            break;
    }
    init();
}


function createBoard(boardSize) {
    var numsBoardArr = [];
    for (var i = 0; i < gNumsBoardSize; i++) {
        numsBoardArr[i] = i + 1;
    }
    numsBoardArr = shuffleNums(numsBoardArr);
    return numsBoardArr;
}

function renderNumsBoard(numsBoard) {
    var strHTML = '';
    var boardLength = numsBoard.length ** 0.5
    for (var i = 0; i < boardLength; i++) {
        strHTML += '<tr>';
        for (var j = 0; j < numsBoard.length ** 0.5; j++) {
            var cell = numsBoard[boardLength * i + j];
            strHTML += `<td class="w3-container" onclick="cellClicked(this)">${cell}</td>`;
        }
        strHTML += '</tr>';


    }
    var elTbody = document.querySelector('.table');
    elTbody.innerHTML = strHTML;

}


function cellClicked(elTd) {

    if (gNextNum === 1) {
        gTimeStart = new Date();
        gSecCount = gSecCount + 1; // to remove 
        gIntervalId = setInterval(function () {
            gTimePassed = (new Date() - gTimeStart) / 1000;
            gElTimer.innerText = `Game Time : ${gTimePassed}`;
        }, 1);
    }

    if (+elTd.innerText === gNextNum) {
        console.log(elTd.innerText);
        gNextNum++;
        elTd.style.backgroundColor = 'lightgrey'; ///todo: implement with class
    }

    var elNextNum = document.querySelector('.next-num');
    elNextNum.innerText = `Next number is : ${gNextNum}`;
    if (gNumsBoardSize + 1 === gNextNum) {
        setTimeout(function () {
            if (confirm(`Well Done!\n
            It took you ${gTimePassed} seconds to win!\n
            Do you want to play again?`)) init()
        }, 0)
        
    }
}




