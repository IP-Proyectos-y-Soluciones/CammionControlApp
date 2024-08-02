
import { Link } from "react-router-dom"
import logo from '../assets/logoWhite.png'

const LandingPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white-900 text-white">
            <img src={logo} alt="imagen" className="w-30 mb-20"/>
            <Link to='/login'>
            <button type="submit" className="px-8 py-3 bg-red-600 text-2xl text-white font-bold rounded-full hover:bg-red-800 transition-colors">
                INICIAR SESIÓN!
            </button>
            </Link>
        </div>
  )
}

export default LandingPage