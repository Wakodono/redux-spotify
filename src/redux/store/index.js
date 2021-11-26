import { createStore, applyMiddleware, compose } from 'redux';
// import { initialState } from '../tools/initialState';
import mainReducer from '../reducers/index';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
	albums: {
		artist: {},
		Tracks: [],
	},
	loading: {
		albums: [],
		albumsInfo: [],
		artistInfo: [],
	},
};

export default function configureStore() {
	return createStore(
		mainReducer,
		initialState,
		composeEnhancers(applyMiddleware(thunk)),
	);
}
