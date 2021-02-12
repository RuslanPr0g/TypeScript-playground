"use strict";
const cars = ['Ford', 'Audi', ''];
const cars2 = ['Ford', 'Audi', ''];
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve('Resolving....');
    }, 2000);
});
promise.then(data => {
    console.log(data);
});
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'Vladian' }, { age: 26 });
function withCount(value) {
    return {
        value,
        count: `In this object ${value.length} symbols.`
    };
}
function getObjectValue(obj, key) {
    return obj[key];
}
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection(['I', 'Am', 'Ruslan']);
strings.add('!');
strings.remove('Am');
