import React from 'react'
import { Link } from "react-router-dom";



const ComponentFields = (props) => {
    const { name, picture, category, _id } =
        props.event;
    console.log(props.event)
    return (
        <div>
            <div>
                <h2>Name: {name}</h2>
                <div><img src={picture} alt={name} /></div>
                <h3>Category: {category}</h3>
            </div>
            <button>
                <Link to={"/event/" + _id}>
                    Display
                </Link>
            </button>
        </div>
    );
};
export default ComponentFields;