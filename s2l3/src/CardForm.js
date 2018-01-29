import React, { Component } from "react";

class CardForm extends Component {
    constructor(){
        super();
    }

    componentWillUnmount(){}

    handleChangeForm = e => {
        this.props.onChangeForm(e.target.name, e.target.value);
    };

    render() {
        return (
            <div className="card-form">
                <h1>Credit Card Number</h1>
                <input placeholder="0000000000000000" name="cardNumber" onChange={this.handleChangeForm} />
            </div>
        );
    }
}

export default CardForm;
