import { TaskType } from "../assets/type"

export const handleEdit = async (
        item: TaskType,
        edit: boolean,
        editedTitle: string,
        editedDescription: string,
        setEdit: React.Dispatch<React.SetStateAction<boolean>>,
        setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>,
        setEditedDescription: React.Dispatch<React.SetStateAction<string>>,
        setEditedTitle: React.Dispatch<React.SetStateAction<string>>
    ) => {

    if (edit) {
        setEditedTitle(item.title)
        setEditedDescription(item.description)
    } else {

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

    setEdit(prev => !prev)

}