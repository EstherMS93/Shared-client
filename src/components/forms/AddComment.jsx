import React, { Component } from 'react'
//import { Redirect } from "react-router-dom";
import apiHandler from "../../api/apiHandler";

export default class AddComment extends Component {

    state = {
        name: "",
        commentary: "",
    }

    onFormSubmit = () => {
        //event.preventDefault();
        const { ...data } = this.state;

        apiHandler
            .addComment(data)
    };

    render() {
  
        return (
            <div>
                <form onSubmit={e => this.onFormSubmit(e)}
                    className="formPage">
                    <h1
                        className="formHeader">Do you have something to say about this event?</h1>
                    <label>Name</label>
                    <br />
                    <input
                        placeholder="Name"
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })}
                        type="text"
                        required="true"
                        className="textInput">
                    </input>
                    <br />
                    <label>Comment</label>
                    <br />
                    <input
                        value={this.state.commentary}
                        onChange={e => this.setState({ commentary: e.target.value })}
                        type="textArea"
                        required="true"
                        className="textInput">
                    </input>
                    <br />
                    <button className="formButton">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}
