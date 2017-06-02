module objects {
  export class Island extends createjs.Bitmap {
    // PRIVATE INSTANCE VARIABLES
    private _dy = 5;

    //PUBLIC PROPERTIES
    public width:number = 62;
    public height:number = 60;

    // CONSTRUCTOR FUNCTION / METHOD
    constructor() {
      super("./Assets/Sprites/island.png");

      this.regX = this.width * 0.5;
      this.regY = this.height * 0.5;

      this.Start();
    }
  // PRIVATE METHODS
    private _reset():void {
      this.x = (Math.random() * 640 - this.width) + (this.width * 0.5) ;
      this.y = -this.height;
    }

  // PUBLIC METHODS
    public Start():void {
      this._reset();
    }

    public Update():void {
      this.y += this._dy;
      if(this.y >= (480 + this.height) ) {
        this._reset();
      }
    }
  }
}
