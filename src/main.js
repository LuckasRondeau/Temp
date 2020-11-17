import {tarea} from "./cronNode.js";
import { programar } from "./programar.js";


 console.log("\n");
// ---------( 0-59 0-59  0-23  1-31  1-12  0-7 )
// ---------( Sec  min   hour  dayMh month dayWk )
let programado = programar(" 45 20 * Nov Sunday");

console.log("------------------------------------");
tarea.startTemporizador1(programado);

console.log("------------------------------------");
tarea.stopTemporizador(programado);

console.log("------------------------------------");
tarea.destroyTemporizador(programado);

console.log("------------------------------------");
tarea.startTemporizador();
