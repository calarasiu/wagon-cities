/* eslint-disable max-len */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import City from './city';

import { setCities } from '../actions';


class CityList extends Component {
  // selectCity=(index) => {
  //   return this.props.select(index);
  // }
  componentWillMount() {
    this.props.setFlats();
  }
  render() {
    const {
      cities
    } = this.props;
    return (
      <div className="cities">
        {cities.map((city, index) => {
          return <City name={city.name} index={index} selectCity={this.selectCity} key={city.index} />;
        })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCities }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
