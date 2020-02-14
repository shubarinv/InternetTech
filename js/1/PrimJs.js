
a="background-color:#CD5C5C; color:#000080;";
a+="font-size:24pt; font-family:'Times New Roman'";
naim='Сеть магазинов "ВСЁ ДЛЯ ДОМА"';


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '.' + mm + '.' + yyyy;
document.write('<P align=center style= "'+a+'">'+ naim+'</p><P>Сегодня '+today+'</p>');
