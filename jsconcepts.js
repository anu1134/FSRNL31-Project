
// console.log(a);    // undefined

// const a = 10;

// console.log(a); // 10

// function square (num) {
//     return num * num;
// }

// var square1 = square(2);
// var square2 = square(4);


// JS Hoisting

// getName();


// var a = 89;

// a = 78;

// console.log(a);
// function getName() {
//     console.log("welcome to javascript");
// }

// if (true) {
//     let a = 45;
//     console.log(a);
// }

// console.log(a);

// b();
// a();

// let x = 1;

// console.log(x);

// function a() {
//     x = 90;
//     console.log(x);
// }

// function b() {
//     x = 100;
//     console.log(x);
// }
// b();

// Shadowing

// var a = 100;
// let b = 100;
// {
//     var a = 20;
//     let b = 30; // block scope
//     const c = 40;
//     console.log(a); //20
//     console.log(b); // 30
//     console.log(c); // 40
// }

// console.log(a); // 20
// console.log(b); // error


// Illegal shadowing --> we cannot shadow let with var
// let a = 20;
// {
//     var a = 10;
// }


// This is fine
// var a = 20;
// {
//     let a = 10;
//     console.log(a);
// }

// const a = 10;
// function x() {
//     const c = 100;
//     console.log(c);
// }
// x();

let a = 20;
function x() {
    var a = 10;
    console.log(a);
}
x();
    









