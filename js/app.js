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

const leerDatosCurso = (curso) => {
    const infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent,
        autor: curso.querySelector("p").textContent,
        id: curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1,
    }
    articulosCarrito = [...articulosCarrito, infoCurso];
}


const cargarEventListener = () => {
    listaCursos.addEventListener("click", agregarCurso);
}

cargarEventListener();

