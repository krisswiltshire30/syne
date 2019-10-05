class AudioToolGraphics extends AudioTool {
    static getBassScale(analyser) {
        return ((this.getBassAverage(analyser) * (1 / 255)) + 1).toFixed(2);
    }

    static getTrebleScale(analyser) {
        return ((this.getTrebleAverage(analyser) * (1 / 255)) + 1).toFixed(2);
    }

    static getMidScale(analyser) {
        return ((this.getMidAverage(analyser) * (1 / 255)) + 1).toFixed(2);
    }
    static getMaster() { //analyser is the argument 

    }

    static getLevels1to2(analyser) {
        let transArray = [];
        let i = 0;
        for (i = 0; i < this.getLevels(analyser).length; i++) {
            transArray.push((this.getLevels(analyser)[i] * (1 / 255)) + 1).toFixed(2)
        };
        return transArray;
    }

    static scale1of255(value) {
        return ((value * (1 / 255)) + 1).toFixed(2)
    }
}