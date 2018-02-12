
import {searchRequest, searchSuccess, searchFailure} from '../actions/TvshowAction';
import {show} from '../api';
import {ajaxRequest} from './middlewareHelpers';

const showMiddleware = store => next => action => {
    return ajaxRequest(
        store,
        action,
        next,
        searchRequest,
        searchSuccess,
        searchFailure,
        show,
        'singleTvShow'
    );
};

export default showMiddleware;