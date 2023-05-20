import React, { useState } from "react";
import TodoRow from "./components/TodoRow";
import Button from "./components/Button";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <div
        style={{
          width: "300px",
          backgroundColor: "white",
          border: "2px solid white",
          padding: "10px 20px",
          marginBottom: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)"
        }}
      >
        <h1>Todo </h1>
        <div
          style={{
            width: "300px",
            marginBottom: "40px",
            justifyContent: "space-between"
          }}
        >
          {todos.map((label, index) => (
            <TodoRow
              key={index}
              label={label}
              onDelete={() => handleDeleteTodo(index)}
            />
          ))}
        </div>
        <hr
          style={{
            margin: "10px 0",
            border: "none",
            borderBottom: "1px solid #f0f1f1"
          }}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            value={newTodo}
            onChange={handleInputChange}
            placeholder="Add task here..."
            style={{
              borderRadius: "8px",
              height: "2rem",
              width: "100%",
              padding: "5px",
              border: "none",
              backgroundColor: "#f0f1f1",
              textIndent: "20px",
              marginRight: "1px",
              "::placeholder": {
                color: "rgba(0, 0, 0, 0.6)"
              }
            }}
          />
          <Button variant="big" onClick={handleAddTodo}>
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
