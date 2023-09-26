const clear = document.querySelector(".ac");
const label = document.querySelector("label");
const display = document.querySelector(".dsp-btm");
const allBtns = document.querySelectorAll(".btn");
const numBtns = document.querySelectorAll(".num");
const splBtns = document.querySelectorAll(".spl");
const equal = document.querySelector(".eql-btn");
const del = document.querySelector(".del");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
///
function work() {
    console.log("working");
}
///

let num = [];
let opr = [];
let Times = 0;
let numValue;
const value = (e) => {
    numValue = display.innerHTML + e.target.innerHTML;
    display.innerHTML = numValue;
};

//function updates numbers and operator in num[] and opr[] arrays.
const update = (e) => {
    let int = parseFloat(numValue.slice(0, -1));
    let sign = numValue.slice(-1);
    if (numValue.length >= 2) {
        num.push(int);
        display.innerHTML = "";
        opr.push(sign);
    } else if (numValue.length < 2) {
        if (
            e.target.className == plus.className ||
            e.target.className == minus.className
        ) {
        } else {
            alert("abe yaar esa mat kar!!");
            display.innerHTML = "";
        }
    }
};
const labelValue = () => {
    let i = 0;
    let labelString = "";
    while (i < num.length) {
        let oprvalue;
        if (opr.at(i)) {
            oprvalue = opr.at(i);
        } else {
            oprvalue = "";
        }
        let value = num.at(i) + oprvalue;
        labelString += value;
        i++;
    }
    label.innerHTML = labelString;
};

let ans = 0;
const addFunction = () => {
    let i =0;
    while(i<opr.length){
        for (let index = 0; index < opr.length; index++) {
            if (opr.at(index=="+")) {
                work();
            }
            
        }
        
        i++
    }
}

allBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        value(e);
    });
});

numBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        Times = 0;
    });
});

del.addEventListener("click", () => {
    numValue = numValue.slice(0, -1);
    display.innerHTML = numValue;
    Times = 0;
});

clear.addEventListener("click", () => {
    label.innerHTML = "";
    display.innerHTML = "";
    numValue = "";
    num = [];
    opr = [];
    Times = 0;
});

splBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        Times = Times + 1;
        if (Times > 1) {
            numValue = numValue.slice(0, -2) + numValue.slice(-1);
            display.innerHTML = numValue;
        }
        update(e);
        labelValue();
    });
});
equal.addEventListener("click", () => {
    let endint = parseFloat(display.innerHTML.slice(0));
    if (isNaN(endint)) {
    } else {
        num.push(endint);
        display.innerHTML = "";
        numValue = "";
        labelValue();
    }
    addFunction();
});
