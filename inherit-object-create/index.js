let person = {

    calcAge () {
        return new Date().getFullYear() - this.birthYear
    },

    greet () {
        console.log('Hello there!')
    },
    init (name, birthYear, salary) {
        this.name = name
        this.birthYear = birthYear
        this.salary = salary
    }
}

let Murtaza = Object.create(person)
Murtaza.name = 'Murtaza'
Murtaza.birthYear = 1998
Murtaza.salary = 1200
console.log(Murtaza)
console.log(Murtaza.calcAge())
Murtaza.greet()
// Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
// In this example, person is the prototype of Murtaza, so Murtaza can access the methods defined in person.
let Sarah = Object.create(person, {
    name: {value: 'Sarah'},
    birthYear: {value: 2002},
    salary: {value: 1500}
})
console.log(Sarah)
console.log(Sarah.calcAge())
Sarah.greet()

// The second argument of Object.create() method is an optional property descriptor object that allows you to define properties for the new object.
// In this example, we define the properties name, birthYear, and salary for the Sarah object using the property descriptor syntax.
// This is an alternative way to create objects and set their properties, instead of setting them one by one after creating the object.

let John = Object.create(person)
John.init('John', 1990, 2000)
console.log(John)
console.log(John.calcAge())
John.greet()
// We can also add an init method to the prototype object to initialize the properties of the new object.
// This is similar to a constructor function in a class-based approach.
// This way, we can create new objects and initialize their properties in a single step.