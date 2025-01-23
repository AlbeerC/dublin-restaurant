import reservationsConfig from "./ReservationsConfig";

const { daysAvailable, timeSlots, tables } = reservationConfig;

/**
 * Verifica si un día está disponible para reservar
 * @param {string} dateString - Fecha en formato ISO (yyyy-mm-dd)
 * @returns {boolean} - True si el día es válido, false si no lo es
 */
export function isDayAvailable(dateString) {
    const date = new Date(dateString);
    const dayName = date.toLocaleDateString("es-ES", { weekday: "long" });
    return daysAvailable.includes(dayName);
}

/**
 * Verifica si un horario es válido
 * @param {string} time - Hora en formato HH:mm
 * @returns {boolean} - True si el horario es válido, false si no lo es
 */
export function isTimeAvailable(time) {
    return timeSlots.includes(time);
}


/**
 * Valida el formulario de reserva
 * @param {Object} formData - Datos del formulario
 * @returns {Object} - Resultado de la validación con "isValid" y "error"
 */
export function validateReservationForm(formData) {
    const { date, time } = formData;

    if (!isDayAvailable(date)) {
        return { isValid: false, error: "El día seleccionado no está disponible." };
    }

    if (!isTimeAvailable(time)) {
        return { isValid: false, error: "El horario seleccionado no está disponible." };
    }

    return { isValid: true, error: null };
}
