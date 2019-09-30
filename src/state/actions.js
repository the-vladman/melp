export const types = {
    FETCH_RESTAURANTS: 'FETCH_RESTAURANTS',
    CHANGE_ORDERBY: 'CHANGE_ORDERBY',
}

/// Actions
export const actions = {

    fetchRestaurants: (restaurants) => {
        return {
            type: types.FETCH_RESTAURANTS,
            restaurants
        }
    },

    orderByChange: (option) => {
        return {
            type: types.CHANGE_ORDERBY,
            option
        }
    },
};