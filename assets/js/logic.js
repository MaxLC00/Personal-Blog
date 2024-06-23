const themeSwitcher = document.getElementById('theme');
const buttonEl = document.querySelectorAll('.button');
const textboxEl = document.querySelectorAll('.tbox');
const bodyEl = document.body;

console.log(buttonEl);
console.log(textboxEl);

let theme = 'light';

themeSwitcher.addEventListener('click', function() {
    if (theme === 'light') {
        theme = 'dark';
        console.log("mode is dark");
        bodyEl.setAttribute('style', 'background-color: rgb(0, 0, 73); color: white;');
        for (let i = 0; buttonEl.length; i++) {
            buttonEl[i].setAttribute(
                'style', 
                'background-color: rgb(200, 223, 253); color: black;');
            textboxEl[i].setAttribute(
                'style', 
                'background-color: rgb(210, 210, 210);');
        }
    } else {
        theme = 'light';
        console.log("mode is light");
        bodyEl.setAttribute('style', 'background-color: rgb(200, 223, 253); color: black;');
        for (let i = 0; buttonEl.length; i++) {
            buttonEl[i].setAttribute(
                'style', 
                'background-color: rgb(0, 0, 73); color: white;');
            textboxEl[i].setAttribute(
                'style', 
                'background-color: white;');
        }
    }
});