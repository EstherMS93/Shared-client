import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
import "../../styles/Form.css"

//declaration of state keys (can also be done directly in 'state' within the component)
//to pass the props from the form inputs in order to handle submit by 
// updating the key:values pairs and then redirect to homepage, which is
//managed by means of changing the value of the 'created' boolean.
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
export default class AddEvent extends Component {
    state = state;  //initial state, we do not code or alter it since otherwise it is not possible to alter it, we use onChange for that

    // I will initially handle the setState directly on the form. It can also be done declaring a function to handle changes here that could
    // pass an event with a key:value pair. For instance, const Change = e => {[this.state.name] = e.target.value} and then simply call the 
    // event on the onChange attribute in the form (onChange={e => this.setState(e)}) or make a function to handle changes, 
    // declare the key:value pair, and just call {this.Change} in the onChange input in the form, as in Change = (e) => {
    // const key = event.target.name / const value= event.target.value this.setState({ [key]:value })} In order to be able to use these other
    // options, a name="" attribute is neccessary in the form.

    onFormSubmit = (event) => {
        event.preventDefault();
        const { ...data } = this.state;

        apiHandler
            .addEvent(data)
            .then(() => {
                this.setState({
                    ...state,
                    created: true,
                });

            })
    };

    render() {
        if (this.state.created) {
            return <Redirect to="/" />;
        }
        return (
            <div>
                <form onSubmit={e => this.onFormSubmit(e)}
                className="formPage">
                    <h1
                    className="formHeader">Add your event!</h1>
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
