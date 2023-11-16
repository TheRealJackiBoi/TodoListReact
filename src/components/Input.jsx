import { useState } from "react"
import PropTypes from 'prop-types';

const Input = ({ addHandler, getId }) => {
    
    // Default To-Do
    const [newTodo, setNewTodo] = useState({
                                            "content": "",
                                            "color": "",
                                        })
        
    const handleAddTodo = () => {
        if (newTodo.content.trim()) {
            addHandler({"id": getId, ...newTodo})
            setNewTodo({
                "content": "",
                "color": ""
            })
        }
    }

    return <div className="task-form">
        {/* Content Input */}
        <input className="task-input" type="text" value={newTodo.content} onChange={e => setNewTodo({"content": e.target.value})} />

        {/* Add Content */}
        <button className="task-add" onClick={handleAddTodo}>Add</button>
    </div>
}

Input.propTypes = {
    addHandler: PropTypes.func.isRequired,
    getId: PropTypes.func.isRequired
  };

  export default Input