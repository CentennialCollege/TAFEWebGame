// IIFE - Immediately Invoked Functin Expression
(function() {
  let canvas;
  let stage;

  function Init() {
    Start();
  }

  function Start() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    createjs.Ticker.framerate = 60; // frames per second
    createjs.Ticker.on("tick", Update);
    Main();
  }

  function Update() {
    stage.update(); // refreshes the stage
  }

  function Main() {
    let helloLabel = new createjs.Text("Hello, World!", "40px Consolas", "#000000");
    stage.addChild(helloLabel);
  }

  window.onload = Init;

})();
