import './Layout.css'
import icon from '../../assets/1 1.png'
import {Search, Bell, User, Menu, House, Plus, CircleQuestionMark, Settings} from 'lucide-react'


export default function Layout({Children }: {Children: React.ReactNode }) {
    return (
        <>
            <div className='layout'>
                <aside>
                    <Menu />
                    <House />
                    <Plus />

                    <div></div>

                    <CircleQuestionMark />
                    <Settings />
                </aside>

                <div className='divlayout'>
                    <header>
                        <div className='headerl'>
                            <img src={icon} className='icon'></img>
                            <nav>
                                <h3>Palestras</h3>
                                <h3>Oficinas</h3>
                                <h3>Mais▼</h3>
                            </nav>
                        </div>

                            <div className='headerr'>
                                <Search size={35} />
                                <Bell size={35}/>
                                <div>
                                    <User size={35} color="#83C890" />
                                </div>
                            </div>

        
                    </header>

                    <main>
                        {Children}
                    </main>

                </div>
            </div>


        </>
    )
}