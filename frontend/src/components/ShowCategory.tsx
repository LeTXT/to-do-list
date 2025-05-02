import '../styles/components/showCategory.scss'

interface ShowCategoryProps {
    item: string
}

function ShowCategory({item}: ShowCategoryProps) {
    return (
        <div className="showCategory">
            <button>{item}</button>
        </div>
    )
}

export default ShowCategory