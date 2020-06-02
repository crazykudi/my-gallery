
function shuffleNums(numsArr) {
    numsArr.sort(() => Math.random() - 0.5);
    return numsArr;
}

function intToFloat(num, decPlaces) {
    return num.toFixed(decPlaces);
}