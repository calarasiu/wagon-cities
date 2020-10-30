/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectCity } from "../actions/actions";


class City extends Component {
  handleClick=() => {
    // debugger
    this.props.selectCity(this.props.city);
  }
  render() {
    return (
      <li
        className="list-group-item"
        onClick={this.handleClick}
      >{this.props.city.name}
      </li>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(City);
