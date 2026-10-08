import './CadDoc3.css'
import {Link} from 'react-router-dom'
import Banner from "../../../assets/banner.png"

function CadDoc3() {
    return (
        <main>
            <div>
                <img src={Banner} className="banner"></img>
            </div>

            <div className='CadDoc3'>
                <h1>Email</h1>

                <div className="barras">
                    <div className="barra ativa" ></div>
                    <div className="barra ativa"></div>
                    <div className="barra ativa"></div>
                    <div className="barra"></div>
                </div>

                <form className='formcaddoc3'>
                    <p className='adicione'>Adicione um email caso precise <br/> recuperar sua senha em breve, de <br/> preferência o instuticional. </p>

                    <p className='titp'>Email de recuperação</p>
                    <input type='email' id='4'></input>

                    <button type='button' className=''>Continuar</button>
                </form>

                <p className='pjatem'>Já tem uma conta?  <Link to='/logindocente' className='cadastre'>Cadastre-se</Link></p>
            </div>
        </main>
    )
}

export default CadDoc3