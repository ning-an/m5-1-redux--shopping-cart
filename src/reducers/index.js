const initialState = {};

export default function cartReducer(state = initialState, action) {
  const stateCopy = { ...state };
  switch (action.type) {
    case "add-item":
      if (stateCopy[action.item.id]) {
        stateCopy[action.item.id].quantity += 1;
      } else {
        stateCopy[action.item.id] = { ...action.item, quantity: 1 };
      }
      break;
    case "remove-item":
      delete stateCopy[action.id];
    case "update-quantity":
      stateCopy[action.id].quantity = action.quantity;
  }
  return stateCopy;
}
