let arr1 = ["Hi","Hello"];
let arr2 = ["Welcome"," Hey"];
let greet = arr1.concat(arr2);
console.log(greet);

let greet1 = [...arr1,...arr2];
console.log(greet1);

let greet2 = [...arr1,"Hi everybody",...arr2, "Hey all"];
console.log(greet2);

let greet3 = arr1.concat("Hi everybody");
greet3 = greet3.concat(arr2);
greet3 = greet3.concat("Hey all");
console.log(greet3);