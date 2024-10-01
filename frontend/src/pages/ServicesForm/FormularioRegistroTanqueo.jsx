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

/*import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { createNewRefuelingForm } from '../../../api/refueling';
import { Loading } from '../../components/Common/Loading';
import swal2 from 'sweetalert2';

const FormularioRegistroTanqueo = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [fileName, setFileName] = useState(null);

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFileName(e.target.files[0]);
        } else {
            console.log('El archivo no pudo ser capturado');
        }
    };

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);
            console.log('variable data:', data);
            const formData = new FormData();

            formData.append('vehiculo_placa', data.vehiculo_placa);
            formData.append('cedula', data.cedula);
            formData.append('fecha_tanqueo', data.fecha_tanqueo);
            formData.append('n_recibo', data.n_recibo);
            formData.append('estacion', data.estacion);
            formData.append('cantidad_galones', data.cantidad_galones);
            formData.append('valor_tanqueo', data.valor_tanqueo);

            if (fileName) {
                formData.append('file', fileName);
            } else {
                swal2.fire({
                    title: 'Error',
                    text: 'Debe subir un archivo de recibo',
                    icon: 'error',
                });
                setIsLoading(false);
                return;
            }

            for (let [key, value] of formData.entries()) {
                console.log('aqui formData:', key, value);
            }
            console.log(formData);
            const response = await createNewRefuelingForm(formData);

            if (response.status === 201) {
                setIsLoading(false);
                swal2.fire({
                    title: 'Registro exitoso...!',
                    text: `El registro de tanqueo ha sido exitosa...!!!\n\nDesea agregar un nuevo registro?`,
                    icon: 'success',
                    confirmButtonText: 'Aceptar',
                });
            }

            reset();
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
        reset();
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
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
            >
                <div className="mb-4">
                    <label htmlFor="placa" className="block text-gray-700">
                        Placa de Vehículo:
                    </label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        placeholder="Escriba la placa..."
                        {...register('vehiculo_placa', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.vehiculo_placa && (
                        <p className="text-red-700">
                            {errors.vehiculo_placa.message}
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="conductor" className="block text-gray-700">
                        Cedula del Conductor:
                    </label>
                    <input
                        type="number"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        placeholder="Escriba el nro de cédula..."
                        {...register('cedula', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.cedula && (
                        <p className="text-red-700">{errors.cedula.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="fecha" className="block text-gray-700">
                        Fecha De Tanqueo:
                    </label>
                    <input
                        type="date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        {...register('fecha_tanqueo', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.fecha_tanqueo && (
                        <p className="text-red-700">
                            {errors.fecha_tanqueo.message}
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="noRecibo" className="block text-gray-700">
                        Número de Recibo:
                    </label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        placeholder="Escriba el nro del recibo..."
                        {...register('n_recibo', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.n_recibo && (
                        <p className="text-red-700">
                            {errors.n_recibo.message}
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="nombreEstacion"
                        className="block text-gray-700"
                    >
                        Nombre de Estación:
                    </label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        placeholder="Escriba nombre Estación..."
                        {...register('estacion', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.estacion && (
                        <p className="text-red-700">
                            {errors.estacion.message}
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="kilometraje"
                        className="block text-gray-700"
                    >
                        Cantidad galones:
                    </label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        placeholder="Escriba la cantidad..."
                        {...register('cantidad_galones', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.cantidad_galones && (
                        <p className="text-red-700">
                            {errors.cantidad_galones.message}
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="valor" className="block text-gray-700">
                        Valor tanqueo:
                    </label>
                    <input
                        type="number"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        placeholder="Escriba costo..."
                        {...register('valor_tanqueo', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.valor_tanqueo && (
                        <p className="text-red-700">
                            {errors.valor_tanqueo.message}
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="recibo" className="block text-gray-700">
                        Subir Recibo:
                    </label>
                    <div className="flex items-center">
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="w-96 px-4 py-3 border border-gray-300 rounded-md text-black"
                            required
                        />
                        <span className="ml-4 text-gray-700">
                            {fileName || 'No hay archivo seleccionado'}
                        </span>
                    </div>
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
                        <span className="flex-grow text-left">
                            Vista Previa
                        </span>
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

export default FormularioRegistroTanqueo;*/
