import React, { Component, PureComponent } from "react";
import { authorizeUser } from "./AuthorizeApi";
import { Redirect } from "react-router-dom";

class Auth extends Component {
    constructor(props){
        super(props);
        this.state.isAuthorized = props.isAuthorized;
    }

    state = {
        email: "",
        password: "",
        isAuthorized: false,
        authFailed: false
    };

    changeData = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = () => {
        const {email, password} = this.state;
        authorizeUser(email, password);
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.state);
        this.props.ranAuthorize !== nextProps.ranAuthorize ? this.setState({authFailed: true}) : this.setState({authFailed: false});
        this.setState({isAuthorized: nextProps.isAuthorized});
        return true;
    }

    render() {
        
        if (this.state.isAuthorized) {
            return (
                <Redirect from="/*" to="/" />    
            );
        } else {
            return (
                <div>
                    <div>
                        <input
                            name="email"
                            onChange={this.changeData}
                            placeholder="email"
                        />
                        <input
                            name="password"
                            onChange={this.changeData}
                            placeholder="password"
                        />
                        {this.state.authFailed && <p className="error">Auth failed</p>}
                    </div>
                    <button
                        onClick={this.handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            );
        }
    }
}

export default Auth;
