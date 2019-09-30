import React from 'react';
import { Radio, Icon, Typography } from 'antd';
import PropTypes from 'prop-types';
const { Text } = Typography;

const RControlGroup = ({ orderByChange, orderBy, orderDirection, orderDirectionChange}) => (
    <div style={{ padding: 20 }}>
        <Text strong>Order by: </Text>
        <Radio.Group size="large" value={orderBy} onChange={orderByChange}>
            <Radio.Button value={0}>A-Z</Radio.Button>
            <Radio.Button value={1}><Icon type="star" /> Rating</Radio.Button>
        </Radio.Group>
        <Radio.Group style={{ marginLeft: 20 }} size="large" value={orderDirection} onChange={orderDirectionChange}>
            <Radio.Button value='asc'><Icon type="up-circle" /></Radio.Button>
            <Radio.Button value='desc'><Icon type="down-circle" /></Radio.Button>
        </Radio.Group>
    </div>
);


RControlGroup.propTypes = {
    orderBy: PropTypes.number.isRequired,
    orderDirection: PropTypes.number.isRequired,
}

export default RControlGroup;