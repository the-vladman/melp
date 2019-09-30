import { types } from './actions';


const initialState = {
    restaurants: [],
    orderBy: 1,
    orderDirection: 0
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