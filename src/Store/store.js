import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import authReducer from "../Reducer/authReducer";
import thunk from 'redux-thunk';
import uiReducer from "../Reducer/uiReducer";
import { noteReducer } from "../Reducer/noteReducer";

////

const reducers = combineReducers( { auth : authReducer, ui : uiReducer, notes : noteReducer } );

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

/////

const store = createStore( reducers, composeEnhancers( applyMiddleware( thunk ) ) );

////

export default store;