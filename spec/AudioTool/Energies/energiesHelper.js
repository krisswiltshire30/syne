function audioSourceNodeSetup() {
    AudioTool.source = jasmine.createSpyObj('AudioNode', {
        'connect': true
    })
};

