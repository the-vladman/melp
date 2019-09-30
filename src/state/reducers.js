import { types } from './actions';


const initialState = {
    restaurants: [],
};

const melpApp = (state = initialState, action) => {
    switch (action.type) {

        case types.FETCH_RESTAURANTS:
            return {
                ...state,
                restaurants: action.restaurants
            }

        default:
            return state
    }
}

export default melpApp;