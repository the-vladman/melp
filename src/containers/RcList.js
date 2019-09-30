import { connect } from 'react-redux'
import { RList } from '../components';
import { actions } from '../state/actions';

const orderAlpha = (list) => list.sort((a, b) => a.name.localeCompare(b.name));

const orderRate = (list) => list.sort((a, b) => a.rating - b.rating);

const listOrderBy = (restaurants, orderBy, orderDirection) => {
    let list  = []
    switch (orderBy) {
        case 0:
            list = orderAlpha(restaurants);
            break;
        
        case 1:
            list = orderRate(restaurants);
            break;
    
        default:
            list = restaurants;
            break;
    }
    return orderDirection === 1 ? list.reverse() : list;
}

const mapState = state => {
    const { restaurants, orderBy, orderDirection } = state;
    return {
        list: listOrderBy(restaurants, orderBy, orderDirection),
    }
}

const RcList = connect(
    mapState,
)(RList)

export default RcList;