import React, { Component, Fragment } from "react";
import Market from "../Market";
import Farm from "../Farm";
import Budget from "../Budget";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Market />
                <Farm />
                <Budget />
            </Fragment>            
        );
    }
}

export default App;
