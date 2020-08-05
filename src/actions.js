export const addItem = (item) => {
  return { type: "add-item", item };
};

export const removeItem = (id) => {
  return { type: "remove-item", id };
};
