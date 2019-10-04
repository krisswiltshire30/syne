class AudioTool {

  static async getAudioInput(audioCtx) {

    if (navigator.mediaDevices.getUserMedia) {
      console.log('getUserMedia supported');
      var constraints = {
        audio: true
      }
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints)
        return audioCtx.createMediaStreamSource(stream);
      } catch (err) {
        console.log('This following gUM error occured: ' + err);
      }
    } else {
      console.log('getUserMedia not supported on your browser!');
    }

  }

  static getAnalyser(audioStream, audioContext) {

    const audioAnalyserNode = audioContext.createAnalyser();
    audioStream.connect(audioAnalyserNode);

    return audioAnalyserNode;
  }

  static getLevels(analyser) {
    analyser.fftSize = 2048;
    let bufferLength = analyser.frequencyBinCount;
    let dataArray = new Uint8Array(bufferLength);
    analyser.getByteFrequencyData(dataArray);
    return dataArray
  }

  static getBassEnergy(analyser) {
    return this.getLevels(analyser).slice(0, 25);
  }

  static getMidEnergy(analyser) {
    return this.getLevels(analyser).slice(26, 205);
  }

  static getTrebleEnergy(analyser) {
    return this.getLevels(analyser).slice(206, 1023);
  }

  static getAvg(energy) {
    return Math.floor(this.sum(energy) / energy.length)
  }

  static sum(array) {
    return array.reduce((a, b) => a + b, 0)
  }

  static getBassAverage() {
    return this.getAvg(this.getBassEnergy());
  }

  static getMidAverage() {
    return this.getAvg(this.getMidEnergy());
  }

  static getTrebleAverage() {
    return this.getAvg(this.getTrebleEnergy());
  }

  static getMaxLevel(array) {
    return Math.max(...array)
  }

  static getBassMax() {
    return this.getMaxLevel(this.getBassEnergy());
  }

  static getMidMax() {
    return this.getMaxLevel(this.getMidEnergy());
  }

  static getTrebleMax() {
    return this.getMaxLevel(this.getTrebleEnergy());
  }
}