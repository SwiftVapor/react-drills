import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list : [],
      input: ''
    };
    this.handleList = this.handleList.bind(this)
  }
  
  handleList(){
    this.setState({
      list: [...this.state.list, this.state.input],
      input:''
    });
  }
  handleInput(value) {
      this.setState({input: value});
  }

  render(){
    let list = this.state.list.map((ele, ind) =>{
      return <Todo key={ind} list = {ele} />;
    })
    return (
      <div className="App">
        <h1>To do List!</h1>
      <div>
        <input
          value={this.state.input}
          placeholder= "Enter new task"
          onChange={event=> this.handleInput(event.target.value)}
        />
        <button onClick= {this.handleList}>Add to list</button>
      </div>
      <br/>
      {list}
      </div>
    );
  }
};

export default App;
