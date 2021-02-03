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

// var car = new Car("Tesla");
// car.Drive("Odessa");

// var types = new TypeScroll("2.0.1");
// console.log(types.Info("Ruslan"));

// ====================================

class Animal {
    protected voice: string = '';
    public color: string = 'black';

    public eat() {
        this.go();
        console.log("eating...");
    }

    private go() : void {
        console.log("going..for...food...");
    }
}

class Cat extends Animal {
    public setVoice(voice: string) : void {
        this.voice = voice;
    }

    public eat() {
        console.log(this.voice);
        console.log("eating...");
    }
}

// var animal = new Animal();
// animal.eat();

// var cat = new Cat();
// cat.setVoice("MEOW!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
// cat.eat();

// ====================================================

abstract class Compoenent {
    abstract render(): void;
    abstract info(): string;
}

class AppComponent extends Compoenent {
    render() : void {
        console.log("rendering..");
        console.log("rendered!");
    }

    info(): string {
        return "Application component";
    }
}

var app = new AppComponent();
app.render();
console.log(app.info())