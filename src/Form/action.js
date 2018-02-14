export const add = data => {
  return {
    type: "ADD_PERSON",
    data
  };
};

export const edit = (index, data) => {
  return {
    type: "EDIT_PERSON",
    index: index,
    data: data
  };
};
