var flag = false; //Связывание событий с функциями

function init() {   //Если мышка двигается то выполняется ф-ция dragIt
    document.getElementById('kv').onmousemove = dragIt;
    //Если кнопка мышки отпускается, то - ф-ция osvobodi
    document.getElementById('kv').onmouseup = osvobodi;
    document.getElementById('kv').onmousedown = zachvat;
}

function dragIt(evt) {
    var movObj = document.getElementById('kv');
    var top = parseInt(movObj.style.top);
    var left = parseInt(movObj.style.left);
    var usrEvt = (evt) ? evt : (window.event) ? window.event : "";

    if (flag && (top >= 240) && (top <= 690) && (left >= 210) && (left <= 660)) {
        document.getElementById('kv').style.top = usrEvt.clientY - 25;
        document.getElementById('kv').style.left = usrEvt.clientX - 25;
    }
}

function osvobodi() {
    flag = false;
}

function zachvat() {
    flag = true; //Перетаскивание разрешается
}