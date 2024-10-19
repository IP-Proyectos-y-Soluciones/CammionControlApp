/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { Button, Input, Label } from '../../components/UI';
import { useForm } from 'react-hook-form';
import { registerVehicleRequest } from '../../../api/vehicles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Loading } from '../../components/Common/Loading';
import swal2 from 'sweetalert2';
import '../../styles/global.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export function VehicleFormAddPage() {
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

            const response = await registerVehicleRequest(data);

            if (response.status === 201) {
                setIsLoading(false);

                swal2.fire({
                    title: 'Registro exitoso...!',
                    text: `El vehículo placas ${data.placa} ha sido registrado exitosamente...!!!`,
                    icon: 'success',
                    confirmButtonText: 'Aceptar',
                });

                reset();
            }
        } catch (error) {
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
                        <h2 className="customH2 ml-24">
                            Registrar Nuevo Vehículo
                        </h2>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="customFormDiv"
                    >
                        {/* Placas --- Combustible */}
                        <div className="customFormGrid">
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

                            <div>
                                <Label htmlFor="tipo_de_combustible">
                                    Tipo Combustible
                                </Label>
                                <select
                                    {...register('tipo_de_combustible', {
                                        required:
                                            'Este campo es obligatorio...!',
                                    })}
                                    className="w-full bg-gray-200 text-blue-700 px-4 py-2 rounded-md my-3 mt-1 mb-3 border border-gray-400"
                                >
                                    <option value="">
                                        Seleccione una opción...
                                    </option>
                                    <option value="Gasolina">Gasolina</option>
                                    <option value="A.C.P.M">A.C.P.M</option>
                                </select>
                                {errors.tipo_de_combustible && (
                                    <p className="text-red-700">
                                        {errors.tipo_de_combustible.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Clase de Vehículo --- Marca */}
                        <div className="customFormGrid">
                            <div>
                                <Label htmlFor="clase_de_vehiculo">
                                    Clase Vehículo
                                </Label>
                                <select
                                    {...register('clase_de_vehiculo', {
                                        required:
                                            'Este campo es obligatorio...!',
                                    })}
                                    className="w-full bg-gray-200 text-blue-700 px-4 py-2 rounded-md my-3 mt-1 mb-3 border border-gray-400"
                                >
                                    <option value="">
                                        Seleccione una opción...
                                    </option>
                                    <option value="VOLQUETA DTRQ">
                                        VOLQUETA DTRQ
                                    </option>
                                    <option value="VOLQUETA">VOLQUETA</option>
                                    <option value="CARRO TANQUE">
                                        CARRO TANQUE
                                    </option>
                                    <option value="CAMION SENCILLO">
                                        CAMION SENCILLO
                                    </option>
                                    <option value="TRACTOCAMION">
                                        TRACTOCAMION
                                    </option>
                                    <option value="CAMIONETA JEFES">
                                        CAMIONETA JEFES
                                    </option>
                                </select>
                                {errors.clase_de_vehiculo && (
                                    <p className="text-red-700">
                                        {errors.clase_de_vehiculo.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="marca">Marca</Label>
                                <Input
                                    type="text"
                                    placeholder="Escriba la marca..."
                                    {...register('marca', {
                                        required: 'Este campo es obligatorio',
                                    })}
                                />
                                {errors.marca && (
                                    <p className="text-red-700">
                                        {errors.marca.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Color */}
                        <div>
                            <Label htmlFor="color">Color</Label>
                            <Input
                                type="text"
                                placeholder="Escriba el color..."
                                {...register('color', {
                                    required: 'Este campo es obligatorio',
                                })}
                            />
                            {errors.color && (
                                <p className="text-red-700">
                                    {errors.color.message}
                                </p>
                            )}
                        </div>

                        {/* Botones 'Cancel' y 'Aceptar'... */}
                        <div className="flex justify-between">
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
