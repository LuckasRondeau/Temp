import * as cronNode from "./cronNode.js";
import * as auto from "./automatizar.js";
import * as cron from "./cron.js";

//cronNode.startTemporizadorNcron();
//cronNode.stopTemporizador();
console.log("----------------------------");
//cron.temporizadorCron();
console.log("----------------------------");
let tarea = auto.tarea();
console.log("----------------------------");
//auto.lanzarSiempreALaHora(22, 10, tarea);
auto.lanzarElDia(5,tarea);
console.log("----------------------------");
//auto.lanzarElDia(new Date("2020-10-29 20:20"), tarea);

