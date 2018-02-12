import React, { Component } from "react";
import { connect } from "react-redux";
import {searchRequest} from '../../actions/TvshowAction';
import {getError, getIsLoading, mySelectors, getIsLoaded} from '../../reducers';
import TvShow from './TvShow';

class Search extends Component {
    state = {
        searchTerm: ''
    }

    changeSearchTerm = e => {
        this.setState({searchTerm: e.target.value});
    }

    searchTvShow = () => {
        this.props.searchRequest({
            type: 'tvShows',
            data: this.state.searchTerm
        });
    }

    render() {        
        const {tvShows, isLoading, isLoaded, error} = this.props;
        if (isLoading) {
            return <p>Loading...</p>;
        } else if (error) {
            return <p>Something went wrong...</p>
        } else {
            return (<div className="App">
                    <input name="search" onChange={this.changeSearchTerm} />
                    <button onClick={this.searchTvShow}>Найти</button>     
                    <div className="shows-block t-search-result">
                        {tvShows.map((tvShow) => (
                            <TvShow tvShow={tvShow} key={tvShow.id} />   
                        ))}
                    </div>       
                </div>                
            );
        }        
    }
}

const mapStateToProps = state => ({
    tvShows: mySelectors.getTvShows(state),
    isLoading: getIsLoading(state),
    isLoaded: getIsLoaded(state),
    error: getError(state)
});

const mapDispatchToProps = (dispatch) => {
    return {
        searchRequest: (data) => {
            dispatch(searchRequest(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
