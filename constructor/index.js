

let Person = function(name, gender, birthYear) {
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear;
    this.calAge = function() {
        let Age = new Date().getFullYear()-this.birthYear
        return Age
    }
}


const Musa = new Person("Musa", 'Male', 2001)
console.log('calcAge',Musa.calAge())
console.log(Musa)