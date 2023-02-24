//Scope Class

var x = 10;
const y = 20;
let z = 30;
//all above is global scope

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFun() {
    let x = 1;
    var y = 2;
    const z = 3;
    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);
    {
        //if u have declared a variable with 'var', you can use 'var' or 'let' after to reassign a new value
        //otherwise if you declare a variable with 'let', you may reassign exclusively with 'let'
        var y = 10; //function scope
        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }
    // now y is 10
    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);
}

myFun();
console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

//let and const are block scope
//var is function scope
