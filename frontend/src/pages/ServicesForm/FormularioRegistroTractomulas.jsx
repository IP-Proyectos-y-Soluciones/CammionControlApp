import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal2 from 'sweetalert2';
import { Loading } from '../../components/Common/Loading';
import { useForm } from 'react-hook-form';
import { createNewHeavyloadaForm } from '../../../api/cargaPesada';

const FormularioRegistroTractomulas = () => {
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

            if (data.observacion === undefined) {
                data.observacion = 'S/O';
            }

            console.log('Enviando datos a la API:', data); // Muestra los datos a enviar

            const response = await createNewHeavyloadaForm(data);
            if (response === 200) {
                swal2.fire({
                    title: 'Registro exitoso...!',
                    text: `La planilla ha sido registrada exitosamente...!!!`,
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
        } finally {
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
                Control de Carga Pesada por Flete
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
                        {...register('conductor_cedula', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.conductor_cedula && (
                        <p className="text-red-700">
                            {errors.conductor_cedula.message}
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="inicio" className="block text-gray-700">
                        Fecha de Inicio:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        type="date"
                        {...register('fecha_inicio', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.fecha_inicio && (
                        <p className="text-red-700">{errors.fecha_inicio}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="final" className="block text-gray-700">
                        Fecha de Final:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        type="date"
                        {...register('fecha_final', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.fecha_final && (
                        <p className="text-red-700">{errors.fecha_final}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="empresa" className="block text-gray-700">
                        Empresa / Persona Contratante :
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        type="text"
                        {...register('empresa', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.empresa && (
                        <p className="text-red-700">{errors.empresa.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="origen" className="block text-gray-700">
                        Origen:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        type="text"
                        {...register('ciudad_inicio', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.ciudad_inicio && (
                        <p className="text-red-700">
                            {errors.ciudad_inicio.message}
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="destino" className="block text-gray-700">
                        Destino:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        type="text"
                        {...register('ciudad_destino', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.ciudad_destino && (
                        <p className="text-red-700">
                            {errors.ciudad_destino.message}
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="valorFlete" className="block text-gray-700">
                        Valor Flete:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        type="number"
                        {...register('valor_flete', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.valor_flete && (
                        <p className="text-red-700">
                            {errors.valor_flete.message}
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="anticipoFlete"
                        className="block text-gray-700"
                    >
                        Anticipo Empresa:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        type="number"
                        {...register('anticipo_empresa', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.anticipo_empresa && (
                        <p className="text-red-700">
                            {errors.anticipo_empresa.message}
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="anticipoFlete"
                        className="block text-gray-700"
                    >
                        Anticipo Cliente:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        type="number"
                        {...register('anticipo_cliente', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.anticipo_cliente && (
                        <p className="text-red-700">
                            {errors.anticipo_cliente.message}
                        </p>
                    )}
                </div>

                <h2 className="text-xl font-bold mb-4">Gastos de Viaje</h2>

                <div className="mb-4">
                    <label htmlFor="acpm" className="block text-gray-700">
                        A.C.P.M{' '}
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        type="number"
                        {...register('acpm', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.acpm && (
                        <p className="text-red-700">{errors.acpm.message}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="acpm" className="block text-gray-700">
                        Peaje
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        type="number"
                        {...register('peaje', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.peaje && (
                        <p className="text-red-700">{errors.peaje.message}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="acpm" className="block text-gray-700">
                        Mantenimiento
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        type="number"
                        {...register('mantenimiento', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.mantenimiento && (
                        <p className="text-red-700">
                            {errors.mantenimiento.message}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="acpm" className="block text-gray-700">
                        Mecanico
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        type="number"
                        {...register('mecanico', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.mecanico && (
                        <p className="text-red-700">
                            {errors.mecanico.message}
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="acpm" className="block text-gray-700">
                        Otros
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        type="number"
                        {...register('otros', {
                            required: 'Este campo es obligatorio',
                        })}
                    />
                    {errors.otros && (
                        <p className="text-red-700">{errors.otros.message}</p>
                    )}
                </div>

                <div className="flex mt-8 space-x-8 justify-center">
                    <button
                        type="button"
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

export default FormularioRegistroTractomulas;
