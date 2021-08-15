const opertions = {
    num1: 10,
    num2:8,
    demoPrint() {
        console.log(this);
    }
};

const demoPrint= opertions.demoPrint.bind(opertions)
demoPrint();
