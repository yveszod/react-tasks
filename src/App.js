import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddForm, setShowAddForm] = useState(false)
  const [tasks, setTasks] = useState([{
      id: 1,
      text: 'Make React Project',
      day: 'May 25th at 17:00',
      reminder: false
    },
    {
      id: 2,
      text: 'Make React Project',
      day: 'May 25th at 17:00',
      reminder: true
    },
    {
      id: 3,
      text: 'Make React Project',
      day: 'May 25th at 17:00',
      reminder: false
    },
    {
      id: 4,
      text: 'Make React Project',
      day: 'May 25th at 17:00',
      reminder: true
    },
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map(
        (task) => task.id === id ? { ...task, reminder:!task.reminder } : task
      )
    )
  }

  // Add Task
  const addTask = (task) => {

    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}

    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <Header onAdd={() => setShowAddForm(!showAddForm)} showAdd={showAddForm} />
      {showAddForm && <AddTask onAdd={addTask} /> }
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Tasks')}
    </div>
  );
}

export default App;
