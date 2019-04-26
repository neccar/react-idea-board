import React from "react";
import IdeaForm from "./IdeaForm";
export default function IdeaList({ state, dispatch }) {
  return (
    <div className="row">
      {state.ideas.map((idea, index) => (
        <IdeaForm idea={idea} dispatch={dispatch} key={index} id={index} />
      ))}
    </div>
  );
}
