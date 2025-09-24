
let Person = function (name, gender, birthYear) {
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
    let Age = new Date().getFullYear() - this.birthYear
    return Age
}
Person.prototype.city = 'Kabul'

let Musa = new Person('Musa', 'Male', 2001);
console.log('calcAge', Musa.calcAge(), Musa.city)
console.log(Musa)

let Ali = new Person('Ali', 'Male', 1999);
console.log('calcAge', Ali.calcAge(), Ali.city)
console.log(Ali)