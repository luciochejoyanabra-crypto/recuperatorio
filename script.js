let contactos = [];


const formulario = document.querySelector("#formContacto");
const nombre = document.querySelector("#nombre");
const telefono = document.querySelector("#telefono");
const listaContactos = document.querySelector("#listaContactos");


formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombreContacto = nombre.value.trim();
    const telefonoContacto = telefono.value.trim();

    if (nombreContacto === "" || telefonoContacto === "") {
        return;
    }

    contactos.push({
        nombre: nombreContacto,
        telefono: telefonoContacto
    });

    mostrarContactos();

    formulario.reset();
});

const buscador = document.querySelector("#buscador");

buscador.addEventListener("input", function() {
    const texto = buscador.value.toLowerCase();

    const contactosFiltrados = contactos.filter(function(contacto) {
        return contacto.nombre.toLowerCase().includes(texto);
    });

    listaContactos.innerHTML = "";

    contactosFiltrados.forEach(function(contacto) {
        const elemento = document.createElement("div");

        elemento.classList.add("contacto");

        elemento.innerHTML = `
            <span>${contacto.nombre} - ${contacto.telefono}</span>
        `;

        listaContactos.appendChild(elemento);
    });
});



function mostrarContactos() {
    listaContactos.innerHTML = "";

    contactos.forEach(function(contacto, indice) {
        const elemento = document.createElement("div");

        elemento.classList.add("contacto");

        elemento.innerHTML = `
            <span>${contacto.nombre} - ${contacto.telefono}</span>
            <button class="btnEliminar" data-indice="${indice}">Eliminar</button>
        `;

        listaContactos.appendChild(elemento);
    });

    document.querySelector("#contador").textContent = contactos.length;



    const botonesEliminar = document.querySelectorAll(".btnEliminar");

    botonesEliminar.forEach(function(boton) {
        boton.addEventListener("click", function() {
            const indice = boton.dataset.indice;

            contactos.splice(indice, 1);

            mostrarContactos();
        });
    });
}

