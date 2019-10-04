function createAndSetAnalyser() {
    let stream = jasmine.createSpyObj('AudioNode', {
        'connect': true
    });
    return AudioTool.getAnalyser(stream, audioCtx)
}

export default {
    createAndSetAnalyser
};