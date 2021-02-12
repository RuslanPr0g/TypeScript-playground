const cars: string[]= ['Ford', 'Audi', ''];
const cars2: Array<string> = ['Ford', 'Audi', ''];

const promise  = new Promise<string>(resolve => {
    setTimeout(() => {
        resolve('Resolving....');
    }, 2000)
});

promise.then(data => {
    console.log(data);
})

// =======================

function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
    return Object.assign({}, a, b);
}

const merged = mergeObjects({name: 'Vladian'}, {age: 26});

// =================

function withCount<T extends ILength>(value: T): {value: T, count: string} {
    return {
        value,
        count: `In this object ${value.length} symbols.`
    }
}

// =============================

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key];
}

// ==========================

class Collection<T> {
    constructor(private _items: Array<T> = []) {

    }

    add(item: T) {
        this._items.push(item);
    }

    remove(item: T) {
        this._items = this._items.filter(i => i !== item);
    }

    get items(): Array<T> {
        return this._items;
    }
}

const strings = new Collection(['I', 'Am', 'Ruslan']);
strings.add('!');
strings.remove('Am');

// ======================

interface Car {
    model: string;
    year: number;
}

function createAndValidate(model: string, year: number) : Car {
    const car: Partial<Car> = {};

    if(model.length > 3) {
        car.model = model;
    }

    if (year > 2000) {
        car.year = year;
    }

    return car as Car;
}

// ===============================

const newCars: Readonly<Array<string>> = ['Ford', 'Audi'];
// cars.shift();

