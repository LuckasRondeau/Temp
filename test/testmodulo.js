import { programar ,CRON_DEFAULT } from "../src/programar.js";
import * as temporizador from "../src/temporizador.js";

function main() {
  //Programo por default el horario de la tarea 
  let fechaCronJob = programar(CRON_DEFAULT);
  //let fechaCronJob= programar(" 33 1 * Nov *");
// Creo la tarea 
  let id = temporizador.startF(fechaCronJob);

}

main();
