import React, { useState } from "react";
import Todos from "../components/Todos";
import "../style/NueTodoApp.css";

export default function TodoApp() {
  const [title, setTitle] = React.useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    const value = e.target.value;
    setTitle(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: true,
    };
    const temp = [...todos];
    temp.unshift(newTodo);
    setTodos(temp);
    setTitle("");
  }
  function handleUpdate(id, value) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos(temp);
  }

  function handleDelete(id) {
    const temp = todos.filter((item) => item.id != id);
    setTodos(temp);
  }
  return (
    <>
      <div className="container inpuCrearTarea">
        <div className="divFormCreate">
          <form className="" onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              placeholder="Escribir"
              className=" "
              value={title}
            />
            <button onClick={handleSubmit} className="btn btn-light ">
              +
            </button>
          </form>
        </div>
      </div>
      <div className="container todoContainer">
        <div className="tareaHecha">
          {todos.map((item) => (
            <Todos
              key={item.id}
              item={item}
              onUpDate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </>
  );
}
