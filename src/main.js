import * as cronNode from './cronNode.js'
import * as auto from "./automatizar.js";
import * as cron from './cron'



cronNode.temporizadorNcron();
cron.temporizadorCron();
auto.tarea();
auto.lanzarSiempreALaHora(21,10, tarea);
auto.lanzarElDia(new Date('2020-10-29 20:20'), tarea);






