import React, { Component, Fragment } from "react";
import "./App.css";
import CardForm from "./CardForm";
import PersonalForm from "./PersonalForm";
import Step from "./Step";

class App extends Component {
    state = {
        step: 1,
        firstName: "",
        lastName: "",
        email: "",
        cardNumber: ""
    };

    isButtonDisabled() {
        return this.isFormCommitable() ? null : true;
    }

    handleTabClick = stepNumber => {
        this.setState({ step: stepNumber });
    };

    handleChangeForm = (key, value) => {
        this.setState({ [key]: value });
    };

    handleClickNextForm = () => {
        this.setState({ step: this.state.step + 1 });
    };

    isFormCommitable = () => {
        const { firstName, lastName, email, cardNumber, step } = this.state;
        switch (step) {
            case 1:
                return firstName !== "" &&
                    lastName !== "" &&
                    email !== "" &&
                    email.includes("@")
                    ? true
                    : false;
            case 2:
                return cardNumber.length === 16 ? true : false;
            default:
                return false;
        }
    };

    renderForm = () => {
        const { firstName, lastName, email, cardNumber, step } = this.state;
        switch (step) {
            case 1:
                return (
                    <Fragment>
                        <h1>Personal Information</h1>
                        <PersonalForm
                            firstName={firstName}
                            lastName={lastName}
                            email={email}
                            onChangeForm={this.handleChangeForm}
                        />
                    </Fragment>
                );
            case 2:
                return (
                    <Fragment>
                        <h1>Credit Card Number</h1>
                        <CardForm
                            cardNumber={cardNumber}
                            onChangeForm={this.handleChangeForm}
                            onChangeTimeOver={this.handleChangeTimeOver}
                        />
                    </Fragment>
                );
            case 3:
                return "Поздравляем!";
        }
    };

    render() {
        const steps = ["Personal information", "Card information", "Finish"];
        return (
            <div className="container">
                <div className="tab-panel">
                    {steps.map((step, i) => (
                        <Step
                            key={i + 1}
                            number={i + 1}
                            isSelected={i + 1 === this.state.step}
                            isClickable={i + 1 < this.state.step}
                            onClick={this.handleTabClick}
                        >
                            {step}
                        </Step>
                    ))}
                </div>
                <div className="form-content">{this.renderForm()}</div>
                <div className="button-panel">
                    <button
                        disabled={this.isButtonDisabled()}
                        className="button-next"
                        onClick={this.handleClickNextForm}
                    >
                        Next
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
