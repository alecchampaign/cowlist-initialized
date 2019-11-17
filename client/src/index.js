import React from "react";
import ReactDOM from "react-dom";
import CowList from "./components/cowList.js";
import Modal from "./components/modal.js";
import CowInput from "./components/cowInput.js";
import getCows from "./lib/getCows.js";
import addCow from "./lib/addCow.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      selectedCow: { name: '', description: '' },
      currentInput: '',
      currentDesc: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
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

  handleSubmit(name, desc) {
    addCow(name, desc, () => {
      getCows(res => {
        this.setState({
          cows: res.data
        });
      });
    });
  }

  handleChange(text) {
    this.setState({
      currentInput: text
    });
  }

  handleDescChange(text) {
    this.setState({
      currentDesc: text
    })
  }

  render() {
    return (
    <div>
      <h1>Cow List</h1>
      <Modal cow={this.state.selectedCow} />
      <CowInput 
        handleChange={this.handleChange} 
        handleDescChange={this.handleDescChange} 
        handleSubmit={this.handleSubmit} 
        name={this.state.currentInput}
        desc={this.state.currentDesc}
      />
      <CowList cows={this.state.cows} handleClick={this.handleClick}/>
    </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);