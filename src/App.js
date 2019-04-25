import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";

class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch(`/api/greeting`)
      .then(responce => responce.json())
      .then(responceData =>
        this.setState({
          data: responceData.data
        })
      )
      .catch(error => {
        console.log("Error fetching and parsing data...", error);
      });
  }

  render() {
    const { data } = this.state;
    return (
      <Switch>
        <Route
          path="/beer/:id"
          render={props => <Details {...props} data={data} />}
        />
        <Route exact path="/" render={() => <Home data={data} />} />
      </Switch>
    );
  }
}

export default App;
