const Treble = new Energy()
Treble.getEnergy = function () { return AudioTool.getLevels().slice(204,522); }
