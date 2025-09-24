
class Person {
    constructor(name, gender, birthYear) {
        this.name = name;
        this.gender = gender;
        this.birthYear = birthYear;
    }

    clacAge() {
        let age = new Date().getFullYear()-this.birthYear
        return age
    }
}

Person.prototype.city = 'Kabul'


let Musa = new Person('Musa', 'Male', 2001);
console.log('calcAge', Musa.clacAge(), Musa.city)
console.log(Musa)