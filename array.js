let arr = [1 , 2, 3];

// Transform an array
// creates a new array with results of calling function

function double(x) {
    return  x * 2;
}
const doublearr = arr.map(double);
console.log(doublearr);

//Filter function

// Filters values inside an array
// create new array from original array with filtered values

function isOdd(x) {
    return x % 2;
}

const oddArr = arr.filter(isOdd);  //[1, 3]
console.log(oddArr);

// MAP

// const users = [
//     {firstName: "Anshika", lastName: "Agarwal", age: 23},
//     {firstName: "Rahul", lastName: "Agarwal", age: 23},
//     {firstName: "ananya", lastName: "Agarwal", age: 12},
//     {firstName: "rohit", lastName: "Agarwal", age: 56},
// ]

// Print an array with fullnames

// ["anshika agarwal", "rahul agarwal", "ananya agarwal", "rohit agarwal"]

// function fullName(user) {
//     return user.firstName + " " + user.lastName;
// }

// const fullNameArr = users.map(fullName);

// const fullNameArr = users.map (user => user.firstName + " " + user.lastName);

// console.log(fullNameArr);

//reduce

let numbers = [1 , 2, 3, 4, 5];

const sum1 = numbers.reduce(function(sum, current) {
    sum = sum + current;
    return sum;
}, 0);

console.log(sum1);

// find max of an array

const maxNumber = numbers.reduce((max , current) => {
    if (current > max) {
        max = current
    }
    return max;
}, 0);

console.log(maxNumber);

const users = [
    {firstName: "Anshika", lastName: "Agarwal", age: 23},
    {firstName: "Rahul", lastName: "Agarwal", age: 23},
    {firstName: "ananya", lastName: "Agarwal", age: 12},
    {firstName: "rohit", lastName: "Agarwal", age: 56},
]

// { 23: 2, 12: 1, 56: 1}

const report = users.reduce((acc , current) => {
    if(acc[current.age]) {
        acc[current.age] = ++acc[current.age];
    } else {
        acc[current.age] = 1
    }
    return acc;
}, {})

console.log(report);

// Function chaining

// First name of all people whose age is less than 30

// const result = users.filter(user => user.age < 30).map(user => user.firstName);

const result = users.reduce((acc , curr)=> {
    if (curr.age < 30) {
        acc.push(curr.firstName);
    }
    return acc;
}, []);

console.log(result);

