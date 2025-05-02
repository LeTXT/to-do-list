import { useState } from "react"

import { TaskType } from "../assets/type"

import { throwTask } from "../utils/throwTask"

import '../styles/components/addTask.scss'

interface addTaskProps {
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>
    showAddTask: boolean
    setShowAddTask: React.Dispatch<React.SetStateAction<boolean>>
    category: []
}

function AddTask({ setTasks, showAddTask, setShowAddTask, category }: addTaskProps) {
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [selectedCategory, setSelectedCategory] = useState('');

     const paramsAgroup = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
            setTimeout(() => {
                throwTask(title, description, selectedCategory, setTasks, setTitle, setDescription, setSelectedCategory)
                setShowAddTask(false)
            }, 100)
        }

        const handleCancel = () => {
            setTimeout(() => {
                setShowAddTask(false)
                
            }, 100);
            setTimeout(() => {
                setTitle('')
                setDescription('')

            }, 300)
        }

    return (
        <div className={`addTask ${showAddTask ? 'show' : '' }`}>
            
            <form onSubmit={ e => paramsAgroup(e)}>
            <div className="actionsBtn">
                <button 
                    onClick={handleCancel} 
                    className="cancel" 
                    type="reset"
                >
                    Cancelar
                </button>
                <button 
                    type="submit" 
                    disabled={title.trim().length === 0}
                    className="submit"
                >
                    Adicionar
                </button>
            </div>
            <div className="titleLocal">
                <input 
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Título da tarefa"
                    className="title"

                    spellCheck
                />
            </div>
                <textarea 
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Descrição"
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
                
            </form>
        </div>
    )
}

export default AddTask 