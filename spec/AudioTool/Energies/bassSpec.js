describe('Bass', () => {

    AudioTool.source = jasmine.createSpyObj('AudioNode', {
        'connect': true
    }); 

    describe(':getEnergy', () => {
        it('should return a Uint8Array', () => {
            expect(Bass.getEnergy()).toEqual(jasmine.any(Uint8Array));
        });
        it('should return an array of the correct length', () => {
            expect(Bass.getEnergy().length).toEqual(22);
        });
        it('should contain integer values', () => {
            expect(Bass.getEnergy()[0]).toEqual(jasmine.any(Number));
        });
    });
});