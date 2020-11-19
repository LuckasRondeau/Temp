import cronNode from "node-cron";
//import { programar } from "./programar.js";
import fetch from "node-fetch";
import fs from "fs";
import pacientes from './pacientes.js'

function tarea() {
  // mostrarFetch();
  //mostrarJson();
  mostrarPac();
}

function mostrarFetch() {
  const url = "https://pokeapi.co/api/v2/pokemon/6";
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((datos) => console.log(datos.name));
}
function mostrarPac() {
  try {
    const persona = JSON.parse(pacientes);
   console.log(persona.email);
   
    console.log(db)
  } catch (err) {
    console.log("No se encontro el Archivo");
  }
}
function mostrarJson() {
  try {
    const db = fs.readFileSync("./database/Fri_Oct_23_2020.json", "utf-8");
    //console.log(JSON.parse(db));
    const persona = JSON.parse(db);
    console.log(db)
  } catch (err) {
    console.log("No se encontro el Archivo");
  }
}
function start() {
  let cronJob = cronNode.schedule(
    "* * * * * *",
    () => {
      // perform operation e.g. GET request http.get() etc.
      let hoy = new Date().toLocaleString();
      console.log("Tarea Iniciada ", hoy);
    },
    {
      scheduled: true,
      timeZone: " America / Argentina / Buenos_Aires ",
    }
  );
  cronJob.start();
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
function stop(fechaCJ) {
  console.log("Tarea detenida : " + fechaCJ);
  let cronJob = cronNode.schedule(fechaCJ, () => {
    //console.log("se ejecutará cada minuto hasta que se detenga");
  });
  cronJob.stop();
}

function destroy(fechaCJ) {
  console.log("Tarea detenida y eliminada: " + fechaCJ);
  let cronJob = cronNode.schedule(fechaCJ, () => {
    console.log("ya no se ejecutará ni podrá reiniciarse");
  });
  cronJob.destroy();
}

export { start, startF, destroy, stop };
