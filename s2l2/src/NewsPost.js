import React, { Component } from "react";

class NewsPost extends Component {
    render() { 
        return (
            <p>{this.props.post}</p>
        );
    }
}

export default NewsPost;
