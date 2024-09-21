import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormularioRegistroVolquetas = () => {
    const [formData, setFormData] = useState({
        placa: '',
        conductor: '',
        reciboObra: '',
        fecha: '',
        horaIngreso: '',
        horaSalida: '',
        numeroViajes: '',
        kilometrajeInicial: '',
        kilometrajeFinal: '',
        totalKilometros: '',
        viajes: [
            {
                cliente: '',
                lugarCargue: '',
                lugarDescargue: '',
                material: '',
                cantidad: '',
                observaciones: '',
            },
            {
                cliente: '',
                lugarCargue: '',
                lugarDescargue: '',
                material: '',
                cantidad: '',
                observaciones: '',
            },
            {
                cliente: '',
                lugarCargue: '',
                lugarDescargue: '',
                material: '',
                cantidad: '',
                observaciones: '',
            },
        ],
        recibo: null, // para manejar la subida de archivos
    });

    const [fileName, setFileName] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name.startsWith('viajes')) {
            const index = Number(name.split('_')[1]);
            const field = name.split('_')[2];

            setFormData((prev) => {
                const newViajes = [...prev.viajes];
                newViajes[index][field] = value;
                return { ...prev, viajes: newViajes };
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, recibo: file });
        setFileName(file ? file.name : ''); // aquí se guarda el nombre del archivo
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('volquetasData', JSON.stringify(formData));
        navigate('/volquetaspdf'); // Redirige al componente Volquetas
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl text-gray-600 font-bold text-center mb-6">
                Control de Transporte de Materiales Volquetas Diario
            </h1>
            <form
                onSubmit={handleSubmit}
                className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
            >
                <div className="mb-4">
                    <label htmlFor="placa" className="block text-gray-700">
                        Placa de Vehículo:
                    </label>
                    <input
                        type="text"
                        id="placa"
                        name="placa"
                        value={formData.placa}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="conductor" className="block text-gray-700">
                        Nombre del Conductor:
                    </label>
                    <input
                        type="text"
                        id="conductor"
                        name="conductor"
                        value={formData.conductor}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="reciboObra" className="block text-gray-700">
                        Recibo de Obra No:
                    </label>
                    <input
                        type="text"
                        id="reciboObra"
                        name="reciboObra"
                        value={formData.reciboObra}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="fecha" className="block text-gray-700">
                        Fecha:
                    </label>
                    <input
                        type="date"
                        id="fecha"
                        name="fecha"
                        value={formData.fecha}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="horaIngreso"
                        className="block text-gray-700"
                    >
                        Hora de Ingreso:
                    </label>
                    <input
                        type="time"
                        id="horaIngreso"
                        name="horaIngreso"
                        value={formData.horaIngreso}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="horaSalida" className="block text-gray-700">
                        Hora de Salida:
                    </label>
                    <input
                        type="time"
                        id="horaSalida"
                        name="horaSalida"
                        value={formData.horaSalida}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        required
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
                        type="number"
                        id="numeroViajes"
                        name="numeroViajes"
                        value={formData.numeroViajes}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="kilometrajeInicial"
                        className="block text-gray-700"
                    >
                        Kilometraje Inicial Vehículo:
                    </label>
                    <input
                        type="number"
                        id="kilometrajeInicial"
                        name="kilometrajeInicial"
                        value={formData.kilometrajeInicial}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="kilometrajeFinal"
                        className="block text-gray-700"
                    >
                        Kilometraje Final Vehículo:
                    </label>
                    <input
                        type="number"
                        id="kilometrajeFinal"
                        name="kilometrajeFinal"
                        value={formData.kilometrajeFinal}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="totalKilometros"
                        className="block text-gray-700"
                    >
                        Total Kilómetros Recorridos Diario:
                    </label>
                    <input
                        type="number"
                        id="totalKilometros"
                        name="totalKilometros"
                        value={formData.totalKilometros}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        required
                    />
                </div>

                <h2 className="text-xl font-bold mb-4">Viajes</h2>
                {formData.viajes.map((viaje, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 p-4 mb-4 rounded-md"
                    >
                        <h3 className="font-semibold mb-2">
                            Viaje {index + 1}
                        </h3>
                        <div className="mb-4">
                            <label
                                htmlFor={`viajes_${index}_cliente`}
                                className="block text-gray-700"
                            >
                                Cliente:
                            </label>
                            <input
                                type="text"
                                id={`viajes_${index}_cliente`}
                                name={`viajes_${index}_cliente`}
                                value={viaje.cliente}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor={`viajes_${index}_lugarCargue`}
                                className="block text-gray-700"
                            >
                                Lugar de Cargue:
                            </label>
                            <input
                                type="text"
                                id={`viajes_${index}_lugarCargue`}
                                name={`viajes_${index}_lugarCargue`}
                                value={viaje.lugarCargue}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor={`viajes_${index}_lugarDescargue`}
                                className="block text-gray-700"
                            >
                                Lugar de Descargue:
                            </label>
                            <input
                                type="text"
                                id={`viajes_${index}_lugarDescargue`}
                                name={`viajes_${index}_lugarDescargue`}
                                value={viaje.lugarDescargue}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor={`viajes_${index}_material`}
                                className="block text-gray-700"
                            >
                                Material o Actividad:
                            </label>
                            <input
                                type="text"
                                id={`viajes_${index}_material`}
                                name={`viajes_${index}_material`}
                                value={viaje.material}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor={`viajes_${index}_cantidad`}
                                className="block text-gray-700"
                            >
                                Cantidad Metros Cúbicos:
                            </label>
                            <input
                                type="number"
                                id={`viajes_${index}_cantidad`}
                                name={`viajes_${index}_cantidad`}
                                value={viaje.cantidad}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor={`viajes_${index}_observaciones`}
                                className="block text-gray-700"
                            >
                                Observaciones:
                            </label>
                            <input
                                type="text"
                                id={`viajes_${index}_observaciones`}
                                name={`viajes_${index}_observaciones`}
                                value={viaje.observaciones}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                                required
                            />
                        </div>
                    </div>
                ))}

                <div className="mb-4">
                    <label htmlFor="recibo" className="block text-gray-700">
                        Subir Recibo:
                    </label>
                    <div className="flex items-center">
                        <input
                            type="file"
                            id="recibo"
                            name="recibo"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-96 px-4 py-3 border border-gray-300 rounded-md text-black"
                            required
                        />
                        <span className="ml-4 text-gray-700">
                            {fileName || 'No hay archivo seleccionado'}
                        </span>
                    </div>
                </div>

                <div className="flex mt-8 space-x-8 justify-center">
                    <button
                        className="flex items-center justify-between bg-gray-600 text-white px-8 py-3 rounded-full shadow-lg mt-8 hover:bg-red-600 transition-colors"
                        style={{ width: 'auto', minWidth: '150px' }}
                        onClick={handleBackClick}
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
