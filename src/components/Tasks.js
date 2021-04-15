import { useState } from 'react'


const Tasks = () => {

    const [tasks,setTasks] = useState([
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
    return (
        <>
           { tasks.map((task) => ( 
           <h3 key={task.id}>{task.text}</h3>
            ))} 
        </>
    )
}

export default Tasks
