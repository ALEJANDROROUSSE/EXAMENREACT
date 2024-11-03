import React, { useState } from 'react';
import './cotizacion.css';

const Cotizacion: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        carModel: '',
        carYear: '',
        financingOption: '',
        termsAccepted: false,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const isChecked = (e.target as HTMLInputElement).checked;
            setFormData((prevData) => ({
                ...prevData,
                [name]: isChecked,
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Formulario enviado:', formData);
    };

    return (
        <div className="page-container">
            <header className="banner">
                <div className="banner-content">
                    <h1 className="banner-title">GORDILLO'S CARS</h1>
                    <p className="banner-subtitle">Cotiza el vehículo de tus sueños con nosotros</p>
                </div>
            </header>
            <div className="form-container">
                <div className="form-header">
                    <h2 className="form-title">Cotización de Vehículo</h2>
                    <p className="form-description">
                        Completa la información para obtener una cotización personalizada.
                    </p>
                </div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Información de contacto</legend>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Correo</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Teléfono</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Información del Vehículo</legend>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="carModel">Modelo del auto</label>
                                <input
                                    type="text"
                                    id="carModel"
                                    name="carModel"
                                    value={formData.carModel}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="carYear">Año del auto</label>
                                <input
                                    type="number"
                                    id="carYear"
                                    name="carYear"
                                    value={formData.carYear}
                                    onChange={handleChange}
                                    required
                                    min="1990"
                                    max="2024"
                                />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Opción de Financiamiento</legend>
                        <div className="form-group">
                            <label htmlFor="financingOption">Tipo de financiamiento</label>
                            <select
                                id="financingOption"
                                name="financingOption"
                                value={formData.financingOption}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Seleccionar</option>
                                <option value="cash">Contado</option>
                                <option value="lease">Leasing</option>
                                <option value="loan">Préstamo</option>
                            </select>
                        </div>
                    </fieldset>

                    <div className="form-group terms">
                        <label>
                            <input
                                type="checkbox"
                                name="termsAccepted"
                                checked={formData.termsAccepted}
                                onChange={handleChange}
                                required
                            />
                            Acepto los términos y condiciones
                        </label>
                    </div>

                    <button type="submit" className="submit-button">
                        Solicitar Cotización
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Cotizacion;