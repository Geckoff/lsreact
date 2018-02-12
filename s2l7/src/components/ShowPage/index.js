import React, { Component } from "react";
import { connect } from "react-redux";
import {searchRequest} from '../../actions/TvshowAction';
import {getError, getIsLoading, getIsLoaded, mySelectors} from '../../reducers';
import SinglePerson from './singlePerson';

class ShowPage extends Component {
    constructor(props) {
        super(props);
        const {searchRequest, isLoading, isLoaded} = this.props;
        if (!isLoading) {
            searchRequest({
                type: 'singleTvShow',
                data: this.props.match.params.id
            });
        }
    }

    render() {      
        console.log(this.props.singleTvShow);
        const {name, image, summary, _embedded} = this.props.singleTvShow,
            {isLoading, error} = this.props,
            cast = typeof this.props.singleTvShow._embedded === 'object' ? this.props.singleTvShow._embedded.cast : [];
        
        if (isLoading) {
            return <p>Loading...</p>;
        } else if (error) {
            return <p>Something went wrong...</p>
        } else {
            return (
                <div>
                    <p>{name}</p>
                    {image && <img src={image.medium} alt={name} />}
                    <div dangerouslySetInnerHTML={{__html: summary}} />
                    <div>
                        {cast.map((person, i) => (
                            <SinglePerson person={person} key={i} />   
                        ))}
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    singleTvShow: mySelectors.getSingleTvShow(state),
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);
