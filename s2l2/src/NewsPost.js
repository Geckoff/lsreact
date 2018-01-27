import React, { Component } from "react";

class NewsPost extends Component {
    render() { 
        return (
            <p>{this.props.text}</p>
        );
    }
}

export default NewsPost;
