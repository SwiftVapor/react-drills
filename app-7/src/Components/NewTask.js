import React, { Component } from 'react'

export default class NewTask extends Component{
    constructor(){
        super();
        this.state = {
            input:''
        };

        this.add = this.add.bind(this);
    }
    input(val){
        this.setState({input:val});
    }
    add(){
        this.props.add(this.state.input);
        this.setState({input:""});
    }

    render(){
        return(
            <div>
                <input
                    value={this.state.input}
                    placeholder="Enter New Task"
                    onChange={ele => this.input(ele.target.value)}
                />
                <button onClick={this.add}>Add </button>
            </div>        
        )
    }
}