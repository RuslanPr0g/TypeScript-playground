// const cars: string[]= ['Ford', 'Audi', ''];
// const cars2: Array<string> = ['Ford', 'Audi', ''];

// const promise  = new Promise<string>(resolve => {
//     setTimeout(() => {
//         resolve('Resolving....');
//     }, 2000)
// });

// promise.then(data => {
//     console.log(data);
// })

function mergeObjects(a: object, b: object) {
    return Object.assign({}, a, b);
}

const merged = mergeObjects({name: 'Vladian'}, {age: 26});
