const boton_agregar = document.getElementById('boton-agregar');
const lista_actividades = document.querySelector('.lista-tareas');
const boton_limpiar = document.querySelector('.boton-limpiar');

if (boton_agregar == null) {
boton_agregar.addEventListener('click', () => {
     agregarActividad("Actividad 1")
})
}

if (boton_limpiar == null) {
boton_limpiar.addEventListener('click', () => {
	//.metodo.limpiar
})
}

if (lista_actividades == null) {
lista_actividades.addEventListener('click', () => {
	//.metodo.eliminar
})
}

if (lista_actividades == null) {
lista_actividades.addEventListener('keypress', () => {
	//.metodo,editar
})
}

//.local.Storage

var arregloActividades = []
var contador = 0

const getContador = () => {
   const cont = localStorage.getItem("contador")
   return cont
}

const setContador = () => {
   localStorage.setItem("contador",contador)
}

const getArregloActividades = () => {
	const arreglo = JSON.parse(localStorage.setItem("arregloActividades"))
	return arreglo
}

const setArregloActividades = () => {
	localStorage.setItem("arregloActividades",JSON.stringify(arregloActividades))
}

const agregarActividad = (descripcion) => {
	contador++
	let objActividad = {
		id: contador,
		descripcion: descripcion
	}
	arregloActividades = getArregloActividades()
	arregloActividades.push(objActividad)
	setArregloActividades()
}

setContador()
setArregloActividades()