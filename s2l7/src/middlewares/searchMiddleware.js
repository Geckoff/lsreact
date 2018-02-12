
import {searchRequest, searchSuccess, searchFailure} from '../actions/TvshowAction';
import {search} from '../api';
import {ajaxRequest} from './middlewareHelpers';

const searchMiddleware = store => next => action => {
    return ajaxRequest(
        store,
        action,
        next,
        searchRequest,
        searchSuccess,
        searchFailure,
        search,
        'tvShows'
    );
};

export default searchMiddleware;