import Personaje from './personaje.js';

export default class Fiesta {
    #nombre;
    #lugar;
    #fecha;
    #aInvitados;

    constructor(nombre, lugar, fecha) {
        this.nombre = nombre; 
        this.lugar = lugar;
        this.fecha = fecha;
        this.#aInvitados = [];
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(nuevoNombre) {
        // he usado \d/ para comprobar si hay números, es una regex
        if (!nuevoNombre || nuevoNombre.length < 3 || /\d/.test(nuevoNombre)) {
            throw new Error("El nombre debe tener mínimo 3 caracteres y no puede contener números");
        }
        this.#nombre = nuevoNombre;
    }

    get lugar() {
        return this.#lugar;
    }

    set lugar(nuevoLugar) {
        if (!nuevoLugar || nuevoLugar.trim() === '') {
            throw new Error("El lugar no puede estar vacío");
        }
        this.#lugar = nuevoLugar;
    }

    get fecha() {
        return this.#fecha;
    }

    set fecha(nuevaFecha) {
        // Validar formato YYYY-MM-DD
        const fechaRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!fechaRegex.test(nuevaFecha)) {
            throw new Error("La fecha debe tener el formato YYYY-MM-DD");
        }
        this.#fecha = nuevaFecha;
    }

    get aInvitados() {
        return [...this.#aInvitados];
        // Esto lo hice para evitar que se pueda modificar el array original desde fuera de la clase, por eso use spread para generar una copia
    }z

    anadirInvitado(personaje) {
        if (!(personaje instanceof Personaje)) {
            throw new Error("Solo se pueden añadir objetos de tipo Personaje");
        }

        // aqui verifico si ya existe un invitado con el mismo nombre
        const existe = this.#aInvitados.some(invitado => invitado.nombre === personaje.nombre);
        
        if (!existe) {
            this.#aInvitados.push(personaje);
            return true;
        }
        return false;
    }

    // método para eliminar invitado
    eliminarInvitado(nombre) {
        const indice = this.#aInvitados.findIndex(invitado => invitado.nombre === nombre);
        if (indice !== -1) {
            this.#aInvitados.splice(indice, 1);
            return true;
        }
        return false;
    }

    toString() {
        return `Fiesta: ${this.#nombre}
Lugar: ${this.#lugar}
Fecha: ${this.#fecha}
Número de invitados: ${this.#aInvitados.length}`;
    }
}