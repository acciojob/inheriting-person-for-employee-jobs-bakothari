function Person(name, age) {
    this.name = name;
    this.age = age;

    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

function Employee(name, age, jobTitle) {
    Person.call(this, name, age); // Inheriting Person properties
    this.jobTitle = jobTitle;

    this.jobGreet = function() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    };
}

const person = new Person("Alice", 25);
person.greet();  // Expected output: "Hello, my name is Alice, I am 25 years old."

const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet();  // Expected output: "Hello, my name is Bob, I am 30 years old, and my job title is Manager."

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
