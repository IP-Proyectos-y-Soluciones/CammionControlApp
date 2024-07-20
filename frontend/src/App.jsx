// import './App.css'
import { Route,Routes,useLocation } from 'react-router-dom'

import FormularioRegistroTanqueo from './components/ControlTanqueoCombustible'

function App() {

  return (
    <>
    <div className='routesContent'>
    
    <Routes>
      <Route path='/tanqueo' element={<FormularioRegistroTanqueo/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
