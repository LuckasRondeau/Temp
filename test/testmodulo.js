import { programarFecha } from "../src/programarFecha.js";
import * as temporizador from "../src/temporizador.js";
import { mostrarJson } from "../src/mostrarJson.js";

function main() {
  //Programo por default el horario de la tarea Y nombre
  const FECHA = new Date().toLocaleString();
  let fechaCronJob = programarFecha();
  let nombreTemp = "TEMP1";

  // Creo el temporizador con el nombre
  const temp1 = temporizador.crearTemporizador(nombreTemp);

  function evento() {
    console.log("------------------------------------------------");
    console.log(`Iniciando Tarea : ${nombreTemp} => `, FECHA);
    console.log("------------------------------------------------");
    // ejecuta la tarea programada
    console.log("<<<<<<<<<<<<<<[EVENTO PROGRAMADO]>>>>>>>>>>>>>>>");
    //tarea de ejemplo pacientes dados de alta !
    mostrarJson();
  }

  const id = temp1.crearTarea(fechaCronJob, evento);

  setTimeout(() => {
    console.log("");
    console.log("------------------------------------------------");
    console.log(`    Tarea Detenida ${nombreTemp}`, FECHA);
    console.log("------------------------------------------------");
    temp1.cancelar(id);
  }, 20000);
}
main();
