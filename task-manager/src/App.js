import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks, setTasks]= useState([
    {
      id: 1,
      text: 'Have some Coffee',
      day: '18th February',
      reminder: true
    },
    {
      id: 2,
      text: 'Have more Coffee',
      day: '18th February',
      reminder: false
    }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
     <Header title= "Task Manager"/>
     {tasks.length> 0 ? (
       <Tasks tasks={tasks} onDelete= {deleteTask}/>) : ('I miss Kylie :(')
     }

    </div>
  );
}

export default App;
