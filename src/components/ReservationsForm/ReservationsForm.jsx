import { useState } from "react"
import './ReservationsForm.css'
import { db } from "../../firebase/config.js"
import { collection, addDoc } from "firebase/firestore"

function ReservationsForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        time: "",
        guests: "",
        comments: ""
    });

    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        try {
            const docRef = await addDoc(collection(db, 'reservations'), formData)
            console.log("Reserva guardada con ID:", docRef.id)

            // Limpiar datos
            setFormData({name: "", email: "", date: "", time: "", guests: "", comments: ""})
            setSuccess(true)
        } catch (error) {
            console.log("Error al guardar reserva:", error)
            setError("Error al guardar reserva. Por favor, inténtelo de nuevo más tarde.")
        } finally {
            setLoading(false)
        }
    };

    const handleDateChange = (e) => {
      const selectedDate = new Date(e.target.value);
      const day = selectedDate.getDay();

      // Validar que sea un día válido (martes a domingo)
      if (day < 1 || day > 6) {
          setError("Seleccione una fecha válida. (martes a domingos)");
          setFormData({ ...formData, date: "" });
      } else {
          setError("");
          setFormData({ ...formData, date: e.target.value });
      }
  };

  const handleTimeChange = (e) => {
      const selectedTime = e.target.value;

      // Horarios válidos: 11:00 - 15:00 y 20:00 - 23:00
      const [hour, minute] = selectedTime.split(":").map(Number);
      const isLunchTime = hour >= 11 && hour < 15;
      const isDinnerTime = hour >= 20 && hour < 23;

      if (!isLunchTime && !isDinnerTime) {
          setError("Seleccione un horario válido (11:00-15:00 o 20:00-23:00).");
          setFormData({ ...formData, time: "" });
      } else {
          setError("");
          setFormData({ ...formData, time: selectedTime });
      }
  }


    return (
      <section className="container" style={{minHeight: '75vh'}}>
        <form
            onSubmit={handleSubmit}
            className="reservations-form mx-auto bg-white shadow-md rounded-lg p-6 space-y-4"
        >
            <h2 className=" font-semibold text-gray-800">Reserva tu mesa</h2>

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
            <div className="flex space-x-2">
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleDateChange}
                    required
                    className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleTimeChange}
                    required
                    className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
            </div>
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
