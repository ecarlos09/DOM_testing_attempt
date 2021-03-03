const helpers = require("./helpers");
const mode = require("./mode");

let original = true;

function initBind() {
    let h1 = document.querySelector('h1');
    let h2 = document.querySelector('h2');

    modeSwitch.addEventListener('click', () => {
        original = mode.changeH1(original);
    })
}

