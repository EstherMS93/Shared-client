import React from 'react'
import { Link } from "react-router-dom";
//import apiHandler from "../../api/apiHandler";


const ComponentDisplay = (props) => {
    const { name, picture, category, organizer, poster, where, when, upcoming, _id } =
        props.event;
        console.log(props.event)
    return (
        <div>
            <div>
                <h2>Name: {name}</h2>
                <div><img src={picture} alt={name} /></div>
                <h3>Category: {category}</h3>
                <h3>Organizer: {organizer}</h3>
                <h3>Your contact: {poster}</h3>
                <h3>Location: {where}</h3>
                <h3>When did it happen: {when}</h3>
                <h3>Is it happening again: {upcoming}</h3>
            </div>
            <button>
                <Link to={"/update-event/" + _id}>
                    Update
                </Link>
            </button>
        </div>
    );
};


export default ComponentDisplay;
