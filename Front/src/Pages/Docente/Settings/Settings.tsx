import './Settings.css'
import { useState } from 'react'
import { UserRound, Bell, CircleHelp, LogOut, Trash2, Camera, Eye, EyeOff, Check, X, House } from 'lucide-react'

type Pagina = 'Perfil' | 'Conta' | 'Notificações' | 'Sobre'

function Configuracao() {
    const [pagina, setPagina] = useState<Pagina>('Perfil')
    const [editar, setEditar] = useState(false)
    const [mostrarEventos, setMostrarEventos] = useState(true)
    const [senhaVisivel, setSenhaVisivel] = useState(false)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('Nome')
    const [cargo, setCargo] = useState('')
    const [descricao, setDescricao] = useState('Conte um pouco sobre você...')
    const [foto, setFoto] = useState<string | null>(null)

    const [notificacoes, setNotificacoes] = useState({
        receber: true,
        eventos: true,
        lembretes: true
    })

    function alterarNotificacao(tipo: keyof typeof notificacoes) {
        setNotificacoes({ ...notificacoes, [tipo]: !notificacoes[tipo] })
    }

    function salvarPerfil(e: React.FormEvent) {
        e.preventDefault()
        setEditar(false)
    }

    function salvarConta(e: React.FormEvent) {
        e.preventDefault()
    }

    function alterarFoto(e: React.ChangeEvent<HTMLInputElement>) {
        const arquivo = e.target.files?.[0]
        if (arquivo) setFoto(URL.createObjectURL(arquivo))
    }

    return (
        <main className="config-page">

            <div className="config-container">

                <aside className="config-menu">

                    <h3>Minha conta <span>⌄</span></h3>

                    <button className={pagina === 'Perfil' ? 'menu-ativo' : ''} onClick={() => { setPagina('Perfil'); setEditar(false) }}>
                        <UserRound size={16} /> Perfil
                    </button>

                    <button className={pagina === 'Conta' ? 'menu-ativo' : ''} onClick={() => { setPagina('Conta'); setEditar(false) }}>
                        <UserRound size={16} /> Conta
                    </button>

                    <button className={pagina === 'Notificações' ? 'menu-ativo' : ''} onClick={() => { setPagina('Notificações'); setEditar(false) }}>
                        <Bell size={16} /> Notificações
                    </button>

                    <button className={pagina === 'Sobre' ? 'menu-ativo' : ''} onClick={() => { setPagina('Sobre'); setEditar(false) }}>
                        <CircleHelp size={16} /> Sobre
                    </button>

                    <div className="config-menu-final">
                        <button className="sair-conta"><LogOut size={15} /> Sair da conta</button>
                        <button className="excluir-conta"><Trash2 size={15} /> Excluir conta</button>
                    </div>

                </aside>

                <section className="config-conteudo">

                    {pagina === 'Perfil' && (
                        <>
                            <h2>{editar ? 'Editar perfil' : 'Perfil'}</h2>
                            <p className="config-subtitulo">Personalize seu perfil e suas informações.</p>

                            <div className="perfil-card">

                                <label className="perfil-foto">
                                    {foto ? <img src={foto} alt="Foto do perfil" /> : <UserRound size={35} />}
                                    {editar && (
                                        <>
                                            <div className="foto-editar"><Camera size={17} /></div>
                                            <input type="file" accept="image/*" onChange={alterarFoto} />
                                        </>
                                    )}
                                </label>

                                {editar ? (
                                    <form className="perfil-form" onSubmit={salvarPerfil}>
                                        <div className="campo-config">
                                            <label>Nome</label>
                                            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome" required />
                                        </div>

                                        <div className="campo-config">
                                            <label>Cargo</label>
                                            <input type="text" value={cargo} onChange={(e) => setCargo(e.target.value)} placeholder="Seu cargo" />
                                        </div>

                                        <div className="campo-config">
                                            <label>Descrição</label>
                                            <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                                        </div>

                                        <div className="botoes-perfil">
                                            <button type="button" className="btn-cancelar" onClick={() => setEditar(false)}><X size={15} /> Cancelar</button>
                                            <button type="submit" className="btn-salvar"><Check size={15} /> Salvar alterações</button>
                                        </div>
                                    </form>
                                ) : (
                                    <div className="perfil-info">
                                        <h3>{nome}</h3>
                                        <p>{cargo || 'Nenhum cargo informado'}</p>
                                        <p className="perfil-descricao">{descricao}</p>
                                        <button className="btn-editar" onClick={() => setEditar(true)}>Editar perfil</button>
                                    </div>
                                )}

                            </div>

                            {!editar && (
                                <label className="config-toggle">
                                    <input type="checkbox" checked={mostrarEventos} onChange={() => setMostrarEventos(!mostrarEventos)} />
                                    <span className="toggle-visual"></span>
                                    Mostrar seus eventos criados no perfil
                                </label>
                            )}
                        </>
                    )}

                    {pagina === 'Conta' && (
                        <>
                            <h2>Conta</h2>
                            <p className="config-subtitulo">Gerencie as informações da sua conta.</p>

                            <form className="conta-card" onSubmit={salvarConta}>

                                <div className="campo-config">
                                    <label>Email</label>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Seu email" required />
                                </div>

                                <div className="campo-config">
                                    <label>Senha</label>
                                    <div className="senha-input">
                                        <input type={senhaVisivel ? 'text' : 'password'} value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Sua senha" required />
                                        <button type="button" onClick={() => setSenhaVisivel(!senhaVisivel)}>
                                            {senhaVisivel ? <EyeOff size={17} /> : <Eye size={17} />}
                                        </button>
                                    </div>
                                </div>

                                <div className="botoes-conta">
                                    <button type="reset" className="btn-cancelar" onClick={() => { setEmail(''); setSenha('') }}>Cancelar</button>
                                    <button type="submit" className="btn-salvar">Salvar alterações</button>
                                </div>

                            </form>

                            <label className="config-toggle">
                                <input type="checkbox" checked={mostrarEventos} onChange={() => setMostrarEventos(!mostrarEventos)} />
                                <span className="toggle-visual"></span>
                                Mostrar seus eventos criados no perfil
                            </label>
                        </>
                    )}

                    {pagina === 'Notificações' && (
                        <>
                            <h2>Notificações</h2>
                            <p className="config-subtitulo">Configure como deseja receber suas notificações.</p>

                            <div className="notificacoes-card">

                                <label className="notificacao-item">
                                    <Bell size={17} />
                                    <span>Receber notificações</span>
                                    <input type="checkbox" checked={notificacoes.receber} onChange={() => alterarNotificacao('receber')} />
                                </label>

                                <label className="notificacao-item">
                                    <House size={17} />
                                    <span>Eventos criados</span>
                                    <input type="checkbox" checked={notificacoes.eventos} onChange={() => alterarNotificacao('eventos')} />
                                </label>

                                <label className="notificacao-item">
                                    <Bell size={17} />
                                    <span>Lembretes de eventos</span>
                                    <input type="checkbox" checked={notificacoes.lembretes} onChange={() => alterarNotificacao('lembretes')} />
                                </label>

                            </div>

                            <label className="config-toggle">
                                <input type="checkbox" checked={mostrarEventos} onChange={() => setMostrarEventos(!mostrarEventos)} />
                                <span className="toggle-visual"></span>
                                Mostrar seus eventos criados no perfil
                            </label>
                        </>
                    )}

                    {pagina === 'Sobre' && (
                        <>
                            <h2>Sobre</h2>
                            <p className="config-subtitulo">Conheça mais sobre nossa plataforma.</p>

                            <div className="sobre-card">

                                <div className="campo-config">
                                    <label>Sobre nosso sistema</label>
                                    <select defaultValue="sobre">
                                        <option value="sobre">Sobre a SEA</option>
                                        <option value="projeto">Nosso projeto</option>
                                    </select>
                                </div>

                                <div className="campo-config">
                                    <label>Política de privacidade</label>
                                    <select defaultValue="privacidade">
                                        <option value="privacidade">Política de privacidade</option>
                                        <option value="dados">Uso de dados</option>
                                    </select>
                                </div>

                                <div className="campo-config">
                                    <label>Termos de uso</label>
                                    <select defaultValue="termos">
                                        <option value="termos">Termos de uso</option>
                                        <option value="regras">Regras da plataforma</option>
                                    </select>
                                </div>

                            </div>

                            <label className="config-toggle">
                                <input type="checkbox" checked={mostrarEventos} onChange={() => setMostrarEventos(!mostrarEventos)} />
                                <span className="toggle-visual"></span>
                                Mostrar seus eventos criados no perfil
                            </label>
                        </>
                    )}

                </section>

            </div>

        </main>
    )
}

export default Configuracao
