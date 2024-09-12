const fs = require("fs");

const data = fs.readFileSync("a.txt", "utf-8");

console.log(data)


function addition(a,b){
    return a + b;
}

function multiplication (a,b){
    return a*b;
}

function subtraction(a,b){
    return a - b;
}

function operation(a,b,op){
    return op(a,b)
}

var ans = operation(1,4,addition)

console.log(ans)