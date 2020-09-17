import React, {Component} from 'react';

export default class Login extends Component{
constructor() {
    super()
    this.state={
        userName:'',
        password:''
    }
}
userChange(val) {
    this.setState({userName: val})
}
passChange(val) {
    this.setState({password: val})
}
alertUserPass(user, pass){
    alert(`Username: ${this.state.userName} Password: ${this.state.password}`)

}
    render(){    
        return (
            <div>
                <input className= 'userName' onChange={(event) => this.userChange(event.target.value)}/>
                <input className= 'password' onChange={(event) => this.passChange(event.target.value)}/>
                <button className='submitButton' onClick={() => this.alertUserPass(this.state.userName, this.state.password)}>Login</button>
            </div>
        )
}
}
