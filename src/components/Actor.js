import React, { Component } from 'react'

export default class Actor extends Component{
    constructor(props){
        super(props)
    } 

    render(){
        return(<div>
            <ul>
        <p>{this.props.actor.name}</p>
            </ul>
        </div>)
    }
}