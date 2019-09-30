import React from 'react';
import { List } from 'antd';
import PropTypes from 'prop-types';
import RCard from '../RCard';
const { Item } = List;

const RList = ({ list }) => (
    <List
    size="large"
    dataSource={list}
    grid={{ gutter: 40,
      xs: 1,
      sm: 2,
      lg: 4,
    }}
    renderItem={item => (
      <Item
        key={item.id}
      >
        <RCard item={item}/>
      </Item>
    )}
  />
);


RList.propTypes = {
    list: PropTypes.array.isRequired,
}

export default RList;