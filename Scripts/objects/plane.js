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
var objects;
(function (objects) {
    var Plane = (function (_super) {
        __extends(Plane, _super);
        function Plane() {
            var _this = _super.call(this, "./Assets/Sprites/plane.png") || this;
            _this.regX = 32.5;
            _this.regY = 32.5;
            _this.y = 430;
            return _this;
        }
        Plane.prototype.Update = function (stage) {
            this.x = stage.mouseX;
        };
        return Plane;
    }(createjs.Bitmap));
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map