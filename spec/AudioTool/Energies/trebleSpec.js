describe('Treble', () => {

    AudioTool.source = jasmine.createSpyObj('AudioNode', {
        'connect': true
    }); 

    describe(':getEnergy', () => {
        it('should return a Uint8Array', () => {
            expect(Treble.getEnergy()).toEqual(jasmine.any(Uint8Array));
        });
        it('should return an array of the correct length', () => {
            expect(Treble.getEnergy().length).toEqual(318);
        });
        it('should contain integer values', () => {
            expect(Treble.getEnergy()[0]).toEqual(jasmine.any(Number));
        });
    });
});