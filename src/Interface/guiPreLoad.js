var gui = new dat.GUI({
  load: JSON
});

let bands = {
  cubeBand: "Mids",
  sphereBand: "Bass",
  tetraBand: "Treble",
}

function generateGUI(folderName, object, gui) {
  let folder = gui.addFolder(folderName);
  folder.addColor(object, 'color').onChange(function () {
    object.material.color.set(object.color);
  });
  folder.add(object, 'wireframe').onChange(function () {
    object.material.wireframe = !object.material.wireframe;
  });
  folder.add(object, 'visible').name('Visible').onChange(function () {
    object.material.visible = !object.material.visible;
  });
  folder.add(animationToggles, folderName + 'Rotate').name('Rotate');
  folder.add(animationToggles, folderName + 'RotateSpeed', -0.2, 0.5).name('Rotate Speed');
  folder.add(bands, folderName + 'Band', {
    Bass: "Bass",
    Mids: "Mids",
    Treble: "Treble"
  }).name("Band").onChange(function (value) {
    switch (value) {
      case "Bass":
        animationToggles[folderName + 'Band'] = Bass;
        break;

      case "Mids":
        animationToggles[folderName + 'Band'] = Mids;
        break;

      case "Treble":
        animationToggles[folderName + 'Band'] = Treble;
        break;

      default:
        break;
    }
  });
}