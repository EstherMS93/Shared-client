import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ComponentList from '../pages/ComponentList';
export default class Home extends Component {
    render() {
        return (
            <div>
              <Link to="/add-event" >
                Add your events!
              </Link>
              <ComponentList />
            </div>
        )
    }
}
