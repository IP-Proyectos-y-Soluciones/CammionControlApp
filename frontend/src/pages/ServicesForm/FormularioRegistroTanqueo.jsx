import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
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
    const [fileName, setFileName] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFileName(file ? file.name : '');
    };

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);

            const response = await createNewRefuelingForm(data);

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
                            id="recibo"
                            name="recibo"
                            accept="image/*"
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

export default FormularioRegistroTanqueo;
