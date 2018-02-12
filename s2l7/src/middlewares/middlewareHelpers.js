export const ajaxRequest = (
    store,
    action,
    next,
    searchRequest,
    searchSuccess,
    searchFailure,
    fetchFunction,
    stateType
) => {
    if (
        action.type === searchRequest.toString() &&
        action.payload.type === stateType
    ) {
        const dispatchData = {
            type: action.payload.type
        };
        fetchFunction(action.payload.data)
            .then(shows => {
                dispatchData.data = shows;
                store.dispatch(searchSuccess(dispatchData));
            })
            .catch(error => {
                store.dispatch(searchFailure(error));
            });
    }
    return next(action);
};
