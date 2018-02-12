import React from "react";

export default (props) => {
    const {name, image} = props.person.person;
    return (
        <div className="t-person">
            <p>{name}</p>
            {image && <img src={image.medium} alt={name} />}
        </div>
    );
}