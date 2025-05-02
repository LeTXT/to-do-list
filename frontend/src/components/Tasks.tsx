import { useEffect, useState } from "react"

import { TaskType } from "../assets/type"

import TaskItem from "./TaskItem"
import AddTask from "./AddTask"
import EditPanel from "./EditPanel"
import ShowCategory from "./ShowCategory"

import { BsSliders2, BsPlus } from "react-icons/bs"

import '../styles/components/tasks.scss'

function Tasks() {
    const [tasks, setTasks] = useState<TaskType[]>([])
    const [category, setCategory] = useState<[]>([])
    const [showAddTask, setShowAddTask] = useState<boolean>(false)
    const [editingItem, setEditingItem] = useState<TaskType | null>(null);
    const [showCategory, setShowCategory] = useState<boolean>(false)

    useEffect(() => {
        fetch('http://localhost:3000/list')
            .then(res => res.json())
            .then(data => setTasks(data))

        fetch('http://localhost:3000/category')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    return (
        <div className="tasks">
            <AddTask
                setTasks={setTasks}
                showAddTask={showAddTask}
                setShowAddTask={setShowAddTask}
                category={category}
            />

            {editingItem && (
                <EditPanel
                    item={editingItem}
                    setTasks={setTasks}
                    setEditingItem={setEditingItem}
                    category={category}

                />
            )}

            <div className={`categoryPanel ${showCategory ? 'show' : ''}`}>
                <div className="actionBtn">
                    <button onClick={() => setShowCategory(false)}>Sair</button>

                </div>
                <div className="list">
                    {category.map(item => {
                        return (
                            <div key={item}>
                                <ShowCategory item={item} />
                            </div>
                        )
                    })}

                </div>
            </div>

            <ul>
                {tasks.length > 0 ? tasks.map(item => {
                    return (
                        <li key={item.id}>
                            <TaskItem
                                item={item}
                                setTasks={setTasks}
                                setEditingItem={setEditingItem}
                            />
                        </li>
                    )
                }) : <li>Sem tarefas no momento</li>}
            </ul>

            <div className="bottomBtn">
                <button className="showFilter" onClick={() => setShowCategory(true)}>
                    <BsSliders2 />
                </button>

                <button onClick={() => setShowAddTask(true)} className="showAddTask">
                    <BsPlus size={24} color="white" />
                </button>
            </div>
        </div>
    )
}

export default Tasks