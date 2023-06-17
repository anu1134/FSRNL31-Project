import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    console.log("Child constructor");
    super(props);
    /*  this.state = {
      count: 0,
      count1: 1,
    }; */

    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    /*  const data = await fetch("https://api.github.com/users/anshii03");
    const jsonData = await data.json();
    this.setState({
      userInfo: jsonData,
    }); */
    this.timer = setInterval(() => {
      console.log("run interval");
    }, 1000);
    console.log("component mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      console.log("component updated");
    }

    if (this.state.count1 !== prevState.count1) {
      console.log("component updated again");
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("component will unmount");
  }

  render() {
    console.log("Child render");
    const { name, color } = this.props;
    const { count, count1 } = this.state;
    return (
      <>
        <h1>Profile Class Based Component</h1>
        <h2>Name: {name}</h2>
        <h2>Color: {color}</h2>
        <img src={this.state.userInfo.avatar_url}></img>
        <h2>NameState: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
        {/* <h3>Count: {count}</h3>
        <h3>Count1: {count1}</h3>
        <button onClick={() => this.setState({ count: 1, count1: 2 })}>
          UpdateCount
        </button> */}
      </>
    );
  }
}

export default ProfileClass;
