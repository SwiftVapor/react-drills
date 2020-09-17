import React, { Component } from 'react'
class Image extends Component {
    render(){
        return (
            <section>
                <img src= {this.props.img}/>
            </section>
        )
    }
}
export default Image