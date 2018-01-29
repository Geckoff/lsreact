import React, { Component } from "react";

class Step extends Component {
    handleClick = () => {
        if (this.props.isClickable === true) {
            this.props.onClick(this.props.number);
        }
    };

    render() {
        const stepClass = "step",
            stepSelectedClass = this.props.isSelected ? "step-selected " : "",
            stepClickableClass = this.props.isClickable ? "step step-clickable " : "";         
        return (
            <div className={"step " + stepSelectedClass + stepClickableClass} onClick={this.handleClick}>
                <p className="step__number">{this.props.number}</p>
                <p className="step__title">{this.props.children}</p> 
            </div>
        );
    }
}

export default Step;
