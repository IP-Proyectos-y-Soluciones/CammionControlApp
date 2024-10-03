import { useState } from 'react';
import { createNewRefuelingForm } from '../../../api/refueling';
import { Loading } from '../../components/Common/Loading';
import swal2 from 'sweetalert2';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const FormularioTanqueo = () => {
    const [formData, setFormData] = useState({
        fecha_tanqueo: '',
        n_recibo: '',
        estacion: '',
        cantidad_galones: '',
        valor_tanqueo: '',
        placas: '',
        cedula: '',
    });
    const [file, setFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!file) {
            swal2.fire({
                title: 'Error',
                text: 'Debe subir un archivo de recibo',
                icon: 'error',
            });
            setIsLoading(false);
            return;
        }

        const data = new FormData();
        data.append('file', file);
        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key]);
        });

        try {
            const response = await createNewRefuelingForm(data);
            if (response.status === 201) {
                swal2.fire({
                    title: 'Registro exitoso...!',
                    text: `El registro de tanqueo ha sido exitosa...!!!\n\nDesea agregar un nuevo registro?`,
                    icon: 'success',
                    confirmButtonText: 'Aceptar',
                });
                setFormData({
                    fecha_tanqueo: '',
                    n_recibo: '',
                    estacion: '',
                    cantidad_galones: '',
                    valor_tanqueo: '',
                    placas: '',
                    cedula: '',
                });
                setFile(null); // Limpiar el archivo
            }
            setIsLoading(false);
        } catch (error) {
            swal2.fire({
                title: 'Error inesperado...!',
                text: `Ha ocurrido un error inesperado: ${error.message}. Si el error persiste, contacte con el Desarrollador del software...!!!`,
                icon: 'error',
            });
            setIsLoading(false);
            document.querySelector("input[type='file']").value = '';
        }
    };

    const onCancel = () => {
        navigate('/general_access');
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            {isLoading && (
                <div>
                    <Loading />
                </div>
            )}{' '}
            <h1 className="text-3xl text-gray-600 font-bold text-center mb-6">
                Control Tanqueo de Combustible
            </h1>
            <form
                onSubmit={handleSubmit}
                className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
            >
                <div className="mb-4">
                    <label htmlFor="fecha" className="block text-gray-700">
                        Fecha de Tanqueo:
                    </label>
                    <input
                        type="date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        name="fecha_tanqueo"
                        value={formData.fecha_tanqueo}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="noRecibo" className="block text-gray-700">
                        Número de Recibo:
                    </label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        placeholder="Escriba el nro del recibo..."
                        name="n_recibo"
                        value={formData.n_recibo}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="nombreEstacion"
                        className="block text-gray-700"
                    >
                        Estación:
                    </label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        name="estacion"
                        placeholder="Escriba nombre Estación..."
                        value={formData.estacion}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="cantidadGalones"
                        className="block text-gray-700"
                    >
                        Cantidad de Galones:
                    </label>
                    <input
                        type="number"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        name="cantidad_galones"
                        placeholder="Escriba la cantidad..."
                        value={formData.cantidad_galones}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="valor" className="block text-gray-700">
                        Valor del Tanqueo:
                    </label>
                    <input
                        type="number"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        name="valor_tanqueo"
                        placeholder="Escriba costo..."
                        value={formData.valor_tanqueo}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="placas" className="block text-gray-700">
                        Placas del Vehiculo:
                    </label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        name="placas"
                        placeholder="Escriba la placa..."
                        value={formData.placas}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="cedula" className="block text-gray-700">
                        Cédula del Conductor:
                    </label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        name="cedula"
                        placeholder="Escriba el nro de cédula..."
                        value={formData.cedula}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">
                        Subir Imagen de Recibo:
                    </label>
                    <input
                        type="file"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        name="file"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <div className="flex mt-8 space-x-8 justify-center">
                    <button
                        className="flex items-center justify-between bg-gray-600 text-white px-10 py-3 rounded-full shadow-lg mt-8 hover:bg-red-600 transition-colors"
                        style={{ width: 'auto', minWidth: '150px' }}
                        onClick={onCancel}
                    >
                        <FontAwesomeIcon
                            icon={faAngleLeft}
                            className="text-2xl mr-2"
                        />
                        <span className="flex-grow text-left">Regresar</span>
                    </button>
                    <button
                        type="submit"
                        className="flex items-center justify-between bg-gray-600 text-white px-10 py-3 rounded-full shadow-lg mt-8 hover:bg-red-600 transition-colors"
                        style={{ width: 'auto', minWidth: '120px' }}
                    >
                        <span className="flex-grow text-left">Enviar</span>
                        <FontAwesomeIcon
                            icon={faAngleRight}
                            className="text-2xl ml-3"
                        />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormularioTanqueo;
