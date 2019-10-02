class AudioTool {

  static async getAudioInput(audioCtx) {

    if (navigator.mediaDevices.getUserMedia) {
        console.log('getUserMedia supported');
        var constraints = {audio: true}
        try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints)
        return audioCtx.createMediaStreamSource(stream);
        }
        catch (err) {
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
}

module.exports = AudioTool;