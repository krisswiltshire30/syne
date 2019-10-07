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

  }

}