import Personaje from './personaje.js';

export default class Animal extends Personaje {
    #especie;
    #trabajo;
    ç 
    static ESPECIES_PERMITIDAS = [
        "esponja",
        "estrella de mar",
        "calamar",
        "cangrejo",
        "ardilla"
    ];

    constructor(nombre, especie, trabajo) {
        super(nombre);
        this.especie = especie; 
        this.trabajo = trabajo;
    }

    get especie() {
        return this.#especie;
    }

    set especie(nuevaEspecie) {
        if (!Animal.ESPECIES_PERMITIDAS.includes(nuevaEspecie)) {
            throw new Error("Especie no válida. Debe ser: esponja, estrella de mar, calamar, cangrejo o ardilla");
        }
        this.#especie = nuevaEspecie;
    }

    get trabajo() {
        return this.#trabajo;
    }

    set trabajo(nuevoTrabajo) {
        // valido que tenga al menos una palabra y más de 3 letras
        if (!nuevoTrabajo || nuevoTrabajo.length <= 3 || nuevoTrabajo
            .trim()
            .split(' ').length < 1) {
            throw new Error("El trabajo debe contener al menos una palabra y tener más de 3 letras");
        }
        this.#trabajo = nuevoTrabajo;
    }

    toString() {
        return `${super.toString()}, Especie: ${this.#especie}, Trabajo: ${this.#trabajo}`;
    }
}