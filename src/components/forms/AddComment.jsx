import React, { Component } from 'react'
import apiHandler from "../../api/apiHandler";

export default class AddComment extends Component {

    state = {
        name: "",
        commentary: "",
    }

    onFormSubmit = () => {
        //event.preventDefault(); I want the page to refresh in order to display the comments
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
                        className="formHeader">Join the discussion!</h1>
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
                    <textarea
                        value={this.state.commentary}
                        onChange={e => this.setState({ commentary: e.target.value })}
                        cols="30"
                        rows="10"
                        required="true"
                        className="textInput">
                    </textarea>
                    <br />
                    <button className="formButton">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}
