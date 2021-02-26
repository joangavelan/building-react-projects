import { FaTimes } from 'react-icons/fa'

function Task({task, onDelete}) {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`}>
      <div>
        <p>{task.desc}</p>
        <p>{task.day}</p>
      </div>
      <FaTimes onClick={() => onDelete(task.id)}/>
    </div>
  );
}

export default Task