import "./home.css"
import eventimg from '../../../assets/tesetevent.png'
import test from '../../../assets/banner.png'
import bannernb from '../../../assets/SEA__4_-removebg-preview 1.png'
import iflogo from '../../../assets/Cedro-02 3.png'
import { CircleCheckBig, Calendar, Clock, MapPin, Users, Funnel, MessagesSquare, CalendarPlus} from "lucide-react"


function Home() {
    return(
        <main>
            <div className="conteudomain">

                <div className="ajust">
                    <div className="divtotal">
                        <div className="esquerdaho">
                            <h1>Bom dia, nome!</h1>
                            <p>Lembre-se do seu próximo <br></br> evento:</p>

                            <div className="branca">
                                <div className="imgcad">
                                    <img src={eventimg}></img>
                                    <button className="cadastrado"> <CircleCheckBig size={15}/> Cadastrado</button>
                                </div>

                                <div className="moreinfo">
                                    <h2>Título do evento</h2>
                                    <button className="embreve">Em breve</button>
                                    <div className="adds">
                                        <p><Calendar /> 10/06</p>
                                        <div></div>
                                        <p><Clock /> 9:40</p>    
                                    </div>
                                    <p className="plocal"><MapPin  /> Auditório Principal</p>
                                    <p className="pteste"><Users size={20} /> Vagas: <span className="ptestenum">50/50</span></p>
                                

                                </div>
                            </div>
                        </div>

                        <div className="direitaho">
                            <img src={eventimg} className="imgopa"></img>
                            <img src={eventimg} className="destaque"></img>
                            <img src={eventimg} className="imgopa"></img>
                        </div>

                        {/* <div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div> */}
                    </div>

                    <section>
                        <div className="mover">
                            <h2><Calendar /> Eventos </h2>
                            <a>Ver todos</a>
                        </div>

                        <button className="filtrar"><Funnel size={15} /> Filtrar </button>

                        <div className="cards">

                            <div className="card">

                                <div className="cardleft">
                                    <div className="cardposition">
                                        <img src={test} className="photogray"></img>
                                        <button className="tipo">Tipo</button>
                                    </div>
                                    <button type="button" className="cadastrese">Cadastre-se</button>
                                </div>

                                <div className="cardright">
                                    <h3>Título do evento</h3>

                                    <div className="adds">
                                        <p><Calendar size={20} /> dd/mm</p> 
                                        <div></div>
                                        <p><Clock size={20}/> h:mm</p>
                                    </div>
                                    <p><MapPin size={20} /> Local onde ocorrerá </p>
                                    <p className="vagas"><Users size={20}/> vagas: 0/0</p>
                                </div>   
                            </div>

                            <div className="card">

                                <div className="cardleft">
                                    <div className="cardposition">
                                        <img src={test} className="photogray"></img>
                                        <button className="tipo">tipo</button>
                                    </div>
                                    <button type="button" className="cadastrese">Cadastre-se</button>
                                </div>

                                <div className="cardright">
                                    <h3>Título do evento</h3>

                                    <div className="adds">
                                        <p><Calendar size={20} /> dd/mm</p> 
                                        <div></div>
                                        <p><Clock size={20}/> h:mm</p>
                                    </div>
                                    <p><MapPin size={20} /> Local onde ocorrerá </p>
                                    <p className="vagas"><Users size={20}/> vagas: 0/0</p>
                                </div>   
                            </div>

                            <div className="card">

                                <div className="cardleft">
                                    <div className="cardposition">
                                        <img src={test} className="photogray"></img>
                                        <button className="tipo">tipo</button>
                                    </div>
                                    <button type="button" className="cadastrese">Cadastre-se</button>
                                </div>

                                <div className="cardright">
                                    <h3>Título do evento</h3>

                                    <div className="adds">
                                        <p><Calendar size={20} /> dd/mm</p> 
                                        <div></div>
                                        <p><Clock size={20}/> h:mm</p>
                                    </div>
                                    <p><MapPin size={20} /> Local onde ocorrerá </p>
                                    <p className="vagas"><Users size={20}/> vagas: 0/0</p>
                                </div>   
                            </div>

                        </div>

                        <div className="mover">
                            <h2><Calendar /> Palestras </h2>
                            <a>Ver todos</a>
                        </div>

                        <button className="filtrar"><Funnel size={15} /> Filtrar </button>

                        <div className="cards">

                            <div className="card">

                                <div className="cardleft">
                                    <div className="cardposition">
                                        <img src={test} className="photogray"></img>
                                        <button className="tipo">Tipo</button>
                                    </div>
                                    <button type="button" className="cadastrese">Cadastre-se</button>
                                </div>

                                <div className="cardright">
                                    <h3>Título do evento</h3>

                                    <div className="adds">
                                        <p><Calendar size={20} /> dd/mm</p> 
                                        <div></div>
                                        <p><Clock size={20}/> h:mm</p>
                                    </div>
                                    <p><MapPin size={20} /> Local onde ocorrerá </p>
                                    <p className="vagas"><Users size={20}/> vagas: 0/0</p>
                                </div>   
                            </div>

                            <div className="card">

                                <div className="cardleft">
                                    <div className="cardposition">
                                        <img src={test} className="photogray"></img>
                                        <button className="tipo">tipo</button>
                                    </div>
                                    <button type="button" className="cadastrese">Cadastre-se</button>
                                </div>

                                <div className="cardright">
                                    <h3>Título do evento</h3>

                                    <div className="adds">
                                        <p><Calendar size={20} /> dd/mm</p> 
                                        <div></div>
                                        <p><Clock size={20}/> h:mm</p>
                                    </div>
                                    <p><MapPin size={20} /> Local onde ocorrerá </p>
                                    <p className="vagas"><Users size={20}/> vagas: 0/0</p>
                                </div>   
                            </div>

                            <div className="card">

                                <div className="cardleft">
                                    <div className="cardposition">
                                        <img src={test} className="photogray"></img>
                                        <button className="tipo">Tipo</button>
                                    </div>
                                    <button type="button" className="cadastrese">Cadastre-se</button>
                                </div>

                                <div className="cardright">
                                    <h3>Título do evento</h3>

                                    <div className="adds">
                                        <p><Calendar size={20} /> dd/mm</p> 
                                        <div></div>
                                        <p><Clock size={20}/> h:mm</p>
                                    </div>
                                    <p><MapPin size={20} /> Local onde ocorrerá </p>
                                    <p className="vagas"><Users size={20}/> vagas: 0/0</p>
                                </div>   
                            </div>

                        </div>

                        <div className="mover">
                            <h2><MessagesSquare /> Rodas de conversa </h2>
                            <a>Ver todos</a>
                        </div>

                        <button className="filtrar"><Funnel size={15} /> Filtrar </button>

                        <div className="cards">

                            <div className="card">

                                <div className="cardleft">
                                    <div className="cardposition">
                                        <img src={test} className="photogray"></img>
                                        <button className="tipo">Tipo</button>
                                    </div>
                                    <button type="button" className="cadastrese">Cadastre-se</button>
                                </div>

                                <div className="cardright">
                                    <h3>Título do evento</h3>

                                    <div className="adds">
                                        <p><Calendar size={20} /> dd/mm</p> 
                                        <div></div>
                                        <p><Clock size={20}/> h:mm</p>
                                    </div>
                                    <p><MapPin size={20} /> Local onde ocorrerá </p>
                                    <p className="vagas"><Users size={20}/> vagas: 0/0</p>
                                </div>   
                            </div>

                            <div className="card">

                                <div className="cardleft">
                                    <div className="cardposition">
                                        <img src={test} className="photogray"></img>
                                        <button className="tipo">Tipo</button>
                                    </div>
                                    <button type="button" className="cadastrese">Cadastre-se</button>
                                </div>

                                <div className="cardright">
                                    <h3>Título do evento</h3>

                                    <div className="adds">
                                        <p><Calendar size={20} /> dd/mm</p> 
                                        <div></div>
                                        <p><Clock size={20}/> h:mm</p>
                                    </div>
                                    <p><MapPin size={20} /> Local onde ocorrerá </p>
                                    <p className="vagas"><Users size={20}/> vagas: 0/0</p>
                                </div>   
                            </div>

                            <div className="card">

                                <div className="cardleft">
                                    <div className="cardposition">
                                        <img src={test} className="photogray"></img>
                                        <button className="tipo">tipo</button>
                                    </div>
                                    <button type="button" className="cadastrese">Cadastre-se</button>
                                </div>

                                <div className="cardright">
                                    <h3>Título do evento</h3>

                                    <div className="adds">
                                        <p><Calendar size={20} /> dd/mm</p> 
                                        <div></div>
                                        <p><Clock size={20}/> h:mm</p>
                                    </div>
                                    <p><MapPin size={20} /> Local onde ocorrerá </p>
                                    <p className="vagas"><Users size={20}/> vagas: 0/0</p>
                                </div>   
                            </div>

                        </div>

                        <div className="mover">
                            <h2><CalendarPlus /> Outros</h2>
                            <a>Ver todos</a>
                        </div>

                        <button className="filtrar"><Funnel size={15} /> Filtrar </button>

                        <div className="cards">

                            <div className="card">

                                <div className="cardleft">
                                    <div className="cardposition">
                                        <img src={test} className="photogray"></img>
                                        <button className="tipo">Tipo</button>
                                    </div>
                                    <button type="button" className="cadastrese">Cadastre-se</button>
                                </div>

                                <div className="cardright">
                                    <h3>Título do evento</h3>

                                    <div className="adds">
                                        <p><Calendar size={20} /> dd/mm</p> 
                                        <div></div>
                                        <p><Clock size={20}/> h:mm</p>
                                    </div>
                                    <p><MapPin size={20} /> Local onde ocorrerá </p>
                                    <p className="vagas"><Users size={20}/> vagas: 0/0</p>
                                </div>   
                            </div>

                            <div className="card">

                                <div className="cardleft">
                                    <div className="cardposition">
                                        <img src={test} className="photogray"></img>
                                        <button className="tipo">Tipo</button>
                                    </div>
                                    <button type="button" className="cadastrese">Cadastre-se</button>
                                </div>

                                <div className="cardright">
                                    <h3>Título do evento</h3>

                                    <div className="adds">
                                        <p><Calendar size={20} /> dd/mm</p> 
                                        <div></div>
                                        <p><Clock size={20}/> h:mm</p>
                                    </div>
                                    <p><MapPin size={20} /> Local onde ocorrerá </p>
                                    <p className="vagas"><Users size={20}/> vagas: 0/0</p>
                                </div>   
                            </div>

                            <div className="card">

                                <div className="cardleft">
                                    <div className="cardposition">
                                        <img src={test} className="photogray"></img>
                                        <button className="tipo">Tipo</button>
                                    </div>
                                    <button type="button" className="cadastrese">Cadastre-se</button>
                                </div>

                                <div className="cardright">
                                    <h3>Título do evento</h3>

                                    <div className="adds">
                                        <p><Calendar size={20} /> dd/mm</p> 
                                        <div></div>
                                        <p><Clock size={20}/> h:mm</p>
                                    </div>
                                    <p><MapPin size={20} /> Local onde ocorrerá </p>
                                    <p className="vagas"><Users size={20}/> vagas: 0/0</p>
                                </div>   
                            </div>

                        </div>
                    </section>

                </div>
                    <footer>
                        <div>
                            <img src={bannernb}></img>
                            <p> © 2026 SEA - IFCE Campus Cedro. Todos os direitos reservados.</p>
                            <img src={iflogo}></img>
                        </div>
                    </footer>
            </div>

        </main>
    )
}

export default Home