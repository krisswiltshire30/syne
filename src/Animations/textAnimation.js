const text1 = new Text("SYNE", 100, 20);

let textScale = 1;

function mainLoop() {
    if (analyser) {
        textScale = AudioTool.getMidScale(analyser);
    }

    text1.changeScale(textScale);

    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop);
}
mainLoop();