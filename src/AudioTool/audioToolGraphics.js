class AudioToolGraphics extends AudioTool {
    static getBassScale(analyser) {
        return this.scale1of255(this.getBassAverage(analyser));
    }

    static getTrebleScale(analyser) {
        return this.scale1of255(this.getTrebleAverage(analyser));
    }

    static getMidScale(analyser) {
        return this.scale1of255(this.getTrebleAverage(analyser));
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

    static getBass1to2(analyser) {
        let scaleArray = [];
        let i = 0;
        for (i = 0; i < this.getBassEnergy(analyser).length; i++) {
            scaleArray.push((this.getBassEnergy(analyser)[i] * (1 / 255)) + 1).toFixed(2)
        };
        return scaleArray;
    }

    static getMid1to2(analyser) {
        let scaleArray = [];
        let i = 0;
        for (i = 0; i < this.getMidEnergy(analyser).length; i++) {
            scaleArray.push((this.getMidEnergy(analyser)[i] * (1 / 255)) + 1).toFixed(2)
        };
        return scaleArray;
    }
    static getTreble1to2(analyser) {
        let scaleArray = [];
        let i = 0;
        for (i = 0; i < this.getTrebleEnergy(analyser).length; i++) {
            scaleArray.push((this.getTrebleEnergy(analyser)[i] * (1 / 255)) + 1).toFixed(2)
        };
        return scaleArray;
    }

    static getToDecimal(analyser) {
        return ((analyser * (1 / 255).toFixed(2)) / 10)
    }

    static getBassDecimal(analyser) {
        return (this.scale1of255(this.getBassAverage(analyser)) - 1) / 2;
    }

    static getMidDecimal(analyser) {
        return (this.scale1of255(this.getMidAverage(analyser)) - 1) / 2;
    }

    static getTrebleDecimal(analyser) {
        return (this.scale1of255(this.getTrebleAverage(analyser)) - 1) / 2;
    }

    static getSubBassDecimal(analyser) {
        return (this.scale1of255(this.getSubBassAverage(analyser)) - 1) / 2;
    }
}