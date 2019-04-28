import React from "react";

export default function IdeaForm({ idea, dispatch, id }) {
  const handleChangeIdea = e => {
    dispatch({
      type: "UPDATE_IDEA",
      payload: { id: id, name: e.target.name, value: e.target.value }
    });
  };

  const handleDeleteIdea = e => {
    dispatch({
      type: "DELETE_IDEA",
      payload: { id: id }
    });
  };

  return (
    <div
      className="card bg-info mb-3"
      style={{ maxWidth: "21rem", margin: "10px" }}
    >
      <div className="card-body">
        <h5 className="card-title">Idea</h5>

        <input
          name="title"
          placeholder="Title"
          value={idea.title}
          onChange={e => handleChangeIdea(e)}
          style={{ marginBottom: "10px" }}
        />
        <textarea
          cols="30"
          rows="5"
          name="description"
          placeholder="Description"
          value={idea.description}
          onChange={e => handleChangeIdea(e)}
        />
        <button className="btn btn-danger" onClick={e => handleDeleteIdea(e)}>
          {" "}
          Delete
        </button>
      </div>
    </div>
  );
}
