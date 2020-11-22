"use strict";

//que se ejecute en una fecha y horario determinado:
function tarea() {
  var d = new Date();
  var n = d.getHours();
  console.log("Iniciando Tarea", n);
}

function lanzarElDia(dia, tarea) {

  console.log("Lanzado", new Date().toLocaleString());
  console.log("Para ser ejecutada el", dia);
  setTimeout(dia.getTime() - new Date().getTime());
}

//lanzarElDia(new Date('2020-10-29 20:20'), tarea);

//-------------------------------------------------------------------
("use strict");
// ejecutar todos los dias a la misma hora

function lanzarSiempreALaHora(hora, minutos, tarea) {
  var ahora = new Date().toLocaleString();
  console.log("Lanzado :", ahora);
  var dia = new Date(
    ahora.getFullYear(),
    ahora.getMonth(),
    ahora.getDate(),
    hora,
    minutos
  );
  if (dia <= ahora) {
    // la hora era anterior a la hora actual, debo sumar un día
    dia = new Date(dia.getTime() + 1000 * 60 * 60 * 24);
  }
  console.log("para ser ejecutada el dia :", hora + ":" + minutos);
  setTimeout(function () {
    tarea();
    lanzarSiempreALaHora(hora, minutos, tarea);
  }, dia.getTime() - ahora.getTime());
}

//lanzarSiempreALaHora(21,10, tarea);

export { tarea, lanzarElDia, lanzarSiempreALaHora };

//main()
//import * as auto from "./automatizar.js";
// console.log("------------------------------------");
// let tarea = auto.tarea();
// console.log("------------------------------------");
//auto.lanzarSiempreALaHora(19, 35, tarea);