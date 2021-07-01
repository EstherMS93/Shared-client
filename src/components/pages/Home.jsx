import React, { Component } from 'react';
import ComponentList from '../pages/ComponentList';
import AddComment from '../forms/AddComment';
import Comment from './Comment';

export default class Home extends Component {
    render() {
        return (
            <div>
              <ComponentList />
              <Comment />
              <AddComment />
            </div>
        )
    }
}
