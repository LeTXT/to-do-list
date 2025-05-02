import { useState } from "react"

import { TaskType } from "../assets/type"

import { throwTask } from "../utils/throwTask"

import '../styles/components/addTask.scss'

interface addTaskProps {
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>
    showAddTask: boolean
    setShowAddTask: React.Dispatch<React.SetStateAction<boolean>>
}

function AddTask({ setTasks, showAddTask, setShowAddTask }: addTaskProps) {
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')

     const paramsAgroup = (e: React.FormEvent<HTMLFormElement>) => {
            setTimeout(() => {
                throwTask(e, title, description, setTasks, setTitle, setDescription)
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
            
            <form onSubmit={paramsAgroup}>
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
                <input 
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Título da tarefa"
                    className="title"

                    spellCheck
                />
                <textarea 
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Descrição"
                    className="description"

                    spellCheck
                    rows={10}
                />
                
            </form>
        </div>
    )
}

export default AddTask 