import React from "react";
import ReactDOM from "react-dom";
import CowList from "./components/cowList.js";
import getCows from "./lib/getCows.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      selectedCow: null
    }
  }

  componentDidMount() {
    getCows(res => {
      this.setState({
        cows: res.data
      });
      console.log(this.state);
    });
  }

  render() {
    return (
    <div>
      <CowList cows={this.state.cows} />
    </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);