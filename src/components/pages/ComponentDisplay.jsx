import React from 'react'
import AddComment from '../forms/AddComment';
import Comment from './Comment';
import "../../styles/eventCard.css"


const ComponentDisplay = (props) => {
    const { name, picture, category, organizer, poster, where, when, upcoming } =
        props.event;
    console.log(props.event)
    return (
        <div>
            <div className="displayCard">
                <div classname="displayImg"><img src={picture} alt={name} /></div>
                <div className="displayInfo">
                    <h1>{name}</h1>
                    <h4>Category:</h4> 
                    <p>{category}</p>
                    <h4>Organizer:</h4>
                    <p>{organizer}</p>
                    <h4>Your contact:</h4>  
                    <p>{poster}</p>
                    <h4>Location:</h4>
                    <p>{where}</p>
                    <h4>When did it happen:</h4>
                    <p>{when}</p>
                    <h4>Is it happening again:</h4>
                    <p>{upcoming}</p>
                </div>
            </div>
            <Comment />
            <AddComment />
        </div>
    );
};


export default ComponentDisplay;
