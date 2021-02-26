import React, { useState, createContext } from 'react'
import './Task-Tracker.css'
import Header from './Header'
import Form from './Form'
import Tasks from './Tasks'

const MyContext = createContext();

const TaskTracker = () => {
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

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header formControl/>
      <Form addTask={addTask}/>
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  )
}

export default TaskTracker