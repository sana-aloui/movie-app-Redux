import { EDIT_MOVIE } from "../constants/ActionsTypes";
const editReducer = (state = {}, action) => {
    if (action.type === EDIT_MOVIE) {
        return action.movie;
    }
    return state
}

export default editReducer