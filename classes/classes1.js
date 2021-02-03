"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// var car = new Car("Tesla");
// car.Drive("Odessa");
// var types = new TypeScroll("2.0.1");
// console.log(types.Info("Ruslan"));
// ====================================
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = '';
        this.color = 'black';
    }
    Animal.prototype.eat = function () {
        this.go();
        console.log("eating...");
    };
    Animal.prototype.go = function () {
        console.log("going..for...food...");
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
    };
    Cat.prototype.eat = function () {
        console.log(this.voice);
        console.log("eating...");
    };
    return Cat;
}(Animal));
var animal = new Animal();
animal.eat();
var cat = new Cat();
cat.setVoice("MEOW!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
cat.eat();
