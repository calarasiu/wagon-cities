export default function(state, action) {
  if (action.type === undefined) {
    
    return null;
  }
  switch (action.type) {
    case ('SET_CITY'):
      return action.payload;
    default:
      return state;
  }
}

