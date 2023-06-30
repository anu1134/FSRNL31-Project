import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  console.log("props", props);
  const navigate = useNavigate();
  const [email, setIsEmail] = useState("");
  const [password, setPassword] = useState("");

  //   email: "xyz@gmail.com",
  //   password: "Geeks2023",

  function loginUser(e) {
    e.preventDefault();

    fetch("https://restaurant-project1.onrender.com/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (
          data.message === "email not found" ||
          data.message === "Invalid Password"
        ) {
          props.isLoginMethod(false);
          alert("Invalid Credentials");
        } else {
          /* navigate("/app); */
          props.isLoginMethod(true);
        }
        accessToken = data.accessToken;
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <>
      <div className="login-form">
        <form>
          <h1> Please Login </h1>
          <label htmlFor="userEmail">Email</label> <br />
          <input
            type="email"
            onChange={(e) => setIsEmail(e.target.value)}
            id="userEmail"
          ></input>{" "}
          <br />
          <label htmlFor="userPassword">Password</label> <br />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            id="userPassword"
          ></input>{" "}
          <br /> <br />
          <button type="submit" onClick={(e) => loginUser(e)}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
