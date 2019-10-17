var flagFirst = true;

function first() {
    if (flagFirst) {
        document.getElementById('first').style.color = 'white';
        flagFirst = false;
        document.getElementById('first').style.backgroundColor = 'blue';
    } else {
        document.getElementById('first').style.color = 'black';
        flagFirst = true;
        document.getElementById('first').style.backgroundColor = 'yellow';
    }
}

var flagSecond = true;

function second() {
    if (flagSecond) {
        document.getElementById('second').style.color = 'white';
        flagSecond = false;
        document.getElementById('second').style.backgroundColor = 'green'
    } else {
        document.getElementById('second').style.color = 'red';
        flagSecond = true;
        document.getElementById('second').style.backgroundColor = 'white';
    }
}

var flagThird = true;

function third() {
    if (flagThird) {
        document.getElementById('third').style.color = 'white';
        flagThird = false;
        document.getElementById('third').style.backgroundColor = 'blue';
    } else {
        document.getElementById('third').style.color = 'black';
        flagThird = true;
        document.getElementById('third').style.backgroundColor = 'yellow';
    }
}
