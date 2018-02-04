import React, { Component, Fragment } from "react";
import "./App.css";
import { addListener, removeListener, isAuthorized } from "./AuthorizeApi";
import { Link, Route, Redirect, Switch } from "react-router-dom";
import Home from "./Home";
import Auth from "./Auth";
import Private from "./Private";
import Public from "./Public";

class App extends Component {
    state = {
		isAuthorized,
		ranAuthorize: 0
    };

    componentDidMount() {
        addListener(this.handleAuthorize);
    }

    componentWillUnmount() {
        removeListener(this.handleAuthorize);
    }

    handleAuthorize = isAuthorized => {
		this.setState({ranAuthorize: this.state.ranAuthorize + 1});
        this.setState({ isAuthorized });
	};

    render() {
		const {isAuthorized, ranAuthorize} = this.state;
        return (
			<Fragment>
				<nav>
					<Link to="/auth">Войти</Link>
					<br />
					<Link to="/private">Секретная страница</Link>
					<br />
					<Link to="/public">Публичная страница</Link>
					<br />
					<Link to="/">Главная</Link>
				</nav>
				<Switch>    
					{!isAuthorized && (
						<Redirect from="/private" to="/auth" />
					)}    
					<Route path="/auth" render={() => (<Auth isAuthorized={isAuthorized} ranAuthorize={ranAuthorize} />)} />
                    {this.state.isAuthorized && (
                        <Route path="/private" component={Private} />
					)}					
                    <Route path="/public" component={Public} />
                    <Route exact path="/" component={Home} />
					<Redirect from="/*" to="/" />
                </Switch>
            </Fragment>
        );
    }
}

export default App;
