import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircle, faTimes} from '@fortawesome/free-solid-svg-icons'

const Todo = ({todo, removeTodo}) => {

    const handleRemove = () => {
        removeTodo(todo.id)
    }

    return <li className="item">
        
        {/* Left side of To-Do */}
        <div className='task'>

            {/* Circle */}
            <FontAwesomeIcon 
            icon={faCircle} 
            className='task-icon'
            />

            {/* To-Do Content */}
            <span className='task-name'>{todo.content}</span>
        </div>

        {/* Remove To-Do */}
        <button className="remove-button" onClick={handleRemove}>
            <FontAwesomeIcon icon={faTimes}/>
        </button>
    </li>
}

Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    removeTodo: PropTypes.func.isRequired,
  };

export default Todo