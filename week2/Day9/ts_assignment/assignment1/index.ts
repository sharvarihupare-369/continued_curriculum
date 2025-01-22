let age: number = 25;
let largeNumber: bigint = 9007199254740991n;

const username: string = "John Doe";

let isStudent: boolean = true;

//Array Types:
let scores: number[] = [85, 90, 95];
let colors: string[] = ["red", "green", "blue"];
let answers: boolean[] = [true, false, true];

//Tuple Types
let person: [string, number] = ["Alice", 30];

//Enum Type
enum Direction {
  North,
  East,
  South,
  West,
}

const currentDirection: Direction = Direction.North;

//Any Type:
let randomValue: any = "Hello";

//Void Type:
function logMessage(message: string): void {
  console.log(message);
}

logMessage("Hello Masai");

//Null and Undefined Types:
let emptyValue: null = null;

let notAssigned: undefined = undefined;

//Function Declarations:

function sum(a: number, b: number): number {
  return a + b;
}
let res = sum(2, 3);

function greet(message: string): string {
  return `${greet} Masai`;
}

//Object Types:

type GenderType = "Male" | "Female" | "Others";
type Person = {
  name: string;
  age: number;
  isMarried?: boolean;
  email: string;
  gender: GenderType;
};

let p1: Person = {
  name: "John",
  age: 23,
  email: "j@gmail.com",
  gender: "Male",
};

interface UserObj {
  name: string;
  age: number;
  isStudent?: boolean;
}

let u1: UserObj = {
  name: "Jane",
  age: 22,
};
