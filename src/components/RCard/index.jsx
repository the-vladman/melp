import React from 'react';
import { Rate, Card, Icon } from 'antd';
import PropTypes from 'prop-types';

const RCard = ({ item }) => (
    <Card
        title={<a>{item.name}</a>}
        bordered={false}
        actions={[
        <a href={`${item.contact.site}`}><Icon type="global" /></a>,
        <a href={`mailto:${item.contact.email.toLowerCase()}`}><Icon type="mail" /></a>,
        <a><Icon type="phone" /></a>
        ]}
        extra={<Rate disabled value={item.rating} />}>
        <p><Icon type="compass" /> : {item.address.state}</p>
        <p>{item.address.street}</p>
        <p>{item.address.city}</p>
    </Card>
);


RCard.propTypes = {
    item: PropTypes.object.isRequired,
}

export default RCard;