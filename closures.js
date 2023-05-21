// function a() {
//     console.log(b);
// }
// var b = 100;
// a();

// function a() {
//     c(); 
//     function c() {
//         console.log(b);
//     }
// }
// const b = 10;
// a();


// var x = 10;
// console.log(x);

// function x() {
//     var a = 7;

//     function y() {
//         console.log(a); // 7
//     }
//     return y;
    
// }
// var z = x();
// z();

// function z() {
//     var b = 900;
//     function x() {
//         var a = 7;
//         function y () {
//             console.log(a, b);
//         }
//         y();
//     }
//     x();
// }
// z();

// setTimeout

function x() {
    var i = 1;

    console.log("Welcome to javascript before");

    setTimeout(function() {
        console.log(i);
    }, 1000);

    console.log("Welcome to javascript");

}
x();



