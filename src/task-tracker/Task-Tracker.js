import React, { useState } from 'react'
import './Task-Tracker.css'
import Header from './Header'
import Form from './Form'
import Tasks from './Tasks'

const TaskTracker = () => {
  const [form, setForm] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      desc: 'Doctor Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      desc: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true
    },
    {
      id: 3,
      desc: 'Dinner with Mom',
      day: 'Feb 8th at 7:00pm',
      reminder: true
    },
  ])

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id
      ? {...task, reminder: !task.reminder} : task));
  }

  const toggleForm = () => {
    setForm(form => !form)
  }

  return (
    <div className="container">
      <Header form={form} toggleForm={toggleForm}/>
      {form && <Form addTask={addTask}/>}
      <Tasks 
        tasks={tasks} 
        onDelete={deleteTask} 
        onToggle={toggleReminder}/>
    </div>
  )
}

export default TaskTracker