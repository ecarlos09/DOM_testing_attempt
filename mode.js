function changeH1(original) {
    original ? changeBackground() : changeBackground();
    return !original
}

module.exports = { changeH1 }