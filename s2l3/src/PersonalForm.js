import React, { Component } from "react";

class PersonalForm extends Component {

    handleChangeForm = (e) => {
        this.props.onChangeForm(e.target.name, e.target.value);
    } 

    render() { 
        return (
            <div className="personal-form">
                <h1>Personal Information</h1>
                <input placeholder="First Name" name="firstName" onChange={this.handleChangeForm} />
                <input placeholder="Last Name" name="lastName" onChange={this.handleChangeForm} />
                <input placeholder="Email" name="email" onChange={this.handleChangeForm} />
            </div>
        );
    }
}

export default PersonalForm;
