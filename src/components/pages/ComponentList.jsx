import React, { Component } from 'react'
import apiHandler from '../../api/apiHandler'
//import ComponentFields from './ComponentFields' I initally made a extra component to handle the input and use this class
// component as the parent to handle the functions, which would receive only certain props of my event model. 
// For styling reasons, I prefer to render the inputs instead of the component here. I've taken the other approach with
// functional component + class component in event/:id. 
import { Link } from "react-router-dom";
import { FaEye } from 'react-icons/fa';
import { IoReload } from 'react-icons/io5';
import { AiTwotoneDelete } from 'react-icons/ai';

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
                this.setState({
                    events: this.state.events.filter(event =>
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

                            <div key={event._id}>
                                <div className="displayCard homeDisplay">
                                    <div className="displayImg">
                                        <img src={event.picture} alt={event.name} />
                                    </div>
                                    <div className="displayInfo">
                                        <h2>{event.name}</h2>
                                        <h3>Category: {event.category}</h3>
                                    <button
                                        className="cardButton"
                                        onClick={this.onDeleteHandle.bind(this, event._id)}>
                                        Delete
                                        <AiTwotoneDelete />
                                    </button>
                                    <br />
                                    <button
                                        className="cardButton">
                                        <Link to={"/update-event/" + event._id}
                                        className="buttonLink">
                                            Update
                                        </Link>
                                        <IoReload />
                                    </button>
                                    <br />
                                    <button
                                        className="cardButton">
                                        <Link to={"/event/" + event._id}
                                        className="buttonLink">
                                            Display
                                        </Link>
                                        <FaEye />
                                    </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>

        )
    }
}
