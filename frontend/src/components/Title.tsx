import '../styles/components/title.scss'

function Title() {
    const dayArray = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const monthArray = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    const getDay: number = new Date().getDay()
    const getMonth: number = new Date().getMonth()
    const getDate: number = new Date().getDate()

    return (
        <div className="titleTask">
            <p>{`${dayArray[getDay]}, ${monthArray[getMonth]} ${getDate}`}</p>
            <h1>Tarefas</h1>
        </div>
    )
}

export default Title