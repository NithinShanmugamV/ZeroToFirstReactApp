const demo = {
    demoPrint(){
        console.log(this);
    }
};
demo.demoPrint();

const demo1 = {
    demoPrint(){
        setTimeout(function(){
            console.log(this);
        },1000);
    }
};
demo1.demoPrint();

const demo2 = {
    demoPrint(){
        setTimeout(() => {
            console.log(this);
        },2000);
    }
};
demo2.demoPrint();