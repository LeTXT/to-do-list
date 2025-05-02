import { useState } from "react"

import { TaskType } from "../assets/type"

import { handleDelete } from "../utils/handleDelete"
import { handleCheck } from "../utils/handleCheck"
import { handleEdit } from "../utils/handleEdit"

import { FiCheck } from "react-icons/fi";

import '../styles/components/taskItem.scss'

interface TaskItemProps {
    item: TaskType
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>
}

function TaskItem({ item, setTasks }: TaskItemProps) {
    const [edit, setEdit] = useState<boolean>(false)
    const [editedTitle, setEditedTitle] = useState<string>(item.title)
    const [editedDescription, setEditedDescription] = useState<string>(item.description)

    const [showDescription, setShoDescription] = useState<boolean>(false)

    const paramsAgroup = () => {
        handleEdit(item, editedTitle, editedDescription, setTasks)
        setEdit(false)
    }

    const handleCancel = () => {
        setEdit(false)
        setEditedTitle(item.title)
        setEditedDescription(item.description)
    }

    return (
        <div className="taskItem">
            <div className="task">
                <div className={`checkInput ${item.check ? 'checked' : ""}`}>
                    <button
                        onClick={() => handleCheck(item, setTasks)}
                        className='checkBtn'
                    >
                        <FiCheck size={20} color={item.check ? '#ffffff' : "#D4D4D4"}/>
                    </button>

                    <input
                        onClick={() => setShoDescription(prev => !prev)}
                        value={item.title}
                    
                        readOnly 
                    />

                </div>

                <button onClick={() => setEdit(true)} className="showEdit">Editar</button>

            </div>
            <div className={`taskDescription ${showDescription ? 'show' : ''}`}>
                <textarea 
                    value={item.description} 
                    className={item.check ? 'checked' : ''} 

                    readOnly
                ></textarea>
            </div>

            <div className={`editPanel ${edit ? 'show' : 'hidden'}`}>
                <div className="actionsBtn">
                    <button className="cancel" onClick={handleCancel}>Cancel</button>
                    <button onClick={paramsAgroup} className="edit">
                        Editar
                    </button>

                </div>

                <div className={`checkInput ${item.check ? 'checked' : ""}`}>
                    <button
                        onClick={() => handleCheck(item, setTasks)}
                        className={`checkBtn ${item.check ? 'true' : ""}`}
                    >
                        <FiCheck size={20} color={item.check ? '#ffffff' : "#D4D4D4"} />
                    </button>
                    <input
                        type="text"
                        value={editedTitle}
                        onChange={e => setEditedTitle(e.target.value)}
                        className="title"

                        spellCheck
                    />

                </div>
                <textarea
                    value={editedDescription}
                    onChange={e => setEditedDescription(e.target.value)}
                    placeholder="Sem descrição"
                    className="description"

                    spellCheck
                    rows={10}
                />

                <button onClick={() => handleDelete(item, setTasks)} className="delete">Deletar</button>
            </div>
        </div>
    )
}

export default TaskItem