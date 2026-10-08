import './CadDoc4.css'
import {Link} from 'react-router-dom'
import Banner from '../../../assets/banner.png'

function CadDoc4() {
    return (
        <main>
            <div>
                <img src={Banner} className='banner'></img>
            </div>

            <div className='CadDoc4'>
                <h1>Verificação</h1>

                <div className="barras">
                    <div className="barra ativa" ></div>
                    <div className="barra ativa"></div>
                    <div className="barra ativa"></div>
                    <div className="barra ativa"></div>
                </div>

                <h2>Verificar email</h2>
                <p className='enviamos'>Enviamos um email com um código <br /> de 5 digitos, a fim de confirmar se a <br /> conta é sua. Digite-o abaixo:</p>

                <form>
                    <div className='inputscod'>
                        <input type='number'></input>
                        <input type='number'></input>
                        <input type='number'></input>
                        <input type='number'></input>
                        <input type='number'></input>
                    </div>

                    <div className='as'>
                        <a>Trocar email</a>
                        <a>Reenviar código</a>
                    </div>

                </form>

                <button className='continuar'   >Criar conta</button>
                <p className='pjatem'>Já tem uma conta?  <Link to='/logindocente' className='cadastre'>Cadastre-se</Link></p>
            </div>
        </main>
    )
}

export default CadDoc4