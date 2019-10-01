function drawSquare(params) {

}

function createSquare(number) {
    var div = document.createElement('div');
    div.setAttribute('class', 'square')
    div.setAttribute('style', `height = ${number}px; width: ${number}px; background-color: #${number};`)
    return div
}
exports.createSquare = createSquare;
exports.drawSquare = drawSquare;