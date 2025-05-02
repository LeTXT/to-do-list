import { TaskType } from "../assets/type"

export const handleEdit = async (
    item: TaskType,
    editedTitle: string,
    editedDescription: string,
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>,
) => {

    const title = editedTitle.trim().length > 0 ? editedTitle : item.title
    const description = editedDescription

    const updateItem = {
        ...item,
        title,
        description
    }

    try {
        const response = await fetch('http://localhost:3000/list/' + item.id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        setTasks(prev =>
            prev.map(task => (task.id === item.id ? updateItem : task))
        )

    } catch (err) {
        console.error('Falha ao editar a task', err);
    }

}