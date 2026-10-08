import "./CadDoc5.css"
import Banner from '../../../assets/banner.png'
import Check from '../../../assets/Check circle.png'

function CadDoc5() {
    return (
        <main>
            <div>
                <img src={Banner} className='banner'></img>
            </div>

            <div className="CadDoc5">
                <img src={Check}></img>
                <h2>Cadastro finalizado.</h2>
                <p>Aproveite a experiência!</p>
                <button type="button">Página inicial</button>
            </div>
        </main>
    )
}

export default CadDoc5