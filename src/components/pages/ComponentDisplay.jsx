import React from 'react'
import { Link } from "react-router-dom";

const ComponentDisplay = (props) => {
    const { name, picture, category, organizer, poster, where, when, upcoming, _id } =
        props;
    console.log(props.event)
    return (
        <div>
            <div>
                <h2>Name: {props.match.params.name}</h2>
                <div><img src={picture} alt={name} /></div>
                <h3>Category: {category}</h3>
                <h3>Organizer: {organizer}</h3>
                <h3>Your contact: {poster}</h3>
                <h3>Location: {where}</h3>
                <h3>When did it happen: {when}</h3>
                <h3>Is it happening again: {upcoming}</h3>
            </div>
            <button>
                <Link to={"/event/" + _id}>
                    Display
                </Link>
            </button>
        </div>
    );
};
export default ComponentDisplay;
