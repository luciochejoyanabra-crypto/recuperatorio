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



function mostrarContactos() {
    listaContactos.innerHTML = "";

    contactos.forEach(function(contacto) {
        const elemento = document.createElement("div");

        elemento.classList.add("contacto");

        elemento.innerHTML = `
            <span>${contacto.nombre} - ${contacto.telefono}</span>
        `;

        listaContactos.appendChild(elemento);
    });
}

