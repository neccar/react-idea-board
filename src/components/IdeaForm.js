import React from "react";

export default function IdeaForm({ idea, dispatch, id }) {
  const handleChangeIdea = e => {
    dispatch({
      type: "UPDATE_IDEA",
      payload: { id: id, name: e.target.name, value: e.target.value }
    });
  };

  return (
    <div
      className="card bg-info mb-3"
      style={{ maxWidth: "18rem", margin: "10px" }}
    >
      <div className="card-body">
        <h5 class="card-title">Idea</h5>

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
      </div>
    </div>
  );
}
