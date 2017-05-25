module objects {
  export class Ocean extends createjs.Bitmap {
    constructor() {
      super("./Assets/Sprites/ocean.gif");

    }

    Reset() {
      this.y = -960;
    }

    Update() {
      this.y += 5;
    }
  }
}
