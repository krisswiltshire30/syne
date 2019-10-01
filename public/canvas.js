window.onload = function () {
    let size = 100;
    let square = createSquare(size);
    let container = document.getElementById('square_container');
    draw(square, container);

    function main() {
        update(square, 'width', size + "px");
        size += Math.random() > 0.5 ? 2 : -2;
        requestAnimationFrame(main);
        console.log(square)
    }
    requestAnimationFrame(main);

}