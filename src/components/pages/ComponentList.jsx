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

    //I want to get a list of events from my api and display only certain properties (map)
    //Additionally, I don't want to display the entire list but only 4 at a time (slice)
    render() {
        return (
            <div>
                {
                    this.state.events.map((event) => {
                        return (
                            
                        <div>
                            <ComponentFields
                                event={event} />
                        </div>
                        )
                    })}
            </div>

        )
    }
}
