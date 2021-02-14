"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Log(constructor) {
}
function Log2(target, propName) {
}
function Log3(target, propName, descriptor) {
}
let Component = class Component {
    constructor(name) {
        this.name = name;
    }
    logName() {
        console.log('Component Name: ' + this.name);
    }
};
__decorate([
    Log2
], Component.prototype, "name", void 0);
__decorate([
    Log3
], Component.prototype, "logName", null);
Component = __decorate([
    Log
], Component);
