import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { actions } from './state/actions';

const fetchPath = 'data_melp.json';

class App extends Component {

  componentDidMount = async() => {
    const { fetchRestaurants } = this.props;
    try {
      const response = await fetch(fetchPath);
      const list = await response.json();
      fetchRestaurants(list);
    } catch (error) {
      console.log(error);
    }    
  }

  render() {
    return (
      <div>
        Melp App
      </div>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    fetchRestaurants: (r) => dispatch(actions.fetchRestaurants(r))
  }
};

export default connect(null, mapDispatch)(App);
