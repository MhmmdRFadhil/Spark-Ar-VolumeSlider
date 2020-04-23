// for version spark ar above v85

const Scene = require('Scene');
const NativeUI = require('NativeUI');

Promise.all([
    Scene.root.findFirst('speaker0') // object speaker 
]).then(function(result){

    const speaker = result[0];

    var lastSliderValue = 1;
    const slider = NativeUI.slider;

    slider.value.monitor({fireOnInitialValue:false}).subscribe(function(val){
      lastSliderValue = val.newValue;  
      speaker.volume = lastSliderValue;
    });
    slider.value = 0.5; // you can change default value for volume 
    slider.visible = true;

})

// for version spark ar under v85

/*const Scene = require('Scene');
const NativeUI = require('NativeUI');

const speaker = Scene.root.find('speaker0');
const slider = NativeUI.slider;
var lastSliderValue = 1;

    slider.value.monitor({fireOnInitialValue:false}).subscribe(function(val){
    lastSliderValue = val.newValue;
    speaker.volume = lastSliderValue;
    });
slider.value = 0.5;
slider.visible = true;*/
