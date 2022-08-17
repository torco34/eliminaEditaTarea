import React, { useState } from "react";
// import "../style/TodoInput.css";
// import "../style/InpuEliminar.css";
import "../style/NueTodos.css";
export default function Todos({ item, onUpDate, onDelete }) {
  const [editar, setEditar] = useState(false);

  // un componente dentro del componente Todos  nombre: "FormEdit"
  function FormEditar() {
    const [newValue, setNewValue] = useState(item.title);
    // function evento
    const handleSubmit = (e) => {
      console.log("Hola Munado.....");
    };
    //funcion evento
    const handleChange = (e) => {
      e.preventDefault();
      const value = e.target.value;
      console.log(value);
      setNewValue(value);
    };
    function handleonClickUpdate(e) {
      onUpDate(item.id, newValue);
      setEditar(false);
    }
    return (
      <div className="container containerEditar">
        <form className="" onSubmit={handleSubmit}>
          <input
            type="text"
            className=""
            onChange={handleChange}
            value={newValue}
          />
          <button onClick={handleonClickUpdate}>Editar</button>
        </form>
      </div>
    );
  }
  //Termima el componente FormEdit
  // un componente dentro del componente Todos nombre: "TodoElement"
  function TodoElement() {
    return (
      <div className="container compTodoEleme">
        <div className="">
          {item.title}
          <button className="editar" onClick={() => setEditar(true)}>
            Editar
          </button>
          <button className="eliminar" onClick={(e) => onDelete(item.id)}>
            Eliminar
          </button>
        </div>
      </div>
    );
  }
  //termina el componente TodoElemento
  return (
    <>
      <div className=" container returnCompunet">
        {editar ? <FormEditar /> : <TodoElement />}
      </div>
    </>
  );
}
