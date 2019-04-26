export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_IDEA":
      if (!action.payload) return state;
      return { ...state, ideas: [action.payload, ...state.ideas] };

    case "UPDATE_IDEA":
      if (!action.payload) return state;

      var existingIdea = state.ideas[action.payload.id];
      existingIdea[action.payload.name] = action.payload.value;

      return { ...state };

    default:
      return state;
  }
}
