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

  getLevels: function () {
    this.analyser.fftSize = 2048;
    let bufferLength = this.analyser.frequencyBinCount;
    let dataArray = new Uint8Array(bufferLength);
    this.analyser.getByteFrequencyData(dataArray);
    return dataArray
  },

  getBassEnergy: function () {
    return this.getLevels().slice(3, 25);
  },

  getSubBassEnergy: function () {
    return this.getLevels().slice(0, 3);
  },

  getMidEnergy: function () {
    return this.getLevels().slice(25, 204);
  },

  getTrebleEnergy: function () {
    return this.getLevels().slice(204, 522);
  },

  getAvg: function (energy) {
    return Math.floor(this.sum(energy) / energy.length)
  },

  sum: function (array) {
    return array.reduce((a, b) => a + b, 0)
  },

  getBassAverage: function () {
    return this.getAvg(this.getBassEnergy());
  },

  getSubBassAverage: function () {
    return this.getAvg(this.getSubBassEnergy());
  },

  getMidAverage: function () {
    return this.getAvg(this.getMidEnergy());
  },

  getTrebleAverage: function () {
    return this.getAvg(this.getTrebleEnergy());
  },

  getMaxLevel: function (array) {
    return Math.max(...array)
  },

  getBassMax: function () {
    return this.getMaxLevel(this.getBassEnergy());
  },

  getSubBassMax: function () {
    return this.getMaxLevel(this.getSubBassEnergy());
  },

  getMidMax: function () {
    return this.getMaxLevel(this.getMidEnergy());
  },

  getTrebleMax: function () {
    return this.getMaxLevel(this.getTrebleEnergy());
  },

  getBassScale: function () {
    return ((this.getBassAverage() * (1 / 255)) + 1).toFixed(2);
  },

  getSubBassScale: function () {
    return ((this.getSubBassAverage() * (1 / 255)) + 1).toFixed(2);
  },
  getTrebleScale: function () {
    return ((this.getTrebleAverage() * (1 / 255)) + 1).toFixed(2);
  },

  getMidScale: function () {
    return ((this.getMidAverage() * (1 / 255)) + 1).toFixed(2);
  },
}