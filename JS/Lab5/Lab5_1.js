var flag = true;

function start_pause(R) {
    var intervalHold;
    if (flag) {
        var obj = document.getElementById('mov');
        const y_def = parseInt(obj.style.top);
        const x_def = parseInt(obj.style.right);
        const rad = parseInt(R);
        var i = 0;

        var intervalHold = window.setInterval(iteration, 10, x_def, y_def, rad);
        flag = false;
    } else {
        clearInterval(intervalHold);
        flag = true;
    }
}

var itr = 0;

function iteration(x0, y0, radius) {
    itr = itr + 1;

    var angleRad = itr * (Math.PI / 180);
    var styleStr = "width: 30px; height: 30px; background-color: rgb(219, 26, 210); position: absolute; top: " + (y0 + (radius * Math.sin(angleRad))) + "px; right: " + (x0 + (radius * Math.cos(angleRad))) + "px;";
    document.getElementById('mov').setAttribute('style', styleStr);
}