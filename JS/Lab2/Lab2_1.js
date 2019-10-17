const fontSz = '12pt';
const fontClr = 'black';
const backGrnd = 'white';

var flagFirst = true;

function first() {
    if (flagFirst) {
        document.getElementById('first').style.fontSize = '48pt';
        document.getElementById('first').style.color = 'white';
        document.getElementById('first').style.backgroundColor = 'blue';
        flagFirst = false;
    } else {
        document.getElementById('first').style.fontSize = fontSz;
        document.getElementById('first').style.color = fontClr;
        document.getElementById('first').style.backgroundColor = backGrnd;
        flagFirst = true;
    }
}

var flagSecond = true;

function second() {
    if (flagSecond) {
        document.getElementById('second').style.backgroundColor = 'green';
        flagSecond = false;
    } else {
        document.getElementById('second').style.backgroundColor = 'yellow';
        flagSecond = true;
    }
}

var flagThird = true;

function third() {
    if (flagThird) {
        document.getElementById('third').style.backgroundColor = 'red';
        flagThird = false;
    } else {
        document.getElementById('third').style.backgroundColor = 'blue';
        flagThird = true;
    }
}
