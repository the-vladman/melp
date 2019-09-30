import { connect } from 'react-redux'
import { RGroupControl } from '../components';
import { actions } from '../state/actions';

const mapState = state => {
    const { orderBy, orderDirection } = state;
    return {
        orderBy,
        orderDirection
    }
}

const mapDispatch = dispatch => {
    return {
        orderByChange: (e) => dispatch(actions.orderByChange(e.target.value)),
    }
}

const RcOrderControl = connect(
    mapState,
    mapDispatch
)(RGroupControl)

export default RcOrderControl;