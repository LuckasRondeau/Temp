import cronNode from "node-cron";
//import { programar } from "./programar.js";
import fs from "fs";
import { pacientes } from './pacientes.js'


// function crearTarea(fechaCJ , tarea()){
  // startF(fechaCJ);
  // }


function mostrarPac() {
  try {
    for (const paciente of pacientes) {
      if (paciente.Alta == true) {// si el paciente es true esta dado de alta
        console.log(paciente.Nombre + " => " + " Notificar Alta");
      } else {
        console.log(`${paciente.Nombre} => No esta dado de Alta`);
      }
    }
  } catch (err) {
    console.log(contador + "No se encontro ningun Paciente");
  }
}
function mostrarJson() {
  try {
    const db = fs.readFileSync("./database/Fri_Oct_23_2020.json", "utf-8");
    //console.log(JSON.parse(db));
    const persona = JSON.parse(db);
    console.log(persona.Nombre)
  } catch (err) {
    console.log("No se encontro el Archivo");
  }
}

function tarea() {
  mostrarPac();
}
function startF(fechaCJ) {
  console.log("Tarea programada => cronExpression = ", fechaCJ);
  let cronJob = cronNode.schedule(
    fechaCJ,
    () => {
      let hoy = new Date().toLocaleString();
      console.log("Iniciando Tarea => ", hoy);
      tarea();
    },
    {
      scheduled: true,
      timeZone: " America / Argentina / Buenos_Aires ",
    }
  );
  cronJob.start();
}

export { startF };
