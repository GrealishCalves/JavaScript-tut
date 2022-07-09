'use strict';

/* A class is a blueprint for creating objects with pre-defined properties and methods */
class person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	print() {
		console.log(`${this.name} is ${this.age} years old`);
	}
}

/* Creating a new class called `student` that extends the `person` class. */
class student extends person {
	/**
	 Calling the constructor of the parent class, and then adding a grade property to the student class.
	 * @param name - The name of the student.
	 * @param age - The age of the student.
	 * @param grade - The grade of the student.
	 */
	constructor(name, age, grade) {
		super(name, age);
		this.grade = grade;
	}
	/**
	 * The `print()` function is a method of the `Student` class. It is a function that is called on an
	 * instance of the `Student` class. It prints the name and grade of the student
	 */
	print() {
		super.print();
		console.log(`${this.name} is ${this.grade} grade`);
	}
}

/* Creating a new class called `teacher` that extends the `person` class. */
class teacher extends person {
	/**
	 * Calling the constructor of the parent class, and then adding a salary property to the teacher class.
	 * @param name - The name of the teacher.
	 * @param age - The age of the teacher.
	 * @param salary - The salary of the teacher.
	 */
	constructor(name, age, salary) {
		/*  */
		super(name, age);
		this.salary = salary;
	}
	print() {
		/* Calling the `print()` function of the parent class, and then printing the salary of the teacher. */
		super.print();
		console.log(`${this.name} has ${this.salary} salary`);
	}
}

const student1 = new student('John', 20, 5);
const teacher1 = new teacher('Jane', 30, 1000);
console.log(student1.print());
console.log(teacher1.print());
