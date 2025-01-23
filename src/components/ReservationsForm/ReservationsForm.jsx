import { useState } from "react";
import './ReservationsForm.css';
import { db } from "../../firebase/config.js";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import reservationConfig from "../../utils/reservationsConfig.jsx"

function ReservationsForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        day: "",
        time: "",
        guests: "",
        table: "",
        comments: ""
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Validación básica
        if (!formData.day || !formData.time || !formData.guests || !formData.name || !formData.email || !formData.table) {
            setError("Por favor, complete todos los campos obligatorios.");
            setLoading(false);
            return;
        }

        try {
            // Verificar si la mesa ya está ocupada en la misma fecha y hora
            const reservationsRef = collection(db, 'reservations');
            const q = query(
                reservationsRef,
                where("day", "==", formData.day),
                where("time", "==", formData.time),
                where("table", "==", formData.table)
            );
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                setError("La mesa seleccionada ya está reservada para este día y hora. Por favor, elija otra mesa o cambie el horario.");
                setLoading(false);
                return;
            }

            // Guardar la reserva si no hay conflictos
            const docRef = await addDoc(reservationsRef, formData);
            console.log("Reserva guardada con ID:", docRef.id);

            // Limpiar datos
            setFormData({
                name: "",
                email: "",
                day: "",
                time: "",
                guests: "",
                table: "",
                comments: ""
            });
            setSuccess(true);
        } catch (error) {
            console.log("Error al guardar reserva:", error);
            setError("Error al guardar reserva. Por favor, inténtelo de nuevo más tarde.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="container" style={{ minHeight: '75vh' }}>
            <form
                onSubmit={handleSubmit}
                className="reservations-form mx-auto bg-white shadow-md rounded-lg p-6 space-y-4"
            >
                <h2 className="font-semibold text-gray-800">Reserva tu mesa</h2>

                {success && <p className="text-green-600 mb-4">¡Reserva realizada con éxito!</p>}

                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Correo"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />

                <input
                    type="number"
                    name="guests"
                    min="1"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Número de personas"
                />

                <div className="flex space-x-2">
                    {/* Selector de días */}
                    <select
                        name="day"
                        value={formData.day}
                        onChange={handleChange}
                        required
                        className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                        <option value="">Seleccione un día</option>
                        {reservationConfig.daysAvailable.map((day, index) => (
                            <option key={index} value={day}>{day}</option>
                        ))}
                    </select>

                    {/* Selector de horarios */}
                    <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                        <option value="">Seleccione un horario</option>
                        {reservationConfig.timeSlots.map((time, index) => (
                            <option key={index} value={time}>{time}</option>
                        ))}
                    </select>
                </div>

                {/* Selector de mesas según capacidad */}
                <select
                    name="table"
                    value={formData.table}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                    <option value="">Seleccione una mesa</option>
                    {reservationConfig.tables
                        .filter(table => table.capacity >= Number(formData.guests || 0))
                        .map((table) => (
                            <option key={table.id} value={table.id}>
                                Mesa {table.id} - Capacidad: {table.capacity} personas
                            </option>
                        ))}
                </select>

                <textarea
                    name="comments"
                    placeholder="Comentarios (opcional)"
                    value={formData.comments}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                ></textarea>

                {error && <p className="text-red-500 mb-4">{error}</p>}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition"
                >
                    {loading ? "Guardando..." : "Reservar"}
                </button>
            </form>
        </section>
    );
}

export default ReservationsForm;
