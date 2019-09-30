export const types = {
    FETCH_RESTAURANTS: 'FETCH_RESTAURANTS',
}

/// Actions
export const actions = {

    fetchRestaurants: (restaurants) => {
        return {
            type: types.FETCH_RESTAURANTS,
            restaurants
        }
    },
};