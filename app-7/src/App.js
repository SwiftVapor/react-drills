import React, { Component } from "react";
import "./App.css";
import NewTask from './Components/NewTask'
import List from './Components/List'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      list : [],
    };
    this.addTask = this.addTask.bind(this)
  }
  
  addTask(task){
    this.setState({list: [...this.state.list, task]});
  }
  render(){
    return (
      <div className="App">
        <h1> My Todo list:</h1>
        <NewTask add={this.addTask}/>
        <List list = {this.state.list}/>
      </div>
    );
  }
};

