// console.log("Hiiiii");

// // after 5s
// setTimeout(() => {
//     console.log("Welcome to javascript");
// }, 5000)

// console.log("Learning async programming");

// const cart = ["shoes", "pants", "kurtas"];

////   create order
////   payment
////   show order summary


// api call to create order
// api call to do payment

// callbacks ---> helps us in maintaining async code


// api1.createOrder(cart , function() {
//     api1. proceedToPayment(function () {
//         ap1.showOrderSummary(function() {
//             ap1.updateWallet()
//         })
//     });
// } )

// Promises -- > used to handle async operations in Javascript

// const promise = createOrder(cart)

// -----> pending ,  fulfilled, rejected

// {data: response}

const response = fetch("https://dummyjson.com/products/1");

response.then((result) => {
    console.log(result.json());
})

response.catch(err => {
    console.log(err);
})

console.log(response);

// Create promise 

let success = false;
const orderId = "1243";

async function testingPromise(orderId) {

    const promise = new Promise (function (resolve , reject) {

        if (success) {
            console.log("promise is successful");
            resolve (orderId);
        } else {
            const error = new Error ("Error in fetching data");
            reject (error);
        }
    })

    return promise;

}

const result = await testingPromise(orderId);

result.then((result) => {
    console.log("OrderId", result)
}).catch(err => {
    console.log(err);
})

//console.log(result);

//async/await




