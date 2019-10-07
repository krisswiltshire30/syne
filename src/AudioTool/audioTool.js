const AudioTool = {
  audioContext: new AudioContext || new webkitAudioContext,

  setup: async function () {
    if (navigator.mediaDevices.getUserMedia) {
      console.log('getUserMedia supported');
      var constraints = {
        audio: true
      }
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints)
        this.source = this.audioContext.createMediaStreamSource(stream);
        this.getAnalyser();
        this.isSetup = true;
        return this.source;
      } catch (err) {
        console.log('This following gUM error occured: ' + err);
      }
    } else {
      console.log('getUserMedia not supported on your browser!');
    }
  },

  getAnalyser: function () {
    this.analyser = this.audioContext.createAnalyser();
    this.source.connect(this.analyser);
    return this.analyser;
  },

  getLevels: function (percent) {
    this.analyser.fftSize = 2048;
    let bufferLength = this.analyser.frequencyBinCount;
    let dataArray = new Uint8Array(bufferLength);
    this.analyser.getByteFrequencyData(dataArray);
    if (percent) {

      let transArray = [];
      let i = 0;
      for (i = 0; i < this.getLevels().length; i++) {
        transArray.push((this.getLevels()[i] * (1 / 255)).toFixed(2))
      }
      return transArray;
    }

    return dataArray
  },

  getBassEnergy: function (percent) {
    return this.getLevels(percent).slice(3, 25);
  },

  getSubBassEnergy: function (percent) {
    return this.getLevels(percent).slice(0, 3);
  },

  getMidEnergy: function (percent) {
    return this.getLevels(percent).slice(25, 204);
  },

  getTrebleEnergy: function (percent) {
    return this.getLevels(percent).slice(204, 522);
  },

  getAvg: function (energy) {
    return Math.floor(this.sum(energy) / energy.length)
  },

  sum: function (array) {
    return array.reduce((a, b) => a + b, 0)
  },

  getBassAverage: function (percent) {
    return this.getAvg(this.getBassEnergy(percent));
  },

  getSubBassAverage: function (percent) {
    return this.getAvg(this.getSubBassEnergy(percent));
  },

  getMidAverage: function (percent) {
    return this.getAvg(this.getMidEnergy(percent));
  },

  getTrebleAverage: function (percent) {
    return this.getAvg(this.getTrebleEnergy(percent));
  },

  getMaxLevel: function (array) {
    return Math.max(...array)
  },

  getBassMax: function (percent) {
    return this.getMaxLevel(this.getBassEnergy(percent));
  },

  getSubBassMax: function (percent) {
    return this.getMaxLevel(this.getSubBassEnergy(percent));
  },

  getMidMax: function (percent) {
    return this.getMaxLevel(this.getMidEnergy(percent));
  },

  getTrebleMax: function (percent) {
    return this.getMaxLevel(this.getTrebleEnergy(percent));
  },
}