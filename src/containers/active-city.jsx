import React from 'react';


const ActiveCity = ({ city }) => {
  return (
    <div className="active-city">
      <h3>{city.name}</h3>
      <p>{city.address}</p>
      <img src={city.img} alt={city.name} />
    </div>
  );
};


export default ActiveCity;
