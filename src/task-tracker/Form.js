import { useState } from 'react'

function Form({addTask}) {
  const [task, setTask] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const handleTaskInput = (event) => setTask(event.target.value);
  const handleDayInput = (event) => setDay(event.target.value);
  const handleReminderInput = (event) => setReminder(event.target.checked);

  const getId = () => Math.floor(Math.random() * 10000) + 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    //new task
    const newTask = {
      id: getId(),
      desc: task,
      day: day,
      reminder: reminder
    };
    //add task
    addTask(newTask);
    //reset
    setTask('');
    setDay('');
    setReminder(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task
        <input name="task" type="text" value={task} onChange={handleTaskInput}/>
      </label>
      <label>
        Day & Time
        <input name="day" type="text" value={day} onChange={handleDayInput}/>
      </label>
      <label>
        Set reminder
        <input name="reminder" type="checkbox" checked={reminder} onChange={handleReminderInput}/>
      </label>
      <input type="submit" value="Add Task"></input>
    </form>
  );
}

export default Form;