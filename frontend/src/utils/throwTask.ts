import { TaskType } from "../assets/type"

export const throwTask = async (
    title: string,
    description: string,
    category: string,
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>,
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    setDescription: React.Dispatch<React.SetStateAction<string>>,
    setCategory: React.Dispatch<React.SetStateAction<string>>
) => {


    if(title.trim().length > 0) {
        try {
            const response = await fetch('http://localhost:3000/list', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, description, category, check: false })
            })
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
    
            const newTask: TaskType = await response.json()
    
            setTasks(prev => [...prev, newTask])
            setTitle('')
            setDescription('')
            setCategory('')
        } catch (err) {
            console.error('Task não lançada', err);
    
        }
    }

}