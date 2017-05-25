module objects {
  export class Plane extends createjs.Bitmap {
    constructor() {
      super("./Assets/Sprites/plane.png");
      this.regX = 32.5;
      this.regY = 32.5;
      this.y = 430;
    }
  }
}
