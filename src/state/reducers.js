import { types } from './actions';


const initialState = {
    restaurants: [],
    orderBy: 0,
    orderDirection: 0
};

const melpApp = (state = initialState, action) => {
    switch (action.type) {

        case types.FETCH_RESTAURANTS:
            return {
                ...state,
                restaurants: action.restaurants
            }

        case types.CHANGE_ORDERBY:
                return {
                    ...state,
                    orderBy: action.option
                }

        default:
            return state
    }
}

export default melpApp;