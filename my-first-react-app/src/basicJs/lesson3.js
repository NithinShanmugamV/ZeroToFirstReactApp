const opertions = {
    num1: 10,
    num2:8,
    demoPrint() {
        console.log(this);
    }
};
opertions.demoPrint();
const demoPrint= opertions.demoPrint;
console.log(demoPrint);
demoPrint();
