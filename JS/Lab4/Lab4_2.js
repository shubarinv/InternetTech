function draw(a_len, b_len) {
    var x, y, i, angleRad, obj, attrStr;

    for (i = 0; i <= 360; i++) {
        angleRad = i * (Math.PI / 180);
        x = parseInt(a_len) * Math.cos(angleRad);
        y = parseInt(b_len) * Math.sin(angleRad);

        obj = document.createElement("IMG");
        obj.src = "dot.png";
        obj.width = "60";
        obj.height = "60";
        attrStr = "position: absolute; top:" + (440 - y) + "px; right: " + (1200 - x) + "px;"
        obj.setAttribute("style", attrStr);

        var canvas = document.getElementById('drawPlace');
        canvas.appendChild(obj);
    }
}
