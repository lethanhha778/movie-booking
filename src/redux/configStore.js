import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk";
import { movieReducer } from "./reducer/movieReducer";
import { trailerReducer } from "./reducer/trailerReducer";


const rootReducer = combineReducers({
    trailerReducer, movieReducer
})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)) );


