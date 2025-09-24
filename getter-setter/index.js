// let John = {
//     name: 'john',
//     birthYear: 1998,
//     salary: 1200,

//     get getName() {
//         return 'Mr.'+ this.name
//     },

//     set setName(value) {
//         if(value.length < 3) {
//             console.log('Name is too short')
//         } else {
//             this.name = value
//         }

//     }
// }

// console.log(John.getName)
// John.setName = 'John nnnn'
// console.log(John.getName)
// //it's possible to access but we want to hide the data inside the obj
// console.log(John.name)
// John.setName = 'John Doe'
// console.log(John.name)

let User = class {
  constructor(name, password, role) {
    this.name = name;
    this.password = password;
    this.role = role;
  }

  set setPassword(value) {
    if (value.length < 4) {
      console.log("Password is too short");
    } else {
      this.password = value;
    }
  }
};


let Dost = new User("Dost", 1234, "admin");
console.log(Dost);
Dost.setPassword = "1234Dost";
console.log(Dost);