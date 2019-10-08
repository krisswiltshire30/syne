const Mids = new Energy()

Mids.getEnergy = function() {
    return AudioTool.getLevels().slice(25,204); 
}
    