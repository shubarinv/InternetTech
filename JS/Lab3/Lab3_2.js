var select, valueFunc, angleRad, angleDeg, result;

function check() {
    select = document.getElementById("funcSelect");
    valueFunc = select.options[select.selectedIndex].value;

    angleDeg = document.getElementById('angleSelect').value;
    angleRad = angleDeg * Math.PI / 180;

    if (valueFunc == 'sin') {
        result = document.createElement("P");
        result.textContent = "(SIN) Result: " + Math.sin(angleRad);
        document.body.appendChild(result);
    } else if (valueFunc == 'cos') {
        result = document.createElement("P");
        result.textContent = "(COS) Result: " + Math.cos(angleRad);
        document.body.appendChild(result);
    } else if (valueFunc == 'tan') {
        result = document.createElement("P");
        result.textContent = "(TAN) Result: " + Math.tan(angleRad);
        document.body.appendChild(result);
    }
}
