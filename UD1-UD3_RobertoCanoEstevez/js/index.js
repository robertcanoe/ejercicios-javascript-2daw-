import Humano from './humano.js';
import Animal from './animal.js';
import Fiesta from './fiesta.js';

// no puedo usar import { ... } from ... porque he preferido usar las clases con export default ya que solo hay una clase por archivo y asi evito llaves innecesarias y es mas limpio


let ventanaHumanos = null;
let ventanaAnimales = null;
let ventanaFiesta = null;

let humanos = [];
let animales = [];
let fiesta = null;

// funcion para cerrar ventana si existe
const cerrarVentanaExistente = (ventana) => {
    if (ventana && !ventana.closed) {
        ventana.close();
    }
};

// funcion para verificar si los objetos han sido creados
const verificarObjetos = () => {
    if (!fiesta || humanos.length === 0 || animales.length === 0) {
        alert("Primero debes crear los objetos usando el botón 'Crear objetos'");
        return false;
    }
    return true;
};

// evento para el boton "Crear objetos"
document.getElementById('crearObjetos').addEventListener('click', () => {
    try {
        humanos = [
            new Humano("Parches", "pirata", 45),
            new Humano("Marina", "cocinera", 30)
        ];

        animales = [
            new Animal("Bob Esponja", "esponja", "cocinero"),
            new Animal("Patricio", "estrella de mar", "ayudante"),
            new Animal("Calamardo", "calamar", "músico")
        ];

        fiesta = new Fiesta("Fiesta Cangreburger", "Crustáceo Crujiente", "2025-11-21");

        // añado todos los personajes a la fiesta
        [...humanos, ...animales].forEach(personaje => fiesta.anadirInvitado(personaje));

        console.log("== Fiesta creada ==");

        console.log(`Fiesta(nombre="Fiesta Cangreburger", lugar="Crustáceo Crujiente", fecha="2025-11-21", invitados=5)`);

        console.log("Humanos:", humanos.map(h => `Humano(nombre="${h.nombre}", profesion="${h.profesion}", edad=${h.edad})`));

        console.log("Animales:", animales.map(a => `Animal(nombre="${a.nombre}", especie="${a.especie}", trabajo="${a.trabajo}")`));


        console.log("Invitados en fiesta:");

        console.log([...humanos.map(h => `Humano(nombre="${h.nombre}", profesion="${h.profesion}", edad=${h.edad})`), ...animales.map(a => `Animal(nombre="${a.nombre}", especie="${a.especie}", trabajo="${a.trabajo}")`)]);
        alert("¡Objetos creados con éxito!");
    } catch (error) {
        console.error("Error al crear los objetos:", error);
        alert(`Error al crear los objetos: ${error.message}`);
    }
});

// evento para el boton "Mostrar humanos"
document.getElementById('verHumanos').addEventListener('click', () => {
    if (!verificarObjetos()) return;

    cerrarVentanaExistente(ventanaHumanos);

    ventanaHumanos = window.open('', 'Humanos', 'width=400,height=300');
    ventanaHumanos.document.body.innerText = 
        `N.º Humanos invitados: ${humanos.length}\n` +
        humanos.map(h => h.toString()).join('\n') +
        "\n\nEsta ventana se cerrará automáticamente en 10 segundos...";

    ventanaHumanos.focus();
    setTimeout(() => ventanaHumanos?.close(), 10000);
});

// evento para el botón "Mostrar animales"
document.getElementById('verAnimales').addEventListener('click', () => {
    if (!verificarObjetos()) return;

    cerrarVentanaExistente(ventanaAnimales);

    ventanaAnimales = window.open('', 'Animales', 'width=400,height=300');
    ventanaAnimales.document.body.innerText = 
        `N.º Animales invitados: ${animales.length}\n` +
        animales.map(a => a.toString()).join('\n') +
        "\n\nEsta ventana se cerrará automáticamente en 10 segundos...";

    ventanaAnimales.focus();
    setTimeout(() => ventanaAnimales?.close(), 10000);
});

// evento para el boton "Mostrar fiesta"
document.getElementById('verFiesta').addEventListener('click', () => {
    if (!verificarObjetos()) return;

    cerrarVentanaExistente(ventanaFiesta);

    ventanaFiesta = window.open('', 'Fiesta', 'width=400,height=400');
    ventanaFiesta.document.body.innerText = 
        `${fiesta.toString()}\n\n` +
        "Lista de invitados:\n" +
        fiesta.aInvitados.map(inv => inv.toString()).join('\n') +
        "\n\nEsta ventana se cerrará automáticamente en 10 segundos...";

    ventanaFiesta.focus();
    setTimeout(() => ventanaFiesta?.close(), 10000);
});