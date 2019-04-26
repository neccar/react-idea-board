import React, { useReducer } from "react";
import reducer from "./reducer";
import Header from "./components/Header";
import IdeaList from "./components/IdeaList";

const initialState = {
  ideas: []
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <header className="App-header" />
      <Header state={state} dispatch={dispatch} />
      <IdeaList state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
