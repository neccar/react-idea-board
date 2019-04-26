import React from "react";

export default function IdeaForm({ idea, dispatch, id }) {
  const handleChangeIdea = e => {
    dispatch({
      type: "UPDATE_IDEA",
      payload: { id: id, name: e.target.name, value: e.target.value }
    });
  };

  return (
    <div className="row">
      <div className="col-sm-12">
        <input
          name="title"
          placeholder="Title"
          value={idea.title}
          onChange={e => handleChangeIdea(e)}
        />
        <input
          name="description"
          placeholder="Description"
          value={idea.description}
          onChange={e => handleChangeIdea(e)}
        />
      </div>
    </div>
  );
}