function rodEl() {
    //Изменение цвета заднего плана документа
    var z = document.all.B.bgColor;
    if (z != "#777777") {
        z = "#777777";
    } else {
        z = "AAAAAA";
    }
    document.all.B.bgColor = z;
}

function D_l() {
    //Изменение цвета внешнего прямоугольника
    window.event.cancelBubble = true;
    var z = document.all.k1.style.backgroundColor;
    if (z != "red") {
        z = "red";
    } else {
        z = "green";
    }
    document.all.k1.style.backgroundColor = z;
}

/*function D_2()
{	//Изменение цвета внутреннего прямоугольника
    var z=document.all.k2.style.backgroundColor
 	if(z=="#ff00ff" || z=='rgb(255, 0, 255)'){z="#00ffff"}
	else{z="ff00ff"}
	document.all.k2.style.backgroundColor=z
}*/
function D_2(thi) {
    //Изменение цвета внутреннего прямоугольника
    window.event.cancelBubble = true;
    var z = thi.style.backgroundColor;
    if (z == "#ff00ff" || z == 'rgb(255, 0, 255)') {
        z = "#00ffff";
    } else {
        z = "ff00ff";
    }
    thi.style.backgroundColor = z;
}

function H_l() {
    //Изменение цвета слова "Цвет"
    window.event.cancelBubble = true;
    var z = document.all.HH.style.color;
    //alert("1. z="+document.all.HH.style.color)
    if (z == "#aa00aa" || z == 'rgb(170, 0, 170)') {
        z = "#00ffff";
        //alert("2. z="+z)
    } else {
        z = "#aa00aa";
    }
    document.all.HH.style.color = z;
}
