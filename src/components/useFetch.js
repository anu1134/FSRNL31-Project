import { useEffect, useState } from "react";

function useFetch(email, password) {
  const [loggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
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
          loggedIn = false;
        } else {
          /*  navigate("/app/body"); */
          loggedIn = true;
        }
        accessToken = data.accessToken;
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return loggedIn;
}

export default useFetch;
