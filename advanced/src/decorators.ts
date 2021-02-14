function Log(constructor: Function) {

}

function Log2(target: any, propName: string | Symbol) {
}

function Log3(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {

}

@Log
class Component {
    @Log2   
    name: string

    constructor(name: string) {
        this.name = name;
    }

    @Log3
    get componentName() {
        return this.name;
    }

    @Log3
    logName(): void {
        console.log('Component Name: ' + this.name);
    }
}