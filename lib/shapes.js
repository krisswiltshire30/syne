function update(element, property, value) {
  element.style[`${property}`] = value
}

function draw(childElement, parentElement) {
  parentElement.appendChild(childElement);
}

function createSquare(number) {
  var div = document.createElement('div');
  div.setAttribute('class', 'square')
  div.setAttribute('style', `height: ${number}px; width: ${number}px; background-color: black;`)
  return div
}

exports.createSquare = createSquare;
exports.draw = draw;
exports.update = update;