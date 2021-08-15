const firstName = "Nithin";
const lastName = "Shanmugam";

function greeting1(firstName, lastName) {
    greet = "Hi "+ firstName + " " + lastName;
    return greet;
}
let sayHi = greeting1(firstName, lastName);
console.log(sayHi);


const greeting2 = (firstName, lastName) => {
    greet = "Hi "+ firstName + " " + lastName;
    return greet;
};
sayHi = greeting2(firstName, lastName);
console.log(sayHi);

const greeting3 = firstName => "hi " + firstName;
console.log(greeting3(firstName));

const greeting4 = () => "hi ";
console.log(greeting4());

const students = [
    {regNo:1, feePaid: true},
    {regNo:2, feePaid: false},
    {regNo:3, feePaid: false},
    {regNo:4, feePaid: true}
];

let studentsPaid  = students.filter(function (students){return students.feePaid;});
console.log(studentsPaid);

studentsPaid = students.filter(students => students.feePaid);
console.log(studentsPaid);
