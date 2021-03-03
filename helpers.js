function changeBackground () {
    let originalH1;
    originalH1 = document.querySelector('h1');
    originalH1.style.backgroundColor = 'purple';
    originalH1.style.color = 'yellow'
}

module.exports = { changeBackground }