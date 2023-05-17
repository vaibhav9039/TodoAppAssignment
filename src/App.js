import React, { useState } from "react";
import TodoRow from "./components/TodoRow";
import Button from "./components/Button";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddClick = () => {
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" value={newTodo} onChange={handleInputChange} />
        <Button variant="big" onClick={handleAddClick}>
          Add
        </Button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <TodoRow label={todo} onDelete={() => handleDeleteTodo(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
