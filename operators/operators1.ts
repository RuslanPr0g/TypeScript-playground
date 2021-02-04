interface Person {
    name: string;
    age: number;
}

type PersonKeys = keyof Person; // name | age

let key: PersonKeys = 'name';
key = 'age';