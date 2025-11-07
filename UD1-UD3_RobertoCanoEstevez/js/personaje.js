export default class Personaje {
    #nombre;

    constructor(nombre) {
        this.nombre = nombre;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(nuevoNombre) {
        if (!nuevoNombre || nuevoNombre.length < 4 || nuevoNombre[0] !== nuevoNombre[0].toUpperCase()) {
            throw new Error("El nombre debe comenzar por mayúscula y tener al menos 4 caracteres");
        }
        this.#nombre = nuevoNombre;
    }

    toString() {
        return `Nombre: ${this.#nombre}`;
    }
}