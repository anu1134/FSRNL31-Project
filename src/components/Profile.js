import { useState, useEffect } from "react";

const Profile = (props) => {
  const { name, color } = props;
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);

  console.log("render");

  useEffect(() => {
    // API call
    // getUsers();

    const timer = setInterval(() => {
      console.log("Interval with Hooks");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("cleaning hooks interval");
    };
    console.log("useEffect");
  }, []);

  async function getUsers() {
    const data = await fetch("https://api.github.com/users/anshii03");
    const jsonData = await data.json();
    console.log(jsonData);
  }

  return (
    <>
      <h1>Profile Component</h1>
      <h2>Name: {name}</h2>
      <h3>Color: {color}</h3>
      <h3>Count: {count}</h3>
      <h3>Count1: {count1}</h3>
      <button onClick={() => setCount(1)}>UpdateCount</button>
    </>
  );
};

export default Profile;
