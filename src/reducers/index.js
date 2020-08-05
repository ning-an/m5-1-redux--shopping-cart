const initialState = {};

export default function cartReducer(state = initialState, action) {
  const stateCopy = { ...state };
  switch (action.type) {
    case "add-item":
      stateCopy[action.item.id] = { ...action.item, quantity: 1 };
      break;
    case "remove-item":
      delete stateCopy[action.id];
  }
  return stateCopy;
}
