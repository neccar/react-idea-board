import React from "react";
import IdeaForm from "./IdeaForm";
export default function IdeaList({ state, dispatch }) {
  return (
    <div className="row">
      <div className="col-sm-12">
        {state.ideas.map((idea, index) => (
          <IdeaForm idea={idea} dispatch={dispatch} key={index} id={index} />
        ))}
      </div>
    </div>
  );
}
