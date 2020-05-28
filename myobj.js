function Person(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.details = function () {
        console.log(obj.name + " - " + obj.age)
    }
   // console.log(this)
}

let popeye = new Person(100, 'popeye', 102)

// members
// -----------------
// property - value
// method   - function
// event    - function address

//let olive = CreatePerson(110, 'olive', 99)

console.log('-'.repeat(40))
console.log(popeye)
//console.log(olive.details())




// let popeye = {
//     //this : popeye;
//     id: 100,
//     name: 'popeye',
//     age: 102,
//     showDetails: function () {
//         console.log(`Name: ${this.name} - Age: ${this.age}`)
//     },
//     showThis: function () {
//         console.log(this)
//     }
// }  
// let olive = {
//     // this : olive
//     id: 100,
//     name: 'olive',
//     age: 102,   
//     showDetails: function () { console.log(`Name: ${this.name} - Age: ${this.age}`) },
//     showThis: function () { console.log(this) }
// }
//let persons = [popeye , olive]

//popeye.showThis()
//olive.showThis()




//console.log(persons)