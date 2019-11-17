import React from "react";
import ReactDOM from "react-dom";
import CowList from "./components/cowList.js";
import Modal from "./components/modal.js";
import getCows from "./lib/getCows.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      selectedCow: { name: '', description: '' }
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    getCows(res => {
      this.setState({
        cows: res.data
      });
    });
  }

  handleClick(cow) {
    this.setState({
      selectedCow: cow
    });
    console.log(cow);
  }

  render() {
    return (
    <div>
      <h1>Cow List</h1>
      <Modal cow={this.state.selectedCow} />
      <CowList cows={this.state.cows} handleClick={this.handleClick}/>
    </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);