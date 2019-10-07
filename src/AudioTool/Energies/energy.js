const Energy = function () {

}

Energy.prototype = {
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