import { useState } from "react"

import { TaskType } from "../assets/type"

import { handleDelete } from "../utils/handleDelete"
import { handleCheck } from "../utils/handleCheck"
import { handleEdit } from "../utils/handleEdit"

interface TaskItemProps {
    item: TaskType
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>
}

function TaskItem({ item, setTasks }: TaskItemProps) {
    const [edit, setEdit] = useState<boolean>(true)
    const [editedTitle, setEditedTitle] = useState("")
    const [editedDescription, setEditedDescription] = useState("")

    const paramsAgroup = () => {
        handleEdit(item, edit, editedTitle, editedDescription, setEdit, setTasks, setEditedDescription, setEditedTitle)
    }

    return (
        <div>
            <button onClick={() => handleCheck(item, setTasks)}>check</button>
            <div>{item.check ? 'true' : "false"}</div>
            <div>
                <p>Categoria: {item.category}</p>
            </div>
            <input
                type="text"
                value={edit ? item.title : editedTitle}
                onChange={e => setEditedTitle(e.target.value)}
                disabled={edit}
            />
            <input
                type="text"
                value={edit ? item.description : editedDescription}
                onChange={e => setEditedDescription(e.target.value)}
                placeholder="Sem descrição"
                disabled={edit}
            />
            <button onClick={paramsAgroup}>
                Editar
            </button>
            <button onClick={() => handleDelete(item, setTasks)}>Deletar</button>
        </div>
    )
}

export default TaskItem