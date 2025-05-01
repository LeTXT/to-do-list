import { useState } from "react"

import { TaskType } from "../assets/type"

interface addTaskProps {
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>
}

function AddTask({ setTasks }: addTaskProps) {
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    const throwTask = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const response = await fetch('http://localhost:3000/list', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({title, description, check: false})
            })

            if(!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const newTask: TaskType = await response.json()
            
            setTasks(prev => [...prev, newTask])
            setTitle('')
            setDescription('')
        } catch (err) {
            console.error('Task não lançada', err);
            
        }
    }
    return (
        <div>
            <form onSubmit={throwTask}>
                <input 
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Título da tarefa"
                />
                <input 
                    type="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Descrição da tarefa"
                />
                <button type="submit">Adicionar</button>
            </form>
        </div>
    )
}

export default AddTask 