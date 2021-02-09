// const cars: string[]= ['Ford', 'Audi', ''];
// const cars2: Array<string> = ['Ford', 'Audi', ''];

const promise  = new Promise(resolve => {
    setTimeout(() => {
        resolve('Resolving....');
    }, 2000)
});

