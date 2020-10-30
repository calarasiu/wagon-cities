import React from 'react';
import CityList from '../containers/city_list';
import ActiveCity from '../containers/active-city';


const App = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selected: cities[0]
  //   };
  // }
  // select=(index) => {
  //   this.setState({ selected: cities[index] });
  // }
  return (
    <div className="app">
      <CityList />
      <ActiveCity />
    </div>
  );
};

export default App;
