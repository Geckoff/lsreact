import React, { Component } from "react";

class PersonalForm extends Component {

    handleChangeForm = (e) => {
        this.props.onChangeForm(e.target.name, e.target.value);
    } 

    render() { 
        return (
            <div className="personal-form">
                <input placeholder="First Name" name="firstName" onChange={this.handleChangeForm} />
                <input placeholder="Last Name" name="lastName" onChange={this.handleChangeForm} />
                <input placeholder="Email" name="email" onChange={this.handleChangeForm} />
            </div>
        );
    }
}

export default PersonalForm;
