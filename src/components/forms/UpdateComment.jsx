import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import apiHandler from "../../api/apiHandler";

export default class UpdateComment extends Component {

    state = {
        name: "",
        commentary: "",
        created: false,
        event: null,
    }
    componentDidMount() {

                const id = this.props.match.params.id;
                apiHandler
                .getComment(id)
                .then(data => {
                    this.setState({
                        name: data.name,
                        commentary: data.commentary,
                    })
                })
            }
    handleSubmit = (comment) => {
        comment.preventDefault();
        const id = this.props.match.params.id;
        const { ...data } = this.state;

        apiHandler
        .updateComment(id, data)
        .then(() => {
            this.setState({
                ...this.state,
                created: true,
            })
        })
    }

    render() {
        if (this.state.created) {
            return <Redirect to={"/"} />;
        }
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}
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