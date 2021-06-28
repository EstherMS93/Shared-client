import React, { Component } from 'react'
import apiHandler from '../../api/apiHandler'
import ComponentFields from './ComponentFields'

export default class ComponentList extends Component {
    state = {
        event: null,
        events: []
    }

    componentDidMount() {
        apiHandler
        .getEvents()
        .then((data) => {
            this.setState({ events: data });
        });
    }
    onDeleteHandle(id) { 
        console.log(id)
        apiHandler
        .removeEvent(id)
        .then(() => {
        this.setState({events: this.state.events.filter(event => 
            event._id !== id   
        ) 
        })  
    });
}
    //I want to get a list of events from my api and display only certain properties (map)

    render() {
        return (
            <div>
                {
                    this.state.events.map((event) => {
                        console.log(event)
                        return (
                            
                        <div key = {event._id}>
                            <button onClick={this.onDeleteHandle.bind(this, event._id)}>Delete</button>
                            <ComponentFields
                                event={event} />
                        </div>
                        )
                    })}
            </div>

        )
    }
}
