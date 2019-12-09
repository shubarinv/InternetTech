var select, valueFunc, angleRad, angleDeg, angleStep, angleDeg_st, angleDeg_end, resultRow, resultField;

function check() {
    select = document.getElementById("funcSelect");
    valueFunc = select.options[select.selectedIndex].value;

    angleDeg_st = parseInt(document.getElementById('st_val').value);
    angleDeg_end = parseInt(document.getElementById('end_val').value);
    angleStep = parseInt(document.getElementById('step').value);
    if (angleDeg_st < angleDeg_end&&document.getElementById('st_val').value!=null&&document.getElementById('end_val').value!=null) {
        var i = angleDeg_st;
        var winObj = window.open("Lab7_1_2.html");
        winObj.document.write
        ('<table border="1">' +
            '<tr>' +
            '<td colspan="2">Угол</td>' +
            '<td rowspan="2" id="funcArea"></td>' +
            '</tr>' +
            '<tr>' +
            '<td>в градусах</td>' +
            '<td>в радианах</td>' +
            '/tr');

        while (i <= angleDeg_end) {
            angleRad = i * Math.PI / 180;

            if (valueFunc == 'sin') {
                winObj.document.getElementById('funcArea').textContent = "sin";

                winObj.document.write
                ('<tr>' +
                    '<td>' + i + '</td>' +
                    '<td>' + angleRad.toFixed(3) + '</td>' +
                    '<td>' + Math.sin(angleRad).toFixed(3) + '</td>' +
                    '</tr>');

            } else if (valueFunc == 'cos') {
                winObj.document.getElementById('funcArea').textContent = "cos";

                winObj.document.write
                ('<tr>' +
                    '<td>' + i + '</td>' +
                    '<td>' + angleRad.toFixed(3) + '</td>' +
                    '<td>' + Math.cos(angleRad).toFixed(3) + '</td>' +
                    '</tr>');

            } else if (valueFunc == 'tan') {
                winObj.document.getElementById('funcArea').textContent = "tan";

                winObj.document.write
                ('<tr>' +
                    '<td>' + i + '</td>' +
                    '<td>' + angleRad.toFixed(3) + '</td>' +
                    '<td>' + Math.tan(angleRad).toFixed(3) + '</td>' +
                    '</tr>');
            }

            i += angleStep;
        }
    }
}
