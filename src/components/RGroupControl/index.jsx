import React from 'react';
import { Radio } from 'antd';
import PropTypes from 'prop-types';

const RControlGroup = ({ orderByChange, orderBy }) => (
    <div style={{ padding: 20 }}>
        <Radio.Group size="large" value={orderBy} onChange={orderByChange}>
            <Radio.Button value={0}>A-Z</Radio.Button>
            <Radio.Button value={1}>Val2</Radio.Button>
        </Radio.Group>
    </div>
);


RControlGroup.propTypes = {
    orderBy: PropTypes.number.isRequired,
    orderDirection: PropTypes.number.isRequired,
}

export default RControlGroup;