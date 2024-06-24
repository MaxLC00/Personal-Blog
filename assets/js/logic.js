const themeSwitcher = document.getElementById('theme'); // targets the dark mode toggle button
const buttonEl = document.querySelectorAll('.button'); //selects only button class elements and creates array of them
const textboxEl = document.querySelectorAll('.tbox'); //selects only textbox class elements and creates array of them
const bodyEl = document.body; //selects the body and its children

let theme = 'light'; //defines a 'theme' to the page to mark whether page is light or dark mode, starting in light

themeSwitcher.addEventListener('click', function () {
    if (theme === 'light') { //checks pages theme, runs if the theme is light
        theme = 'dark'; //toggles page theme
        console.log("mode is dark");
        bodyEl.setAttribute('style', 'background-color: rgb(0, 0, 73); color: white;');
        for (let i = 0; i < buttonEl.length; i++) { //moves through the array of buttons
            buttonEl[i].setAttribute( // sets style attribute to each element in the array
                'style',
                'background-color: rgb(206, 224, 248); color: black;');
        }
        for (let i = 0; i < textboxEl.length; i++) {
            textboxEl[i].setAttribute(
                'style',
                'background-color: rgb(210, 210, 210);');
            }//switches background to dark and elements to corresponding variants
    } else { // if theme is not light (aka dark) runs instead
        theme = 'light';
        console.log("mode is light");
        bodyEl.setAttribute('style', 'background-color: rgb(206, 224, 248); color: black;');
        for (let i = 0; i < buttonEl.length; i++) {
            buttonEl[i].setAttribute(
                'style',
                'background-color: rgb(0, 0, 73); color: white;');
        }
        for (let i = 0; i < textboxEl.length; i++) {
            textboxEl[i].setAttribute(
                'style',
                'background-color: white;');
        }
    }
    });