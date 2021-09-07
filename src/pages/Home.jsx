import { Header } from "../components/Header"
import {Founders} from "../components/Founders"
import "../styles/home.scss"



export function Home() {
    return (
        <div>
            <Header />
            <main className="main-content">
                <div className="aboutUs">
                    <h1 className="title-aboutUs">Sobre nós</h1>
                    <h2 className="about-content">O 4ano é um servidor criado em 2018 por 5 players que buscavam<br />
                        um espaço legal para jogarem e se comunicarem, desde então o servidor<br />
                        cresceu e se tornou um ecossistema!
                    </h2>
                </div>

            </main>
            <Founders/>
        </div>
    )
}