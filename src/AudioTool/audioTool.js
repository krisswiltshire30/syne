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

  getPercent: function (value) {
    return (value / 255);

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
    return (this.sum(energy) / energy.length)
  },

  sum: function (array) {
    return array.reduce((a, b) => a + b, 0)
  },

  getBassAverage: function (percent) {
    value = this.getAvg(this.getBassEnergy());
    if (percent) {
      value = this.getPercent(value);
    }
    return value
  },

  getSubBassAverage: function (percent) {
    value = this.getAvg(this.getSubBassEnergy());
    if (percent) {
      value = this.getPercent(value);
    }
    return value;
  },

  getMidAverage: function (percent) {
    value = this.getAvg(this.getMidEnergy());
    if (percent) {
      value = this.getPercent(value);
    }
    return value;
  },

  getTrebleAverage: function (percent) {
    value = this.getAvg(this.getTrebleEnergy());
    if (percent) {
      value = this.getPercent(value);
    }
    return value;
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
    return (this.getBassAverage() + 1);
  },

  getSubBassScale: function () {
    return (this.getSubBassAverage() + 1);
  },
  getTrebleScale: function () {
    return (this.getTrebleAverage() + 1);
  },

  getMidScale: function () {
    return (this.getMidAverage() + 1);
  },

  getMidPeakFreqs: function () {
    var a = this.getMidEnergy();
    maxes = []
    for (var i = 1; i < a.length - 1; ++i) {
       if (a[i-1] < a[i] && a[i] > a[i+1])
       maxes.push({strength: a[i], index: i})
    } 
    maxes.sort(function(a, b){
      return a.strength<b.strength});

    return ((maxes[0].index + 29) * 19.5);
  }

}