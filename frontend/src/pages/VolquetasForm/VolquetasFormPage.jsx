/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { Button, Input, Label } from '../../components/UI';
import { useForm } from 'react-hook-form';
import { createNewVolquetaForm } from '../../../api/volquetas';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loading } from '../../components/Common/Loading';
import swal2 from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../context/AuthContext';

export function VolquetasFormPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
    } = useForm();
    const {dni, vehicleRegistrationPlate} = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [totalKm, setTotalKm] = useState(0);

    const kmInicial = watch('km_inicial');
    const kmFinal = watch('km_final');

    useEffect(()=>{
        if(kmInicial && kmFinal){
            setTotalKm(Math.abs(kmFinal - kmInicial));
        }else{
            setTotalKm(0);
        }
    }, [kmInicial, kmFinal])

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);

            const _data= {
                ...data,
                cedula: dni,
                placa_vehiculo: vehicleRegistrationPlate,
                total_km: totalKm,
            }

            data.hora_inicio = new Date(data.hora_inicio);
            data.hora_final = new Date(data.hora_final);

            if (data.observacion === undefined) {
                data.observacion = 'S/O';
            }

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
            setIsLoading(false)
        }
    };

    const onCancel = () =>{
        reset();
        navigate(-1);
        // navigate('/general_access');
    }

    return (
        <div className="bg-otherpages min-h-screen overflow-auto">
            {isLoading && (
                <div>
                    <Loading />
                </div>
            )}{' '}
            {/* Se renderiza si es true... */}
            <div className="customDiv-1 sm:mt-56">
                <div className="customDiv-2 overflow-auto">
                    <div className="customDivH2">
                        <h2 className="customH2">
                            Nuevo registro de Viaje de Volqueta
                        </h2>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="pt-5 pl-6 pr-6 pb-4"
                    >
                        {/* Nro de planilla --- Fecha */}
                        <div className="grid grid-cols-3 gap-3">
                            <div className='flex flex-col'>
                                <Label htmlFor="n_planilla">Nº Planilla</Label>
                                <Input
                                    type="text"
                                    placeholder="Escriba el nro de la planilla..."
                                    {...register('n_planilla', {
                                        required: 'Este campo es obligatorio',
                                    })}
                                />
                                {errors.n_planilla && (
                                    <p className="text-red-700">
                                        {errors.n_planilla.message}
                                    </p>
                                )}
                            </div>

                            <div className='flex flex-col'>
                                <Label htmlFor="fecha">Fecha</Label>
                                <Input
                                    type="date"
                                    {...register('fecha', {
                                        required: 'Este campo es obligatorio',
                                    })}
                                />
                                {errors.fecha && (
                                    <p className="text-red-700">
                                        {errors.fecha.message}
                                    </p>
                                )}
                            </div>

                            <div className='flex flex-col'>
                                <Label htmlFor="n_viajes">
                                    Nro de Viaje por Día
                                </Label>
                                <Input
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
                           </div>

                          <div className='grid grid-cols-2 gap-28'> 
                          <div className='w-56'>
                                <Label htmlFor="cliente">Cliente</Label>
                                <Input
                                    type="text"
                                    placeholder="Escriba nombre del cliente..."
                                    {...register('cliente', {
                                        required: 'Este campo es obligatorio',
                                    })}
                                />
                                {errors.cliente && (
                                    <p className="text-red-700">
                                        {errors.cliente.message}
                                    </p>
                                )}
                            </div>

                            <div className='w-28'>
                                <Label htmlFor="fecha">DESALOJO</Label>
                                <Input
                                placeholder=' SI / NO' />
                            </div>
                          </div>  

                          <div className='grid grid-cols-2 gap-3'>  
                            <div>
                                <Label htmlFor='cedula'>Cédula Conductor</Label>
                                <p className='border border-gray-400 bg-gray-200 rounded-md p-1.5 mt-1'>
                                    {dni || 'Cargando...'}
                                </p>
                            </div>

                            <div>
                                <Label htmlFor="placa_vehiculo">Placa</Label>
                                <p className='border border-gray-400 bg-gray-200 rounded-md p-1.5 mt-1.5 mb-3'>
                                    {vehicleRegistrationPlate || 'Cargando...'}
                                </p>
                            </div>
                           </div> 

                          <div className='grid grid-cols-2 gap-3'> 
                            <div>
                                <Label htmlFor="volmts3">
                                    Cantidad metros Cubicos
                                </Label>
                                <Input
                                    type="text"
                                    placeholder="Escriba el volumen de carga..."
                                    {...register('volmts3', {
                                        required: 'Este campo es obligatorio',
                                    })}
                                />
                                {errors.volmts3 && (
                                    <p className="text-red-700">
                                        {errors.volmts3.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="material">Material</Label>
                                <Input
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
                           </div>

                          <div className='grid grid-cols-2 gap-3'>
                            <div>
                                <Label htmlFor="lugar_de_cargue">
                                    Lugar de Carga
                                </Label>
                                <Input
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

                            <div>
                                <Label htmlFor="lugar_de_descargue">
                                    Lugar de Descarga
                                </Label>
                                <Input
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
                        </div>

                        {/*Nro de Viaje por Dia --- Hora Inicio --- Hora Final */}
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <Label htmlFor="hora_inicio">Hora Inicio</Label>
                                <Input
                                    type="time"
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

                            <div>
                                <Label htmlFor="hora_final">Hora Final</Label>
                                <Input
                                    type="time"
                                    placeholder="Coloque hora de fin..."
                                    {...register('hora_final', {
                                        required: 'Este campo es obligatorio',
                                    })}
                                />
                                {errors.hora_final && (
                                    <p className="text-red-700">
                                        {errors.hora_final.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Kilometraje Inicio --- Kilometraje Final */}
                        <div className="grid grid-cols-3 gap-3">
                            <div className='col-span-1'>
                                <Label htmlFor="km_inicial">Klm Inicial</Label>
                                <Input
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

                            <div className='col-span-1'>
                                <Label htmlFor="km_final">Klm Final</Label>
                                <Input
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
                           </div> 

                        <div className='grid grid-cols-2 gap-3'>                             
                            <div className='col-span-2'>
                            <Label htmlFor="total_km">Total kilometros Recorridos Diarios</Label>
                            <span className='block border border-gray-400 bg-gray-200 rounded-md p-1.5 mt-1 text-gray-700'>
                                {totalKm}
                            </span>
                            </div>
                        
                        {/* Observaciones */}
                        <div className="col-span-2">
                            <Label htmlFor="observacion">Observación</Label>
                            <textarea
                                rows="2"
                                className="shadow appearance-none border rounded border-gray-400 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                    </div>

                        <div className="flex justify-between mt-3">
                            <div>
                                <Button
                                    type="button"
                                    onClick={onCancel}
                                    className="rounded-md "
                                >
                                    <FontAwesomeIcon
                                    icon={faAngleLeft}
                                    className='absolute left-3 text-lg'
                                    />
                                    <span className='text-red-700'>Cancelar</span>
                                </Button>
                            </div>
                            <div>
                                <Button
                                    type="submit"
                                    className="rounded-md"
                                >
                                    <span className='text-red-700'>Aceptar</span>
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
