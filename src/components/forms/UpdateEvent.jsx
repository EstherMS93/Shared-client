import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
import "../../styles/Form.css"

const state = {
    name: "",
    picture: "",
    category: "",
    organizer: "",
    poster: "",
    where: "",
    when: "",
    upcoming: "",
    created: false,
    error: null,

}
export default class UpdateEvent extends Component {
    state = state;


    componentDidMount() {

// This allows to display the original values in the component. If they're not modified, they remain the same.
// This way, previous informations are not lost upon update.
        const id = this.props.match.params.id;
        apiHandler.getEvent(id).then(data => {
            this.setState({
                name: data.name,
                picture: data.picture,
                category: data.category,
                organizer: data.organizer,
                poster: data.poster,
                when: data.when,
                where: data.where,
                upcoming: data.upcoming,
            })
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault();


        const id = this.props.match.params.id;

        const { ...data } = this.state;
        console.log(data)


        apiHandler
            .updateEvent(id, data)

            .then(() => {
                this.setState({
                    ...state,
                    created: true,
                });

            })
    };

    render() {
        if (this.state.created) {
            const id = this.props.match.params.id;
            return <Redirect to={"/event/" + id} />;
        }
        return (
            <div>
                <form onSubmit={e => this.onFormSubmit(e)}
                className="formPage">
                    <h1
                    className="formHeader">Update your event!</h1>
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
                    <div>
                    <label>Picture</label>
                    <br />
                        <input
                            placeholder="Picture"
                            value={this.state.picture}
                            onChange={e => this.setState({ picture: e.target.value })}
                            type="url"
                            className="textInput"
                            required="true">
                        </input>
                    </div>
                    <div>
                        <label>Category</label>
                        <br />
                        <select
                            name="category"
                            id="category"
                            onChange={e => this.setState({ category: e.target.value })}
                            value={this.state.category}
                            required="true"
                            className="menu"
                        >
                            <option value="" disabled>
                                Select a category
                            </option>
                            <option value="Social">Social</option>
                            <option value="Cultural">Cultural</option>
                            <option value="Networking">Networking</option>
                            <option value="Sports">Sports</option>
                        </select>
                    </div>
                    <label>Organizer</label>
                    <br />
                    <input
                        placeholder="Organizer"
                        value={this.state.organizer}
                        onChange={e => this.setState({ organizer: e.target.value })}
                        type="text"
                        className="textInput"
                        required="true">
                    </input>
                    <br />
                    <label>Poster</label>
                    <br />
                    <input
                        placeholder="Enter your Instagram @ or Facebook name"
                        value={this.state.poster}
                        onChange={e => this.setState({ poster: e.target.value })}
                        className="textInput"
                        type="text"
                        >
                    </input>
                    <br />
                    <label>Location</label>
                    <br />
                    <input
                        placeholder="Location"
                        value={this.state.where}
                        onChange={e => this.setState({ where: e.target.value })}
                        className="textInput"
                        type="text"
                        required="true">
                    </input>
                    <br />
                    <label>When did it happen?</label>
                    <br />
                    <input
                        value={this.state.when}
                        onChange={e => this.setState({ when: e.target.value })}
                        className="textInput"
                        type="date"
                        required="true">
                    </input>
                    <div>
                        <label>Is it happening again?</label>
                        <br />
                        <select
                            name="upcoming"
                            id="upcoming"
                            onChange={e => this.setState({ upcoming: e.target.value })}
                            value={this.state.upcoming}
                            required="true"
                            className="menu"
                        >
                            <option value="" disabled>
                                Select an option
                            </option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <button className="formButton">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}