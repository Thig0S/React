import React, { useState } from "react";

const ToDoList = () => {
  const [task, SetTask] = useState([]);

  const [newTask, SetNewTask] = useState("");

  function HandleInputChange(event) {
    //Atualiza o texto do input
    SetNewTask(event.target.value);
  }

  function AddTask() {
    if (newTask.trim() !== "") {
      SetTask((prevTasks) => [...prevTasks, newTask]);
      SetNewTask("");
    }
  }

  function DeleteTask(index) {
    //Filtra os elementos que atendem a condição, neste caso : que são diferentes do index
    const updateTask = task.filter((_, i) => i !== index);

    SetTask(updateTask);
  }

  function EditTask(index) {
    //Editar o elemento no qual tem o index
    const userInput = prompt("Atualize a Task: ");

    if (userInput.trim() !== "") {
      //Preciso criar uma cópia do array para depois passar ao setTask

      const newTask = [...task]; // Cria uma cópia do array

      newTask[index] = userInput; // Altera o elemento no índice especificado

      SetTask(newTask); //Usa o setTask para alternar o estádo
    }
  }
  return (
    <>
      <div className="ToDoList">
        <h1>To Do List</h1>

        <div>
          <input
            type="text"
            placeholder="Enter a Task..."
            value={newTask}
            onChange={HandleInputChange}
          />
          <button className="addButton" onClick={AddTask}>
            ADD
          </button>
        </div>
        <ol>
          {task.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button className="editButton" onClick={() => EditTask(index)}>
                Edit
              </button>
              <button
                className="DeleteButton"
                onClick={() => DeleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default ToDoList;
