export default function(state = null, action) {
  switch (action.type) {
    case "SET_CITY":
      return action.payload;
    default:
      return state;
  }
}
