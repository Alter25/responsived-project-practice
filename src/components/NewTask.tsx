import { useState } from "react";
import { TaskStore } from "../Stores/TaskStore";

export default function NewTask() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, text });
    setName("");
    setText("");
  };

  return (
    <section className="newTask-container">
      <h2>Nueva tarea</h2>
      <form className="newTask-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="task-name">Nombre:</label>
          <input
            id="task-name"
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="task-text">Descripción:</label>
          <textarea
            name="task-text"
            id="task-text"
            placeholder="Texto"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="button-primary">
          Guardar
        </button>
      </form>
    </section>
  );
}