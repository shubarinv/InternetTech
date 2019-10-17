var select, value, text;

function check() {
    select = document.getElementById("furniture");
    value = select.options[select.selectedIndex].value;
    text = select.options[select.selectedIndex].text;
    if (value == 'empt') {
        alert("Выберите мебель!");
        return;
    }

    select = document.getElementById("materials");
    value = select.options[select.selectedIndex].value;
    text = select.options[select.selectedIndex].text;
    if (value == 'empt') {
        alert("Выберите материал!");
        return;
    }

    document.getElementById('formSend').action = "Lab3_1.php";
}
