const arrayOfNumbers: Array<number> = [1, 2, 3];
const arrayOfStrings: Array<string> = ['1', '2', '3'];

function reverse<T>(array: T[]): Array<T>
{
    return array.reverse();
}

console.log(reverse(arrayOfNumbers));
console.log(reverse(arrayOfStrings));