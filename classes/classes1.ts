class TypeScroll {
    version: string;

    constructor(version: string) {
        this.version = version;
    }

    info (name: string) {
        return `[${name}]: TypeScroll version is ${this.version}.`;
    }
}

interface IDriveable {
    Drive(toLocation: string) : void
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