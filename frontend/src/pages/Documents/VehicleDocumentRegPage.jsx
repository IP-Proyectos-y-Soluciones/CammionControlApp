/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { Button, Input, Label } from '../../components/UI';
import { useForm } from 'react-hook-form';
import { registerVehicleDocumentRequest } from '../../../api/documents';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Loading } from '../../components/Common/Loading';
import swal2 from 'sweetalert2';
import '../../styles/global.css';

export function VehicleDocumentRegisterPage() {
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

            const response = await registerVehicleDocumentRequest(data);

            if (response.status === 201) {
                setIsLoading(false);

                swal2.fire({
                    title: 'Registro exitoso...!',
                    text: `El nuevo documento ${data.cerificado_N} ha sido registrado exitosamente...!!!`,
                    icon: 'success',
                    confirmButtonText: 'Aceptar',
                });
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
                        <h2 className="customH2 ml-28">Nuevo Documento</h2>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="customFormDiv"
                    >
                        {/* Número de Certificado --- Placas */}
                        <div className="customFormGrid">
                            <div>
                                <Label htmlFor="cerificado_N">
                                    Nº Certificado
                                </Label>
                                <Input
                                    type="text"
                                    placeholder="Escriba el Nº del Certif..."
                                    {...register('cerificado_N', {
                                        required: 'Este campo es obligatorio',
                                    })}
                                />
                                {errors.cerificado_N && (
                                    <p className="text-red-700">
                                        {errors.cerificado_N.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="vehiculo_placa">Placas</Label>
                                <Input
                                    type="text"
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
                        </div>

                        {/* Tipo de documento */}
                        <Label htmlFor="tipo">Tipo de Documento</Label>
                        <select
                            {...register('tipo', {
                                required: 'Este campo es obligatorio',
                            })}
                            className="w-full bg-gray-200 text-blue-700 px-4 py-2 rounded-md my-3 mt-1 mb-3"
                        >
                            <option value="">Seleccione una opción...</option>
                            <option value="Póliza de seguro">
                                Poliza de seguro
                            </option>
                            <option value="Soat">Soat</option>
                            <option value="Tecnomecánica">Tecnomecánica</option>
                        </select>

                        {/* Fecha de Expedicion --- Fecha de Vencimiento */}
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
                                    {...register('fecha_vencimiento', {
                                        required: 'Este campo es obligatorio',
                                    })}
                                />
                                {errors.fecha_vencimiento && (
                                    <p className="text-red-700">
                                        {errors.fecha_vencimiento.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Botones... */}
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
