import './criacao.css'
import { useState } from 'react'
import { Camera, MapPin, Users, Plus, Trash2, ChevronDown } from 'lucide-react'

type SubEvento = {
    id: number
}

function Criacao() {
    const [subeventos, setSubeventos] = useState<SubEvento[]>([])

    function adicionarSubevento() {
        setSubeventos([...subeventos, { id: Date.now() }])
    }

    function removerSubevento(id: number) {
        setSubeventos(subeventos.filter((evento) => evento.id !== id))
    }

    return (
        <main className="criacao-page">
            <div className="criacao-container">
                <form className="form-criacao" onSubmit={(e) => e.preventDefault()}>

                    <h2>Geral</h2>

                    <div className="geral-container">
                        <label className="upload-imagem">
                            <Camera size={22} />
                            <span>ADICIONAR IMAGEM</span>
                            <input type="file" accept="image/*" />
                        </label>

                        <div className="campos-gerais">
                            <div className="campo">
                                <label>Título *</label>
                                <input type="text" placeholder="Título do evento" required />
                            </div>

                            <div className="campo">
                                <label>Descrição</label>
                                <textarea placeholder="Conte mais sobre seu evento..." />
                            </div>
                        </div>
                    </div>

                    <h2>Hora, data e Local</h2>

                    <div className="campo campo-local">
                        <label>Local *</label>
                        <div className="input-icone">
                            <MapPin size={16} />
                            <input type="text" placeholder="Digite o local onde ocorrerá o evento..." required />
                        </div>
                    </div>

                    <div className="linha-data">
                        <div className="campo">
                            <label>Data inicial *</label>
                            <input type="date" required />
                        </div>

                        <div className="campo">
                            <label>Data final</label>
                            <input type="date" />
                        </div>

                        <div className="campo">
                            <label>Horário inicial *</label>
                            <input type="time" required />
                        </div>

                        <div className="campo">
                            <label>Horário final</label>
                            <input type="time" />
                        </div>
                    </div>

                    <h2>Detalhes adicionais</h2>

                    <div className="campo vagas-campo">
                        <label>Vagas *</label>
                        <div className="input-icone">
                            <Users size={16} />
                            <input type="number" min="1" placeholder="Digite a quantidade máxima de vagas..." required />
                        </div>
                    </div>

                    <div className="opcoes">
                        <label><input type="checkbox" /> Permitir que pessoas de fora participem do evento</label>
                        <label><input type="checkbox" /> Gerar certificado</label>
                    </div>

                    <div className="campo tipo-campo">
                        <label>Tipo de evento</label>
                        <div className="select-container">
                            <select defaultValue="">
                                <option value="" disabled>Tipo do evento</option>
                                <option value="palestra">Palestra</option>
                                <option value="roda">Roda de conversa</option>
                                <option value="curso">Curso</option>
                                <option value="oficina">Oficina</option>
                                <option value="outros">Outros</option>
                            </select>
                            <ChevronDown size={16} />
                        </div>
                    </div>

                    <h2>Ações adicionais</h2>

                    <div className="campo">
                        <div className="select-container">
                            <select defaultValue="">
                                <option value="" disabled>Adicionar ação</option>
                                <option value="inscricao">Inscrição</option>
                                <option value="questionario">Questionário</option>
                                <option value="avaliacao">Avaliação</option>
                            </select>
                            <Plus size={16} />
                        </div>
                    </div>

                    {subeventos.map((evento) => (
                        <div className="subevento-card" key={evento.id}>
                            <div className="subevento-titulo">
                                <h3>Subevento</h3>
                                <button type="button" className="remover-subevento" onClick={() => removerSubevento(evento.id)}>
                                    <Trash2 size={16} />
                                </button>
                            </div>

                            <div className="subevento-geral">
                                <div className="subevento-campos">
                                    <div className="campo">
                                        <label>Título *</label>
                                        <input type="text" placeholder="Título do evento" required />
                                    </div>
                                    <div className="campo">
                                        <label>Descrição</label>
                                        <textarea placeholder="Conte mais sobre seu evento..." />
                                    </div>
                                </div>

                                <label className="upload-imagem subevento-upload">
                                    <Camera size={20} />
                                    <span>ADICIONAR IMAGEM</span>
                                    <input type="file" accept="image/*" />
                                </label>
                            </div>

                            <h4>Hora, data e Local</h4>

                            <div className="campo campo-local">
                                <label>Local *</label>
                                <div className="input-icone">
                                    <MapPin size={16} />
                                    <input type="text" placeholder="Digite o local onde ocorrerá..." required />
                                </div>
                            </div>

                            <div className="linha-data">
                                <div className="campo">
                                    <label>Data inicial *</label>
                                    <input type="date" required />
                                </div>

                                <div className="campo">
                                    <label>Data final</label>
                                    <input type="date" />
                                </div>

                                <div className="campo">
                                    <label>Horário inicial</label>
                                    <input type="time" />
                                </div>

                                <div className="campo">
                                    <label>Horário final</label>
                                    <input type="time" />
                                </div>
                            </div>

                            <h4>Detalhes adicionais</h4>

                            <div className="campo vagas-campo">
                                <label>Vagas *</label>
                                <div className="input-icone">
                                    <Users size={16} />
                                    <input type="number" min="1" placeholder="Digite a quantidade máxima de vagas..." required />
                                </div>
                            </div>

                            <div className="opcoes">
                                <label><input type="checkbox" /> Permitir que os participantes avaliem</label>
                                <label><input type="checkbox" /> Gerar certificado</label>
                            </div>

                            <div className="campo tipo-campo">
                                <div className="select-container">
                                    <select defaultValue="">
                                        <option value="" disabled>Tipo de evento</option>
                                        <option value="palestra">Palestra</option>
                                        <option value="curso">Curso</option>
                                        <option value="oficina">Oficina</option>
                                    </select>
                                    <ChevronDown size={16} />
                                </div>
                            </div>

                            <button type="button" className="salvar-subevento">Salvar subevento</button>
                        </div>
                    ))}

                    <button type="button" className="adicionar-subevento" onClick={adicionarSubevento}>
                        <Plus size={16} /> Adicionar subevento
                    </button>

                    <div className="publicar-container">
                        <button type="submit" className="publicar-evento">Publicar evento</button>
                    </div>

                </form>
            </div>
        </main>
    )
}

export default Criacao
