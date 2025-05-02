import { TaskType } from "../assets/type"

export const handleDelete = async (
    item: TaskType, 
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>
) => {

    try {
        const response = await fetch('http://localhost:3000/list/' + item.id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        setTasks(prev =>
            prev.filter(task => (task.id !== item.id))
        )

    } catch (err) {
        console.error('Task não excluida', err);

    }
}