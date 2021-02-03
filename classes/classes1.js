var TypeScroll = /** @class */ (function () {
    function TypeScroll(version) {
        this.version = version;
    }
    TypeScroll.prototype.info = function (name) {
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
