import IDriveable from "./IDriveable";

class TypeScroll {
    version: string;

    constructor(version: string) {
        this.version = version;
    }

    Info (name: string) {
        return `[${name}]: TypeScroll version is ${this.version}.`;
    }
}

class Car implements IDriveable {
    readonly model: string;

    constructor(model: string) {
        this.model = model;
    }

    Drive(toLocation: string) : void {
        console.log("driving to " + toLocation + "...");
    }
}

var car = new Car("Tesla");
car.Drive("Odessa");

var types = new TypeScroll("2.0.1");
console.log(types.Info("Ruslan"));