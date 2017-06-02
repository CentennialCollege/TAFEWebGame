// IIFE - Immediately Invoked Function Expression
(function() {
  let canvas:HTMLElement;
  let stage:createjs.Stage;
  let ocean:objects.Ocean;
  let plane:objects.Plane;
  let island:objects.Island;
  let Assets:createjs.LoadQueue;

  let manifest = [
    {id:"yay", src:"./Assets/Audio/yay.ogg"}
  ];

  function Init() {
    Assets = new createjs.LoadQueue();
    Assets.installPlugin(createjs.Sound); // enables sound loading
    Assets.loadManifest(manifest);
    Assets.on("complete", Start);
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
    island.Update();
    plane.Update(stage);


    if (utility.Vector2.Distance(
      new utility.Vector2(plane.x, plane.y),
      new utility.Vector2(island.x, island.y)) < 60) {
        if(plane.IsColliding == false) {
          console.log("collision!");
          plane.IsColliding = true;
          createjs.Sound.play("yay");
        }
      }
      else {
        plane.IsColliding = false;
      }

    stage.update(); // refreshes the stage
  }

  function Main() {
    ocean = new objects.Ocean();
    stage.addChild(ocean);

    island = new objects.Island();
    stage.addChild(island);

    plane = new objects.Plane();
    stage.addChild(plane);
  }

  window.onload = Init;

})();
