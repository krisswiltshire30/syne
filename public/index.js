async function init() {
  let audioContext = new AudioContext;
  let audioIn = await AudioTool.getAudioInput(audioContext);
  let analyser = AudioTool.getAnalyser(audioIn, audioContext);
  window.analyser = analyser;
}

init()