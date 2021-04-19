import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {

  const [tasks,setTasks] = useState([ 
    //state is immutable
        {
            id:1,
            text:'Do Leetcode',
            day:'15/04/2021',
            reminder:true,
        },
        {
            id:2,
            text:'Do DSA',
            day:'16/04/2021',
            reminder:true,
        },
        {
            id:3,
            text:'Do Workout',
            day:'15/04/2021',
            reminder:false,
        }
    ]
  )

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    //console.log(id)
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id ===id ? { ...task,reminder:!task.reminder } : task ))
    console.log(id)
  }
  

  return (
    <div className="container">
      <Header title="Task Tracker"/>
      {tasks.length>0 ? (
      <Tasks 
      tasks={tasks} 
      onDelete={deleteTask} 
      onToggle={toggleReminder} />) : 
      ('No tasks to show')}
    </div>
  );
}

export default App;
