import { Route,Routes} from 'react-router-dom'
import FormularioRegistroTanqueo from './components/FormularioRegistroTanqueo'


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
