class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  displayDetails(): void {
    console.log(`${this.name} is ${this.age} years old`);
  }
}

class Student extends Person {
  studentId: number;
  course: string;
  semester: string;

  constructor(
    name: string,
    age: number,
    studentId: number,
    course: string,
    semester: string
  ) {
    super(name, age);
    this.studentId = studentId;
    this.course = course;
    this.semester = semester;
  }
}

class Staff extends Person {
  constructor(
    name: string,
    age: number,
    public staffId: number,
    public department: string,
    public position: string
  ) {
    super(name, age);
    this.staffId = staffId;
    this.department = department;
    this.position = position;
  }
}

let p1 = new Person("Sharvari",23)
console.log(p1)
p1.displayDetails()

let s1 = new Student("John",24,1,"CS","3rd")
console.log(s1)

let staff1 = new Staff("Jane",25,1,"CS","Instructor")
console.log(staff1)