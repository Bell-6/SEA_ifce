import "./CadDoc2.css"
import {Link} from 'react-router-dom'
import Banner from "../../../assets/banner.png"
import Perfil from "../../../assets/User.png"

function CadDoc2() {
    return (
        <main>
           <div>
                <img src={Banner} className="banner"></img>
            </div> 

            <div className="CadDoc2">
                <h1>Perfil</h1>

                <div className="barras">
                    <div className="barra ativa" ></div>
                    <div className="barra ativa"></div>
                    <div className="barra"></div>
                    <div className="barra"></div>
                </div>

                <form className="formcaddoc2">
                    <div className="photoperfil">
                        <img src={Perfil}></img>
                    </div>

                    <p>Bio</p>
                    <textarea placeholder="Descrição" className="cd2" rows={5}></textarea>
                    <p>Cargo</p>
                    <input type="Text" placeholder="Seu cargo do campus" id="3"></input>

                    <button>Continuar</button>
                </form>

                <p className='pjatem'>Já tem uma conta?  <Link to='/logindocente' className='cadastre'>Cadastre-se</Link></p>

            </div>
        </main>
    )
}

export default CadDoc2