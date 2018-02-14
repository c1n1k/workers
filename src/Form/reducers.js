export default (state = [], action) => {
  switch (action.type) {
    case "ADD_PERSON":
      return [...state, { ...action.data }];
    case "EDIT_PERSON":
      const start = state.slice(0, Number(action.index));
      const end = state.slice(Number(action.index) + 1);
      console.log("start " + start);
      console.log("end " + end);
      return [...start, action.data, ...end];
    default:
      return state;
  }
};
