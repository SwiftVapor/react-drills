import React, { Component } from 'react'
class Image extends Component {
    render(){
        return (
            <section>
                <img src= {this.props.img}/>
                <div>Inside the bean</div>
            </section>
        )
    }
}
export default Image