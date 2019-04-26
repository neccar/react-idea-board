import React from "react";

export default function Header({ state, dispatch }) {
  const handleAddIdea = () => {
    dispatch({ type: "ADD_IDEA", payload: { title: "", description: "" } });
  };
  return (
    <div className="row">
      <div className="col-sm-12">
        <button onClick={handleAddIdea}>Add Idea</button>
      </div>
    </div>
  );
}
