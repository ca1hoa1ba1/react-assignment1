import React from "react";
import "./App.css";

import UserInput from "./Components/UserInput/UserInput";
import UserOutput from "./Components/UserOutput/UserOutput";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "Cao Hoai Bao"
    };
  }

  nameChangeHandler = e => {
    this.setState({
      username: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React - Assignment #1</h1>
        <UserInput changed={this.nameChangeHandler} />
        <UserOutput name={this.state.username} />
        <UserOutput name={this.state.username} />
        <UserOutput name={this.state.username} />
      </div>
    );
  }
}

export default App;
