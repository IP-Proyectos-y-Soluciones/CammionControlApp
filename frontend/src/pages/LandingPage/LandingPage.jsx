
//import { Link } from "react-router-dom"
//import logo from '../../assets/yadiraLogoColor2.png'

import { Link } from "react-router-dom"

const LandingPage = () => {
    return (
        <div className="relative min-h-screen bg-cover bg-center flex items-center justify-center" style={{backgroundImage: `url(https://yadira-mayacweb.web.app/assets/images/mulaContainer.jpeg)`}}>
          <Link to='/login'>
          <button type="submit" className="bg-gray-600 bg-opacity-60 text-gray-100 border-gray-600 font-bold rounded-full px-8 py-3 text-lg hover:text-yellow-500 transition duration-300">
            Ingresar
          </button>
          </Link>
        </div>
        
        // <div className="min-h-screen flex flex-col items-center justify-center bg-white-900 text-white">
        //     <img src={logo} alt="imagen" className="w-30 mb-20"/>
        //     <Link to='/login'>
        //     <button type="submit" className="px-8 py-3 bg-gray-600 text-2xl  font-bold rounded-full hover:bg-red-600 hover: text-white transition-colors">
        //         INICIAR SESIÓN!
        //     </button>
        //     </Link>
        // </div>
  )
}

export default LandingPage  