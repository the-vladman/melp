import { connect } from 'react-redux'
import { RList } from '../components';
import _ from 'lodash';

const orderAlpha = (list, order) => _.orderBy(list, 'name', order);

const orderRate = (list, order) => _.orderBy(list, 'rating', order);

const listOrderBy = (restaurants, orderBy, orderDirection) => {
    switch (orderBy) {
        case 0:
            return orderAlpha(restaurants, orderDirection);

        case 1:
            return orderRate(restaurants, orderDirection);

        default:
            return restaurants;
    }
}

const mapState = state => {
    const { restaurants, orderBy, orderDirection } = state;
    const list = listOrderBy(restaurants, orderBy, orderDirection);
    return {
        list
    }
}

const RcList = connect(
    mapState,
)(RList)

export default RcList;