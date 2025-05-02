import { useEffect, useState } from "react"

import { TaskType } from "../assets/type"

import TaskItem from "./TaskItem"
import AddTask from "./AddTask"

import { FiPlus } from "react-icons/fi";

import '../styles/components/tasks.scss'

function Tasks() {
    const [tasks, setTasks] = useState<TaskType[]>([])
    const [showAddTask, setShowAddTask] = useState<boolean>(false)

    useEffect(() => {
        fetch('http://localhost:3000/list')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])

    return (
        <div className="tasks">
            <AddTask setTasks={setTasks} showAddTask={showAddTask} setShowAddTask={setShowAddTask}/>
            <ul>
                {tasks.length > 0 ? tasks.map(item => {
                    return (
                        <li key={item.id}>
                            <TaskItem item={item} setTasks={setTasks} />
                        </li>
                    )
                }) : <li>Sem tarefas no momento</li>}
            </ul>

            <button onClick={() => setShowAddTask(true)} className="showAddTask">
                <FiPlus size={24} color="white"/>
            </button>
        </div>
    )
}

export default Tasks