"use strict";
let age = 25;
let largeNumber = 9007199254740991n;
const username = "John Doe";
let isStudent = true;
//Array Types:
let scores = [85, 90, 95];
let colors = ["red", "green", "blue"];
let answers = [true, false, true];
//Tuple Types
let person = ["Alice", 30];
//Enum Type
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 1] = "East";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
const currentDirection = Direction.North;
//Any Type:
let randomValue = "Hello";
function logMessage(message) {
    console.log(message);
}
logMessage("Hello Masai");
