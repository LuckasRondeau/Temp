import * as cronNode from "./cronNode.js";
import * as auto from "./automatizar.js";
import { programar } from "./programar.js";

console.log("\n");
let programado = programar(" * 23 * Nov Thursday");

console.log("------------------------------------");
cronNode.startTemporizadorNcron1(programado);

console.log("------------------------------------");
cronNode.stopTemporizador(programado);

console.log("------------------------------------");
cronNode.destroyTemporizador(programado);

console.log("------------------------------------");
let tarea = auto.tarea();
console.log("------------------------------------");
auto.lanzarSiempreALaHora(22, 10, tarea);

console.log("------------------------------------");
cronNode.startTemporizadorNcron();

