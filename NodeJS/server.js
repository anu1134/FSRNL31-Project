const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const path = require("path");

const dbConfigs = require("./config/db.config");

const app = express();

app.listen("8000", () => {
  console.log("Server is running on port 8000");
});

app.use(bodyParser.json());

mongoose.connect(dbConfigs.url);

const db = mongoose.connection;

db.on("error", () => {
  console.log("Error in connecting to DB");
});

db.on("open", () => {
  console.log("Connection successful");
});

// const users = [
//   {
//     id: 1,
//     name: "Anshika",
//     age: "24",
//   },
//   {
//     id: 2,
//     name: "Anshul",
//     age: "25",
//   },
//   {
//     id: 3,
//     name: "Ankit",
//     age: "26",
//   },
//   {
//     id: 4,
//     name: "Anika",
//     age: "27",
//   },
// ];

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

// // GET request to return all users
// app.get("/api/users", (req, res) => {
//   res.json(users);
// });

// app.get("/api/users/:id", (req, res) => {
//   const id = req.params.id;

//   const user = users.find((user) => user.id == id);

//   if (!user) {
//     res.status(404).json({ message: "User does not exist" });
//   }

//   res.json(user);
// });

// // create a new user
// app.post("/api/user", (req, res) => {
//   const name = req.body.name;
//   const age = req.body.age;

//   const user = {
//     id: Math.random() * 10000,
//     name: name,
//     age: age,
//   };

//   users.push(user);

//   res.json(users);
// });

// // update user by id
// app.put("/api/user/:id", (req, res) => {
//   const id = req.params.id;
//   const user = users.find((user) => user.id == id);

//   if (!user) {
//     res.status(404).json({ message: "User does not exist" });
//   }

//   const keys = Object.keys(req.body);

//   keys.forEach((key) => {
//     if (!user[key]) {
//       res.status(404).send({ message: "Invalid details passed" });
//     }

//     user[key] = req.body[key];
//   });

//   res.json(user);
// });

// // Delete user
// app.delete("/api/user/:id", (req, res) => {
//   const id = req.params.id;

//   const user = users.find((user) => user.id == id);

//   if (!user) {
//     res.status(404).send("User does not exist");
//   }

//   const filteredUsers = users.filter((user) => user.id != id);

//   res.json(filteredUsers);
// });

// CRUD operations
// HTTP methods

// Create --->  POST
// Read ---->  GET
// Update ----> PUT
// Delete ----> DELETE

// Database --- > helps us store all the data

// Relational DB
// Non Relational DB

//NodeJS(business logic) --mongoose---  MongoDB

// Restaurant table
// id , name , cusisines , star rating, image

//MVC ----- Model View Architecure

// design pattern

require(path.join(__dirname, "./Routes/restaurants.routes"))(app);
require(path.join(__dirname, "./Routes/users.routes"))(app);

console.log("directory name", __dirname);
