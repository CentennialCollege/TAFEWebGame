// IIFE - Immediately Invoked Function Expression
(function() {
  let canvas:HTMLElement;
  let stage:createjs.Stage;
  let ocean:objects.Ocean;
  let plane:objects.Plane;

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
    ocean.Update();

    stage.update(); // refreshes the stage
  }

  function Main() {
    ocean = new objects.Ocean();
    stage.addChild(ocean);

    plane = new objects.Plane();
    stage.addChild(plane);
  }

  window.onload = Init;

})();
