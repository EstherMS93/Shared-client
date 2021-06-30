import React, { Component } from 'react'
import apiHandler from '../../api/apiHandler'
import { Link } from 'react-router-dom'
import { IoReload } from 'react-icons/io5';
import { AiTwotoneDelete } from 'react-icons/ai';
import { ImBubbles3 } from 'react-icons/im'

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

    handleDelete(id) {
        apiHandler
            .removeComment(id)
            .then(() => {
                this.setState({
                    comments: this.state.comments.filter(comment =>
                        comment._id !== id
                    )
                })
            })
    }

    render() {
        return (
            <div className="commentSection">
                <h1
                className="formHeader">Comments</h1>
                <hr />
                {
                    this.state.comments.map((comment) => {
                        console.log(comment)
                        return (
                            <div 
                            className="commentContainer"
                            key={comment._id}>
                                <h5 className="userName">{comment.name} 
                                    <p>said       <ImBubbles3
                                        className="bubble" />
                                    </p>
                                </h5>
                                <textarea
                                    cols="90"
                                    rows="6"
                                    className="commentArea">{comment.commentary}
                                </textarea>
                                <div className="buttons">
                                <button
                                    className="cardButton cardButtonSize"
                                    onClick={this.handleDelete.bind(this, comment._id)}>
                                    <AiTwotoneDelete />
                                </button>
                                <br />
                                <button
                                    className="cardButton cardButtonSize">
                                    <Link
                                        className="buttonLink"
                                        to={"/update-comment/" + comment._id}>
                                        <IoReload />
                                    </Link>
                                </button>
                                </div>
                            </div>
                        )
                    })}
            </div>
        )
    }
}
