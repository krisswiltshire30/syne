const Mids = {
    getEnergy: () => { return AudioTool.getLevels().slice(25,204); },
    getAvg: function (percent) { 
        value = this.sum(this.getEnergy()) / this.getEnergy().length 
        if (percent) {
            value =  AudioTool.getPercent(value)
        }
        return value
    },
    sum: (array) => { return array.reduce((a, b) => a + b, 0 ) },
    getMaxLevel: function () { return Math.max(...this.getEnergy()) },
    getScale: function() { return this.getAvg(true) + 1}
}