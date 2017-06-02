module objects {
  export class Plane extends createjs.Bitmap {
    public IsColliding:boolean;

    constructor() {
      super("./Assets/Sprites/plane.png");
      this.regX = 32.5;
      this.regY = 32.5;
      this.y = 430;
      this.IsColliding = false;
    }

    Update(stage:createjs.Stage) {
      this.x = stage.mouseX;
    }
  }
}
