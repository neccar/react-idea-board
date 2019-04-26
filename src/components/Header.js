import React from "react";

export default function Header({ state, dispatch }) {
  const handleAddIdea = () => {
    dispatch({ type: "ADD_IDEA", payload: { title: "", description: "" } });
  };
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="col-sm-8">
          <h1>Idea board</h1>
        </div>
        <div className="col-sm-4">
          <button className="btn-primary" onClick={handleAddIdea}>
            Add Idea
          </button>
        </div>
      </div>
    </div>
  );
}
