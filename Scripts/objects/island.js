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
    var Island = (function (_super) {
        __extends(Island, _super);
        // CONSTRUCTOR FUNCTION / METHOD
        function Island() {
            var _this = _super.call(this, "./Assets/Sprites/island.png") || this;
            // PRIVATE INSTANCE VARIABLES
            _this._dy = 5;
            //PUBLIC PROPERTIES
            _this.width = 62;
            _this.height = 60;
            _this.regX = _this.width * 0.5;
            _this.regY = _this.height * 0.5;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        Island.prototype._reset = function () {
            this.x = (Math.random() * 640 - this.width) + (this.width * 0.5);
            this.y = -this.height;
        };
        // PUBLIC METHODS
        Island.prototype.Start = function () {
            this._reset();
        };
        Island.prototype.Update = function () {
            this.y += this._dy;
            if (this.y >= (480 + this.height)) {
                this._reset();
            }
        };
        return Island;
    }(createjs.Bitmap));
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map