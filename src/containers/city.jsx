/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectCity } from "../actions";


class City extends Component {
  handleClick = () => {
    return selectCity(this.props.index);
  }
  render() {
    return (
      <div className="list-group-item" onClick={this.handleClick}>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    city: state.city
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
