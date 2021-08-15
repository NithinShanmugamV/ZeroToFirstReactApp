//const { Person1 } = require('./lesson11.js');

class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(this.name,this.age);
    }
    info(){
        return this.name,this.age;
    }
}

class Developer {
    constructor(name,age,role){
        this.name = name;
        this.age = age;
        this.role = role;
    }
    printRole(){
        console.log(this.role);
    }
}

export class Developer1 extends Person {
    constructor(name,age,role){
        super(name);
        super(age);
        this.role = role
    }
    printRole(){
        console.log(this.role);
    }
}

const dev1 = new Developer("Nithin",20,"React Developer")
const dev2 = new Developer("Nithin",20,"Backend Developer")
console.log(dev1.printRole());
console.log(dev1.printRole());
//module.exports = {Developer1};