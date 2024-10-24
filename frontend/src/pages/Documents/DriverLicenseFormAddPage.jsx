import { useState } from 'react';
import { registerDriverLicenseRequest } from '../../../api/documents';
import { Loading } from '../../components/Common/Loading';
import swal2 from 'sweetalert2';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const DriverLicenseFormAddPage = () => {
    const [formData, setFormData] = useState({
        conductor_cedula: '',
        categoria: '',
        clase_de_vehiculo: '',
        servicio: '',
        fecha_expedicion: '',
        fecha_vencimiento: '',
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
        console.log(file);
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
            const response = await registerDriverLicenseRequest(data);
            if (response.status === 201) {
                swal2.fire({
                    title: 'Registro exitoso...!',
                    text: `El registro de tanqueo ha sido exitosa...!!!\n\nDesea agregar un nuevo registro?`,
                    icon: 'success',
                    confirmButtonText: 'Aceptar',
                });
                setFormData({
                    conductor_cedula: '',
                    categoria: '',
                    clase_de_vehiculo: '',
                    servicio: '',
                    fecha_expedicion: '',
                    fecha_vencimiento: '',
                });
                setFile(null); // Limpiar el archivo
                document.querySelector("input[type='file']").value = '';
            }
            setIsLoading(false);
        } catch (error) {
            swal2.fire({
                title: 'Error inesperado...!',
                text: `Ha ocurrido un error inesperado: ${error.message}. Si el error persiste, contacte con el Desarrollador del software...!!!`,
                icon: 'error',
            });
            setIsLoading(false);
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
                Creacion de Licencias
            </h1>
            <form
                onSubmit={handleSubmit}
                className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
            >
                <div className="mb-4">
                    <label htmlFor="cedula" className="block text-gray-700">
                        Numero de Cedula:
                    </label>
                    <input
                        type="number"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        name="conductor_cedula"
                        value={formData.conductor_cedula}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="categoria" className="block text-gray-700">
                        Tipo de categoria:
                    </label>
                    <select
                        name="categoria"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        value={formData.categoria}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Seleccionar tipo</option>
                        <option value="A1">A1</option>
                        <option value="A2">A2</option>
                        <option value="B1">B1</option>
                        <option value="B2">B2</option>
                        <option value="B3">B3</option>
                        <option value="C1">C1</option>
                        <option value="C2">C2</option>
                        <option value="C3">C3</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="Clase" className="block text-gray-700">
                        Clase de Vehiculo:
                    </label>
                    <select
                        name="clase_de_vehiculo"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        value={formData.clase_de_vehiculo}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Seleccionar tipo</option>
                        <option value="A1">
                            Motocicletas hasta de 125 c.c. de cilindrada.
                        </option>
                        <option value="A2">
                            Motocicletas, motociclos y mototriciclos de más de
                            125 c.c. de cilindrada.
                        </option>
                        <option value="B1">
                            Automóviles, camperos, camionetas y microbuses de
                            servicio particular.
                        </option>
                        <option value="B2">
                            Camiones, rígidos, busetas y buses para el servicio
                            particular.
                        </option>
                        <option value="B3">
                            Vehículos articulados de servicio particular
                        </option>
                        <option value="C1">
                            Automóviles, camperos, camionetas y microbuses de
                            servicio público.
                        </option>
                        <option value="C2">
                            Camiones, rígidos, busetas y buses para el servicio
                            público.
                        </option>
                        <option value="C3">
                            Vehículos articulados para el servicio público
                        </option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="servicio" className="block text-gray-700">
                        Tipo de servicio:
                    </label>
                    <select
                        name="servicio"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        value={formData.servicio}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Seleccionar tipo</option>
                        <option value="Publico">Publico</option>
                        <option value="Particular">Particular</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="fecha_expedicion"
                        className="block text-gray-700"
                    >
                        Fecha de Expedicion:
                    </label>
                    <input
                        type="date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        name="fecha_expedicion"
                        value={formData.fecha_expedicion}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="fecha_vencimiento"
                        className="block text-gray-700"
                    >
                        Fecha de Vencimiento:
                    </label>
                    <input
                        type="date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        name="fecha_vencimiento"
                        placeholder="Escriba fecha de vencimiento..."
                        value={formData.fecha_vencimiento}
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

export default DriverLicenseFormAddPage;
