import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/home";
import BeerDetails from "./components/beerDetails/beerDetails";
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
    const { data } = this.state;
    return (
      <Switch>
        <Route
          path="/beer/:id"
          render={props => <BeerDetails {...props} data={data} />}
        />
        <Route exact path="/" render={() => <Home data={data} />} />
      </Switch>
    );
  }
}

export default App;

// <div>
// {this.state.data.map(data => (
//   <CardDetails data={data} />
// ))}
// </div>
