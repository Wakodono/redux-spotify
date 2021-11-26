import {createStore, applyMiddleware} from 'redux';
import { initialState } from '../tools/initialState';
import mainReducer from '../reducers/index';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
albums: [],
loading: {
    albums: [],
    albumsInfo: [],
    artistInfo: []
}
}

export default function configureStore() {
    return createStore(
        mainReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    );
}
