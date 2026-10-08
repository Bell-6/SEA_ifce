import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Escolha from './Pages/Geral/Escolha/Escolha'
import LogDoc from './Pages/Geral/LoginDocente/LogDoc'
import CadDoc1 from './Pages/Geral/CadDoc1/CadDoc1'
import CadDoc2 from './Pages/Geral/CadDoc2/CadDoc2'
import CadDoc3 from './Pages/Geral/CadDoc3/CadDoc3'
import CadDoc4 from './Pages/Geral/CadDoc4/CadDoc4'
import CadDoc5 from './Pages/Geral/CadDoc5/CadDoc5'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/Layout' element={<Layout />}></Route>
                <Route path='/' element={<Escolha />} />
                <Route path='/docente' element={<LogDoc />} />
                <Route path='/logindocente' element={<LogDoc />}></Route>
                <Route path='/CadDoc1' element={<CadDoc1 />}></Route>
                <Route path='/CadDoc2' element={<CadDoc2 />}></Route>
                <Route path='/CadDoc3' element={<CadDoc3 />}></Route>
                <Route path='/CadDoc4' element={<CadDoc4 />}></Route>
                <Route path='/CadDoc5' element={<CadDoc5 />}></Route>
                <Route path='*' element={<h1>Not found</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router