"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayDetails() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}
class Student extends Person {
    constructor(name, age, studentId, course, semester) {
        super(name, age);
        this.studentId = studentId;
        this.course = course;
        this.semester = semester;
    }
}
class Staff extends Person {
    constructor(name, age, staffId, department, position) {
        super(name, age);
        this.staffId = staffId;
        this.department = department;
        this.position = position;
        this.staffId = staffId;
        this.department = department;
        this.position = position;
    }
}
let p1 = new Person("Sharvari", 23);
console.log(p1);
p1.displayDetails();
let s1 = new Student("John", 24, 1, "CS", "3rd");
console.log(s1);
let staff1 = new Staff("Jane", 25, 1, "CS", "Instructor");
console.log(staff1);
