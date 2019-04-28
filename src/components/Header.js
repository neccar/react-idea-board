import React from "react";

export default function Header({ state, dispatch }) {
  const handleAddIdea = () => {
    dispatch({ type: "ADD_IDEA", payload: { title: "", description: "" } });
  };
  return (
    <div className="navbar navbar-fixed-top">
      <div className="navbar-header pull-left">
        <a className="navbar-brand" href="#">
          Idea Board
        </a>
      </div>
      <div className="navbar-header pull-right">
        <button className="btn btn-primary navbar-btn" onClick={handleAddIdea}>
          Add Idea
        </button>
      </div>
    </div>
  );
}
