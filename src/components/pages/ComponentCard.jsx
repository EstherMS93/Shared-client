import React, { Component } from 'react'
import apiHandler from '../../api/apiHandler'
import ComponentDisplay from './ComponentDisplay'

export default class ComponentCard extends Component {
    state = {
        event: null,
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        apiHandler
            .getEvent(id)
            .then((data) => {
                this.setState({ event: data });
            });
    }

    render() {
        if (!this.state.event) return null;
        return (

            <div>
                <ComponentDisplay
                    event={this.state.event}>
                </ComponentDisplay>
            </div>


        )
    }
}