const Sub = new Energy();
    
Sub.getEnergy = () => { return AudioTool.getLevels().slice(0,3); }
