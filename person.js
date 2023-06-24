// Module Wrapper Function
// (function (exports, require, module, ___filename, ___dirname){

// })

// console.log(__dirname, __filename);

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`Hi, my name is ${this.name} and i am ${this.age}`)
    }
}

module.exports = Person