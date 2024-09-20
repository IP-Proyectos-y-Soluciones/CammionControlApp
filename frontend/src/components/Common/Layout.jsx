
import PropTypes from 'prop-types';
import Header from '././Header'
import Footer from '././Footer'

const Layout = ({children}) => {
  return (
    <div className='flex flex-col min-h-screen  bg-gray-100 '>
        <Header />
        <main className='flex-1'>{children}</main> {/* Ajusta el padding para diferentes tamaños de pantalla */}
        <Footer />
    </div>
  )
}

// Define las propTypes para el componente
Layout.propTypes = {
    children: PropTypes.node.isRequired, // Valida que children sea un nodo React y es requerido
  };

export default Layout