const Bass = new Energy();

Bass.getEnergy = function() {
    return AudioTool.getLevels().slice(3,25);
}
