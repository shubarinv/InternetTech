var flagImg = true;
var flagTxt = true;

function parentFunc(eventHolder) {
    var elem = eventHolder.target;

    switch (elem.id) {
        case "txtObj":
            if (flagTxt) {
                document.getElementById('txtObj').style.color = 'black';
                flagTxt = false;
            } else {
                document.getElementById('txtObj').style.color = 'orange';
                flagTxt = true;
            }
            break;
        case "imgObj":
            if (flagImg) {
                document.getElementById('imgObj').src = 'BM.png';
                flagImg = false;
                document.getElementById('txtObj').style.color = 'black';
                document.getElementById('txtObj').textContent = "BLACK MESA"
                flagTxt = false;
            } else {
                document.getElementById('imgObj').src = "HL.png"
                flagImg = true;
                document.getElementById('txtObj').style.color = 'orange';
                document.getElementById('txtObj').textContent = "LAMBDA"
                flagTxt = true;
            }
            break;
    }
}
