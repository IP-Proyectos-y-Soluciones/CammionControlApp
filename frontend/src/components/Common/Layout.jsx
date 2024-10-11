import PropTypes from 'prop-types';
//import Header from '././Header'
import Footer from '././Footer';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const [showFooter, setShowFooter] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleTouch = () => {
            setShowFooter(true);
        };

        const handleScrool = () => {
            setShowFooter(false);
        };

        //agrego listeners para detectar toque o scroll
        document.addEventListener('touchstart', handleTouch);
        document.addEventListener('scroll', handleScrool);

        //limpio listeners cuando el componente se desmonta
        return () => {
            document.removeEventListener('touchstart', handleTouch);
            document.removeEventListener('scroll', handleScrool);
        };
    }, []);

    const applyPaddingTop =
        location.pathname !== '/' && location.pathname !== '/login';

    return (
        <div
            className={`flex flex-col min-h-screen ${applyPaddingTop ? 'pt-40' : ''}`}
        >
            {/* <Header /> */}
            <main className="flex-1">{children}</main>
            {/* Ajusta el padding para diferentes tamaños de pantalla */}
            {showFooter && <Footer />}
        </div>
    );
};

// Define las propTypes para el componente
Layout.propTypes = {
    children: PropTypes.node.isRequired, // Valida que children sea un nodo React y es requerido
};

export default Layout;
