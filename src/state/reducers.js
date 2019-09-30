import { types } from './actions';


const initialState = {
    restaurants: [],
    orderBy: 0,
    orderDirection: 'desc'
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
        
        case types.CHANGE_DIRECTION:
                return {
                    ...state,
                    orderDirection: action.option
                }

        default:
            return state
    }
}

export default melpApp;