import './Escolha.css'
import { useState} from 'react'
import { useNavigate} from 'react-router-dom'
import Banner from "../../../assets/banner.png"
import Docente from "../../../assets/Docente.png"
import Estudante from "../../../assets/Estudante.png"
import NSDC from "../../../assets/NSDC.png"

function Escolha() {
    const [perfil, SetPerfil] = useState('');
    const navigate = useNavigate()

    function continuar() {
        if (perfil === 'docente') {
            navigate('/docente')
        } 
        if (perfil === 'estudante') {
            navigate('/estudante')
        } 
        if (perfil === 'externo') {
            navigate('/externo')
        }
    }

    return (
        <main>
            <div>
                <img src={Banner} className='banner'></img>
            </div>

            <div className='CardEscolha'>
                <h1>Bem vindo ao SEA!</h1>
                <p>Selecione seu perfil de usuário para <br></br> participar dos eventos do IFCE <br></br> campus Cedro.</p>
                
                <label>
                    <div className='opes'>
                        <div className='imgtext'>
                            <img src={Docente}></img>
                            <p>Docente</p>
                        </div>
                        <input type='radio' name='opcao' value="docente" checked={perfil === "docente"} onChange={(e) => SetPerfil(e.target.value)}></input>
                    </div>
                </label>

                <label>
                    <div className='opes'>
                        <div className='imgtext'>
                            <img src={Estudante}></img>
                            <p>Estudante</p>
                        </div>
                        <input type='radio' name='opcao' value="estudante" checked={perfil === "estudante"}></input>
                    </div>
                </label>

                <label>
                     <div className='opes'>
                        <div className='imgtext'> 
                            <img src={NSDC}></img>
                            <p>Não sou do campus</p>
                        </div>
                        <input type='radio' name='opcao' value="externo" checked={perfil === "externo"}></input>
                    </div>
                </label>

                <button className='ButtonContinuar'  type='button'  onClick={continuar} disabled={!perfil}>Continuar</button>
         
         
            </div>
        </main>

    )
}

export default Escolha
