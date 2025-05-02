import Tasks from "../components/Tasks";
import Title from "../components/Title";

import '../styles/page/home.scss'

function Home() {
    return (
        <div className="home">
            <Title />
            <Tasks />
        </div>
    )
}

export default Home;