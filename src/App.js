import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch(`/api/greeting`)
      .then(responce => responce.json())
      .then(responceData => {
        this.setState({
          data: responceData.data
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.data.map(d => (
          <div>Beer Name: {d.name}</div>
        ))}
        {/* {this.state.data} */}
      </div>
    );
  }
}

export default App;
