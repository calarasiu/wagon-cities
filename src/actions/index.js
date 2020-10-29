/* eslint-disable import/prefer-default-export */
// TODO: add and export your own actions
import cities from '../cities';

export function setCities() {
  return {
    type: "SET_CITIES",
    payload: cities
  };
}

export function selectCity(theCity) {
  
  return {
    type: "SET_CITY",
    payload: theCity
  };
}
