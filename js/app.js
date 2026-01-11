// Variables
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const listaCursos = document.querySelector("#lista-cursos");
const btnVaciarCarrito = document.querySelector("#vaciar-carrito");
let articulosCarrito = []

//Empleamos Event delegation, donde empleamos solo un listener para todos los botones
const agregarCurso = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("agregar-carrito")) {
        const cursoSeleccionado = e.target.parentElement.parentElement
        leerDatosCurso(cursoSeleccionado)
    }
}

const carritoHTML = () => {

    limpiarHTML(contenedorCarrito)

    articulosCarrito.forEach(curso => {

        const { imagen, nombre, precio, cantidad, id } = curso;
        const row = document.createElement("TR");
        row.innerHTML = `
            <td> <img src=${imagen} width="100"> </td>
            <td> ${nombre} </td>
            <td> ${precio} </td>
            <td> ${cantidad} </td>
            <td> <a href="#" class="borrar-curso" data-id=${id}> X </a>  </td>
        `

        contenedorCarrito.appendChild(row)
    })
}

const leerDatosCurso = (curso) => {
    const infoCurso = {
        imagen: curso.querySelector("img").src,
        nombre: curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent,
        id: curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1,
    }

    let existe = false;
    let index = -1

    for (let i = 0; i < articulosCarrito.length; i++) {
        if (articulosCarrito[i].id == infoCurso.id) {
            existe = true;
            index = i
            break;
        }
    }

    existe ?
        articulosCarrito[index].cantidad++ :
        articulosCarrito = [...articulosCarrito, infoCurso]

    carritoHTML()
}

const limpiarHTML = (referencia) => {
    while (referencia.firstChild) {
        referencia.removeChild(referencia.firstChild);
    }

}

const cargarEventListener = () => {
    listaCursos.addEventListener("click", agregarCurso);
}

cargarEventListener();

