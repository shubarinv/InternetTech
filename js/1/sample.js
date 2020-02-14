document.querySelector('figure').addEventListener('click',rodEl);
function rodEl(e){
    let tag = e.target.tagName;
    switch (tag) {
        case 'IMG':
                  let url = e.target.src;
            switch (url) {
                case '2.jpg':
                    e.target.src = '1.jpg';
                    e.target.nextSibling.nextSibling.textContent = 'SAMPLE TEXT.';
                break;
                case '2.jpg':
                    e.target.src = '1.jpg';
                    e.target.nextSibling.nextSibling.textContent = 'ANOTHER TEXT';
                break;
            }
        break;
        case 'FIGCAPTION':
            let color = e.target.style.color;
            switch (color) {
                case 'black':
                    e.target.style.color = 'blue';
                break;
                case 'blue':
                    e.target.style.color = 'black';
                break;   
            }
        break;
    }
}
 