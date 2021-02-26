import { useState } from 'react'

function Form({addTask}) {
  const [task, setTask] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const getId = () => Math.floor(Math.random() * 10000) + 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    //new task
    if(task && day) {
      const newTask = {
        id: getId(),
        desc: task,
        day,
        reminder
      };
      //add task
      addTask(newTask);
    } 
    else {
      alert('Fill in the fields');
    }
    //reset
    setTask('');
    setDay('');
    setReminder(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task
        <input name="task" type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
      </label>
      <label>
        Day & Time
        <input name="day" type="text" value={day} onChange={(e) => setDay(e.target.value)}/>
      </label>
      <label>
        Set reminder
        <input name="reminder" type="checkbox" checked={reminder} onChange={(e) => setReminder(e.target.checked)}/>
      </label>
      <input type="submit" value="Add Task"></input>
    </form>
  );
}

export default Form;