import './CadDoc1.css'
// import { useState } from 'react'
// import { useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Banner from "../../../assets/banner.png"



function CadDoc1() {
    return (
        <main>
            <div>
                <img src={Banner} className='banner'></img>
            </div>

            <div className="CadDoc">
                <h1>Seus Dados</h1>
                
                <div className="barras">
                    <div className="barra ativa" ></div>
                    <div className="barra"></div>
                    <div className="barra"></div>
                    <div className="barra"></div>
                </div>

                <form className='formcad'>

                    <p>Nome de usuário</p>
                    <input type="text" placeholder="Nome" id='2'></input>
                    <p>SIAPE</p>
                    <input type="number" placeholder="Número da matrícula" id='2'></input>
                    <p>Senha</p>
                    <input type="password" placeholder="Senha" id='2'></input>
                    <p>Confirmar senha</p>
                    <input type="password" placeholder="Senha" id='2'></input>

                    <button type="submit" className='continuar'>Continuar</button>
                </form>

                <p className='pjatem'>Já tem uma conta?  <Link to='/logindocente' className='cadastre'>Cadastre-se</Link></p>
            </div>
        </main>
    )
}

export default CadDoc1