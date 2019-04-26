export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_IDEA":
      console.log(action);
      if (!action.payload) return state;
      return { ...state, ideas: [action.payload, ...state.ideas] };

    case "UPDATE_IDEA":
      console.log(action.payload);
      if (!action.payload) return state;

      var existingIdea = state.ideas[action.payload.id];
      console.log(existingIdea);
      //existingIdea[action.payload.name] = action.payload.value;
      // state[action.payload.id]
      return { ...state, existingIdea };

    default:
      return state;
  }
}
