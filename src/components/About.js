import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import React from "react";

// const About = () => {
//   return (
//     <>
//       <h1>Restaurant Information</h1>;
//       <Profile name="Anshi" color="blue" />
//       <ProfileClass name="Anshika Agarwal" color="red" />
//     </>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor called");
  }

  componentDidMount() {
    console.log("parent component mounted");
  }

  render() {
    console.log("Parent render called");
    return (
      <>
        <h1>Restaurant Information</h1>;
        <Profile name="Anshi" color="blue" />
        {/*  <ProfileClass name="Anshika Agarwal" color="red" />
        <ProfileClass name="Anshika Agarwal1" color="red1" /> */}
      </>
    );
  }
}

export default About;

/**
 * Parent constructor
 * Parent render
 * Child Constructor
 * Child render
 * Child mounted
 * Parent mounted
 */
