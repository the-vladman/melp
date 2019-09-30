export const types = {
    FETCH_RESTAURANTS: 'FETCH_RESTAURANTS',
    CHANGE_ORDERBY: 'CHANGE_ORDERBY',
    CHANGE_DIRECTION: 'CHANGE_DIRECTION',
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

    orderDirectionChange: (option) => {
        return {
            type: types.CHANGE_DIRECTION,
            option
        }
    },
};