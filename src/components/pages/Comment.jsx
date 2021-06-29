import React, { Component } from 'react'
import apiHandler from '../../api/apiHandler'


export default class Comment extends Component {
    state = {
        comment: null,
        comments: []
    }

    componentDidMount() {
        apiHandler
            .getComments()
            .then((data) => {
                this.setState({ comments: data });
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.comments.map((comment) => {
                        console.log(comment)
                        return (
                            <div key={comment._id}>
                                <h2>{comment.name}</h2>
                                <textarea>{comment.commentary}</textarea>
                            </div>
                        )
                    })}

            </div>
        )
    }
}
