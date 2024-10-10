/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { Button, Input, Label } from '../../components/UI';
import { useForm } from 'react-hook-form';
import { createNewRefuelingForm } from '../../../api/refueling';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Loading } from '../../components/Common/Loading';
import swal2 from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../context/AuthContext';

export function RefuelingFormPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
    } = useForm();
    const {dni, vehicleRegistrationPlate} = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);

            const _data = {
                ...data,
                cedula: dni,
                placas: vehicleRegistrationPlate,
            };

            const response = await createNewRefuelingForm(_data);

            if (response.status === 201) {
                setIsLoading(false)
                swal2.fire({
                    title: 'Registro exitoso...!',
                    text: `La nueva planilla de tanqueo Nº ${data.n_recibo} ha sido registrada exitosamente...!!!\n\nDesea agregar un nuevo empleado?`,
                    icon: 'success',
                    confirmButtonText: 'Aceptar',
                });
            }

            reset();
            setIsLoading(false);
        } catch (error) {
            console.log(error);
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
        <div className="bg-otherpages min-h-screen">
            {isLoading && (
                <div>
                    <Loading />
                </div>
            )}{' '}
            {/* Se renderiza si es true... */}
            <div className="flex h-[calc(100vh-100px)] items-center justify-center">
                <div className="bg-zinc-100 border-2 border-gray-600 max-w-md w-full p-0 rounded-md">
                    <div className="bg-gray-600 flex justify-center items-center">
                        <h2 className="text-2xl font-bold italic mb-2 text-gray-100">
                            Nueva Planilla de Tanqueos
                        </h2>
                    </div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="pt-5 pl-6 pr-6 pb-4"
                    >
                        {/* Cédula --- Fecha */}
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <Label htmlFor="cedula" className="block text-gray-600 text-sm font-semibold mb-2">
                                    Cédula del Conductor
                                </Label>
                                <p className='border border-gray-300 bg-gray-200 rounded-md p-1.5 mt-1'>
                                    { dni || 'Cargando...'}
                                </p>
                            </div>

                            <div>
                                <Label htmlFor="fecha_tanqueo" className="block text-gray-600 text-sm font-semibold mb-2">Fecha</Label>
                                <Input
                                    type="date"
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
                        </div>

                        {/* Nro Recibo --- Estación */}
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <Label htmlFor="n_recibo" className="block text-gray-600 text-sm font-semibold mb-2">Nº Recibo</Label>
                                <Input
                                    type="text"
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

                            <div>
                                <Label htmlFor="estacion" className="block text-gray-600 text-sm font-semibold mb-2">Estación</Label>
                                <Input
                                    type="text"
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
                        </div>

                        {/* Cantidad galones --- Valor Tanqueo */}
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <Label htmlFor="cantidad_galones" className="block text-gray-600 text-sm font-semibold mb-2">
                                    Cantidad galones
                                </Label>
                                <Input
                                    type="text"
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

                            <div>
                                <Label htmlFor="valor_tanqueo" className="block text-gray-600 text-sm font-semibold mb-2">
                                    Costo Tanqueo
                                </Label>
                                <Input
                                    type="number"
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
                        </div>

                        {/* Placas */}
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <Label htmlFor="placas" className="block text-gray-600 text-sm font-semibold mb-2">Placas</Label>
                               <p className='border border-gray-300 bg-gray-200 rounded-md p-1.5 mt-1.5 mb-3'>
                                {vehicleRegistrationPlate || 'Cargando... '}
                               </p>
                            </div>
                        </div>

                        <div className="flex justify-between mt-3">
                            <div>
                                <Button
                                    type="button"
                                    onClick={onCancel}
                                    className="rounded-md"
                                >
                                    <FontAwesomeIcon
                                    icon={faAngleLeft}
                                    className='absolute left-3 text-lg'
                                    />
                                    <span>Cancelar</span>
                                </Button>
                            </div>
                            <div>
                                <Button
                                    type="submit"
                                    className="rounded-md"
                                >
                                    <span>Aceptar</span>
                                    <FontAwesomeIcon
                                    icon={faAngleRight}
                                    className='absolute right-3 text-lg'
                                    />
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
