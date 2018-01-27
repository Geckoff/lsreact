import React, { Component } from "react";

class NewsPost extends Component {
    render() { 
        return (
            <div>
                <i>{this.props.children}</i>
            </div>
        );
    }
}

export default NewsPost;
