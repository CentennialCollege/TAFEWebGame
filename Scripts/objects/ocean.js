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
    var Ocean = (function (_super) {
        __extends(Ocean, _super);
        function Ocean() {
            var _this = _super.call(this, "./Assets/Sprites/ocean.gif") || this;
            _this.Reset();
            return _this;
        }
        Ocean.prototype.Reset = function () {
            this.y = -960;
        };
        Ocean.prototype.Update = function () {
            this.y += 5;
            if (this.y >= 0) {
                this.Reset();
            }
        };
        return Ocean;
    }(createjs.Bitmap));
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map