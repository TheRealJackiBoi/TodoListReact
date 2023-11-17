import "../App.css";
import Input from "./Input";
import Todo from "./Todo";
import { useState } from "react";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

function TodoGroup() {

    library.add(fas);
    const [lastId, setLastId] = useState(0);
    const [todos, setTodos] = useState([]);
  
    const getNewId = () => {
      setLastId(lastId + 1)
      return lastId
    }
  
    const updateTodos = (newTodo) => {
      setTodos([...todos, newTodo]);
    };
  
    const removeTodo = todoId => {
      setTodos(todos.filter(todo => todo.id !== todoId))
    }
  
    const handleRemoveAll = () => {
      setTodos([])
    }
  
    return (
      <div className="container">
        <div className="todo">
  
          {/* Header */}
          <div className="header">
            <h1>To-Do List</h1>
          </div>
  
          {/* Input Todo */}
          <Input addHandler={updateTodos} getId={getNewId}/>
          
          {/* Todos */}
          <ul className="task-list">
          {todos.length ? (
            todos.map((todo, index) => <Todo key={index} todo={todo} removeTodo={removeTodo}/>)
          ) : (
            <p></p>
          )}
          </ul>
  
          {/* Remove ALL Button */}
          <button className="task-remove-all" onClick={handleRemoveAll}>Remove All</button>
        </div>
      </div>
    );
  }

  export default TodoGroup;