const obj1 = {
    num1:  10, //property
    num2: 8,
    add: function(num1,num2){ // method
        console.log(num1+num2);
    },
    subtract(num1,num2) { // this is a simpler version of declaring a method from ES6
        console.log(num1-num2);
    }
};
console.log(obj1.num1);// dot notation
console.log(obj1['num2']);//bracket notation
obj1.add(obj1.num1,obj1.num2);
sub = person['subtract'];
sub(obj1.num1,obj1.num2);