var _this = this;
var react1 = {
  id: "1234",
  size: {
    width: 20,
    height: 30,
  },
  color: "#000",
};
var rect2 = {
  id: "12345",
  size: {
    width: 50,
    height: 50,
  },
  color: "#ccc",
};
rect2.color = "black";
var rect3 = {};
var rect4 = {};
var rect5 = {
  id: "1234",
  size: {
    width: 20,
    height: 30,
  },
  color: "#000",
  getArea: function () {
    return _this.size.width * _this.size.height;
  },
};
var Clock = /** @class */ (function () {
  function Clock() {
    this.time = new Date();
  }
  Clock.prototype.setTime = function (date) {
    this.time = date;
  };
  return Clock;
})();
var css = {
  border: "1px solid black",
  margin: "0 auto",
};
