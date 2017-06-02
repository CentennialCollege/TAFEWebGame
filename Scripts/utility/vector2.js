var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var utility;
(function (utility) {
    var Vector2 = (function (_super) {
        __extends(Vector2, _super);
        function Vector2(x, y) {
            return _super.call(this, x, y) || this;
        }
        Vector2.Distance = function (P1, P2) {
            return Math.sqrt(Math.pow(P2.x - P1.x, 2) + Math.pow(P2.y - P1.y, 2));
        };
        return Vector2;
    }(createjs.Point));
    utility.Vector2 = Vector2;
})(utility || (utility = {}));
//# sourceMappingURL=vector2.js.map