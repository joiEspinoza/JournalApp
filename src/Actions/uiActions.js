import types from "../Types/types";

///////

const setErrorAction = ( error ) => ( {  type :  types.uiSetError, payload : error } );

const uiRemoveErrorAction = () => ( { type : types.uiRemoveError } );

const uiStartLoadingAction = () => ( { type : types.uiStartLoading, payload : true } );

const uiFinishLoading = () => ( { type : types.uiFinishLoading, payload : false } );


///////

export { setErrorAction,uiRemoveErrorAction, uiStartLoadingAction, uiFinishLoading };