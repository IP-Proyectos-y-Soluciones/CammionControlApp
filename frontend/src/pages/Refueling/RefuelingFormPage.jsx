/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { Button, Input, Label } from '../../components/UI';
import { useForm } from 'react-hook-form';
import { createNewRefuelingForm } from '../../../api/refueling';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
        watch,
    } = useForm();
    const {dni, vehicleRegistrationPlate} = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    //const [totalKm, setTotalKm] = useState(0);

  //  const kmInicial = watch('km_inicial');
  //    const kmFinal = watch('km_final');

    // useEffect(()=>{
    //     if(kmInicial && kmFinal){
    //         setTotalKm(Math.abs(kmFinal - kmInicial));
    //     }else{
    //         setTotalKm(0);
    //     }
    // }, [kmInicial, kmFinal])

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);

            const _data = {
                ...data,
                cedula: dni,
                placas: vehicleRegistrationPlate,
               // total_km: totalKm,
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
            <div className="customDiv-1 md:mt-0 sm:mt-12">
                <div className="customDiv-2">
                    <div className="customDivH2">
                        <h2 className="customH2">
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
                                <Label htmlFor="cedula">
                                    Cédula del Conductor
                                </Label>
                                <p className='border border-gray-400 bg-gray-200 rounded-md p-1.5 mt-1'>
                                    { dni || 'Cargando...'}
                                </p>
                            </div>

                            <div>
                                <Label htmlFor="fecha_tanqueo">Fecha</Label>
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
                                <Label htmlFor="n_recibo">Nº Recibo</Label>
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
                                <Label htmlFor="estacion">Estación</Label>
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
                                <Label htmlFor="cantidad_galones">
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
                                <Label htmlFor="valor_tanqueo">
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
                        <div className='grid grid-cols-2 gap-3'>
                            <div>
                                <Label htmlFor='placas'>Placas</Label>
                                <p className='border border-gray-300 bg-gray-200 rounded-md p-1.5 mt-1.5 mb-3'>
                                    {vehicleRegistrationPlate || 'Cargando...'}
                                </p>
                            </div>
                        </div>
                        
                        {/*Km inicial --km final--km total*/}
                        <div className='grid grid-cols-2 gap-3'>
                            <div className='col-span-1'>
                                <Label htmlFor='km_inicial'>Km Inicial</Label>
                                <Input
                                type='number'
                                placeholder='Coloque km inicial...'
                                {...register('km_inicial', {
                                    required: 'Este campo es obligatorio',
                                })}
                                />
                                {errors.km_inicial &&(
                                    <p className='text-red-700'>
                                        {errors.km_inicial.message}
                                    </p>
                                )}
                            </div>

                            <div className='col-span-1'>
                                <Label htmlFor='km_final'>Km Final</Label>
                                <Input
                                type='number'
                                placeholder='Coloque km final...'
                                {...register('km_final', {
                                    required: 'Este campo es obligatorio'
                                })}
                                />
                                {errors.km_final &&(
                                    <p className='text-red-700'>
                                        {errors.km_final.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* <div className='col-span-2'>
                            <Label htmlFor='total_km'>Total Kilometros Recorridos</Label>
                            <span className='block border border-gray-400 bg-gray-200 rounded-md p-1.5 mt-1 text-gray-700'>
                                {totalKm}
                            </span>
                        </div> */}

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
