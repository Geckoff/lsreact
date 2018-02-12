import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
//import Search from "../Search";
//import ShowPage from "../ShowPage";
//import "./AppRouter.css";
import { connect } from "react-redux";
import {fetchRequest} from '../../actions/TvshowAction';
import {getError, getIsLoading, getTvShows, getIsLoaded} from '../../reducers';

class AppRouter extends Component {
    constructor(props) {
        super(props);
        const { fetchRequest, isLoading, isLoaded } = this.props;
        if (!isLoading && !isLoaded) fetchRequest();
    }

    render() {
        console.log(this.props.tvShows);
        return <div className="App">tet</div>;
    }
}

const mapStateToProps = state => ({
    tvShows: getTvShows(state),
    isLoading: getIsLoading(state),
    isLoaded: getIsLoaded(state),
    error: getError(state)
});

export default connect(mapStateToProps, {fetchRequest})(AppRouter);
