class Person1 {
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
