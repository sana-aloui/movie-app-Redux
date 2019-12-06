import { createStore, combineReducers } from "redux";
import RatingReducer from "../reducers/RatingReducer";
import SearchReducer from "../reducers/SearchReducer";
import MoviesReducer from "../reducers/MoviesReducer";
import editReducer from '../reducers/editReducer'

const store = createStore(
	combineReducers({
		RatingReducer,
		SearchReducer,
		MoviesReducer,
		editReducer
	}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
