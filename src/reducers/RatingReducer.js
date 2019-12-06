import { SEARCH_BYRATE } from "../constants/ActionsTypes";

const RatingReducer = (state = 0, action) => {
    if(action.type === SEARCH_BYRATE) {
        return action.payload
    }
    return state
}

export default RatingReducer