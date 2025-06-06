// index.js

// Lista base de posibles tareas
const posiblesTareas = [
  "Lavar los platos",
  "Hacer la cama",
  "Estudiar JavaScript",
  "Sacar la basura",
  "Leer un libro",
  "Ejercitarse 30 minutos",
  "Preparar la comida",
  "Organizar el escritorio",
  "Llamar a un amigo",
  "Regar las plantas"
];

// Función para generar una lista aleatoria de tareas
function generarTareasAleatorias() {
  const cantidadTareas = Math.floor(Math.random() * 5) + 3; // Entre 3 y 7 tareas
  const tareasSeleccionadas = [];

  while (tareasSeleccionadas.length < cantidadTareas) {
    const tarea = posiblesTareas[Math.floor(Math.random() * posiblesTareas.length)];
    if (!tareasSeleccionadas.includes(tarea)) {
      tareasSeleccionadas.push(tarea);
    }
  }

  return tareasSeleccionadas;
}

// Mostrar la lista de tareas
console.log("Lista de tareas generada:");
generarTareasAleatorias().forEach((tarea, index) => {
  console.log(`${index + 1}. ${tarea}`);
});
