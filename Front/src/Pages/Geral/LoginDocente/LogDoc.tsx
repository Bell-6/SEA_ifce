import './LogDoc.css'
// import { useState } from 'react'
// import { Navigate, useNavigate, Link } from 'react-router-dom'
import {Link} from 'react-router-dom'
import Banner from "../../../assets/banner.png"

function LogDoc() {
    return (
        <main>
            <div>
                <img src={Banner} className='banner'></img>
            </div>

            <div className='login'>
        
                <h1>Login</h1>

                <form>
                    <div className='divSIAPE'>
                        <p>SIAPE</p>
                        <input type="number" placeholder='Número do SIAPE' id="1"></input>
                    </div>

                    <div className='divSenha'>
                        <p>Senha</p>
                        <input type="password" placeholder='Senha' id='1'></input>
                    </div>

                    <div className='links'>
                        <a>Voltar a seleção</a>
                        <a>Esqueceu a senha?</a>
                    </div>

                    <button type='button' className='Entrar'>Entrar</button>

                    <p className='naotem'>Não tem uma conta?   <Link to='/logindocente' className='cadastre'>Cadastre-se</Link></p>
                </form>
             </div>
        </main>
    )
}

export default LogDoc