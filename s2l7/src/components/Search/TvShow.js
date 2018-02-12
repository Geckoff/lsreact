import React, { Component } from "react";
import { Link } from "react-router-dom";

class TvShow extends Component {
    render() {
        const {id, image, name, summary} = this.props.tvShow;
        return (
            <div className="single-tv-show t-preview">
                <h2>
                    <Link className="t-link" to={'/shows/' + id} >{name}</Link>
                </h2>
                <div className="show-img">
                    {image && <img src={image.medium} alt={name} />}
                </div>
                <div className="show-desc">
                    <div dangerouslySetInnerHTML={{__html: summary}} />
                </div>
            </div>
        )
    }
}

export default TvShow;