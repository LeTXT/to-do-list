import { useState, useEffect } from "react"

import { handleDelete } from "../utils/handleDelete"
// import { handleCheck } from "../utils/handleCheck"
import { handleEdit } from "../utils/handleEdit"

// import { BsCheck } from "react-icons/bs";

import { TaskType } from "../assets/type";

import '../styles/components/editPanel.scss'

interface EditPanelProps {
    item: TaskType
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>
    setEditingItem: React.Dispatch<React.SetStateAction<TaskType | null>>
    category: []
}

function EditPanel({ item, setTasks, setEditingItem, category }: EditPanelProps) {

    const [editedTitle, setEditedTitle] = useState<string>(item?.title || "")
    const [editedDescription, setEditedDescription] = useState<string>(item?.description || "") 
    const [selectedCategory, setSelectedCategory] = useState(item.category);

    useEffect(() => {
        

        if (item) {
            setEditedTitle(item.title);
            setEditedDescription(item.description);
        }
    }, [item]);

    const paramsAgroup = () => {
        handleEdit(item, editedTitle, editedDescription, setTasks, selectedCategory)
        setEditingItem(null)
    }

    const handleCancel = () => {
        setEditedTitle(item.title)
        setEditedDescription(item.description)
        setEditingItem(null)
    }

    const deleteAgroup = () => {
        handleDelete(item, setTasks)
        setEditingItem(null)
    }

    return (
        <div className='editPanel' >
            <div className="actionsBtn">
                <button className="cancel" onClick={handleCancel}>Cancelar</button>
                <button onClick={paramsAgroup} className="edit">
                    Editar
                </button>

            </div>

            <div className='checkInput'>
                <div className="titleLocal">
                    <input
                        type="text"
                        value={editedTitle}
                        onChange={e => setEditedTitle(e.target.value)}
                        className="title"

                        spellCheck
                    />
                </div>

            </div>
            <textarea
                value={editedDescription}
                onChange={e => setEditedDescription(e.target.value)}
                placeholder="Sem descrição"
                className="description"

                spellCheck
                rows={10}
            />
            <select 
                    name="select"
                    value={selectedCategory} 
                    onChange={e => setSelectedCategory(e.target.value)}
                >
                    {category.map(item => {
                        return (
                            <option value={item} key={item}>{item}</option>
                        )
                    })}
                </select>

            <button onClick={deleteAgroup} className="delete">Deletar</button>
        </div>
    )
}

export default EditPanel