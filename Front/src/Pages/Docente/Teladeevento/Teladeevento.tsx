import "./Teladeevento.css"
import palestra from '../../../assets/higiene.png'
import {MoveLeft, Share2, User, Calendar, Clock, MapPin, UserPlus, Users} from 'lucide-react'

function Teladeevento() {
    return (
        <main>
            <div className="cardevent">
                <div className="divcardevent">

                    <div className="divicons">
                        <MoveLeft  size={30}/>
                        <Share2 size={30}/>
                    </div>

                    <div className="centralizar">
                        <div className="cont">
                            <img src={palestra} className="exevent"></img>

                            <div className="info">
                                <div className="profile">
                                    <User size={35} color="#83C890"/>
                                </div>
                                        
                                <div className="moreinformation">
                                    <h3>DIREN / CAE</h3>
                                    <button className="seguir">Seguir organizador</button>
                                </div>
                            </div>
                        </div>

                        <div className="divinformation">

                            <div className="divbuttipo">
                                <button className="buttipo">Tipo</button>
                            </div>
                            <h1>Palestra higiene e autocuidado</h1>

                            <div className="butsinfo">
                                <button className="butsinfo1"><Calendar size={17} color="black"/> 10/06</button>
                                <button className="butsinfo2"><Clock size={17} color="black"/> 9:40 - 10:40</button>
                                <button className="butsinfo3"><MapPin size={17} color="black"/>Auditório principal</button>
                            </div>

                            <p className="plorem">Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde 1966, quando os designers da Letraset e James Mosley, o bibliotecário da St Bride Printing Library em Londres, pegaram uma tradução de Cícero de 1914 e a embaralharam para criar um texto fictício para as folhas de tipos da Letraset. </p>

                            <div className="divbutcadas">
                                <button className="cadastreseev"><UserPlus /> Cadastre-se</button>
                            </div>

                            <p className="pvagas"><Users /> Vagas: 0/<b>50</b></p>
                        </div>

                    </div>


                </div>


            </div>
        </main>
    )
}

export default Teladeevento