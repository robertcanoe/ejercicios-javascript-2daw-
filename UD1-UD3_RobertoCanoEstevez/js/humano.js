import Personaje from './personaje.js';

export default class Humano extends Personaje {
    #profesion;
    #edad;

    constructor(nombre, profesion, edad) {
        super(nombre);
        this.profesion = profesion;
        this.edad = edad; 
    }

    get profesion() {
        return this.#profesion;
    }

    set profesion(nuevaProfesion) {
        if (!nuevaProfesion || !(nuevaProfesion.endsWith('o') || nuevaProfesion.endsWith('a'))) {
            throw new Error("La profesión no puede estar vacía y debe terminar en 'o' o 'a'");
        }
        this.#profesion = nuevaProfesion;
    }

    get edad() {
        return this.#edad;
    }

    set edad(nuevaEdad) {
        if (!Number.isInteger(nuevaEdad) || nuevaEdad < 16 || nuevaEdad > 120) {
            throw new Error("La edad debe ser un número entre 16 y 120");
        }
        this.#edad = nuevaEdad;
    }

    toString() {
        return `${super.toString()}, Profesión: ${this.#profesion}, Edad: ${this.#edad}`;
    }
}