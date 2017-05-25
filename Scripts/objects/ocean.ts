module objects {
  export class Ocean extends createjs.Bitmap {
    constructor() {
      super("./Assets/Sprites/ocean.gif");
      this.Reset();
    }

    Reset() {
      this.y = -960;
    }

    Update() {
      this.y += 5;
      if(this.y >= 0) {
        this.Reset();
      }
    }
  }
}
