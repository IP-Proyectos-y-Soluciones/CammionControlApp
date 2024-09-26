import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createNewVolquetaForm } from '../../../api/volquetas';
import swal2 from 'sweetalert2';
import { Loading } from '../../components/Common/Loading';
import { useForm } from 'react-hook-form';

const FormularioRegistroVolquetas = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);

            data.hora_inicio = new Date(data.hora_inicio);
            data.hora_final = new Date(data.hora_final);

            if (data.observacion === undefined) {
                data.observacion = 'S/O';
            }

            console.log('Enviando datos a la API:', data); // Muestra los datos a enviar

            const response = await createNewVolquetaForm(data);

            if (response.status === 201) {
                swal2.fire({
                    title: 'Registro exitoso...!',
                    text: `La planilla Nº ${data.n_planilla} ha sido registrada exitosamente...!!!`,
                    icon: 'success',
                    confirmButtonText: 'Aceptar',
                });
                reset();
                setIsLoading(false);
            }
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
                Control de Transporte de Materiales Volquetas Diario
            </h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
            >
                <div className="mb-4">
                    <label htmlFor="placa" className="block text-gray-700">
                        Placas del Vehículo:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        type="text"
                        placeholder="Escriba la placa..."
                        {...register('placa_vehiculo', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.placa_vehiculo && (
                        <p className="text-red-700">
                            {errors.placa_vehiculo.message}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="conductor" className="block text-gray-700">
                        Cedula del Conductor:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        type="number"
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
                        Fecha:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        type="date"
                        {...register('fecha', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.fecha && (
                        <p className="text-red-700">{errors.fecha.message}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="horaIngreso"
                        className="block text-gray-700"
                    >
                        Hora de Ingreso:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        type="datetime-local"
                        placeholder="Coloque hora de inicio..."
                        {...register('hora_inicio', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.hora_inicio && (
                        <p className="text-red-700">
                            {errors.hora_inicio.message}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="horaSalida" className="block text-gray-700">
                        Hora de Salida:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        type="datetime-local"
                        placeholder="Coloque hora de fin..."
                        {...register('hora_final', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="numeroViajes"
                        className="block text-gray-700"
                    >
                        Número de Viajes por Día:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        type="number"
                        placeholder="Escriba la cantidad de viajes..."
                        {...register('n_viajes', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.n_viajes && (
                        <p className="text-red-700">
                            {errors.n_viajes.message}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="kilometrajeInicial"
                        className="block text-gray-700"
                    >
                        Kilometraje Inicial Vehículo:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        type="number"
                        placeholder="Coloque klm de inicial..."
                        {...register('km_inicial', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.km_inicial && (
                        <p className="text-red-700">
                            {errors.km_inicial.message}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="kilometrajeFinal"
                        className="block text-gray-700"
                    >
                        Kilometraje Final Vehículo:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        type="number"
                        placeholder="Coloque klm de final..."
                        {...register('km_final', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.km_final && (
                        <p className="text-red-700">
                            {errors.km_final.message}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="honorarios" className="block text-gray-700">
                        Honorarios:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        type="number"
                        placeholder="Indique la cantidad..."
                        {...register('honorarios', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.km_final && (
                        <p className="text-red-700">
                            {errors.honorarios.message}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="cliente" className="block text-gray-700">
                        Cliente:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        type="text"
                        placeholder="Escriba nombre del cliente..."
                        {...register('cliente', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.cliente && (
                        <p className="text-red-700">{errors.cliente.message}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="lugar_de_cargue"
                        className="block text-gray-700"
                    >
                        Lugar de Cargue:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        type="text"
                        placeholder="Escriba lugar de carga..."
                        {...register('lugar_de_cargue', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.lugar_de_cargue && (
                        <p className="text-red-700">
                            {errors.lugar_de_cargue.message}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="lugar_de_descargue"
                        className="block text-gray-700"
                    >
                        Lugar de Descargue:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        type="text"
                        placeholder="Escriba lugar descarga..."
                        {...register('lugar_de_descargue', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.lugar_de_descargue && (
                        <p className="text-red-700">
                            {errors.lugar_de_descargue.message}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="material" className="block text-gray-700">
                        Material o Actividad:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        type="text"
                        placeholder="Escriba el tipo de material..."
                        {...register('material', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.material && (
                        <p className="text-red-700">
                            {errors.material.message}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="volmts3" className="block text-gray-700">
                        Cantidad Metros Cúbicos:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        type="text"
                        placeholder="Escriba el volumen de carga..."
                        {...register('volmts3', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.volmts3 && (
                        <p className="text-red-700">{errors.volmts3.message}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="observacion"
                        className="block text-gray-700"
                    >
                        Observaciones:
                    </label>
                    <textarea
                        rows="3"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Escriba sus observaciones..."
                        {...register('observacion', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.observacion && (
                        <p className="text-red-700">
                            {errors.observacion.message}
                        </p>
                    )}
                </div>
                <div className="flex mt-8 space-x-8 justify-center">
                    <button
                        type="button" // tipo "button" para evitar que se dispare el submit
                        className="flex items-center justify-between bg-gray-600 text-white px-10 py-3 rounded-full shadow-lg mt-8 hover:bg-red-600 transition-colors"
                        style={{ width: 'auto', minWidth: '120px' }}
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
export default FormularioRegistroVolquetas;
