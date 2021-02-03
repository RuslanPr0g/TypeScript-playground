"use strict";
exports.__esModule = true;
var TypeScroll = /** @class */ (function () {
    function TypeScroll(version) {
        this.version = version;
    }
    TypeScroll.prototype.Info = function (name) {
        return "[" + name + "]: TypeScroll version is " + this.version + ".";
    };
    return TypeScroll;
}());
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
    }
    Car.prototype.Drive = function (toLocation) {
        console.log("driving to " + toLocation + "...");
    };
    return Car;
}());
var car = new Car("Tesla");
car.Drive("Odessa");
var types = new TypeScroll("2.0.1");
console.log(types.Info("Ruslan"));
