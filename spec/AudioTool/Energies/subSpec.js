describe('Sub', () => {

    AudioTool.source = jasmine.createSpyObj('AudioNode', {
        'connect': true
    }); 

    describe(':getEnergy', () => {
        it('should return a Uint8Array', () => {
            expect(Sub.getEnergy()).toEqual(jasmine.any(Uint8Array));
        });
        it('should return an array of the correct length', () => {
            expect(Sub.getEnergy().length).toEqual(3);
        });
        it('should contain integer values', () => {
            expect(Sub.getEnergy()[0]).toEqual(jasmine.any(Number));
        });
    });
});