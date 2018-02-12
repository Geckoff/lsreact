import {searchRequest, searchFailure, searchSuccess} from '../actions/TvshowAction';
import {handleActions} from 'redux-actions';
import {combineReducers} from 'redux';

const isFetching = handleActions(
  {
    [searchRequest]: () => true,
    [searchSuccess]: () => false,
    [searchFailure]: () => false,
  },
  false,
);

const isFetched = handleActions({
  [searchRequest]: () => false,
  [searchSuccess]: () => true,
  [searchFailure]: () => true,
}, false)

const error = handleActions(
  {
    [searchRequest]: () => null,
    [searchSuccess]: () => null,
    [searchFailure]: (state, action) => action.payload,
  },
  null,
);

const myReducersNames = [
  'tvShows',
  'singleTvShow'
];

const myReducers = {};

myReducersNames.filter((reducer) => {
  myReducers[reducer] = handleActions(
    {
      [searchSuccess]: (state, action) => {
        return (action.payload.type === reducer) ? action.payload.data : state;
      }  
    },
    [],
  )
});

export default combineReducers({
  isFetching,
  isFetched,
  error,
  ...myReducers
});

export const getIsLoading = state => state.isFetching;
export const getIsLoaded = state => state.isFetched;
export const getError = state => state.error;

const mySelectors = {};

myReducersNames.filter((reducerName) => {
  mySelectors['get' + reducerName.charAt(0).toUpperCase() + reducerName.substr(1)] = state => state[reducerName];  
})

export {mySelectors};