import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div
            className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: `url(https://yadira-mayacweb.web.app/assets/images/mulaContainer.jpeg)`,
            }}
        >
            <Link to="/login">
                <button
                    type="submit"
                    className="bg-gray-600 bg-opacity-60 text-gray-100 border-gray-600 font-bold rounded-full px-8 py-3 text-2xl hover:text-yellow-500 transition duration-300 button-fixed"
                >
                    Ingresar
                </button>
            </Link>
        </div>
    );
};

export default LandingPage;
