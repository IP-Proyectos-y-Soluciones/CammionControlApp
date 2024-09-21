import { Link } from 'react-router-dom';
import logo from '../../assets/yadiraLogoColor2.png';

const LandingPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white-900 text-white">
            <img src={logo} alt="imagen" className="w-30 mb-20" />
            <Link to="/login">
                <button
                    type="submit"
                    className="px-8 py-3 bg-gray-600 text-2xl  font-bold rounded-full hover:bg-red-600 hover: text-white transition-colors"
                >
                    INICIAR SESIÓN!
                </button>
            </Link>
        </div>
    );
};

export default LandingPage;
