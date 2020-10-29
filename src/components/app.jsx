import React, { Component } from 'react';
import CityList from '../containers/city_list';
import ActiveCity from '../containers/active-city';


class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selected: cities[0]
  //   };
  // }
  // select=(index) => {
  //   this.setState({ selected: cities[index] });
  // }
  render() {
    return (
      <div className="app">
        <CityList />
        <ActiveCity />
      </div>
    );
  }
}

export default App;
