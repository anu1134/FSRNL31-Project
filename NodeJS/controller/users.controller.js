const usersModel = require("../model/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = (req, res) => {
  const { fullName, email, password } = req.body;

  const user = new usersModel({
    fullName,
    email,
    password: bcrypt.hashSync(password, 10),
  });

  user
    .save()
    .then((data) => {
      res.send({ message: "User registered successfully" });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some error occurred whi;e registering user",
      });
    });
};

// /api/register ---> POST // req.body {fullname , email, password}

exports.login = (req, res) => {
  const { email, password } = req.body;

  usersModel
    .findOne({ email: email })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "email not found" });
      }

      // compare passwords

      var isPasswordValid = bcrypt.compareSync(password, data.password);

      if (!isPasswordValid) {
        res.status(401).send({ message: "Invalid Password" });
      }

      var token = jwt.sign({ id: data._id }, "secretkey");

      // secret key is stored in some environment file which is accessible by all the users

      res.send({
        user: {
          id: data._id,
          email: data.email,
          fullName: data.fullName,
        },
        accessToken: token,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
