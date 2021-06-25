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
    onDeleteHandle() {  const id = this.state.event;
        apiHandler
        .removeEvent(id)
        .then((data) => {
        this.setState({events: this.state.events.filter(event => 
            {if (event.id !== id) { return event; }   
        }) 
        })  
    });
}
    //I want to get a list of events from my api and display only certain properties (map)

    render() {
        return (
            <div>
                {
                    this.state.events.map((event) => {
                        return (
                            
                        <div>
                            <button onClick={this.onDeleteHandle.bind(this, event.id)}>Delete</button>
                            <ComponentFields
                                event={event} />
                        </div>
                        )
                    })}
            </div>

        )
    }
}
