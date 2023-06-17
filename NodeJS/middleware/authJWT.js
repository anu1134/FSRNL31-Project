const jwt = require("jsonwebtoken");
const usersModel = require("../model/users.model");

const verifyToken = (req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      "secretkey",
      function (err, verifiedToken) {
        if (err) {
          res.status(403).send({ message: "Invalid JWT token" });
        }

        usersModel
          .findById(verifiedToken.id)
          .then((user) => {
            req.user = user;
            next();
          })
          .catch((err) => {
            res.status(500).send({ message: err.message });
          });
      }
    );
  } else {
    res.status(403).send({ message: "Token not present" });
  }
};

module.exports = verifyToken;
