// this keyword

//console.log(this); // global object

let name1 = {
    firstName: "Anshika",
    lastName: "Agarwal",
    hobbies: ["swimming", "dancing" , "teaching"],
    getName() {
        console.log(this); // this points to the object where this function is declared
        console.log(this.firstName + " " + this.lastName);
    },
    showHobbies() {
        console.log(this);

        this.hobbies.forEach((hobby) => {
            console.log(this); 
            console.log(this.firstName); 
            console.log(hobby);
        })
    }

}
name1.getName();
name1.showHobbies();
// name1.printDetails = function() {
//     console.log(this);
// }

// name1.printDetails();

// function abc() {
//     console.log(this);  
// }

// abc();


// This keyword

// 1. In an object method , this refers to object
// 2. Alone , this refers to global object
// 3. In a function, this refers to global object
// 4. In arrow function , this refers to lexical env (parent function)




