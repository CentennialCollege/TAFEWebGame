module utility {
  export class Vector2 extends createjs.Point {
    constructor(x:number, y:number) {
      super(x, y);
    }

    public static Distance(P1:Vector2, P2:Vector2):number {
      return Math.sqrt(Math.pow(P2.x - P1.x, 2) + Math.pow(P2.y - P1.y, 2));
    }
  }
}
