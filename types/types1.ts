const isFetching: boolean = true;
const isLoading: boolean = false;

let int: number = 42; 
let float: number = 42.2; 
let num: number = 3e28;

const message: string = "RuslanPr0g";

const array: number[] = [1, 2, 3, 4];
const array2: Array<number> = [2, 3, 3, 3];

const array3: string[] = ['1', '2','3', '4'];
const array4: Array<string> = ['2', '3', '4', '5'];

// Tuple
const array5: [string, number] = ['1', 4];

// Any
let variable: any = 42;

variable = 'ss';

// ===
const foo = (name: string): void => {
    console.log(name);
}

foo("lol");

// Never
const neverSayLol = (message: string) : never => {
    throw new Error(message);
}

// Type
type Lol = string;
const lol: Lol = "lol";

type ID = string | number;
const id1: ID = 111;
const id2: ID = "111";