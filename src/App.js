import React, { useReducer } from "react";
import reducer from "./reducer";
import Header from "./components/Header";
import IdeaList from "./components/IdeaList";
import "bootstrap/dist/css/bootstrap.min.css";

const initialState = {
  ideas: []
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <div className="container-fluid">
        <Header state={state} dispatch={dispatch} />
        <IdeaList state={state} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
