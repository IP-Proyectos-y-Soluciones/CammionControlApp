/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { Button, Input, Label } from '../../components/UI';
import { useForm } from 'react-hook-form';
import { assigningVehicleToDriverRequest } from '../../../api/vehicles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Loading } from '../../components/Common/Loading';
import swal2 from 'sweetalert2';
import '../../styles/global.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export function AssignDriverToVehicleFormPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset, // Para 'resetear' el formulario...
    } = useForm();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data) => {
        try {
            setIsLoading(true); // Mostrar spinner de carga...

            const response = await assigningVehicleToDriverRequest(data);

            if (response.status === 201) {
                setIsLoading(false);

                swal2.fire({
                    title: 'Registro exitoso...!',
                    text:
                        'El conductor con cédula ' +
                        `${data.persona_cedula} le ha sido asignado` +
                        `el vehículo placas ${data.placa} exitosamente...!!!`,
                    icon: 'success',
                    confirmButtonText: 'Aceptar',
                });

                reset();
            }
        } catch (error) {
            console.log(error);
            swal2.fire({
                title: 'Error inesperado...!',
                text: `Ha ocurrido un error inesperado: ${error.message}. Si el error persiste, contacte con el Deassarrollador del software...!!!`,
                icon: 'error',
            });
            setIsLoading(false);
        }
    };

    const onCancel = () => {
        reset();
        navigate('/vehicles');
    };

    return (
        <div className="bg-otherpages min-h-screen">
            {isLoading && (
                <div>
                    <Loading />
                </div>
            )}{' '}
            {/* Se renderiza si es true... */}
            <div className="customDiv-1">
                <div className="customDiv-2">
                    <div className="customDivH2">
                        <h2 className="customH2 ml-20">
                            Asignación de Vehículo
                        </h2>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="customFormDiv"
                    >
                        <div>
                            <Label htmlFor="cedula">Cédula</Label>
                            <Input
                                type="number"
                                placeholder="Escriba su cédula..."
                                {...register('cedula', {
                                    required: 'Este campo es obligatorio',
                                })}
                            />
                            {errors.cedula && (
                                <p className="text-red-700">
                                    {errors.cedula.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <Label htmlFor="placa">Placas</Label>
                            <Input
                                type="text"
                                placeholder="Escriba la placa..."
                                {...register('placa', {
                                    required: 'Este campo es obligatorio',
                                })}
                            />
                            {errors.placa && (
                                <p className="text-red-700">
                                    {errors.placa.message}
                                </p>
                            )}
                        </div>

                        {/* Botones... */}
                        <div className="flex justify-between gap-5 mt-3">
                            <div>
                                <Button
                                    type="button"
                                    onClick={onCancel}
                                    className="rounded-md btn-formularios"
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
                                    className="rounded-md btn-formularios"
                                >
                                    <FontAwesomeIcon
                                    icon={faAngleRight}
                                    className='absolute right-3 text-lg'
                                    />
                                    <span className='text-red-700'>Aceptar</span>
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
