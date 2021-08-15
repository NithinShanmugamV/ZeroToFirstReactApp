let arr1 = ["Hi","Hello"];
let arr2 = ["Welcome"," Hey"];
let clone= [...arr1];
console.log("Array1: ",arr1);
console.log("Clone of Array1: ",clone);

let obj1 = {
    firstName:"Nithin"
};
let obj2 = {
    secondName:"Shanmugam"
};
let combined = {...obj1,...obj2};
console.log(combined);

let combined1 = {...obj1,...obj2, age: 20};
console.log(combined1);

let combined2 = {...combined1};
console.log(combined2);
