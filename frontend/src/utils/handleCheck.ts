import { TaskType } from "../assets/type"

export const handleCheck = async (item: TaskType, setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>) => {
    const updateCheckStatus = !item.check
    const updateItem = { ...item, check: updateCheckStatus }

    try {
        const response = await fetch('http://localhost:3000/list/' + item.id, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ check: updateCheckStatus })
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        setTasks(prev =>
            prev.map(task => (task.id === item.id ? updateItem : task))
        )

    } catch (err) {
        console.error("falha ao atualizar o status do check", err);

    }

}