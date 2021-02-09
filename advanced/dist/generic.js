"use strict";
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'Vladian' }, { age: 26 });
