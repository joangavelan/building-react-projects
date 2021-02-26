import { FaTimes } from 'react-icons/fa'

function Task({task, onDelete, onToggle}) {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} 
         onDoubleClick={() => onToggle(task.id)}>
      <div>
        <p>{task.desc}</p>
        <p>{task.day}</p>
      </div>
      <FaTimes onClick={() => onDelete(task.id)}/>
    </div>
  );
}

export default Task