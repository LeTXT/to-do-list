import { useEffect, useState } from "react"

import { TaskType } from "../assets/type"

import TaskItem from "./TaskItem"
import AddTask from "./AddTask"

function Tasks() {
    const [tasks, setTasks] = useState<TaskType[]>([])

    useEffect(() => {
        fetch('http://localhost:3000/list')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])

    return (
        <div>
            <AddTask setTasks={setTasks}/>
            <ul>
                {tasks.map(item => {
                    return (
                        <li key={item.id}>
                            <TaskItem item={item} setTasks={setTasks} />
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}

export default Tasks