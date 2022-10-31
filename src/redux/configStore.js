import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { CarouselReducer } from "./reducer/CarouselReducer/CarouselReducer";


const rootReducer = combineReducers({
    CarouselReducer
})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)) );