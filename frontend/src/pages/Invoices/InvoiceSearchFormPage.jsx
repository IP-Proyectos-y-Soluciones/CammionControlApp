/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { Button, Input, Label } from '../../components/UI';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../components/Common/Loading';
import { getImageRefuelingByDNIAndInvoiceRequest } from '../../../api/invoices';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export function InvoiceSearchFormPage() {
    const [cedula, setCedula] = useState('');
    const [invoice, setInvoice] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const {reset} = useForm();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            setError('');

            const response = await getImageRefuelingByDNIAndInvoiceRequest(
                cedula,
                invoice,
            );

            // Se convierte el blob en un URL para mostrar la imagen...
            const imageBlob = new Blob([response.data], {
                type: response.headers['Content-Type'],
            });
            const imageUrl = URL.createObjectURL(imageBlob);

            // Se navega a la vista de la imagen, pasando la URL de la imagen...
            navigate('/imgrefueling-view', { state: { imageUrl } });
        } catch (error) {
            setLoading(false);
            setError(
                'No se pudo obtener la imagen, verifique la cédula y el recibo.',
            );
        } finally {
            setLoading(false);
        }
    };

    const onCancel = () =>{
        reset();
        navigate(-1);
    }

    return (
        <div className="bg-otherpages min-h-screen">
            {loading && (
                <div>
                    <Loading />
                </div>
            )}{' '}
            <div className="customDiv-1a">
                <div className="customDiv-2">
                    <div className="customDivH2">
                        <h2 className="customH2 ml-16">Buscar Recibo...</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="customFormDiv">
                        <div>
                            <div>
                                <Label htmlFor="cedula">Cédula</Label>
                                <Input
                                    id="cedula"
                                    type="number"
                                    value={cedula}
                                    onChange={(e) => setCedula(e.target.value)}
                                    placeholder="Ingrese el nro de cédula..."
                                    required
                                />
                            </div>

                            <div>
                                <Label htmlFor="invoice">Nº Recibo</Label>
                                <Input
                                    id="invoice"
                                    type="text"
                                    value={invoice}
                                    onChange={(e) => setInvoice(e.target.value)}
                                    placeholder="Ingrese el nro de recibo..."
                                    required
                                />
                            </div>
                        </div>

                      <div className='flex justify-end gap-5 mt-3'> 
                        <div>
                            <Button
                            type='button'
                            onClick={onCancel}
                            className='rounded-md btn-formularios'
                            >
                                <FontAwesomeIcon
                                icon={faAngleLeft}
                                className='absolute left-3 text-lg'
                                />
                                <span className='text-red-700'>Cancelar</span>
                            </Button>
                        </div>

                        <div className="flex justify-end">
                            <Button
                                type="submit"
                                className="rounded-md btn-formularios"
                            >
                               <span className='text-red-700'>Buscar Recibo</span>
                               <FontAwesomeIcon
                               icon={faAngleRight}
                               className='absolute right-3 text-lg'
                               />
                            </Button>
                        </div> 
                    </div>
                    </form>

                    {/* Mostrar error si ocurre */}
                    {error && (
                        <p className="text-red-500 text-center">{error}</p>
                    )}
                </div>
            </div>
        </div>
    );
}
