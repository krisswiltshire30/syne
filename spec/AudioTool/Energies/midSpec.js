describe('Mids', () => {

    AudioTool.source = jasmine.createSpyObj('AudioNode', {
        'connect': true
    }); 

    describe(':getEnergy', () => {
        it('should return a Uint8Array', () => {
            expect(Mids.getEnergy()).toEqual(jasmine.any(Uint8Array));
        });
        it('should return an array of the correct length', () => {
            expect(Mids.getEnergy().length).toEqual(179);
        });
        it('should contain integer values', () => {
            expect(Mids.getEnergy()[0]).toEqual(jasmine.any(Number));
        });
    });
});