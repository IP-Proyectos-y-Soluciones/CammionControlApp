/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { Button, Input, Label } from '../../components/UI';
import { useForm } from 'react-hook-form';
import { registerDriverLicenseRequest } from '../../../api/driverLicense';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Loading } from '../../components/Common/Loading';
import swal2 from 'sweetalert2';
import '../../styles/global.css';

export function DriverLicenseFormAddPage() {
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
            setIsLoading(true); // Mostrar spinner de carga...

            const response = await registerDriverLicenseRequest(data);

            if (response.status === 201) {
                setIsLoading(false);

                swal2.fire({
                    title: 'Registro exitoso...!',
                    text: `La nueva licencia ${response.data.licencia_N} ha sido registrada exitosamente...!!!`,
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
                        <h2 className="customH2 ml-28">
                            Registro de Licencias
                        </h2>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="customFormDiv"
                    >
                        {/* Cédula del conductor --- Nº de Licencia */}
                        <div className="customFormGrid">
                            <div>
                                <Label htmlFor="conductor_cedula">Cédula</Label>
                                <Input
                                    type="number"
                                    placeholder="Escriba su cédula..."
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

                            <div>
                                <Label htmlFor="licencia_N">Nº Licencia</Label>
                                <Input
                                    type="text"
                                    placeholder="Escriba su licencia..."
                                    {...register('licencia_N', {
                                        required: 'Este campo es obligatorio',
                                    })}
                                />
                                {errors.licencia_N && (
                                    <p className="text-red-700">
                                        {errors.licencia_N.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Categoría --- Clase de Vehículo */}
                        <div className="customFormGrid">
                            <div>
                                <Label htmlFor="categoria">Categoría</Label>
                                <select
                                    {...register('categoria', {
                                        required:
                                            'Este campo es obligatorio...!',
                                    })}
                                    className="w-full bg-gray-200 text-blue-700 px-4 py-2 rounded-md my-3 mt-1 mb-3"
                                >
                                    <option value="">
                                        Seleccione una opción...
                                    </option>
                                    <option value="B1">B1</option>
                                    <option value="B2">B2</option>
                                    <option value="B3">B3</option>
                                    <option value="">
                                        <hr />
                                    </option>
                                    <option value="C1">C1</option>
                                    <option value="C2">C2</option>
                                    <option value="C3">C3</option>
                                </select>
                                {errors.categoria && (
                                    <p className="text-red-700">
                                        {errors.categoria.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="clase_de_vehiculo">
                                    Clase de Vehículo
                                </Label>
                                <Input
                                    type="text"
                                    placeholder="Escriba la clase..."
                                    {...register('clase_de_vehiculo', {
                                        required: 'Este campo es obligatorio',
                                    })}
                                />
                                {errors.clase_de_vehiculo && (
                                    <p className="text-red-700">
                                        {errors.clase_de_vehiculo.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <Label htmlFor="servicio">Servicio</Label>
                        <Input
                            type="text"
                            placeholder="Escriba el tipo de servicio..."
                            {...register('servicio', {
                                required: 'Este campo es obligatorio',
                            })}
                        />
                        {errors.servicio && (
                            <p className="text-red-700">
                                {errors.servicio.message}
                            </p>
                        )}

                        <div className="customFormGrid">
                            <div>
                                <Label htmlFor="fecha_expedicion">
                                    Fecha Expedicion
                                </Label>
                                <Input
                                    type="date"
                                    {...register('fecha_expedicion', {
                                        required: 'Este campo es obligatorio',
                                    })}
                                />
                                {errors.fecha_expedicion && (
                                    <p className="text-red-700">
                                        {errors.fecha_expedicion.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="fecha_vencimiento">
                                    Fecha Vencimiento
                                </Label>
                                <Input
                                    type="date"
                                    {...register('fecha_vencimiento')}
                                />
                                {errors.fecha_vencimiento && (
                                    <p className="text-red-700">
                                        {errors.fecha_vencimiento.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Botones 'Cancel' y 'Aceptar'... */}
                        <div className="flex justify-between">
                            <div>
                                <Button
                                    type="button"
                                    onClick={onCancel}
                                    className="bg-red-600 w-36 mb-2 hover:bg-red-400"
                                >
                                    Cancelar
                                </Button>
                            </div>
                            <div>
                                <Button
                                    type="submit"
                                    className="bg-slate-500 w-36 mb-2 hover:bg-slate-400"
                                >
                                    Aceptar
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
