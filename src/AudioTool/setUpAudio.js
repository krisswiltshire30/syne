let audioContext;
let audioIn;
let analyser;

(async function audioInit() {
  audioContext = new AudioContext || new webkitAudioContext;
  audioIn = await AudioTool.getAudioInput(audioContext);
  analyser = AudioTool.getAnalyser(audioIn, audioContext);
  audioIn.connect(audioContext.destination);
})();
