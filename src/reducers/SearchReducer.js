import { SEARCH_MOVIE } from "../constants/ActionsTypes";
const SearchReducer = (state = "", action) => {
	if (action.type === SEARCH_MOVIE) {
		return action.payload;
	}
	return state;
};

export default SearchReducer;
