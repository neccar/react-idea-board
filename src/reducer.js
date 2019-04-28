export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_IDEA":
      if (!action.payload) return state;
      return { ...state, ideas: [action.payload, ...state.ideas] };

    case "UPDATE_IDEA":
      if (!action.payload) return state;

      var existingIdea = state.ideas[action.payload.id];
      existingIdea[action.payload.name] = action.payload.value;

      return { ...state, ideas: [...state.ideas] };

    case "DELETE_IDEA":
      state.ideas.splice(action.payload.id, 1);

      return { ...state, ideas: [...state.ideas] };

    default:
      return state;
  }
}
