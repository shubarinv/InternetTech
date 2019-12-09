var sum_d = 0;
var sum_t = 0;
var sum_c = 0;
var sum_b = 0;

function tableChange() {
    var x = document.getElementById('furnChoose').value;
    if (document.getElementById('price').value !== '' && document.getElementById('quantity').value !== '') {
        if (x == 'desk') {
            var price_d = parseInt(document.getElementById('price').value);
            document.getElementById('deskP').textContent = price_d;

            var quantity_d = parseInt(document.getElementById('quantity').value);
            document.getElementById('deskQ').textContent = quantity_d;

            sum_d = price_d * quantity_d;
            document.getElementById('deskRes').textContent = sum_d;

        } else if (x == 'table') {
            var price_t = parseInt(document.getElementById('price').value);
            document.getElementById('tableP').textContent = price_t;

            var quantity_t = parseInt(document.getElementById('quantity').value);
            document.getElementById('tableQ').textContent = quantity_t;

            sum_t = price_t * quantity_t;
            document.getElementById('tableRes').textContent = sum_t;

        } else if (x == 'chair') {
            var price_c = parseInt(document.getElementById('price').value);
            document.getElementById('chairP').textContent = price_c;

            var quantity_c = parseInt(document.getElementById('quantity').value);
            document.getElementById('chairQ').textContent = quantity_c;

            sum_c = price_c * quantity_c;
            document.getElementById('chairRes').textContent = sum_c;

        } else if (x == 'bookself') {
            var price_b = parseInt(document.getElementById('price').value);
            document.getElementById('bookselfP').textContent = price_b;

            var quantity_b = parseInt(document.getElementById('quantity').value);
            document.getElementById('bookselfQ').textContent = quantity_b;

            sum_b = price_b * quantity_b;
            document.getElementById('bookselfRes').textContent = sum_b;
        }
        document.getElementById('sum').textContent = sum_d + sum_t + sum_c + sum_b;
    }
}







