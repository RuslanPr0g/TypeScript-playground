interface Person {
    name: string;
    age: number;
}

type PersonKeys = keyof Person; // name | age

let key: PersonKeys = 'name';
key = 'age';

type User = {
    _id: number;
    name: string;
    email: string;
    createdAt: Date;
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'>;
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>;

