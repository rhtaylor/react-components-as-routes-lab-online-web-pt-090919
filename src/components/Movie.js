import React, { Component } from 'react' 

export default class Movie extends Component{
    constructor(props){
        super(props)
    }     
    render(){
        return(<div>
                <p>{this.props.data.title}</p>
                <p>{this.props.data.time}</p> 
                <ul>{this.props.data.genres.map(genre => <li>{genre}</li>)}</ul>
                </div>)
    }
}