

class Person {
    constructor(name, birthYear, salary) {
        this.name = name;
        this.birthYear = birthYear;
        this.salary = salary;
    }

    calcAge() {
        console.log(new Date().getFullYear() - this.birthYear)
    }

    static greet() {
        console.log('Hello there!')
    }
}

let Murtaza = new Person('Murtaza', 1998, 1200)
console.log(Murtaza)
Murtaza.calcAge()
Person.greet()
// static method is called directly from the class not from the instance of the class
// static method is used to create utility functions that are not tied to a specific instance of the class
// static methods are often used for operations that don't require any data from an instance of the class