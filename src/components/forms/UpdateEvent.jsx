import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import apiHandler from "../../api/apiHandler";

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
                <form onSubmit={e => this.onFormSubmit(e)}>
                    <h1>Update your event!</h1>
                    <input
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })}
                        type="text">
                    </input>
                    <div>
                        <img
                            src={this.state.picture}
                            alt={this.state.name}
                            onChange={e => this.setState({ picture: e.target.value })}>

                        </img>
                        <input
                            name="picture"
                            placeholder="Picture"
                            value={this.state.picture}
                            onChange={e => this.setState({ picture: e.target.value })}
                            type="url">
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
                    <input
                        name="organizer"
                        placeholder="Organizer"
                        value={this.state.organizer}
                        onChange={e => this.setState({ organizer: e.target.value })}
                        type="text">
                    </input>
                    <br />
                    <input
                        name="poster"
                        placeholder="Your contact"
                        value={this.state.poster}
                        onChange={e => this.setState({ poster: e.target.value })}
                        type="text">
                    </input>
                    <br />
                    <input
                        name="where"
                        placeholder="Location"
                        value={this.state.where}
                        onChange={e => this.setState({ where: e.target.value })}
                        type="text">
                    </input>
                    <br />
                    <input
                        name="when"
                        placeholder="When did it happen?"
                        value={this.state.when}
                        onChange={e => this.setState({ when: e.target.value })}
                        type="date">
                    </input>
                    <div>
                        <label>Is it happening again?</label>
                        <br />
                        <select
                            name="upcoming"
                            id="upcoming"
                            onChange={e => this.setState({ upcoming: e.target.value })}
                            value={this.state.upcoming}
                        >
                            <option value="" disabled>
                                Select an option
                            </option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <button>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}