import { useState } from "react"

import { TaskType } from "../assets/type"

import { handleCheck } from "../utils/handleCheck"

import { BsCheck } from "react-icons/bs";


import '../styles/components/taskItem.scss'
// import EditPanel from "./EditPanel"

interface TaskItemProps {
    item: TaskType
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>
    setEditingItem: React.Dispatch<React.SetStateAction<TaskType | null>>
}

function TaskItem({ item, setTasks, setEditingItem }: TaskItemProps) {
    const [showDescription, setShoDescription] = useState<boolean>(false)

    const handleEdit = () => {
        setEditingItem(item)
        // setEdit(true)
    }

    return (
        <div className="taskItem">
            <div className="task">
                <div className={`checkInput ${item.check ? 'checked' : ""}`}>
                    <button
                        onClick={() => handleCheck(item, setTasks)}
                        className='checkBtn'
                    >
                        <BsCheck size={20} color={item.check ? '#ffffff' : "#D4D4D4"}/>
                    </button>

                    <input
                        onClick={() => setShoDescription(prev => !prev)}
                        value={item.title}
                    
                        readOnly 
                    />

                </div>

                <button onClick={handleEdit} className="showEdit">Editar</button>

            </div>
            <div className={`taskDescription ${showDescription ? 'show' : ''}`}>
                <textarea 
                    value={item.description} 
                    className={item.check ? 'checked' : ''} 
                    placeholder="Sem descrição"

                    readOnly
                ></textarea>
            </div>

            
        </div>
    )
}

export default TaskItem