import React, { Component } from "react";
import CardMain from "./components/cardMain/cardMain";
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
        {this.state.data.map(data => (
          <CardMain data={data} />
        ))}
      </div>
    );
  }
}

export default App;
