import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Row, Col, Typography, Icon, message } from 'antd';

import './App.css';
import RcList from './containers/RcList';
import RcOrderControl from './containers/RcOrderControl';
import { actions } from './state/actions';

const { Title } = Typography;
const { Header, Content } = Layout;
const fetchPath = '/data_melp.json';
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1394421_6bzlgwo7j4d.js',
});

class App extends Component {

  componentDidMount = async() => {
    const { fetchRestaurants } = this.props;
    try {
      const response = await fetch(fetchPath);
      const list = await response.json();
      fetchRestaurants(list);
    } catch (error) {
      message.error('Ups! cannot fetch');
    }    
  }

  render() {
    return (
      <Layout>
        <Header><Title style={{ color: 'white', padding: 10 }}> <IconFont type="iconrestaurant__easyiconnet" style={{color:'white'}}/> Melp</Title></Header>
        <Content style={{ margin: 20, }}>
          <Row gutter={40}>
            <Col span={10}>
              <RcOrderControl/>
            </Col>
          </Row>
          <Row gutter={40}>
            <Col span={24}>
              <RcList/>
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    fetchRestaurants: (r) => dispatch(actions.fetchRestaurants(r))
  }
};

export default connect(null, mapDispatch)(App);
